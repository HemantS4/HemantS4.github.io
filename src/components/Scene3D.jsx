import React, { useRef, useState, useEffect, useMemo } from 'react'
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber'
import { useGLTF, Sphere } from '@react-three/drei'
import * as THREE from 'three'

// Error Boundary for GLTF loading errors
class GLTFErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    console.error('GLTF loading error:', error)
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('GLTF Error details:', error, errorInfo)
    // Notify parent component of the error
    if (this.props.onError) {
      this.props.onError(error)
    }
  }

  render() {
    if (this.state.hasError) {
      return null // Render nothing on error, will fall back to shader moon
    }
    return this.props.children
  }
}

// Component to load GLTF controller model (Updated Oct 2024)
function MoonModel({ meshRef, scrollProgress, mousePosition }) {
  const modelPath = import.meta.env.BASE_URL + 'models/Controller.glb'
  const gltf = useGLTF(modelPath)
  const modelRef = useRef()
  const targetScale = useRef(3.0)
  const targetRotation = useRef(0)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (!modelRef.current) return

    // Direct smooth rotation based on scroll with idle animation
    modelRef.current.rotation.y = scrollProgress * Math.PI * 6 + time * 0.08
    modelRef.current.rotation.x = 0
    modelRef.current.rotation.z = 0

    // Adjust scale based on scroll phase
    if (scrollProgress < 0.33) {
      targetScale.current = 3.0
    } else if (scrollProgress < 0.66) {
      const projectProgress = (scrollProgress - 0.33) / 0.33
      targetScale.current = 3.0 - projectProgress * 1.8
    } else {
      const aboutProgress = (scrollProgress - 0.66) / 0.34
      targetScale.current = 1.2 - aboutProgress * 0.7
    }

    const currentScale = modelRef.current.scale.x
    const newScale = currentScale + (targetScale.current - currentScale) * 0.1
    modelRef.current.scale.set(newScale, newScale, newScale)

    // Float up and down
    modelRef.current.position.y = Math.sin(time * 0.3) * 0.3
    modelRef.current.position.x = Math.sin(scrollProgress * Math.PI) * 0.8
  })

  // Validate and render
  if (!gltf || !gltf.scene) {
    console.error('GLTF model failed to load or is invalid')
    return null
  }

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      scale={3.0}
      position={[0, 0, -2]}
    />
  )
}

