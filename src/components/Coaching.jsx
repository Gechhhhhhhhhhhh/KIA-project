import React from 'react'
import { NavBar } from './NavBar'
import { Footer } from './Footer'
import { Link } from 'react-router-dom';
const services = [
  {
    number: "01",
    title: "Personal Development",
    description:
      "Tagline: Grow From Within, Shine Beyond",
    description1:
      "Course Code: KIA-PDC-0001",
      link: "/services/LearningPrograms/S1",
  },
  {
    number: "02",
    title: "Emotional Intelligence",
    description:
      "Tagline: Maximize Potential & Increase Happiness",
      description1:
      "Course Code: KIA-EQC-0100",
      link: "/services/LearningPrograms/S2",
  },
  {
    number: "03",
    title: "Effective Communication",
    description:
      "Tagline: Bridging Gaps, Building Bridges",
      description1:
      "Course Code: KIA-COM-0200",
      link: "/services/LearningPrograms/S3",
  },
  {
    number: "04",
    title: "Early Childhood Education",
    description:
      "Tagline: Unleash Your Inner Strength",
      description1:
      "Course Code: KIA-SEP-0300",
      link: "/services/LearningPrograms/S4",
  },
  {
    number: "05",
    title: "Parenting Skills",
    description:
      "Tagline: Nurturing the Future, One Child at a Time",
      description1:
      "Course Code: KIA-PAR-0400",
      link: "/services/LearningPrograms/S5",
  },
  {
    number: "06",
    title: "Agility Mindset",
    description:
      "Tagline: Adapting, Innovating, and Thriving",
      description1:
      "Course Code: KIA-AGL-0500",
      link: "/services/LearningPrograms/S6",
  },
  {
    number: "07",
    title: "Team Building",
    description:
      "Tagline: Unifying Talents, Achieving Excellence",
      description1:
      "Course Code: KIA-TMB-0600",
      link: "/services/LearningPrograms/S7",
  },
  {
    number: "08",
    title: "Leadership Skills",
    description:
      "Tagline: Lead with Vision, Inspire with Purpose",
      description1:
      "Course Code: KIA-LDS-0700",
      link: "/services/LearningPrograms/S8",
  },
  {
    number: "09",
    title: "Self Empowerment",
    description:
      "Tagline: Nurturing Young Minds for a Brighter Future",
      description1:
      "Course Code: KIA-ECE-0800",
      link: "/services/LearningPrograms/S9",
  },
  {
    number: "10",
    title: "Coaching Skills",
    description:
      "Tagline: Inspiring Leaders, Transforming Performance",
      description1:
      "Course Code: KIA-CSK-0900",
      link: "/services/LearningPrograms/S10",
  },
  {
    number: "11",
    title: "Customer Service",
    description:
      "Tagline: Delivering Excellence at Every Touchpoint",
      description1:
      "Course Code: KIA-CUS-1000",
      link: "/services/LearningPrograms/S11",
  },
  {
    number: "12",
    title: "Training & Facilitation",
    description:
      "Tagline: Teach, Engage, Transform",
      description1:
      "Course Code: KIA-TRN-1100",
      link: "/services/LearningPrograms/S12",
  },
];
export const Coaching = () => {
  return (
    <div>
      <NavBar/>
      <div className="max-w-7xl mx-auto px-6 text-primary">
        <h1 className='text-3xl text-primary font-bold mt-10 py-4'>Learning Programs</h1>
        <p>Our Learning programs cover a wide spectrum of topics, including personal development, emotional intelligence, effective communication, leadership, and more. Designed to empower individuals and teams, these sessions 
          foster skill enhancement and promote a culture of continuous learning and improvement.</p>
      </div>
         <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-6 text-primary">

        {/* 3 Column Grid */}
        <div className="lg:w-6xl w-3/4 mx-auto">


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

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
                <p className="text-primary mb-3">
                  <ul>
                    <li>{service.description}</li>
                    <li> {service.description1}</li>
                  </ul>
                 
                  </p>
                
               <Link
                  to={service.link}
                  className="inline-block
                  text-primary underline transition "
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
    <Footer/>
    </div>
  )
}
