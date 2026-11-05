import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { projectsData } from '../data/projectsData'
import styles from '../styles/Depot.module.css'

/* ============================================================
   Hemant's Depot — a shipping-container claw portfolio.

   One full-height stage. A white robot claw hangs from a rail
   across the top and picks up the chosen 3D container, lifts it
   to the top centre, swings the doors open and reveals the
   section inside.
   ============================================================ */

const CONTAINERS = [
  { id: 'portfolio', label: ['PORT', 'FOLIO'], tag: 'HEMANT', color: '#e5322d', dark: '#a91f1b' },
  { id: 'work',      label: ['THE',  'WORK'],  tag: '02',     color: '#f26a1f', dark: '#b84a10' },
  { id: 'about',     label: ['ABOUT','ME'],    tag: '03',     color: '#1d55d8', dark: '#123a9c' },
  { id: 'process',   label: ['PRO',  'CESS'],  tag: '04',     color: '#f6b919', dark: '#c08a0a' },
  { id: 'toolkit',   label: ['TOOL', 'KIT'],   tag: '05',     color: '#97a1ad', dark: '#6c7682' },
  { id: 'what',      label: ['WHAT', 'I DO'],  tag: '06',     color: '#e5322d', dark: '#a91f1b' },
  { id: 'hello',     label: ['SAY',  'HELLO'], tag: '07',     color: '#2546b8', dark: '#172f80' },
]

// x,y as fractions of the stage, plus rx,ry,rz tilts.
const DESKTOP_POS = {
  portfolio: [0.48, 0.66, -14, -24,   6],
  work:      [0.13, 0.86, -16,  28,  16],
  about:     [0.36, 0.90, -12, -20, -10],
  process:   [0.60, 0.88, -14,  24,  12],
  toolkit:   [0.86, 0.86, -16, -30, -14],
  what:      [0.25, 0.68, -14,  30, -12],
  hello:     [0.73, 0.68, -14, -26,  16],
}
const PHONE_POS = {
  portfolio: [0.50, 0.64, -12,   0,   4],
  work:      [0.17, 0.91, -14,  22,  12],
  about:     [0.50, 0.93, -12, -18,  -8],
  process:   [0.84, 0.90, -14,  20,  10],
  toolkit:   [0.20, 0.77, -14, -26, -12],
  what:      [0.52, 0.79, -14,  24, -10],
  hello:     [0.82, 0.76, -14, -22,  14],
}