function MoonSphere({ mousePosition, scrollProgress, clicked, onMoonClick }) {
  const meshRef = useRef()
  const targetScale = useRef(3.0)
  const targetOpacity = useRef(0.8)
  const targetRotation = useRef(0)
  const [modelExists, setModelExists] = useState(null)

  // Check if model exists on mount
  useEffect(() => {
    const modelPath = import.meta.env.BASE_URL + 'models/Controller.glb'
    console.log('Checking for controller model at:', modelPath)

    fetch(modelPath, { method: 'HEAD' })
      .then(response => {
        if (response.ok) {
          console.log('Controller model found! Loading 3D model...')
          setModelExists(true)
        } else {
          console.log('Controller model not found, using procedural shader')
          setModelExists(false)
        }
      })
      .catch(() => {
        console.log('Controller model not found, using procedural shader')
        setModelExists(false)
      })
  }, [])


  // Create procedural moon texture using shaders
  const moonMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        lightDirection: { value: new THREE.Vector3(5, 3, 5).normalize() }
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec2 vUv;

        // Simplex noise function for procedural craters
        vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
        vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

        float snoise(vec3 v) {
          const vec2 C = vec2(1.0/6.0, 1.0/3.0);
          const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

          vec3 i  = floor(v + dot(v, C.yyy));
          vec3 x0 = v - i + dot(i, C.xxx);

          vec3 g = step(x0.yzx, x0.xyz);
          vec3 l = 1.0 - g;
          vec3 i1 = min(g.xyz, l.zxy);
          vec3 i2 = max(g.xyz, l.zxy);

          vec3 x1 = x0 - i1 + C.xxx;
          vec3 x2 = x0 - i2 + C.yyy;
          vec3 x3 = x0 - D.yyy;

          i = mod289(i);
          vec4 p = permute(permute(permute(
                    i.z + vec4(0.0, i1.z, i2.z, 1.0))
                  + i.y + vec4(0.0, i1.y, i2.y, 1.0))
                  + i.x + vec4(0.0, i1.x, i2.x, 1.0));

          float n_ = 0.142857142857;
          vec3 ns = n_ * D.wyz - D.xzx;

          vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

          vec4 x_ = floor(j * ns.z);
          vec4 y_ = floor(j - 7.0 * x_);

          vec4 x = x_ *ns.x + ns.yyyy;
          vec4 y = y_ *ns.x + ns.yyyy;
          vec4 h = 1.0 - abs(x) - abs(y);

          vec4 b0 = vec4(x.xy, y.xy);
          vec4 b1 = vec4(x.zw, y.zw);

          vec4 s0 = floor(b0)*2.0 + 1.0;
          vec4 s1 = floor(b1)*2.0 + 1.0;
          vec4 sh = -step(h, vec4(0.0));

          vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
          vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

          vec3 p0 = vec3(a0.xy, h.x);
          vec3 p1 = vec3(a0.zw, h.y);
          vec3 p2 = vec3(a1.xy, h.z);
          vec3 p3 = vec3(a1.zw, h.w);

          vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
          p0 *= norm.x;
          p1 *= norm.y;
          p2 *= norm.z;
          p3 *= norm.w;

          vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
          m = m * m;
          return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
        }

        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = position;
          vUv = uv;

          // Very subtle geometry displacement - keep sphere smooth
          vec3 pos = position;
          float noise = snoise(position * 2.5) * 0.008;
          pos += normal * noise;

          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 lightDirection;
        uniform float time;
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec2 vUv;

        // Same noise function
        vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
        vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

        float snoise(vec3 v) {
          const vec2 C = vec2(1.0/6.0, 1.0/3.0);
          const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
          vec3 i  = floor(v + dot(v, C.yyy));
          vec3 x0 = v - i + dot(i, C.xxx);
          vec3 g = step(x0.yzx, x0.xyz);
          vec3 l = 1.0 - g;
          vec3 i1 = min(g.xyz, l.zxy);
          vec3 i2 = max(g.xyz, l.zxy);
          vec3 x1 = x0 - i1 + C.xxx;
          vec3 x2 = x0 - i2 + C.yyy;
          vec3 x3 = x0 - D.yyy;
          i = mod289(i);
          vec4 p = permute(permute(permute(
                    i.z + vec4(0.0, i1.z, i2.z, 1.0))
                  + i.y + vec4(0.0, i1.y, i2.y, 1.0))
                  + i.x + vec4(0.0, i1.x, i2.x, 1.0));
          float n_ = 0.142857142857;
          vec3 ns = n_ * D.wyz - D.xzx;
          vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
          vec4 x_ = floor(j * ns.z);
          vec4 y_ = floor(j - 7.0 * x_);
          vec4 x = x_ *ns.x + ns.yyyy;
          vec4 y = y_ *ns.x + ns.yyyy;
          vec4 h = 1.0 - abs(x) - abs(y);
          vec4 b0 = vec4(x.xy, y.xy);
          vec4 b1 = vec4(x.zw, y.zw);
          vec4 s0 = floor(b0)*2.0 + 1.0;
          vec4 s1 = floor(b1)*2.0 + 1.0;
          vec4 sh = -step(h, vec4(0.0));
          vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
          vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
          vec3 p0 = vec3(a0.xy, h.x);
          vec3 p1 = vec3(a0.zw, h.y);
          vec3 p2 = vec3(a1.xy, h.z);
          vec3 p3 = vec3(a1.zw, h.w);
          vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
          p0 *= norm.x;
          p1 *= norm.y;
          p2 *= norm.z;
          p3 *= norm.w;
          vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
          m = m * m;
          return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
        }

        // Helper function to create sharp circular craters
        float crater(vec3 p, float freq, float threshold) {
          float n = snoise(p * freq);
          // Much sharper edges for defined craters
          float c = smoothstep(threshold + 0.05, threshold - 0.15, n);
          return c;
        }

        void main() {
          // NASA-style moon colors - realistic gray tones
          vec3 moonHighlands = vec3(0.65, 0.65, 0.65);    // Light gray highlands
          vec3 moonMaria = vec3(0.35, 0.35, 0.35);        // Dark gray maria (seas)
          vec3 moonCrater = vec3(0.50, 0.50, 0.50);       // Mid-gray craters

          // Large maria patterns (like real moon - Sea of Tranquility, etc)
          float maria1 = snoise(vPosition * 0.8 + vec3(1.0, 0.0, 0.0));
          float maria2 = snoise(vPosition * 0.6 + vec3(0.0, 1.0, 0.0));
          float mariaMask = (maria1 + maria2) * 0.5;
          mariaMask = smoothstep(0.0, 0.5, mariaMask);

          // Crater patterns at multiple scales with sharper definition
          float largeCraters = crater(vPosition, 2.2, 0.2) * 0.7;
          float mediumCraters = crater(vPosition, 5.5, 0.25) * 0.5;
          float smallCraters = crater(vPosition, 11.0, 0.3) * 0.35;

          // Fine surface detail
          float surfaceDetail = snoise(vPosition * 15.0) * 0.05;
          float microDetail = snoise(vPosition * 30.0) * 0.025;

          // Combine craters
          float craterMask = largeCraters + mediumCraters + smallCraters;
          craterMask = clamp(craterMask, 0.0, 1.0);

          // Build surface color - start with highlands
          vec3 surfaceColor = moonHighlands;

          // Apply maria (dark regions) - more prominent
          surfaceColor = mix(surfaceColor, moonMaria, mariaMask * 0.9);

          // Apply craters - more defined darkening
          surfaceColor = mix(surfaceColor, moonCrater, craterMask * 0.6);

          // Add fine surface detail
          surfaceColor += vec3(surfaceDetail + microDetail);

          // Realistic lighting - strong directional light like sunlight
          float diff = max(dot(vNormal, lightDirection), 0.0);

          // Sharp shadow terminator (day/night line)
          float terminator = smoothstep(-0.1, 0.1, diff);

          // Very subtle ambient light (space is dark)
          vec3 ambient = vec3(0.08);

          // Strong direct lighting on lit side
          vec3 diffuse = vec3(1.0) * diff;

          // Combine lighting - harsh like in space
          vec3 lighting = ambient + diffuse * terminator;

          // Apply lighting
          vec3 finalColor = surfaceColor * lighting;

          // Very subtle rim light
          float rimLight = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 4.0);
          finalColor += rimLight * vec3(0.3, 0.3, 0.35) * 0.1;

          gl_FragColor = vec4(finalColor, 0.95);
        }
      `,
      transparent: true
    })
  }, [])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    // Only run if using shader moon (not GLTF model)
    if (modelExists === false && meshRef.current) {
      // Update shader time
      if (moonMaterial.uniforms) {
        moonMaterial.uniforms.time.value = time
      }

      // Direct smooth rotation based on scroll with idle animation
      meshRef.current.rotation.y = scrollProgress * Math.PI * 6 + time * 0.08

      // Keep X and Z at 0 for clean Y-axis rotation
      meshRef.current.rotation.x = 0
      meshRef.current.rotation.z = 0

      // Adjust based on scroll phase
      if (scrollProgress < 0.33) {
        // Hero section - prominent moon
        targetScale.current = clicked ? 3.5 : 3.0
        targetOpacity.current = 0.9
      } else if (scrollProgress < 0.66) {
        // Projects section - shrink moon to make room for projects
        const projectProgress = (scrollProgress - 0.33) / 0.33
        targetScale.current = 3.0 - projectProgress * 1.8 // Shrink to 1.2
        targetOpacity.current = 0.9 - projectProgress * 0.4 // Fade to 0.5
      } else {
        // About section - moon fades away
        const aboutProgress = (scrollProgress - 0.66) / 0.34
        targetScale.current = 1.2 - aboutProgress * 0.7 // Shrink to 0.5
        targetOpacity.current = 0.5 - aboutProgress * 0.5 // Fade to 0
      }

      const currentScale = meshRef.current.scale.x
      const newScale = currentScale + (targetScale.current - currentScale) * 0.1
      meshRef.current.scale.set(newScale, newScale, newScale)

      // Float up and down gently
      meshRef.current.position.y = Math.sin(time * 0.3) * 0.3

      // Subtle horizontal movement based on scroll
      meshRef.current.position.x = Math.sin(scrollProgress * Math.PI) * 0.8
    }
  })

  // Show loading or nothing while checking for model
  if (modelExists === null) {
    return null
  }

  // Render shader moon fallback
  const renderShaderMoon = () => (
    <mesh
      ref={meshRef}
      scale={3.0}
      position={[0, 0, -2]}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <primitive object={moonMaterial} attach="material" />
    </mesh>
  )

  return (
    <>
      {/* Use GLTF model if it exists, otherwise use shader moon */}
      {modelExists ? (
        <GLTFErrorBoundary onError={() => setModelExists(false)}>
          <React.Suspense fallback={null}>
            <MoonModel
              meshRef={meshRef}
              scrollProgress={scrollProgress}
              mousePosition={mousePosition}
            />
          </React.Suspense>
        </GLTFErrorBoundary>
      ) : (
        renderShaderMoon()
      )}
    </>
  )
}

function ParticleField({ mousePosition, scrollProgress }) {
  const particlesRef = useRef()
  const count = 1500 // Reduced from 3000 for better performance

  const positions = React.useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 50
    }
    return pos
  }, [count])

  const sizes = React.useMemo(() => {
    const siz = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      siz[i] = Math.random() * 2.5
    }
    return siz
  }, [count])

  const colors = React.useMemo(() => {
    const col = new Float32Array(count * 3)
    const colorOptions = [
      [1, 1, 1],      // white
      [0.5, 0.7, 1],  // blue
      [1, 0.8, 0.6],  // orange
      [0.9, 0.5, 0.8] // purple
    ]
    for (let i = 0; i < count; i++) {
      const color = colorOptions[Math.floor(Math.random() * colorOptions.length)]
      col[i * 3] = color[0]
      col[i * 3 + 1] = color[1]
      col[i * 3 + 2] = color[2]
    }
    return col
  }, [count])

  useFrame((state) => {
    if (!particlesRef.current) return

    const time = state.clock.getElapsedTime()

    // Rotate based on mouse and time
    particlesRef.current.rotation.y = time * 0.03 + mousePosition.x * 0.3
    particlesRef.current.rotation.x = mousePosition.y * 0.15

    // Spread particles based on scroll
    const scale = 1 + scrollProgress * 0.8
    particlesRef.current.scale.set(scale, scale, scale)

    // Optimize: Only animate particles every other frame
    if (Math.floor(time * 60) % 2 === 0) return

    // Animate particle positions
    const positions = particlesRef.current.geometry.attributes.position.array
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const x = positions[i3]
      const y = positions[i3 + 1]
      const z = positions[i3 + 2]

      // Create wave motion
      positions[i3 + 1] = y + Math.sin(time * 0.5 + x * 0.1) * 0.002
      positions[i3] = x + Math.cos(time * 0.3 + z * 0.1) * 0.002
    }
    particlesRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.9 - scrollProgress * 0.2}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

function Stars({ mousePosition }) {
  const starsRef = useRef()
  const count = 1000 // Reduced from 2000 for better performance

  const positions = React.useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i += 3) {
      const radius = 60 + Math.random() * 40
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI

      pos[i] = radius * Math.sin(phi) * Math.cos(theta)
      pos[i + 1] = radius * Math.sin(phi) * Math.sin(theta)
      pos[i + 2] = radius * Math.cos(phi)
    }
    return pos
  }, [count])

  const sizes = React.useMemo(() => {
    const siz = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      siz[i] = Math.random() * 1.5
    }
    return siz
  }, [count])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    starsRef.current.rotation.y = time * 0.01 + mousePosition.x * 0.05
    starsRef.current.rotation.x = mousePosition.y * 0.05
  })

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#ffffff"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}


function CameraController({ mousePosition, scrollProgress }) {
  const { camera } = useThree()
  const targetPosition = useRef({ x: 0, y: 0, z: 5 })
  const targetLookAt = useRef({ x: 0, y: 0, z: 0 })

  useFrame(() => {
    // Determine camera position based on scroll
    // Hero: 0-0.33, Projects: 0.33-0.66, About: 0.66-1.0

    if (scrollProgress < 0.33) {
      // Hero section - normal position with enhanced mouse parallax
      targetPosition.current.x = mousePosition.x * 2
      targetPosition.current.y = -mousePosition.y * 2
      targetPosition.current.z = 5
      targetLookAt.current.x = mousePosition.x * 0.5
      targetLookAt.current.y = -mousePosition.y * 0.5
      targetLookAt.current.z = 0
    } else if (scrollProgress < 0.66) {
      // Projects section - zoom into the scene
      const projectProgress = (scrollProgress - 0.33) / 0.33
      targetPosition.current.x = mousePosition.x * 1
      targetPosition.current.y = -mousePosition.y * 1
      targetPosition.current.z = 5 - projectProgress * 3 // Zoom from 5 to 2
      targetLookAt.current.x = mousePosition.x * 0.3
      targetLookAt.current.y = -mousePosition.y * 0.3
      targetLookAt.current.z = 0
    } else {
      // About section - zoom out and move aside
      const aboutProgress = (scrollProgress - 0.66) / 0.34
      targetPosition.current.x = 3 * aboutProgress + mousePosition.x * 0.5
      targetPosition.current.y = 2 * aboutProgress - mousePosition.y * 0.5
      targetPosition.current.z = 2 + aboutProgress * 4 // Zoom back out to 6
      targetLookAt.current.x = 0
      targetLookAt.current.y = 0
      targetLookAt.current.z = 0
    }

    // Smooth camera movement
    camera.position.x += (targetPosition.current.x - camera.position.x) * 0.08
    camera.position.y += (targetPosition.current.y - camera.position.y) * 0.08
    camera.position.z += (targetPosition.current.z - camera.position.z) * 0.08

    // Smooth look-at
    const lookAtVector = new THREE.Vector3(
      targetLookAt.current.x,
      targetLookAt.current.y,
      targetLookAt.current.z
    )
    camera.lookAt(lookAtVector)
  })

  return null
}

export default function Scene3D({ scrollProgress: externalScrollProgress }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const scrollProgress = externalScrollProgress || 0

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Normalize mouse position to -1 to 1
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      })
    }

    const handleClick = () => {
      setClicked(true)
      setTimeout(() => setClicked(false), 500)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
      >
        <color attach="background" args={['#050510']} />
        <fog attach="fog" args={['#050510', 10, 100]} />

        <ambientLight intensity={0.3} />

        {/* Main directional light for moon - simulates sunlight */}
        <directionalLight position={[5, 3, 5]} intensity={1.8} color="#ffffff" />

        {/* Fill lights for atmosphere */}
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#ff8844" />
        <pointLight position={[-10, -10, -10]} intensity={1.0} color="#6655ff" />
        <pointLight position={[0, 0, 15]} intensity={1.2} color="#ff4488" />
        <spotLight position={[0, 10, 0]} intensity={0.6} angle={0.6} penumbra={1} color="#ffb88c" />

        <Stars mousePosition={mousePosition} />
        <ParticleField
          mousePosition={mousePosition}
          scrollProgress={scrollProgress}
        />
        <MoonSphere
          mousePosition={mousePosition}
          scrollProgress={scrollProgress}
          clicked={clicked}
        />
        <CameraController mousePosition={mousePosition} scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  )
}
