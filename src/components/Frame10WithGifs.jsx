import React from 'react'
import '../styles/Frame10WithGifs.css'

export default function Frame10WithGifs() {
  const BASE_URL = import.meta.env.BASE_URL || '/'

  return (
    <div className="frame10-wrapper">
      {/* Background Frame 10 image */}
      <img
        src={`${BASE_URL}images/projects/ammo-batics/Slides/Frame 10.png`}
        alt="Obstacles & Hazards"
        className="frame10-base"
      />

      {/* Three GIFs positioned over the black boxes */}
      <div className="frame10-gifs">
        <div className="gif-box-10 gif-box-10-left">
          <img
            src={`${BASE_URL}images/projects/ammo-batics/gifs/Adobe Express - a.gif`}
            alt="Obstacle A"
          />
        </div>
        <div className="gif-box-10 gif-box-10-middle">
          <img
            src={`${BASE_URL}images/projects/ammo-batics/gifs/Adobe Express - b.gif`}
            alt="Obstacle B"
          />
        </div>
        <div className="gif-box-10 gif-box-10-right">
          <img
            src={`${BASE_URL}images/projects/ammo-batics/gifs/Adobe Express - c.gif`}
            alt="Obstacle C"
          />
        </div>
      </div>
    </div>
  )
}
