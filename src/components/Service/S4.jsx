import React from 'react'
import { NavBar } from '../NavBar'
import { Footer } from '../Footer'
import ECEImage from "../../assets/ece.png" // Replace with your actual ECE image

export const S4 = () => {
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
                Early Childhood Education
              </h1>
              <p className='py-3'>
                Tagline: Nurturing Young Minds for a Brighter Future
              </p>
              <p>Course Code: KIA-ECE-0800</p>
            </div>

            {/* Course Details */}
            <div className="text-primary mt-10">
              <ol className="list-decimal text-2xl font-semibold space-y-6 pl-6">

                {/* 1 */}
                <li>
                  Course Overview
                  <ul className="list-disc text-base font-normal mt-2 space-y-2 pl-6">
                    <li>
                      A professional development training for educators supporting 0–5 year old children's growth across all domains.
                    </li>
                  </ul>
                </li>

                {/* 2 */}
                <li>
                  Learning Objectives
                  <ul className="list-disc text-base font-normal mt-2 space-y-2 pl-6">
                    <li>Apply major child development theories.</li>
                    <li>Design engaging learning environments.</li>
                    <li>Support behaviors with positive guidance.</li>
                    <li>Partner effectively with families.</li>
                  </ul>
                </li>

                {/* 3 */}
                <li>
                  Course Content (Modules)
                  <ul className="text-secondary text-base font-normal mt-2 space-y-4 pl-6">

                    <li>
                      <span className="font-semibold">Intro</span>
                      <ul className="list-disc pl-6 mt-2 space-y-1 text-primary">
                        <li>Importance of early childhood education.</li>
                      </ul>
                    </li>

                    <li>
                      <span className="font-semibold">1-Day Format</span>
                      <ul className="pl-6 mt-2 space-y-1 list-disc text-primary">
                        <li>Developmental milestones.</li>
                        <li>Positive learning environments.</li>
                        <li>Play-based learning strategies.</li>
                      </ul>
                    </li>

                    <li>
                      <span className="font-semibold">2-Day Format</span>
                      <ul className="pl-6 mt-2 space-y-1 list-disc text-primary">
                        <li>Social-emotional development.</li>
                        <li>Behavior guidance.</li>
                        <li>Family engagement.</li>
                      </ul>
                    </li>

                    <li>
                      <span className="font-semibold">3-Day Format</span>
                      <ul className="pl-6 mt-2 space-y-1 list-disc text-primary">
                        <li>Inclusive practices.</li>
                        <li>Assessment tools.</li>
                        <li>ECE teaching mastery sessions.</li>
                      </ul>
                    </li>

                  </ul>
                </li>

                {/* 4 */}
                <li>
                  Audience & Methods
                  <ul className="list-disc text-base font-normal mt-2 space-y-2 pl-6">
                    <li>Audience: ECE teachers, caregivers, school leaders.</li>
                    <li>Methods: Demonstration, practice labs, case studies.</li>
                    <li>Measurement: Observation & skill application.</li>
                  </ul>
                </li>

              </ol>
            </div>
          </div>

          {/* RIGHT SIDE - IMAGE */}
          <div className="lg:sticky lg:top-24">
            <img
              src={ECEImage}
              alt="Early Childhood Education"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}