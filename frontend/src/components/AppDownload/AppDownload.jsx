import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
import useScrollReveal from '../../hooks/useScrollReveal'

const AppDownload = () => {
  const revealRef = useScrollReveal()

  return (
    <div className='app-download scroll-reveal' id='app-download' ref={revealRef}>
        <p> Also try our mobile app <br/> Tomato </p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload
