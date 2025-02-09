import React from 'react'
import { ContactInfo } from '../types/types'

interface ContactProps {
  data: ContactInfo
}

const Contact: React.FC<ContactProps> = ({ data }) => {
  return (
    <div className="w-full flex items-center justify-start  py-4 h-auto">
      <div className="py-4 px-6 w-full rounded-full bg-gray-950">
        <ul className="flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1 bg-gray-950 text-orange-400 text-xs md:text-sm">
          <li className="flex items-center gap-1">📞 {data.phone}</li>
          <li className="flex items-center gap-1">✉️ {data.email}</li>
          <li className="flex items-center gap-1">🌐 {data.facebook}</li>
          <li className="flex items-center gap-1">🐱 {data.github}</li>
          <li className="flex items-center gap-1">🏠 {data.address}</li>
        </ul>
      </div>
    </div>
  )
}

export default Contact
