import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import { useState } from "react";
export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileService, setMobileService] = useState(false);
 return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/">
          
          <img src={logo} alt="Logo" className="h-15" />
          </Link>
          <h1 className='text-primary font-bold'> Kinder Impact Academy</h1>
        </div>

        {/* ================= DESKTOP MENU ================= */}
        <ul className="hidden md:flex items-center gap-8 ">

          <li className="hover:text-primary cursor-pointer">
            <Link to="/">Home</Link>
          </li>

          <li className="hover:text-primary cursor-pointer">
          
          <Link to="/profile">Our Profile</Link>
          </li>

          {/* Desktop Dropdown */}
          <li 
            className="relative cursor-pointer"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <span className="hover:text-primary">Services ▾</span>

            {open && (
              <ul className="absolute top-6 left-0 bg-white shadow-lg rounded-lg py-2 w-48">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                 <Link to="/services/human"> HUMAN+</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Link to="/services/LearningPrograms">Learning Programs</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                 <Link to="/services/consulting"> Consulting</Link>
                </li>
              </ul>
            )}
          </li>

          <li className="hover:text-primary cursor-pointer"><Link to="/books"> Books</Link></li>

          <li className="hover:text-primary cursor-pointer"><Link to="/contact">Contact</Link></li>
        </ul>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          ☰
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileMenu && (
        <div className="md:hidden px-6 pb-6 space-y-4 ">

          <p className="hover:text-primary cursor-pointer"> <Link to="/">Home</Link></p>

          <p className="hover:text-primary cursor-pointer">
             <Link to="/profile">Our Profile</Link>
          </p>

          {/* Mobile Services Toggle */}
          <div>
            <button
              className="flex justify-between w-full"
              onClick={() => setMobileService(!mobileService)}
            >
              Services
              <span>{mobileService ? "▾" : ""}</span>
            </button>

            {mobileService && (
              <div className="ml-4 mt-2 space-y-2 text-gray-600">
                <p className="cursor-pointer hover:text-gray-800"><Link to="/services/human"> HUMAN+</Link></p>
                <p className="cursor-pointer hover:text-gray-800"> <Link to="/services/LearningPrograms">Learning Programs</Link></p>
                <p className="cursor-pointer hover:text-gray-800">  <Link to="/services/consulting"> Consulting</Link></p>
              </div>
            )}
          </div>

          <p className="hover:text-primary cursor-pointer"><Link to="/books"> Books</Link></p>

          <p className="hover:text-primary cursor-pointer"><Link to="/contact">Contact</Link></p>

        </div>
      )}
    </nav>
  );
}