export default function Depot() {
  const navigate = useNavigate()
  const stageRef = useRef(null)
  const pileRefs = useRef({})
  const [stage, setStage] = useState({ w: 1200, h: 800 })
  const [picked, setPicked] = useState('portfolio')
  const [phase, setPhase] = useState('idle')
  const queueRef = useRef(null)
  const reduceMotion = useMemo(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  )

  // ---------- Size tracking ----------

  useLayoutEffect(() => {
    const stageEl = stageRef.current
    if (!stageEl) return
    const measure = () => {
      const r = stageEl.getBoundingClientRect()
      setStage({ w: r.width, h: r.height })
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(stageEl)
    return () => ro.disconnect()
  }, [])

  const isPhone = stage.w < 700

  const containerSize = useMemo(() => {
    const w = isPhone
      ? Math.min(stage.w * 0.38, 170)
      : Math.min(Math.max(stage.w * 0.2, 200), 310)
    const h = isPhone ? w * 0.6 : w * 0.43
    const d = isPhone ? w * 0.56 : w * 0.4
    return { w, h, d }
  }, [stage.w, isPhone])

  const liftedScale = isPhone ? 2.4 : 1.95

  // ---------- Pile positions (memoised per stage size) ----------

  const pilePositions = useMemo(() => {
    const posMap = isPhone ? PHONE_POS : DESKTOP_POS
    const out = {}
    for (const c of CONTAINERS) {
      const [fx, fy, rx, ry, rz] = posMap[c.id]
      out[c.id] = {
        x: fx * stage.w - containerSize.w / 2,
        y: fy * stage.h - containerSize.h / 2,
        rx, ry, rz,
      }
    }
    return out
  }, [stage, isPhone, containerSize.w, containerSize.h])

  // ---------- Pick sequence ----------

  const pick = useCallback(
    async (nextId) => {
      if (nextId === picked && phase === 'open') return
      if (phase !== 'idle' && phase !== 'open') {
        queueRef.current = nextId
        return
      }
      const wait = (ms) => new Promise((r) => setTimeout(r, reduceMotion ? 0 : ms))

      // Step 1 — put the currently-held container back.
      if (picked && phase === 'open') {
        setPhase('closing')
        await wait(450)
        setPhase('returning')
        await wait(850)
      }

      // Step 2 — travel to the chosen container.
      setPicked(nextId)
      setPhase('travel')
      await wait(750)

      // Step 3 — drop onto the container.
      setPhase('drop')
      await wait(560)

      // Step 4 — close fingers.
      setPhase('grip')
      await wait(240)

      // Step 5 — lift to top centre, straighten, grow.
      setPhase('lift')
      await wait(950)

      // Step 6 — open doors.
      setPhase('open')
      await wait(750)

      const q = queueRef.current
      if (q && q !== nextId) {
        queueRef.current = null
        pick(q)
      }
    },
    [picked, phase, reduceMotion]
  )

  // ---------- Auto-pick on load ----------

  useEffect(() => {
    const t = setTimeout(() => pick('portfolio'), 500)
    return () => clearTimeout(t)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // ---------- Keyboard: Escape → back to PORTFOLIO ----------

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') pick('portfolio')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [pick])

  // ---------- Positions for the claw per phase ----------

  const liftedPos = {
    x: stage.w / 2 - (containerSize.w * liftedScale) / 2,
    y: stage.h * 0.11,
  }
  const target = pilePositions[picked] || pilePositions.portfolio
  const clawCenterX =
    phase === 'lift' || phase === 'open' || phase === 'closing'
      ? liftedPos.x + (containerSize.w * liftedScale) / 2
      : target.x + containerSize.w / 2

  const clawTop = (() => {
    switch (phase) {
      case 'travel':
        return 10 // rod is short, fingers hover at rail level
      case 'drop':
      case 'grip':
        return target.y - 22
      case 'lift':
      case 'open':
      case 'closing':
        return liftedPos.y - 24
      case 'returning':
        return target.y - 22
      default:
        return target.y - 22
    }
  })()

  const fingersOpen = phase === 'travel' || phase === 'drop' || phase === 'returning' || phase === 'idle'

  // ---------- Render ----------

  return (
    <div className={styles.depot}>
      <TopNav onPick={pick} />

      <div className={styles.stage} ref={stageRef} aria-label="Hemant's container depot">
        <div className={styles.depotLine} aria-hidden="true">
          HEMANT'S DEPOT · <span className={styles.depotCount}>7 CONTAINERS</span> · 2026
        </div>

        <div className={styles.backdropWord} aria-hidden="true">PORTFOLIO</div>

        {/* Rail */}
        <div className={styles.rail} aria-hidden="true">
          <div className={styles.railTrack} />
        </div>

        {/* Claw */}
        <Claw
          x={clawCenterX}
          top={clawTop}
          fingersOpen={fingersOpen}
          width={
            (phase === 'lift' || phase === 'open' || phase === 'closing')
              ? containerSize.w * liftedScale
              : containerSize.w
          }
          reduceMotion={reduceMotion}
        />

        {/* Pile — each container renders either in the pile OR as the lifted one */}
        {CONTAINERS.map((c) => {
          const isLifted =
            c.id === picked &&
            (phase === 'drop' || phase === 'grip' || phase === 'lift' || phase === 'open' || phase === 'closing')
          const pos = pilePositions[c.id]
          const sizeMul =
            isLifted && (phase === 'lift' || phase === 'open' || phase === 'closing')
              ? liftedScale
              : 1

          const liftedY = liftedPos.y
          const x = isLifted && (phase === 'lift' || phase === 'open' || phase === 'closing') ? liftedPos.x : pos.x
          const y = isLifted && (phase === 'lift' || phase === 'open' || phase === 'closing') ? liftedY : pos.y

          const rotX = isLifted && (phase === 'lift' || phase === 'open' || phase === 'closing') ? -7 : pos.rx
          const rotY = isLifted && (phase === 'lift' || phase === 'open' || phase === 'closing') ? -11 : pos.ry
          const rotZ = isLifted && (phase === 'lift' || phase === 'open' || phase === 'closing') ? 0 : pos.rz

          const doorsOpen = isLifted && phase === 'open'

          return (
            <Container3D
              key={c.id}
              ref={(el) => (pileRefs.current[c.id] = el)}
              def={c}
              x={x}
              y={y}
              rx={rotX}
              ry={rotY}
              rz={rotZ}
              w={containerSize.w * sizeMul}
              h={containerSize.h * sizeMul}
              d={containerSize.d * sizeMul}
              zIndex={isLifted ? 500 : Math.round((pos.y / stage.h) * 100) + 10}
              doorsOpen={doorsOpen}
              onClick={() => pick(c.id)}
              content={<ContainerContent id={c.id} navigate={navigate} />}
              activeContent={doorsOpen}
            />
          )
        })}

        {!isPhone && (
          <div className={styles.pickPill} aria-hidden="true">
            PICK A CONTAINER ↓
          </div>
        )}
      </div>
    </div>
  )
}

/* ---------- Nav ---------- */

function TopNav({ onPick }) {
  return (
    <nav className={styles.nav} aria-label="Primary">
      <div className={styles.navLeft}>
        <span className={styles.logo}>hemant</span>
      </div>
      <div className={styles.navCenter}>
        <button type="button" onClick={() => onPick('work')}>Work</button>
        <button type="button" onClick={() => onPick('about')}>About</button>
        <button type="button" onClick={() => onPick('process')}>Process</button>
        <button type="button" onClick={() => onPick('hello')}>Contact</button>
      </div>
      <div className={styles.navRight}>
        <a href="mailto:sharmah677@gmail.com">Let's Talk ↗</a>
      </div>
    </nav>
  )
}

/* ---------- Claw ---------- */

function Claw({ x, top, fingersOpen, width, reduceMotion }) {
  const span = width * 1.06
  return (
    <div
      className={styles.claw}
      style={{
        '--x': `${x}px`,
        '--top': `${top}px`,
        '--span': `${span}px`,
        '--rodLen': `${Math.max(top, 0)}px`,
      }}
      aria-hidden="true"
      data-reduce={reduceMotion ? 'true' : 'false'}
    >
      <div className={styles.carriage}>
        <span className={styles.wheel} />
        <span className={styles.wheel} />
      </div>
      <div className={styles.rod} />
      <div className={styles.gripHead}>
        <div className={`${styles.finger} ${styles.fingerLeft} ${fingersOpen ? styles.fingerOpen : ''}`}>
          <span className={styles.fingerArm} />
          <span className={styles.fingerVert} />
        </div>
        <div className={`${styles.finger} ${styles.fingerRight} ${fingersOpen ? styles.fingerOpen : ''}`}>
          <span className={styles.fingerArm} />
          <span className={styles.fingerVert} />
        </div>
      </div>
    </div>
  )
}

/* ---------- 3D container ---------- */

const Container3D = React.forwardRef(function Container3D(
  { def, x, y, rx, ry, rz, w, h, d, zIndex, doorsOpen, onClick, content, activeContent },
  ref
) {
  return (
    <div
      ref={ref}
      className={styles.boxWrap}
      style={{
        '--x': `${x}px`,
        '--y': `${y}px`,
        '--w': `${w}px`,
        '--h': `${h}px`,
        '--d': `${d}px`,
        '--rx': `${rx}deg`,
        '--ry': `${ry}deg`,
        '--rz': `${rz}deg`,
        '--color': def.color,
        '--dark': def.dark,
        zIndex,
      }}
    >
      <button
        type="button"
        className={styles.boxBtn}
        onClick={onClick}
        aria-label={`Open ${def.label.join(' ')}`}
      >
        <div className={styles.box}>
          <div className={`${styles.face} ${styles.faceBack}`} />
          <div className={`${styles.face} ${styles.faceTop}`} />
          <div className={`${styles.face} ${styles.faceBottom}`} />
          <div className={`${styles.face} ${styles.faceLeftEnd}`}><span className={styles.endSeam} /></div>
          <div className={`${styles.face} ${styles.faceRightEnd}`}><span className={styles.endSeam} /></div>

          {/* Front doors */}
          <div className={styles.doors}>
            <div className={`${styles.door} ${styles.doorL} ${doorsOpen ? styles.doorLOpen : ''}`}>
              <div className={styles.doorOuter}>
                <span className={styles.labelPart}>{def.label[0]}</span>
              </div>
              <div className={styles.doorInner} />
            </div>
            <div className={`${styles.door} ${styles.doorR} ${doorsOpen ? styles.doorROpen : ''}`}>
              <div className={styles.doorOuter}>
                <span className={styles.labelPart}>{def.label[1]}</span>
                <span className={styles.labelTag}>{def.tag}</span>
              </div>
              <div className={styles.doorInner} />
            </div>
          </div>

          {/* Inner wall + content when open */}
          <div className={styles.innerWall}>
            <div
              className={`${styles.contentPanel} ${activeContent ? styles.contentPanelOn : ''}`}
              inert={activeContent ? undefined : ''}
            >
              {activeContent && content}
            </div>
          </div>
        </div>
      </button>
    </div>
  )
})

/* ---------- Content panels ---------- */

function ContainerContent({ id, navigate }) {
  switch (id) {
    case 'portfolio':
      return (
        <Panel kicker="01 / HELLO" color="#ffd0ce">
          <h1>Hi, I'm <em>Hemant</em>.</h1>
          <p>Biologist turned game &amp; UX designer. Every container in this pile holds a piece of what I make — screens, systems, 3D, and a few things that plug in.</p>
        </Panel>
      )

    case 'work':
      return <WorkCarousel navigate={navigate} />


    case 'about':
      return (
        <Panel kicker="03 / ABOUT ME" color="#bfd0ff">
          <h1>A little <em>about</em> me.</h1>
          <p>I design with AI as a creative partner — Figma, Claude and a lot of heart. Comfortable in UX/UI, game systems, 3D modelling (Maya &amp; Blender) and Arduino / IoT prototyping. I draw systems, pick the one that breaks the least, and build until someone else can use it.</p>
          <p>Based in Bangalore. Open to UX/UI and product roles.</p>
        </Panel>
      )

    case 'process':
      return (
        <Panel kicker="04 / PROCESS" color="#ffe6a0">
          <h1>How I <em>build</em>.</h1>
          <ul className={styles.processList}>
            <li><strong>01 Talk</strong><span>we start with a conversation</span></li>
            <li><strong>02 Sketch</strong><span>shape the idea together</span></li>
            <li><strong>03 Build &amp; launch</strong><span>ship it, then keep improving</span></li>
          </ul>
        </Panel>
      )

    case 'toolkit':
      return (
        <Panel kicker="05 / TOOLKIT" color="#dfe4eb">
          <h1>What's <em>in the box</em>.</h1>
          <div className={styles.chips}>
            {['Figma', 'Claude', 'Maya', 'Blender', 'Unity', 'Unreal', 'Arduino', 'IoT', 'React', 'Motion', 'Prototyping'].map((t) => (
              <span key={t} className={styles.chip}>{t}</span>
            ))}
          </div>
        </Panel>
      )

    case 'what':
      return (
        <Panel kicker="06 / WHAT I DO" color="#ffd0ce">
          <h1>What I <em>do</em>.</h1>
          <div className={styles.chips}>
            {['UX / UI design', 'Interaction design', 'Game systems', '3D modelling', 'Prototyping', 'Hardware + IoT'].map((t) => (
              <span key={t} className={styles.chip}>{t}</span>
            ))}
          </div>
        </Panel>
      )

    case 'hello':
      return (
        <Panel kicker="07 / SAY HELLO" color="#c6d2ff">
          <h1>Got an <em>idea</em>?</h1>
          <p>Have a project in mind, a half-formed idea, or just want to say hi?</p>
          <a className={styles.mailBtn} href="mailto:sharmah677@gmail.com">sharmah677@gmail.com ↗</a>
        </Panel>
      )

    default:
      return null
  }
}

function WorkCarousel({ navigate }) {
  const items = useMemo(() => projectsData.filter((p) => !p.isHidden), [])
  const [i, setI] = useState(0)
  const p = items[i]
  const go = (dir) => (e) => {
    e.stopPropagation()
    setI((n) => (n + dir + items.length) % items.length)
  }
  const open = (e) => {
    e.stopPropagation()
    if (p.externalPage) window.location.href = p.externalPage
    else navigate(`/project/${p.id}`)
  }
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft')  setI((n) => (n - 1 + items.length) % items.length)
      if (e.key === 'ArrowRight') setI((n) => (n + 1) % items.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [items.length])

  return (
    <div className={styles.workCarousel}>
      <div className={styles.workHead}>
        <span className={styles.kicker} style={{ color: '#ffd1a8' }}>02 / SELECTED WORK · {i + 1} / {items.length}</span>
      </div>

      <button
        type="button"
        className={`${styles.carouselArrow} ${styles.carouselArrowLeft}`}
        onClick={go(-1)}
        aria-label="Previous project"
      >‹</button>

      <button type="button" className={styles.workCard} onClick={open} aria-label={`Open ${p.title}`}>
        <div className={styles.workThumb}>
          <img
            src={p.thumbnail}
            alt={p.title}
            onError={(e) => {
              e.currentTarget.style.background = '#14264a'
              e.currentTarget.removeAttribute('src')
            }}
          />
        </div>
        <div className={styles.workMeta}>
          <h1>{p.title}</h1>
          <p>{p.shortDescription || p.category}</p>
          <span className={styles.workCta}>open project →</span>
        </div>
      </button>

      <button
        type="button"
        className={`${styles.carouselArrow} ${styles.carouselArrowRight}`}
        onClick={go(1)}
        aria-label="Next project"
      >›</button>
    </div>
  )
}

function Panel({ kicker, color, children }) {
  return (
    <div className={styles.panel}>
      <div className={styles.kicker} style={{ color }}>{kicker}</div>
      {children}
    </div>
  )
}
