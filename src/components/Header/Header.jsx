import React from 'react'

import "./Header.css"
const Header = () => {
  return (
    <div className="header">
      <header>
        <div class="container flex items-center justify-between">
          <div>
            <a href="">English
              <i class="fa-solid fa-angle-down"></i>
            </a>
          </div>
          <div class="flex items-center j-center">
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
            <div class="link">
              <a href="">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-pinterest"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-invision"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-behance"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-git"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-dropbox"></i>
              </a>
            </div>
            <div class="login flex items-center j-center">
              <i class="fa-solid fa-user"></i>
              <a href="" class="line">Login</a>
              <a href="">Register</a>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header