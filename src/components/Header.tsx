import React from 'react'
import logo from '../assets/LOGO.png'
import { PersonalInfo } from '../types/types'

interface HeaderProps {
  data: PersonalInfo
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  return (
    <header className=" text-white w-full">
      <div className="container max-w-5xl flex flex-col md:flex-row items-center md:items-start">
        {/* Cột trái - Avatar (2/5 trên Desktop, Full trên Mobile) */}
        <div className="w-full md:w-2/5 bg-gray-950 rounded-bl-3xl rounded-br-3xl flex flex-col items-center h-full justify-center md:justify-start py-4">
          <img
            src={logo}
            alt="Avatar"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-orange-400"
          />
        </div>

        {/* Cột phải - Nội dung (3/5 trên Desktop, Full trên Mobile) */}
        <div className="w-full h-full md:w-3/5 bg-orange-300 text-center md:text-left py-4 md:mt-0">
          <h1 className="text-3xl md:text-4xl text-orange-700 font-bold text-center">
            {data.name}
          </h1>
          <div className="mt-2 space-y-1 font-sans text-sm font-semibold md:text-base ">
            {data.tagline.map((line, index) => (
              <p key={index} className="text-gray-800 text-center">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
