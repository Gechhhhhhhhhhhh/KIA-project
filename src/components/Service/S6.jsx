import React from 'react'
import { NavBar } from '../NavBar'
import { Footer } from '../Footer'
import AgilityImage from "../../assets/am.png" // Replace with your actual image

export const S6 = () => {
  return (
    <div>
      <NavBar />
      <div className="max-w-7xl mx-auto px-6 py-4 text-primary">

        {/* 2-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE - TEXT */}
          <div>
            {/* Header */}
            <div>
              <h1 className='underline text-3xl font-semibold mt-10'>
                Agility Mindset
              </h1>
              <p className='py-3'>
                Tagline: Adapting, Innovating, and Thriving
              </p>
              <p>Course Code: KIA-AGL-0500</p>
            </div>

            {/* Course Details */}
            <div className="text-primary mt-10">
              <ol className="list-decimal text-2xl font-semibold space-y-6 pl-6">

                {/* 1 */}
                <li>
                  Course Overview
                  <ul className="list-disc text-base font-normal mt-2 space-y-2 pl-6">
                    <li>
                      Develop mental flexibility, problem-solving, creativity, and resilience to thrive in uncertainty.
                    </li>
                  </ul>
                </li>

                {/* 2 */}
                <li>
                  Learning Objectives
                  <ul className="list-disc text-base font-normal mt-2 space-y-2 pl-6">
                    <li>Understand agile vs fixed mindsets.</li>
                    <li>Strengthen adaptability.</li>
                    <li>Use agile decision-making.</li>
                    <li>Foster creativity and innovation.</li>
                  </ul>
                </li>

                {/* 3 */}
                <li>
                  Course Content (Modules)
                  <ul className="text-secondary text-base font-normal mt-2 space-y-4 pl-6">

                    <li>
                      <span className="font-semibold">Intro</span>
                      <ul className="list-disc pl-6 mt-2 space-y-1 text-primary">
                        <li>Agility fundamentals.</li>
                      </ul>
                    </li>

                    <li>
                      <span className="font-semibold">1-Day Format</span>
                      <ul className="pl-6 mt-2 space-y-1 list-disc text-primary">
                        <li>Growth mindset integration.</li>
                        <li>Creativity drills.</li>
                        <li>Decision-making frameworks.</li>
                      </ul>
                    </li>

                    <li>
                      <span className="font-semibold">2-Day Format</span>
                      <ul className="pl-6 mt-2 space-y-1 list-disc text-primary">
                        <li>Resilience in pressure.</li>
                        <li>Emotional agility.</li>
                        <li>Adaptive team practices.</li>
                      </ul>
                    </li>

                    <li>
                      <span className="font-semibold">3-Day Format</span>
                      <ul className="pl-6 mt-2 space-y-1 list-disc text-primary">
                        <li>Scenario-based agility.</li>
                        <li>Continuous learning blueprint.</li>
                      </ul>
                    </li>

                  </ul>
                </li>

                {/* 4 */}
                <li>
                  Audience & Methods
                  <ul className="list-disc text-base font-normal mt-2 space-y-2 pl-6">
                    <li>Audience: All functions, especially supervisors.</li>
                    <li>Methods: Games, labs, simulations.</li>
                    <li>Measurement: Agility practice plan.</li>
                  </ul>
                </li>

              </ol>
            </div>
          </div>

          {/* RIGHT SIDE - IMAGE */}
          <div className="lg:sticky lg:top-24">
            <img
              src={AgilityImage}
              alt="Agility Mindset"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}