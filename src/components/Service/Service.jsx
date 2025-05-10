import React, { useEffect, useState, useRef } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Service.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLocation } from 'react-router-dom';
const Service = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id'); // lấy id từ ?id=
    const serviceDetailRef = useRef(null);

    const services = [
        {   id: 1,
            title: "GÓI HOẠT ĐỘNG TRẢI NGHIỆM DÀNH CHO HỌC SINH (COMBO 1)",
            price: "6.750.000VND",
            unit: "Gói/1 lớp/ 45 học sinh",
            description: "Mang lớp học ra đời sống – Khơi dậy đam mê học tập qua từng trải nghiệm!",
            features: [
                "Thiết kế chuyên biệt cho học sinh cấp 1 và cấp 2",
                "Tích hợp hoạt động trải nghiệm thực tế sinh động",
                "Nội dung xây dựng sẵn, đa dạng và phong phú",
                "Phát triển kỹ năng tư duy, hợp tác và sáng tạo"
            ],
            priceNote: "💡 Ưu đãi linh hoạt: Điều chỉnh từ 150.000 VNĐ/học sinh",
            commitments: [
                "Hoạt động an toàn – tổ chức chuyên nghiệp",
                "Tối ưu trải nghiệm học sinh",
                "Đồng hành cùng nhà trường trong đổi mới giáo dục"
            ]
        },
        {   id: 2,
            title: "GÓI HOẠT ĐỘNG TRẢI NGHIỆM DÀNH CHO HỌC SINH (COMBO 2)",
            price: "9.000.000VND",
            unit: "Gói/1 lớp/ 45 học sinh",
            description: "Định hướng rõ ràng – Trải nghiệm sâu sắc – Sẵn sàng cho tương lai",
            features: [
                "Thiết kế chuyên biệt cho học sinh cấp 3",
                "Phát triển tư duy, kỹ năng sống và định hướng nghề nghiệp",
                "Mô phỏng tình huống thực tế, định hướng ngành nghề",
                "Kỹ năng lập kế hoạch, ra quyết định và giải quyết vấn đề",
                "Huấn luyện viên có chuyên môn và kinh nghiệm thực tiễn"
            ],
            priceNote: "💡 Chi phí từ 200.000 VNĐ/học sinh – cao hơn gói cấp 1,2 do nội dung được cá nhân hóa và thiết kế chuyên sâu",
            specialNote: "🎁 Ưu đãi linh hoạt: Điều chỉnh mức phí theo số lượng học sinh, đảm bảo chất lượng chương trình",
            commitments: [
                "Hoạt động an toàn – tổ chức chuyên nghiệp",
                "Tối ưu trải nghiệm học sinh",
                "Đồng hành cùng nhà trường trong đổi mới giáo dục"
            ]
        },
        {
            id: 3,
            title: "GÓI TRẢI NGHIỆM DÀNH CHO GIA ĐÌNH",
            price: "800.000VND",
            unit: "Gói/1 gia đình/ 3 người",
            description: "Học cùng nhau – Trải nghiệm cùng nhau – Gắn kết bền lâu",
            features: [
                "Thiết kế cho gia đình 3 thành viên",
                "Trải nghiệm giáo dục gắn liền với thực tế",
                "Nội dung linh hoạt theo sở thích và nhu cầu",
                "Hoạt động giáo dục tích hợp với đời sống"
            ],
            priceNote: "💡 Chi phí từ 800.000 VNĐ/gia đình 3 thành viên (Phụ thu 250.000 VNĐ/thành viên bổ sung)",
            specialNote: "🎁 Ưu đãi cho nhóm gia đình và phụ huynh học sinh đã tham gia gói combo",
            commitments: [
                "Trải nghiệm gắn kết cảm xúc – phát triển tư duy",
                "Hoạt động an toàn – tổ chức chuyên nghiệp",
                "Nội dung thiết thực – lan tỏa giá trị giáo dục bền vững"
            ]
        },
        {
            id: 4,
            title: "GÓI TRẢI NGHIỆM CÁ NHÂN",
            price: "250.000VND",
            unit: "1 người",
            description: "Tham gia linh hoạt – Trải nghiệm trọn vẹn – Học mà chơi, chơi mà học",
            features: [
                "Dành cho cá nhân hoặc nhóm bạn nhỏ",
                "Phù hợp với học sinh các cấp hoặc người lớn",
                "Kết hợp học tập và vui chơi",
                "Môi trường thoải mái, năng động"
            ],
            priceNote: "💡 Chi phí từ 250.000 VNĐ/người",
            specialNote: "🎁 Ưu đãi nhóm từ 5 người và học sinh đã tham gia gói trường học",
            commitments: [
                "Hoạt động thiết kế phù hợp với từng độ tuổi",
                "Tăng tính chủ động, sáng tạo và giao tiếp xã hội",
                "Kết hợp lý thuyết – thực hành – giải trí"
            ]
        }
    ];
    const initialIndex = id ? services.findIndex(item => item.id === parseInt(id)) : 0;
    const sliderRef = useRef(null);

    // Cập nhật slide khi id trong URL thay đổi
    useEffect(() => {
        const index = id ? services.findIndex(s => s.id === parseInt(id)) : 0;
        if (sliderRef.current && index >= 0) {
            sliderRef.current.slickGoTo(index);
        }
        if (id && serviceDetailRef.current) {
            serviceDetailRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }, [id]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        initialSlide: initialIndex >= 0 ? initialIndex : 0,
    };

    return (
        <section ref={serviceDetailRef} className="service-section">
            <div className="container">
                <h2 className="section-title">Thông tin các gói sản phẩm</h2>
                <div className="service-slider">
                    <Slider ref={sliderRef} {...settings}>{services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))} </Slider>

                </div>
            </div>
        </section>
    );
};

export default Service;