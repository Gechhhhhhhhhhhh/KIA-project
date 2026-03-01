import React from 'react'
import { Link } from 'react-router-dom'
import {NavBar} from './NavBar'
import { Footer } from './Footer'
import IMG from '../assets/home-img.png'
import IMG2 from '../assets/about-image.jpg'
import Miss from '../assets/mission-image.jpg'
import Vis from '../assets/vision-image.jpg'
import Book from '../assets/Book.png'
import {Fbb} from "./Fbb"
const services = [
  {
    number: "01",
    title: "HUMAN+",
    description:
      "Empowering individuals through leadership,and personal growth development.",
      link: "/services/human",
  },
  {
    number: "02",
    title: "Learning Programs",
    description:
      "Structured, practical programs designed to build real-world skills and performance.",
      link: "/services/LearningPrograms",
  },
  {
    number: "03",
    title: "Consulting",
    description:
      "Strategic solutions to improve organizational performance and long-term success.",
      link: "/services/consulting",
  },
];
export const Home = () => {
  return (
    <div>
      
      <NavBar/>
      <div className="mt-10">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:gap-50 gap-15 ">
      {/* Left Side - Image */}
             <div>
                <p className="text-text  lg:text-4xl md:text-3xl text-3xl font-semibold">
                    Develop Human Potential. 
                    Strengthen <span className='text-primary font-bold'>Leadership</span>.
                    Create Real Impact.
                </p>
                <p className='text-primary py-5'>We help individuals, teams, and organizations build emotional
                   intelligence, communication excellence, and leadership capability through practical, psychology-based
                   learning experiences designed for real-world results.</p>
                   <a href="https://t.me/KIAcademy">


                <button className='text-white bg-primary py-2 px-10 rounded-md hover:text-primary hover:bg-white transition border border-primary-3'>Let's Talk</button>
                   </a>
              </div>
              {/* Right Side - Content */}
            <div className=''>
                <img
                  src={IMG}
                  alt="Contact"
                  className="w-100 "
                />
              </div>
      
            </div>
          </div>
          <div className="px-5">
          <div className="mt-10 bg-bgg py-10 max-w-7xl mx-auto rounded-2xl">
            <div className="max-w-7xl mx-auto px-6  grid lg:grid-cols-2 lg:gap-30 gap-15 ">
      {/* Left Side - Image */}
            <div className=''>
                <img
                  src={IMG2}
                  alt="Contact"
                  className=" "
                />
              </div>
              {/* Right Side - Content */}
           
              <div>
                <p className="text-primary  lg:text-4xl md:text-3xl text-3xl font-bold">
                    About Company
                </p>
                <p className='text-primary py-5'>Kinder Impact Academy (KIA) is 
                  a premier Cambodian-owned training, coaching, and consulting organization founded by Mr. Ing Vanni — a psychologist, educator, and entrepreneur with nearly two decades of experience in developing corporate learning and leadership programs. KIA is dedicated to unlocking human potential and driving positive impact 
                  through transformative learning, coaching, and consulting solutions
                   tailored for individuals, teams, and organizations.</p>
                   <Link to="/profile">
                   
                <button className='text-white bg-primary py-2 px-10 rounded-md hover:text-primary hover:bg-white transition border border-primary-3'>Learn more</button>
               
                   </Link>


              </div>
      
            </div>
          </div>

          </div>
          <div className="mt-10">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 lg:gap-35 gap-15 ">
      {/* Left Side - Image */}
            <div className=''>
               <div>
                <p className="text-primary  lg:text-4xl md:text-3xl text-3xl font-bold">
                    Our Mission
                </p>
                <p className='text-primary py-5'>we help people unlock their full potential and achieve meaningful, lasting impact through
                   personalized coaching, expert consulting, and dynamic training programs.</p>
                  
              </div>
                <img
                  src={Miss}
                  alt="Contact"
                  className=" "
                />
              </div>
              {/* Right Side - Content */}
              <div className="">

               <img
                  src={Vis}
                  alt="Contact"
                  className="hidden md:block "
                />
           
              <div className=''>
                <p className="text-primary mt-5  lg:text-4xl md:text-3xl text-3xl font-bold">
                    Our Vision  </p>
                <p className='text-primary py-5'>To shape a future where every person grows with purpose 
                  and creates lasting impact through transformative learning experiences.</p>
                 <img
                  src={Vis}
                  alt="Contact"
                  className="md:hidden  "
                />
              </div>
              </div>
      
            </div>
          </div>
           <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-6 text-gray-800">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how we can help you and your organization achieve your goals.
          </p>
        </div>

        {/* 3 Column Grid */}
        <div className="w-2/3 mx-auto">


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 text-primary">

          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl border-primary border-2 p-2 py-5 relative  transition"
            >
              {/* Big Number */}
              <span className="absolute top-6 right-6 text-5xl font-semibold text-primary">
                {service.number}
              </span>

              {/* Content */}
              <div className="relative mt-30">
                <h3 className="text-xl md:text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="t mb-3">{service.description}</p>
                
               <Link
                  to={service.link}
                  className="inline-block
                  text-primary hover:underline transition "
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}

        </div>
        </div>
      </div>
    </section>
    <Fbb/>
<div className="px-5">
          <div className="mt-10 bg-bgg py-10 max-w-7xl mx-auto rounded-2xl">
            <div className="max-w-7xl mx-auto px-6 justify-items-center grid lg:grid-cols-2 lg:gap-5 gap-15 ">
      {/* Left Side - Image */}
            <div className=''>
                <p className="text-primary   text-3xl font-bold">
                    Parenting Book
                </p>
                <p className="text-primary   text-xl font-semibold py-5">
                    តើអ្នកកំពុងតែស្វែងរកមធ្យោបាយក្នុងការចិញ្ចឹមអប់រំកូនឱ្យបានត្រឹមត្រូវមែនទេ?
                </p>
                 <p className="text-primary mb-6 leading-relaxed">
        <ul className='list-decimal pl-10 space-y-1'>
          <li>សៀវភៅនេះបង្ហាញពីរបៀបចិញ្ចឹមអប់រំកូនដោយមានក្តីស្រឡាញ់ គោលបំណង និងចក្ខុវិស័យវែងឆ្ងាយ។</li>
          <li>យល់ស៊ីជម្រៅពីកុមារ—របៀបដែលខួរក្បាល ចិត្ត អារម្មណ៍ និងរបៀបដែលកុមារអភិវឌ្ឍសមត្ថភាពពេញលេញ។</li>
          <li>ឈប់ប្រើការដាក់ទណ្ឌកម្ម​ និងការគំរាមដោយចាប់ផ្តើមប្រើ ការចិញ្ចឹមអប់រំកូនតាមបែបវិជ្ជមាន ដើម្បីឱ្យកុមារមានភាពឆ្លាតវៃខាងអារម្មណ៍ មានទំនុកចិត្ត និងមានទំនួលខុសត្រូវ។</li>
          <li>ស្វែងយល់ពីរបៀបដែលការអភិវឌ្ឍខ្លួនឯងជាឪពុកម្តាយក្លាយជាអាថ៌កំបាំងក្នុងភាពជោគជ័យរបស់កូនអ្នក។</li>
          <li>បណ្តុះកូនឱ្យក្លាយជាបុគ្គលអស្ចារ្យ! ត្រៀមពួកគេទៅជា អ្នកគិតជាសកល អ្នកដឹកនាំ និងអ្នកផ្លាស់ប្ដូរពិភពលោក។</li>
        </ul>
          </p>
          <div className="">

                   <a href="https://t.me/KIAcademy">


                <button className='text-white bg-primary py-2 px-10 rounded-md hover:text-primary hover:bg-white
                 transition border border-primary-3'>បញ្ជាទិញឥឡូវនេះ</button>
                   </a>
                  <Link to="/books">
                  
                <button className='text-primary bg-white py-2 px-10 ml-3
                rounded-md hover:text-white hover:bg-primary transition border border-primary-3'>សិក្សាបន្ថែម</button>
                   
                  </Link>
                  

          </div>
              </div>
              {/* Right Side - Content */}
           
              <div>
                <img
                  src={Book}
                  alt="Contact"
                  className=" "
                />
               
              </div>
      
            </div>
          </div>

          </div>

      <Footer/>
    </div>
  )
}
