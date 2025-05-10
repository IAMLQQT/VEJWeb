import React from 'react'
import { Link } from 'react-router-dom'
import "./Banner.css"
const Banner = ({ onClickScroll }) => {
    return (
        <div className="banner relative">
            <div class="container">
                <div class="main-banner">
                    <button className='absolute bottom-1/12 left-1/2 transform -translate-x-1/2' onClick={onClickScroll}><span >Bạn đã sẵn sàng?</span></button>
                </div>
            </div>
        </div>
    )
}

export default Banner