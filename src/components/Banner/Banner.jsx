import React from 'react'
import { Link } from 'react-router-dom'
import "./Banner.css"
const Banner = () => {
    return (
        <div className="banner">
            <div class="container">
                <div class="header-banner flex items-center justify-between">
                    <div class="logo">
                        <a href="/">
                            <img src="/assets/big-logo.png" alt="" />
                        </a>
                    </div>
                    <nav>
                        <ul class="flex items-center j-center">
                            <li><Link to="/about">Giới thiệu</Link></li>
                            <li><Link to="/survey">Khảo sát</Link></li>
                            <li>
                                <Link to="/service">Dịch vụ</Link>
                                <span>HOT</span>
                            </li>
                            <li><Link to="">Liên hệ</Link></li>

                            <li><a href=""><i class="fa-regular fa-heart"></i></a></li>
                            <li><a href="" class="search"><i class="fa-solid fa-magnifying-glass"></i></a></li>
                        </ul>
                    </nav>
                </div>
                <div class="main-banner">
                    <h2 class="gold">Hãy thực hiện bước đầu tiên</h2>
                    <h2>Của hành trình đến thành công của bạn</h2>
                    <button><a href="">Bạn đã sẵn sàng?</a></button>
                </div>

            </div>
        </div>
    )
}

export default Banner