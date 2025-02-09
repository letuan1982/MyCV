import { CVData } from '../types/types'

const ImportData: CVData = {
  //================================NHẬP LIỆU CHO HEADER==================================
  personalInfo: {
    name: 'LÊ TRẦN QUỐC TUẤN',
    tagline: [
      '- Ngày sinh: 04/08/1982',
      '- Giáo viên hoá học với hơn 20 năm kinh nghiệm.',
      '- Tổ trưởng chuyên môn trường THPT Tân An.',
      '- Thành viên HĐ bộ môn Hoá học cấp THPT - Tỉnh Long An.',
    ],
    avatar: './assets/LOGO.png',
  },

  //================================NHẬP LIỆU CHO CONTACT================================
  contactInfo: {
    phone: '0973 23 73 99',
    email: 'letranquoctuan@gmail.com',
    facebook: 'facebook.com/letranquoctuan',
    github: 'github.com/letuan1982',
    address: 'TP Tân An, tỉnh Long An.',
  },

  //================================NHẬP LIỆU CHO KINH NGHIỆM================================
  experiences: [
    {
      period: '09/2005 - 08/2006',
      company: 'Trường THPT Tân Hưng',
      role: 'GV bộ môn Hoá học - Phó Bí thư Đoàn trường',
      achievements: ['Lao động tiên tiến'],
    },
    {
      period: '09/2006 - 08/2009',
      company: 'Trường THPT Tân Hưng',
      role: 'GV bộ môn Hoá học - Bí thư Đoàn trường - UV BCH Huyện Đoàn Tân Hưng',
      achievements: [
        'Lao động tiên tiến',
        'Bằng khen Huyện Đoàn về thành tích Xuất Sắc trong hoạt động Đoàn năm 2008',
      ],
    },
    {
      period: '09/2009 - 08/2011',
      company: 'Trường THPT Tân An',
      role: 'GV bộ môn Hoá học',
      achievements: [
        'Lao động tiên tiến',
        'Giải Nhất hội thi đồ dùng dạy học cấp tỉnh Long An năm học 2010-2011',
      ],
    },
    {
      period: '09/2011 - 08/2018',
      company: 'Trường THPT Tân An',
      role: 'GV bộ môn Hoá học',
      achievements: [
        'Chiến sĩ thi đua cơ sở năm học 2015-2016',
        'Chiến sĩ thi đua cơ sở năm học 2016-2017',
      ],
    },
    {
      period: '09/2018 - 08/2019',
      company: 'Trường THPT Tân An',
      role: 'GV bộ môn Hoá học - Thành viên HĐBM Hoá học cấp THPT tỉnh Long An',
      achievements: ['Lao động tiên tiến.'],
    },
    {
      period: '09/2019 đến nay',
      company: 'Trường THPT Tân An',
      role: 'GV bộ môn Hoá học - Tổ trưởng chuyên môn tổ Hoá Sinh - Thành viên HĐBM Hoá học cấp THPT tỉnh Long An',
      achievements: [
        'Chiến sĩ thi đua cơ sở năm học 2022-2023',
        'Chiến sĩ thi đua cơ sở năm học 2023-2024',
        'Giải Ba hội thi Giáo Án tương tác môn hoá học THPT cấp tỉnh năm học 2023-2024',
      ],
    },
  ],
  //================================NHẬP LIỆU CHO HỌC VẤN - KỸ NĂNG - THÀNH TÍCH================================
  education: {
    degree: [
      'Cử nhân Sư phạm Hoá học (ĐH Sư phạm TPHCM)',
      'Chứng chỉ quản lí Cán bộ trường THPT (Trường QLCB TP HCM)',
      'Đang hoàn thành khoá học Công nghệ thông tin -   ',
    ],
    skills: [
      'Giảng dạy hoá học phổ thông.',
      'Quản lí đội ngũ giáo viên, xây dựng kế hoạch giáo dục phổ thông.',
      'Kỹ năng Công nghệ thông tin tốt, hiểu biết và sử dụng thành thạo nhiều công cụ AI.',
    ],
    awards: [
      'Chiến sĩ thi đua cấp cơ sở các năm học 2015-2016; 2016-2017; 2022-2023; 2023-2024.',
      'Giải Nhất hội thi đồ dùng dạy học cấp tỉnh Long An năm học 2010-2011',
      'Giải Ba hội thi Giáo Án tương tác môn hoá học THPT cấp tỉnh năm học 2023-2024',
    ],
  },
  //================================NHẬP LIỆU CHO CÔNG VIỆC MONG MUỐN================================
  jobData: {
    position: 'Quản lí giáo dục - Giảng dạy nhóm, lớp học sinh chất lượng cao.',
    careerGoals:
      'Mong muốn làm việc trong môi trường Giáo dục sáng tạo, áp dụng công nghệ hiện đại để phát triển sản phẩm có giá trị.',
    skills: [
      'Quản lí cán bộ trường THPT',
      'Xây dựng và phát triển kế hoạch GD THPT',
      'Giảng dạy hoá học THPT',
      'Ứng dụng CNTT - AI trong Giáo dục',
    ],
  },
  //================================NHẬP LIỆU CHO FOOTER================================
  footerData: {
    motto:
      'Con đường đi đến thành công không bao giờ là một đường thẳng, mà nó đầy những khúc cua, những con dốc và thậm chí là vực thẳm. Nhưng nếu bạn kiên trì bước tiếp, nhất định bạn sẽ đến được đích. – Zig Ziglar',
  },
}

export default ImportData
