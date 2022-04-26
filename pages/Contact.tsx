import React from 'react'
import Navbar from '../components/Navbar/Navbar'

function Contact() {
  return (
    <div>
    <Navbar/>
    <div className="lg:px-8 pt-24 lg:pt-36 min-h-screen  md:px-5 relative">
    <div className="max-w-7xl mx-auto">
      <div className="w-full h-full flex items-end px-1 fade-in">
        <div className="h-full pb-6 px-4 lg:px-0">
          <h3 className="floatinAnimation top-0 font-sans text-4xl lg:text-6xl uppercase  font-black  tracking-tight">
            Contact
            <span className="opacity-10 text-black pl-4">//</span>
          </h3>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default Contact