import React, { useState } from 'react';
import './ModalSurveyForm.css';

const ModalSurveyForm = ({ isOpen, onClose, onSubmit, formData, setFormData }) => {
  if (!isOpen) return null;
  const [showThankYou, setShowThankYou] = useState(false);
  const handleSubmit = () => {
    setShowThankYou(true);
    setTimeout(() => {
      setShowThankYou(false);
      onSubmit();
      onClose();
    }, 5000);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="modal-overlay">
      {showThankYou ? (
        <div className="modal-content thank-you">
          <h3>Cảm ơn bạn!</h3>
          <p>Chúng tôi đã nhận được thông tin và sẽ liên hệ với bạn trong thời gian sớm nhất.</p>
        </div>
      ) : (
        <div className="modal-content">
          <h3 className='text-center'>Cảm ơn bạn đã thực hiện khảo sát của chúng tôi</h3>
          <div className="modal-body">
            <p>❓ Bạn có muốn nhận tư vấn thêm từ chuyên viên?</p>

            <div className="consultation-options">
              <label className="radio-option">
                <input
                  type="radio"
                  name="needConsultation"
                  value="yes"
                  checked={formData.needConsultation === "yes"}
                  onChange={handleChange}
                />
                <span>Có, tôi muốn nhận tư vấn 1-1</span>
              </label>

              <label className="radio-option">
                <input
                  type="radio"
                  name="needConsultation"
                  value="no"
                  checked={formData.needConsultation === "no"}
                  onChange={handleChange}
                />
                <span>Không, tôi đã đủ thông tin</span>
              </label>
            </div>

            {formData.needConsultation === "yes" && (
              <div className="contact-info">
                <p>Vui lòng xác nhận thông tin liên hệ:</p>
                <div className="form-group">
                  <input
                    type="text"
                    value={formData.phone || ""}
                    placeholder="Số điện thoại hoặc email"

                  />
                </div>
              </div>
            )}
          </div>

          <div className="modal-footer">
            <button className="btn-cancel" onClick={onClose}>Hủy</button>
            <button className="btn-submit" onClick={handleSubmit}>Xác nhận</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalSurveyForm;