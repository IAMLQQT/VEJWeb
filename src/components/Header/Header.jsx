import React from 'react'

import "./Header.css"
import HeaderBottom from './HeaderBottom/HeaderBottom'
const Header = () => {
  return (
    <div className="header relative">
      <header className="bg-[#2C75E4]">
        <div class="container flex items-center justify-between ">
          <div>
            <a href="">Tiếng việt
              <i class="fa-solid fa-angle-down"></i>
            </a>
          </div>
          <div class="communications flex items-center j-center">
              <p>
                <i class="fa-solid fa-phone-flip"></i>
                0848 021 715
              </p>
              <p>
                <i class="fa-solid fa-location-dot"></i>
                280 An Dương Vương, phường 2, quận 5, TPHCM.
              </p>
              <p>
                <i class="fa-regular fa-clock"></i>
                Thứ 2 - Thứ 7 8.00 - 18.00
              </p>
            </div>
          <div class="flex items-center j-center">
           
            <div class="link">
              <a href="">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-instagram"></i>
              </a>
             
            </div>
            <div class="login flex items-center j-center">
              <i class="fa-solid fa-user"></i>
              <a href="" class="line">Đăng nhập</a>
              <a href="">Đăng ký</a>
            </div>
          </div>
        </div>
        
      </header>
      <HeaderBottom />
    </div>
  )
}

export default Header