import React, { useState } from 'react'
import './SurveyForm.css'
import ModalSurveyForm from '../ModalSurveyForm/ModalSurveyForm';

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    userType: '',
    teamwork: '',
    creativity: '',
    problemSolving: '',
    dataAnalysis: '',
    timeManagement: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleFinalSubmit = () => {
    console.log('Final form data:', formData);
    setIsModalOpen(false);
    // Thêm xử lý gửi dữ liệu lên server ở đây
  };

  return (
    <div className="survey-container">
      <div className="survey-form">
        <h2 className="title">Khảo sát kỹ năng</h2>
        <form onSubmit={handleSubmit}>
          {/* Mục 1: Thông tin cơ bản */}
          <section className="form-section">
            <h3>Thông tin cơ bản</h3>
            <div className="form-group">
              <label htmlFor="fullName">Họ và tên</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Nhập họ và tên của bạn"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Nhập email của bạn"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Số điện thoại</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Nhập số điện thoại của bạn"
              />
            </div>

            <div className="form-group">
              <label htmlFor="userType">Bạn là</label>
              <select
                id="userType"
                name="userType"
                value={formData.userType}
                onChange={handleChange}
              >
                <option value="">Chọn nhóm của bạn</option>
                <option value="student">Học sinh</option>
                <option value="college">Sinh viên</option>
                <option value="worker">Người đi làm</option>
                <option value="other">Khác</option>
              </select>
            </div>
          </section>

          {/* Mục 2: Đánh giá kỹ năng */}
          <section className="form-section skills-section">
            <h3>Đánh giá kỹ năng</h3>

            {/* Teamwork */}
            <div className="skill-group">
              <label>1. 🤝 Làm việc nhóm</label>
              <p className="skill-description">Bạn có thể hợp tác tốt với người khác không?</p>
              <div className="rating-options">
                {[1, 2, 3, 4, 5].map((value) => (
                  <label key={`teamwork-${value}`} className="rating-option">
                    <input
                      type="radio"
                      name="teamwork"
                      value={value}
                      checked={formData.teamwork === value.toString()}
                      onChange={handleChange}
                    />
                    <span className="rating-text">
                      {value === 1 && "Mình thấy khó làm việc nhóm 😕"}
                      {value === 2 && "Mình hợp tác được khi cần 😐"}
                      {value === 3 && "Mình hợp tác tốt nếu nhóm ổn định 🙂"}
                      {value === 4 && "Mình thường xuyên phối hợp tốt 😊"}
                      {value === 5 && "Mình là người kết nối nhóm 😎"}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="skill-group">
              <label>2. 🧠 Tư duy sáng tạo & phản biện</label>
              <p className="skill-description">Bạn có hay nghĩ ra ý tưởng mới và phản biện khi không đồng ý không?</p>
              <div className="rating-options">
                {[1, 2, 3, 4, 5].map((value) => (
                  <label key={`creativity-${value}`} className="rating-option">
                    <input
                      type="radio"
                      name="creativity"
                      value={value}
                      checked={formData.creativity === value.toString()}
                      onChange={handleChange}
                    />
                    <span className="rating-text">
                      {value === 1 && "Mình thường không nghĩ ra cách mới 😕"}
                      {value === 2 && "Mình làm theo hướng dẫn là chính 😐"}
                      {value === 3 && "Đôi lúc mình có ý tưởng riêng 🙂"}
                      {value === 4 && "Mình thường nghĩ ra hướng khác biệt 😊"}
                      {value === 5 && "Mình hay đưa ra ý tưởng lạ và phản biện rõ ràng 😎"}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Problem Solving */}
            <div className="skill-group">
              <label>3. 🧩 Giải quyết vấn đề</label>
              <p className="skill-description">Khi gặp khó khăn, bạn phản ứng như thế nào?</p>
              <div className="rating-options">
                {[1, 2, 3, 4, 5].map((value) => (
                  <label key={`problemSolving-${value}`} className="rating-option">
                    <input
                      type="radio"
                      name="problemSolving"
                      value={value}
                      checked={formData.problemSolving === value.toString()}
                      onChange={handleChange}
                    />
                    <span className="rating-text">
                      {value === 1 && "Mình thường bị rối, không biết làm gì 😕"}
                      {value === 2 && "Mình cần ai đó hướng dẫn mới làm được 😐"}
                      {value === 3 && "Mình có thể nghĩ cách giải quyết đơn giản 🙂"}
                      {value === 4 && "Mình thường tìm nhiều cách khác nhau 😊"}
                      {value === 5 && "Mình tự tin xử lý cả tình huống phức tạp 😎"}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Data Analysis */}
            <div className="skill-group">
              <label>4. 📊 Phân tích dữ liệu</label>
              <p className="skill-description">Khả năng hiểu và phân tích dữ liệu của bạn?</p>
              <div className="rating-options">
                {[1, 2, 3, 4, 5].map((value) => (
                  <label key={`dataAnalysis-${value}`} className="rating-option">
                    <input
                      type="radio"
                      name="dataAnalysis"
                      value={value}
                      checked={formData.dataAnalysis === value.toString()}
                      onChange={handleChange}
                    />
                    <span className="rating-text">
                      {value === 1 && "Mình thấy khó hiểu khi nhìn số liệu 😕"}
                      {value === 2 && "Mình hiểu nếu có người giải thích 😐"}
                      {value === 3 && "Mình tự hiểu được các số liệu cơ bản 🙂"}
                      {value === 4 && "Mình có thể phân tích và tìm ra điểm chính 😊"}
                      {value === 5 && "Mình dùng số liệu để đưa ra kết luận rõ ràng 😎"}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Time Management */}
            <div className="skill-group">
              <label>5. ⏰ Quản lý thời gian</label>
              <p className="skill-description">Bạn quản lý thời gian như thế nào?</p>
              <div className="rating-options">
                {[1, 2, 3, 4, 5].map((value) => (
                  <label key={`timeManagement-${value}`} className="rating-option">
                    <input
                      type="radio"
                      name="timeManagement"
                      value={value}
                      checked={formData.timeManagement === value.toString()}
                      onChange={handleChange}
                    />
                    <span className="rating-text">
                      {value === 1 && "Mình thường quên lịch hoặc làm trễ 😕"}
                      {value === 2 && "Mình có lịch nhưng không theo sát 😐"}
                      {value === 3 && "Mình theo lịch tạm ổn, thỉnh thoảng lệch 🙂"}
                      {value === 4 && "Mình lên lịch rõ và theo khá tốt 😊"}
                      {value === 5 && "Mình kiểm soát thời gian rất chủ động 😎"}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </section>

          <button type="submit" className="submit-btn">Gửi khảo sát</button>
        </form>
        <ModalSurveyForm
          isOpen={isModalOpen}
          onClose={handleModalClose}
          onSubmit={handleFinalSubmit}
          formData={formData}
          setFormData={setFormData}
        />
      </div>
    </div>
  )
}

export default SurveyForm