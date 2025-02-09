import React from 'react'
import type { Experience as ExperienceType } from '../types/types' // Sử dụng import type

interface ExperienceProps {
  data: ExperienceType[]
}

const Experience: React.FC<ExperienceProps> = ({ data }) => {
  return (
    <div className="bg-orange-300 p-4 rounded-lg">
      <h2 className="text-xl font-bold text-black mb-2">KINH NGHIỆM</h2>
      <div className="space-y-4 h-96 overflow-y-auto ">
        {data.map((exp, index) => (
          <div key={index} className="border-b pb-4">
            <p className="text-gray-700 font-semibold">{exp.period}</p>
            <p className="text-gray-900 font-bold">{exp.company}</p>
            <p className="text-gray-800">{exp.role}</p>
            <ul className="list-disc list-inside">
              {exp.achievements.map((ach, i) => (
                <li key={i} className="text-gray-800">
                  {ach}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
