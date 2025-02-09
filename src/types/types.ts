// src/types/types.ts

export interface PersonalInfo {
  name: string
  tagline: string[]
  avatar: string // Đường dẫn đến ảnh đại diện
}

export interface ContactInfo {
  phone: string
  email: string
  facebook: string
  github: string
  address: string
}

export interface Experience {
  period: string // Ví dụ: "01/2020 - 12/2022"
  company: string
  role: string
  achievements: string[]
}

export interface Education {
  degree: string[]
  skills: string[]
  awards: string[]
}

export interface Award {
  title: string
  date: string
  description: string
}

export interface Project {
  name: string
  description: string
  link?: string // Link đến dự án (nếu có)
}

export interface JobData {
  position: string
  careerGoals: string
  skills: string[]
}

export interface FooterData {
  motto: string
}

export interface CVData {
  personalInfo: PersonalInfo
  contactInfo: ContactInfo
  experiences: Experience[]
  education: Education
  jobData: JobData
  footerData: FooterData
}
