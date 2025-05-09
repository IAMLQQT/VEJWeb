import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div class="fotter">
            <div class="container">
                <div class="row flex justify-between">
                    <div class="items">
                        <h3>Giới thiệu</h3>
                        <p><a href="">VEJ </a> là một mô hình hoạt động giáo dục kết hợp lý thuyết và thực hành qua hành trình thực tế, giúp học sinh trung học khám phá kiến thức qua các trải nghiệm thực tế (như hình thức khám phá,...) tại các địa điểm như di tích lịch sử, nhà máy,... hay các hoạt động trải nghiệm tại trường. Dự án tích hợp yếu tố bản địa, trải nghiệm văn hóa và du lịch giáo dục.</p>
        
                        
                    </div>


                    <div class="items">
                        <h3>Dịch vụ</h3>
                        <div class="courses flex items-center ">
                            <img src="/assets/cathryn-lavery-67852-unsplash-75x75.png" alt=""/>
                                <div class="info-courses">
                                    <h5><a href="service?id=1">GÓI HOẠT ĐỘNG TRẢI NGHIỆM DÀNH CHO HỌC SINH</a> </h5>
                                    <p>Combo 1</p>
                                </div>
                        </div>
                        <div class="courses flex items-center ">
                            <img src="/assets/Web-1-75x75.png" alt=""/>
                                <div class="info-courses">
                                    <h5> <a href="service?id=2">GÓI HOẠT ĐỘNG TRẢI NGHIỆM DÀNH CHO HỌC SINH</a> </h5>
                                    <p>Combo 2</p>
                                </div>
                        </div>
                        <div class="courses flex items-center ">
                            <img src="/assets/Photographer-75x75.png" alt=""/>
                                <div class="info-courses">
                                    <h5> <a href="service?id=3">GÓI TRẢI NGHIỆM DÀNH CHO GIA ĐÌNH</a> </h5>
                                    <p>Combo 3 </p>
                                </div>
                        </div>
                        <div class="courses flex items-center ">
                            <img src="/assets/Photographer-75x75.png" alt=""/>
                                <div class="info-courses">
                                    <h5> <a href="service?id=4">GÓI TRẢI NGHIỆM CÁ NHÂN</a> </h5>
                                    <p>Combo 4 </p>
                                </div>
                        </div>
                    </div>
                    <div class="items">
                        <h3>Trang</h3>
                        <nav>
                            <ul>
                                <li><a href="/about"><i class="fa-solid fa-angle-right"></i>Giới thiệu</a></li>
                                <li><a href="/survey"><i class="fa-solid fa-angle-right"></i>Khảo sát</a></li>
                                <li><a href="/service"><i class="fa-solid fa-angle-right"></i>Dịch vụ</a></li>
                               
                            </ul>
                        </nav>
                    </div>
                    <div class="items">
                        <h3>Liên hệ</h3>
                        <p class="contact"><i class="fa-solid fa-location-dot"></i>  456 Lý Thường Kiệt, Phường 14, Quận 10, TP.HCM</p>
                        <p class="contact"><i class="fa-solid fa-phone"></i>Tel: 0946 254 632</p>
                        <p class="contact"><i class="fa-solid fa-print"></i>Zalo: 0946 254 632</p>
                        <p class="contact"><i class="fa-solid fa-envelope"></i>vej@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer