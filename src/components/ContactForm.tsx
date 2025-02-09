import emailjs from '@emailjs/browser'
import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const ContactForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false) // Trạng thái mở/tắt Form
  const [formData, setFormData] = useState({
    companyName: '',
    address: '',
    email: '',
    phone: '',
    website: '',
    position: '',
    message: '',
  })
  const [emailError, setEmailError] = useState<string | null>(null) // Lưu lỗi email
  const [isChecked, setIsChecked] = useState(false) // Trạng thái của checkbox

  // Kiểm tra định dạng email
  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  // Xử lý sự kiện thay đổi input
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value)
      setEmailError(
        isValid ? null : 'Email không hợp lệ! Vui lòng nhập đúng định dạng.',
      )
    }
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Xử lý thay đổi số điện thoại
  const handlePhoneChange = (value: string) => {
    setFormData({ ...formData, phone: value })
  }

  // Xử lý gửi form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault() // Ngăn chặn hành vi mặc định của form

    // Kiểm tra email hợp lệ
    if (!validateEmail(formData.email)) {
      setEmailError('Email không hợp lệ! Vui lòng nhập đúng định dạng.')
      return
    }

    // Kiểm tra nếu người dùng chưa tích vào checkbox
    if (!isChecked) {
      alert('Vui lòng xác nhận thông tin trước khi gửi.')
      return
    }

    emailjs
      .send(
        'service_5hfmo89', // Service ID của bạn
        'template_4h9dj65', // Template ID của bạn
        formData,
        'cgTDJu6SL47uLo9Dt', // Public Key của bạn
      )
      .then(() => {
        alert('Thông tin đã được gửi thành công! ✅')
        setIsOpen(false) // Đóng form sau khi gửi
      })
      .catch((error) => {
        console.error('Lỗi khi gửi email:', error)
        alert('Gửi thất bại, vui lòng thử lại sau. ❌')
      })
  }

  return (
    <div className="relative">
      <button
        className="fixed right-4 top-[75vh] text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition blink-animation"
        onClick={() => setIsOpen(!isOpen)}
      >
        📩 Liên hệ ngay
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-[420px] relative z-50">
            <h2 className="text-xl font-bold text-orange-600 mb-4 text-center">
              Form Liên Hệ Nhà Tuyển Dụng
            </h2>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <input
                type="text"
                name="companyName"
                placeholder="Đơn vị tuyển dụng"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Địa chỉ"
                value={formData.address}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border p-2 rounded ${emailError ? 'border-red-500' : ''}`}
                required
              />
              {emailError && (
                <p className="text-red-500 text-xs">{emailError}</p>
              )}

              {/* Input số điện thoại có mã vùng quốc gia (full width) */}
              <PhoneInput
                country={'vn'} // Quốc gia mặc định là Việt Nam
                value={formData.phone}
                onChange={handlePhoneChange}
                inputClass="!w-full border p-2 rounded" // Thêm ! để đảm bảo full-width
                containerClass="!w-full" // Thêm ! để ghi đè CSS mặc định
                buttonClass="!bg-gray-200" // Đảm bảo nút chọn mã vùng không bị nhỏ lại
              />

              <input
                type="text"
                name="website"
                placeholder="Website (nếu có)"
                value={formData.website}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                name="position"
                placeholder="Vị trí cần tuyển dụng"
                value={formData.position}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
              <textarea
                name="message"
                placeholder="Ghi chú thêm (nếu có)"
                value={formData.message}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />

              {/* Checkbox xác nhận điều khoản */}
              <div className="mt-3 flex items-center">
                <input
                  type="checkbox"
                  id="agree"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                  className="w-5 h-5 mr-2"
                />
                <label htmlFor="agree" className="text-sm">
                  Tôi xác nhận{' '}
                  <a href="/terms" className="text-blue-600 hover:underline">
                    các thông tin trên là chính xác
                  </a>
                  .
                </label>
              </div>

              <div className="flex justify-between mt-2">
                <button
                  type="submit"
                  className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                >
                  Gửi
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                >
                  Đóng
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default ContactForm
