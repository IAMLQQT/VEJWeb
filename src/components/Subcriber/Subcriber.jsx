import React, { useState } from 'react'
import "./Subcriber.css"
const Subcriber = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [contact, setContact] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (contact) {
            setShowPopup(true);
            setContact('');
            setTimeout(() => {
                setShowPopup(false);
            }, 1000);
        }
    };
    return (
        <div class="subcriber">
            <div class="container flex items-center justify-between">
                <div class="sub">
                    <h3>Tư vấn khách hàng</h3>
                    <p>Nếu bạn mong muốn nhận tư vấn từ chuyên viên của chúng tôi, Bạn hãy nhập email hoặc Số điện thoại và sẽ có chuyên viên liên hệ đến bạn.</p>
                </div>
                <div class="sub">
                    <h3 class="upper">Hãy nhập email hoặc số điện thoại</h3>
                    <form onSubmit={handleSubmit} class="flex  items-center">
                        <input type="text" placeholder="Nhập Email/SĐT"
                            onChange={(e) => setContact(e.target.value)} />
                        <button type="submit" className="submit-btn upper">Gửi</button>
                    </form>

                </div>
            </div>
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h4>Cảm ơn bạn!</h4>
                        <p>Chúng tôi sẽ liên hệ bạn trong thời gian sớm nhất.</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Subcriber