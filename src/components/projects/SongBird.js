import React from 'react'
import songbird from "../../images/songbird/songbird.png"
const SongBird = () => {
    window.scrollTo(0, 0);
    return (
        <div className="h-screen w-full">
            <img className="w-full" src={songbird} alt="song"/>
        </div>
    )
}

export default SongBird
