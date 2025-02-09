import React from 'react'

interface JobProps {
  data: {
    position: string
    careerGoals: string
    skills: string[]
  }
}

const DesiredJob: React.FC<JobProps> = ({ data }) => {
  return (
    <div className="bg-gray-950 p-4 rounded-lg">
      <h2 className="text-xl font-bold text-orange-500 ">
        CÔNG VIỆC MONG MUỐN
      </h2>
      <p className="text-orange-600 font-semibold">{data.position}</p>

      <h2 className="text-xl font-bold text-orange-500 mt-4">
        MỤC TIÊU NGHỀ NGHIỆP
      </h2>
      <p className="text-orange-400 text-sm">{data.careerGoals}</p>

      <h2 className="text-xl font-bold text-orange-500 mt-4">
        KỸ NĂNG PHÙ HỢP
      </h2>
      <ul className="list-disc list-inside text-sm">
        {data.skills.map((skill, index) => (
          <li key={index} className="text-orange-400">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DesiredJob
