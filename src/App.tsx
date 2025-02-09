import React from 'react'
import Contact from './components/Contact'
import ContactForm from './components/ContactForm'
import DesiredJob from './components/DesiredJob'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Video from './components/Video'
import ImportData from './data/ImportData'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-orange-300 flex flex-col justify-center">
      <div className="container px-4 max-w-5xl mx-auto ">
        {/* Header nằm trên cùng */}
        <Header data={ImportData.personalInfo} />
        <Contact data={ImportData.contactInfo} />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0 rounded-lg pb-4 overflow-hidden w-full shadow-xl">
          {/* Cột trái */}
          <div className="md:col-span-2 bg-gray-950 pt-5 rounded-tl-3xl rounded-tr-3xl">
            <Education data={ImportData.education} />
            <DesiredJob data={ImportData.jobData} />
          </div>

          {/* Cột phải */}
          <div className="md:col-span-3 bg-orange-300">
            <Video videoId="byFbClblm5I" title="THÔNG TIN SƠ LƯỢC" />
            <ContactForm />
            <Experience data={ImportData.experiences} />
          </div>
        </div>
        <Footer data={ImportData.footerData} />
      </div>
    </div>
  )
}

export default App
