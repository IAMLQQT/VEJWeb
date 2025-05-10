import React from 'react'
import { Link } from 'react-router-dom'
import "./Banner.css"
const Banner = ({ onClickScroll }) => {
    return (
        <div className="banner">
            <div class="container">
                <div class="main-banner">
                    <h2 class="gold">Học qua từng bước chân</h2>
                    <h2>Phát triển bản thân qua hành trình <br />khám phá Việt Nam</h2>
                    <button onClick={onClickScroll}><span >Bạn đã sẵn sàng?</span></button>
                </div>
            </div>
        </div>
    )
}

export default Banner