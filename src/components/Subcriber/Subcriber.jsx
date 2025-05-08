import React from 'react'
import "./Subcriber.css"
const Subcriber = () => {
    return (
        <div class="subcriber">
            <div class="container flex items-center justify-between">
                <div class="sub">
                    <h3>Tư vấn khách hàng</h3>
                    <p>Nếu bạn mong muốn nhận tư vấn từ chuyên viên của chúng tôi, Bạn hãy nhập email hoặc Số điện thoại và sẽ có chuyên viên liên hệ đến bạn.</p>
                </div>
                <div class="sub">
                    <h3 class="upper">Hãy nhập email hoặc số điện thoại</h3>
                    <form action="" class="flex  items-center">
                        <input type="text" id="emali" placeholder="Nhập Email/SĐT" />
                            <label for="email" class="upper">Subscribe</label>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Subcriber