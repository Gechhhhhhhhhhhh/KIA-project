import React from 'react'
import { NavBar } from './NavBar'
import { Footer } from './Footer'
import Img from '../assets/Vanni.png'
export const Profile = () => {
  return (
    <div className='text-primary'>
      <div className="">
        <NavBar/>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-4 ">
        <h1 className='text-4xl font-semibold py-5'>Welcome</h1>
        <p className='indent-10'>    I firmly believe in the inherent positivity within each of us. It is my unwavering conviction that by recognizing and nurturing this positivity,
           we can unlock untapped potential and foster a culture of growth and excellence. At the core of our success lies our ability to see the best in one another, 
           to build relationships grounded in mutual respect and positive regard. Together, we can 
          create an environment where everyone feels valued, supported, and empowered to reach their fullest potential.</p>
          <p className='py-5 indent-10'>
            My vision for our team is one where every individual is empowered to pursue their dreams and aspirations. I am committed to providing the guidance, resources,
and support necessary for each of you to achieve your goals. Together, let us embark on a journey of collaboration, inspiration, and empowerment. By harnessing the power of positivity and cultivating strong relationships, there is no limit to what we can achieve together. Here's to a future filled with success, growth, and fulfillment for us all.
          </p>
      <div className=" items-center gap-10 md:flex ">
        <div className="text-4xl font-semibold">
          <h1>About <span>Company</span></h1>
        </div>
        <div className="">
          <p> At KIA, our journey is rooted in a commitment to fostering positive transformation in the lives of individuals and organizations. Established with a vision to empower, inspire, and elevate, we have evolved into a dynamic platform offering a spectrum of services tailored for personal and professional growth.</p>
   
        <p className='py-5'>Our history is woven with the threads of impactful training workshops, personalized coaching sessions, and expert consulting services. From the early days, our focus has been on creating an environment where individuals can unlock their full potential, be happier, and enhance their productivity in every endeavor.</p>
        <p>At KIA, our legacy is built on a simple yet powerful mission. Welcome to a community where growth knows no bounds, and positive impact is our shared destination. Together, let's embark on a journey of transformation and success at Kinder Impact Academy.</p>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <img src={Img} alt="" className='w-70 ' />
      </div>
      <div className="">

        <h1 className='flex justify-center text-2xl py-3 font-medium'>Mr. Vanni Ing</h1>
        <div className="flex justify-center ">
        <p className='w-90 text-center'>Founder & CEO, Kinder Early Learning (KEL) &  Kinder Impact Academy (KIA)
         </p>
        </div>
      </div>
      <div className="mt-10 md:flex justify-between gap-25">
        <div className="">
          <h1 className='text-2xl font-semibold underline '>Academic & Professional Background</h1>
          <p className='py-4'>With a solid foundation in psychology and education, Mr. Vanni combines a deep understanding of human behavior with advanced teaching methodologies. His academic achievements include:</p>
          <p>
            <ul className='list-disc pl-10'>
              <li>Bachelor’s Degree in Psychology</li>
              <li>Master’s Degree in Education</li>
              <li>Master’s Degree in Disability Policy and Practice from Flinders University, Australia</li>
            </ul>
          </p>
        </div>
        <div className="">
          <h1 className='text-2xl font-semibold underline '>Career & Community Impact</h1>
          <p className='py-4'>Mr. Vanni’s professional
             journey spans multiple industries, giving him a 
            well-rounded perspective on challenges and opportunities. He has worked in:</p>
          <p>
            <ul className='list-disc pl-10'>
              <li>NGOs, gaining insights into social impact and community development</li>
              <li>Private Companies, excelling in leadership and operations</li>
              <li>Entrepreneurship, building and managing businesses successfully</li>
            </ul>
          </p>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  )
}


