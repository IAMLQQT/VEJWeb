import React from 'react'
import { Link } from 'react-router-dom'

import "./HeaderBottom.css"
const HeaderBottom = () => {
    return (
        <div className="headerbottom">
            <div className="container">
                <div class=" flex items-center justify-between">
                    <div class="logo w-[100px]">
                        <a href="/">
                            <img src="/assets/logoVEJ.png" alt="" />
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
                         

                            <li><a href=""><i class="fa-regular fa-heart"></i></a></li>
                            <li><a href="" class="search"><i class="fa-solid fa-magnifying-glass"></i></a></li>
                        </ul>
                    </nav>
                </div>
            </div>

        </div>

    )
}

export default HeaderBottom