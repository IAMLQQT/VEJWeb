import React from 'react'
import "./Achivement.css"
const Achivement = () => {
    return (
        <div class="achivements">
            <div class="container">
                <h2>THÀNH TỰU</h2>
                <p>Tại đây bạn có thể xem lại một số số liệu thống kê về Trung tâm Giáo dục của chúng tôi</p>
                <div class="row flex flex-wrap items-center justify-between">
                    <div class="items col-xs-12 col-sm-6  col-lg-3 flex items-center justify-center flex-col">
                        <img src="/assets/earth.png" alt="" />
                        <h3>20</h3>
                        <span>Số lượng người xem</span>
                    </div>
                    <div class="items col-xs-12 col-sm-6  col-lg-3 flex items-center justify-center flex-col">
                        <img src="/assets/bll.png" alt="" />
                        <h3>5</h3>
                        <span>Dịch vụ hoàn thành</span>
                    </div>
                    <div class="items col-xs-12 col-sm-6  col-lg-3 flex items-center justify-center flex-col">
                        <img src="/assets/population.png" alt="" />
                        <h3>100</h3>
                        <span>Số lượng học sinh đã học</span>
                    </div>
                    <div class="items col-xs-12 col-sm-6  col-lg-3 flex items-center justify-center flex-col">
                        <img src="/assets/bag.png" alt="" />
                        <h3>4</h3>
                        <span>Số lượng Dịch vụ</span>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Achivement