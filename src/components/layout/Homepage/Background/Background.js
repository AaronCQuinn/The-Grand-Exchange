import React from 'react'
import GEVideo from './Background.mp4'
import './Background.css'

const Background = () => {
    return (
        <div>
            <div className="overlay"></div>
            <div className="video-container">
                <video autoPlay muted loop>
                    <source src={GEVideo} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default Background