import React from 'react'
import '../styles/Frame9WithGifs.css'

export default function Frame9WithGifs() {
  const BASE_URL = import.meta.env.BASE_URL || '/'

  return (
    <div className="frame9-wrapper">
      {/* Background Frame 9 image */}
      <img
        src={`${BASE_URL}images/projects/ammo-batics/Slides/Frame 9.png`}
        alt="Movement Mechanics"
        className="frame9-base"
      />

      {/* Three GIFs positioned over the black boxes */}
      <div className="frame9-gifs">
        <div className="gif-box gif-box-left">
          <img
            src={`${BASE_URL}images/projects/ammo-batics/gifs/Adobe Express - 1-Jump-Movement (1).gif`}
            alt="Jump Movement"
          />
        </div>
        <div className="gif-box gif-box-middle">
          <img
            src={`${BASE_URL}images/projects/ammo-batics/gifs/Adobe Express - 2-Jump-Recoil (1).gif`}
            alt="Jump Recoil"
          />
        </div>
        <div className="gif-box gif-box-right">
          <img
            src={`${BASE_URL}images/projects/ammo-batics/gifs/Adobe Express - shoot.gif`}
            alt="Shoot"
          />
        </div>
      </div>
    </div>
  )
}
