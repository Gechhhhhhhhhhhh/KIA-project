import React from 'react'
import { NavBar } from './NavBar'
import { MapPin, Phone, Mail } from "lucide-react";
import { Footer } from './Footer'
import bgImage from '../assets/contact.png'
export const Contact = () => {
  return (
    <div>
      <NavBar/>
      <div
      className=" "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-black/60 py-20 flex items-center">
        <div className="max-w-7xl mx-auto px-3 py-6 text-white">

          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-10">Contact Us</h1>
            <p className="text-gray-200 max-w-2xl mx-auto">
             We’re here to support you on your journey! Whether you have questions about our programs, want to collaborate, or need assistance, our team is ready to help. Don’t hesitate to reach out — your connection matters to us.
            </p>
          </div>

          {/* 4 Gap Layout */}
          <div className="grid md:grid-cols-3 gap-10">
           

            {/* Map Box */}
            <div className="bg-contact/15 text-white p-6 rounded-xl shadow-lg text-center ">
              <MapPin className="mx-auto mb-4 text-white" size={32} />
            
              <p>Borey Vimean Phnom Penh (house #31i, St. 209B), Street 598, Chrang Chamres 1, Russey Keo, Phnom Penh, Cambodia</p>
            </div>

            {/* Phone Box */}
            <div className="bg-contact/15 text-white p-6 rounded-xl shadow-lg text-center">
              <Phone className="mx-auto mb-4 text-white" size={32} />
         
              <p>+855 93-500-901</p>
            </div>

            {/* Email Box */}
           
            <div className="bg-contact/15 text-white p-6 rounded-xl shadow-lg text-center ">
              <Mail className="mx-auto mb-4 text-white" size={32} />
            
              <p className='break-all'>kinderimpactacademy@gmail.com</p>
            </div>

          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}
