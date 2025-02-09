import React from 'react'
import { FooterData } from '../types/types'

interface FooterProps {
  data: FooterData
}

const Footer: React.FC<FooterProps> = ({ data }) => {
  return (
    <footer className="w-full p-4 mt-4 text-center">
      <p className="text-base font-semibold italic text-blue-800">
        "{data.motto}"
      </p>
      <p className="text-sm text-gray-500 mt-2">
        © {new Date().getFullYear()} Lê Trần Quốc Tuấn - All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
