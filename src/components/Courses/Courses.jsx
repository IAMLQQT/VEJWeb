import React from 'react'
import { forwardRef } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Courses.css"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Courses = forwardRef((props, ref) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true
    };
    const Course = [
        {
            id: 1,
            combo: "Combo 1",
            title: "GÓI HOẠT ĐỘNG TRẢI NGHIỆM DÀNH CHO HỌC SINH",
            img: "/assets/cathryn-lavery-67852-unsplash-540x700.png",
            priceInit: "Gói/1 lớp/ 45 học sinh",
            price: "6.750.000VND",
            discount: "",
            description: "Gói sản phẩm được thiết kế chuyên biệt cho học sinh cấp 1 và cấp 2, tích hợp các hoạt động trải nghiệm thực tế sinh động, giúp học sinh khám phá kiến thức qua các môn học một cách trực quan và đầy hứng thú.",
            bottom: "-195px"
        },
        {
            id: 2,
            combo: "Combo 2",
            title: "GÓI HOẠT ĐỘNG TRẢI NGHIỆM DÀNH CHO HỌC SINH",
            img: "/assets/Group-8943-540x441.png",
            priceInit: "Gói/1 lớp/ 45 học sinh",
            price: "9.000.000VND",
            discount: "",
            description: "Gói sản phẩm được thiết kế chuyên biệt cho học sinh cấp 3, tập trung vào việc phát triển tư duy, kỹ năng sống và định hướng nghề nghiệp – những yếu tố thiết yếu để học sinh chuẩn bị cho các bước đi sau THPT.",
            bottom: "-195px"
        },
        {
            id: 3,
            combo: "Combo 3",
            title: "GÓI TRẢI NGHIỆM DÀNH CHO GIA ĐÌNH",
            img: "/assets/Comfortable-Camera-540x441.png",
            priceInit: "Gói/1 gia đình/ 3 người",
            price: "800.000VND",
            discount: "",
            description: "Gói sản phẩm đặc biệt dành cho gia đình có 3 thành viên, được thiết kế để các thành viên cùng tham gia trải nghiệm giáo dục gắn liền với thực tế, từ đó tăng cường sự kết nối, thấu hiểu và phát triển kỹ năng cùng nhau.",
            bottom: "-195px"
        },
        {
            id: 4,
            combo: "Combo 4",
            title: "GÓI TRẢI NGHIỆM CÁ NHÂN",
            img: "/assets/Photographer-540x440.png",
            priceInit: "1 người",
            price: "250.000VND/1 người",
            discount: "",
            description: "Gói sản phẩm dành cho cá nhân hoặc nhóm bạn nhỏ có nhu cầu tham gia trải nghiệm một cách linh hoạt, không phụ thuộc vào lớp học hay gia đình.",
            bottom: "-145px"
        },
    ]  
    const navigate = useNavigate();
    
    const handleClick = (id) => {
      navigate(`/service?id=${id}`);
    };
  

    return (

        <div ref ={ref} id="courses-section" class="top-courses">
            <div class="container relative">
                <div class="header flex items-center justify-between">
                    <h2>Dịch vụ</h2>
                    <nav>
                        <ul class="flex items-center j-center">
                            <li><a href="" class="newest">Mới nhất</a></li>
                            <li><a href="">Lâu nhất</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="row flex flex-wrap items-center justify-between">
                    <Slider {...settings}>
                        {Course.map((item) => (
                            <div className="items" key={item.id} onClick={() => handleClick(item.id)}>
                                <span className="special">Special</span>
                                <img src={item.img} alt={item.title} />
                                <div className={`infom` } style={{ bottom: item.bottom }}>
                                    <p href="">{item.combo}</p>
                                    
                                        <h4>{item.title}</h4>
                                    
                                    <span className='block'>Đv: {item.priceInit}</span>
                                    <span className='block'>Đơn giá: {item.price}</span>
                                    <p>{item.description}</p>
                                    <div className="star flex items-center justify-between">
                                        <div className="evaluate">
                                            <i className="fa-solid fa-star gold"></i>
                                            <i className="fa-solid fa-star gold"></i>
                                            <i className="fa-solid fa-star gold"></i>
                                            <i className="fa-solid fa-star gold"></i>
                                            <i className="fa-solid fa-star gold"></i>
                                            <span>4.7</span>
                                        </div>
                                        
                                            <i className="fa-regular fa-heart heart" ></i>
                                      
                                    </div>
                                    <div className="view">
                                        <span>
                                            <i className="fa-solid fa-user-group"></i>
                                            1809
                                        </span>
                                        <span>
                                            <i className="fa-solid fa-eye"></i>
                                            23075
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                      
            </div>
        </div>
    )
})

export default Courses