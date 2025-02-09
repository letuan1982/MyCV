import React from 'react'
import type { Education as EducationType } from '../types/types'

interface EducationProps {
  data: EducationType
}

const Education: React.FC<EducationProps> = ({ data }) => {
  return (
    <div className="bg-gray-950 px-4 rounded-lg">
      <h2 className="text-xl font-bold text-orange-500">HỌC VẤN</h2>
      <ul className="list-disc list-inside text-sm">
        {data.degree.map((degree, index) => (
          <li key={index} className="text-orange-400">
            {degree}
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-bold text-orange-500 mt-4">KỸ NĂNG</h2>
      <ul className="list-disc list-inside text-sm">
        {data.skills.map((skill, index) => (
          <li key={index} className="text-orange-400">
            {skill}
          </li>
        ))}
      </ul>

      {/* Kiểm tra xem awards có tồn tại và không rỗng */}
      {data.awards && data.awards.length > 0 && (
        <>
          <h2 className="text-xl font-bold text-orange-500 mt-4">
            THÀNH TÍCH NỔI BẬT
          </h2>
          <ul className="list-disc list-inside text-sm">
            {data.awards.map((award, index) => (
              <li key={index} className="text-yellow-500">
                🏆 {award}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default Education
