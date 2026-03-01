import React from 'react'
import logo from '../assets/logo.png'
import { FaFacebookF,FaTiktok,FaYoutube,FaTelegramPlane } from "react-icons/fa";
import { Link } from 'react-router-dom'
export const Footer = () => {
  return (
    <footer className="bg-white border-t border-b border-gray-200 mt-10 ">

  {/* Main Footer Content */}
  <div className="max-w-7xl mx-auto px-6 py-12 
                  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 
                  gap-10">

    {/* Column 1 - Logo & About */}
    <div>
      <div className="lg:flex items-center gap-2">
               <img src={logo} alt="Logo" className="h-15" />
               <h1 className='text-primary font-bold'> KinderImpartAcademy</h1>
             </div>
      <p className="text-gray-600 text-sm leading-relaxed">
        Unlocking potential. Inspiring growth. Delivering impact.
      </p>
       <div className="flex gap-2  mt-6">
      
      {/* Facebook */}
      <a
        href="https://www.facebook.com/KinderImpactAcademy"
        className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white hover:bg-blue-700 transition"
      >
        <FaFacebookF size={15} />
      </a>

      {/* TikTok (Lucide doesn't have official TikTok, use placeholder icon or custom svg if needed) */}
      <a
        href="https://www.tiktok.com/@kinderimpactacademy"
        className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white hover:bg-gray-800 transition"
      >
       <FaTiktok size={15} />
      </a>

      {/* YouTube */}
      <a
        href="https://youtube.com/@kinderimpactacademy"
        className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white hover:bg-red-700 transition"
      >
        <FaYoutube size={15} />
      </a>

      {/* Telegram */}
      <a
        href="https://t.me/KIAcademy"
        className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white hover:bg-sky-800 transition"
      >
        <FaTelegramPlane size={15} />
      </a>

    </div>
    </div>

    {/* Column 2 - Quick Links */}
    <div>
      <h3 className="font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2 text-gray-600 text-sm">
        <li className="hover:text-primary cursor-pointer"><Link to="/">Home</Link></li>
        <li className="hover:text-primary cursor-pointer"><Link to="/profile"> Our Profile</Link></li>
        <li className="hover:text-primary cursor-pointer"><Link to="/books" >Books</Link></li>
        <li className="hover:text-primary cursor-pointer"><Link to="/contact">Contact</Link></li>
      </ul>
    </div>

    {/* Column 3 - Services */}
    <div>
      <h3 className="font-semibold mb-4">Services</h3>
      <ul className="space-y-2 text-gray-600 text-sm">
        <li className="hover:text-primary cursor-pointer">
         <Link to="/services/human"> HUMAN+</Link>
        </li>
        <li className="hover:text-primary cursor-pointer">
          <Link to="/services/LearningPrograms">Learning Programs</Link>
        </li>
        <li className="hover:text-primary cursor-pointer">
          <Link to="/services/consulting">Consulting</Link>
        </li>
      </ul>
    </div>

    {/* Column 4 - Contact */}
    <div>
      <h3 className="font-semibold mb-4">Contact Us</h3>
      <ul className="space-y-2 text-gray-600 text-sm">
        <li>Email: kinderimpactacademy@gmail.com</li>
        <li>Phone: +855 93-500-901</li>
        <li>location: Borey Vimean Phnom Penh (house #31i, St. 209B), Street 598, Chrang Chamres 1, Russey Keo, Phnom Penh, Cambodia</li>
      </ul>
    </div>

  </div>

  {/* Bottom Line Section */}
  <div className="border-t border-gray-200">
    <div className="max-w-6xl mx-auto px-6 py-4 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} KinderImpartAcademy. All rights reserved.
    </div>
  </div>

</footer>
  )
}
