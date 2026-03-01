import React from 'react'
import { NavBar } from '../NavBar'
import { Footer } from '../Footer'
import TrainingImage from "../../assets/tf.png" // Replace with your actual image

export const S12 = () => {
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
                Training & Facilitation
              </h1>
              <p className='py-3'>
                Tagline: Teach, Engage, Transform
              </p>
              <p>Course Code: KIA-TRN-1100</p>
            </div>

            {/* Course Details */}
            <div className="text-primary mt-10">
              <ol className="list-decimal text-2xl font-semibold space-y-6 pl-6">

                {/* 1 */}
                <li>
                  Course Overview
                  <ul className="list-disc text-base font-normal mt-2 space-y-2 pl-6">
                    <li>
                      A facilitator development course that builds confidence in training design, delivery, engagement, and classroom management.
                    </li>
                  </ul>
                </li>

                {/* 2 */}
                <li>
                  Learning Objectives
                  <ul className="list-disc text-base font-normal mt-2 space-y-2 pl-6">
                    <li>Design training with clarity and structure.</li>
                    <li>Facilitate engaging sessions.</li>
                    <li>Manage group dynamics.</li>
                    <li>Use storytelling and activities.</li>
                  </ul>
                </li>

                {/* 3 */}
                <li>
                  Course Content (Modules)
                  <ul className="text-secondary text-base font-normal mt-2 space-y-4 pl-6">

                    <li>
                      <span className="font-semibold">Intro</span>
                      <ul className="list-disc pl-6 mt-2 space-y-1 text-primary">
                        <li>Role of a trainer.</li>
                      </ul>
                    </li>

                    <li>
                      <span className="font-semibold">1-Day Format</span>
                      <ul className="pl-6 mt-2 space-y-1 list-disc text-primary">
                        <li>Training design basics.</li>
                        <li>Engagement tools.</li>
                        <li>Facilitation techniques.</li>
                      </ul>
                    </li>

                    <li>
                      <span className="font-semibold">2-Day Format</span>
                      <ul className="pl-6 mt-2 space-y-1 list-disc text-primary">
                        <li>Difficult participants.</li>
                        <li>Session management.</li>
                        <li>Case-based facilitation.</li>
                      </ul>
                    </li>

                    <li>
                      <span className="font-semibold">3-Day Format</span>
                      <ul className="pl-6 mt-2 space-y-1 list-disc text-primary">
                        <li>Full facilitation practice.</li>
                        <li>Video feedback.</li>
                        <li>Trainer excellence blueprint.</li>
                      </ul>
                    </li>

                  </ul>
                </li>

                {/* 4 */}
                <li>
                  Audience & Methods
                  <ul className="list-disc text-base font-normal mt-2 space-y-2 pl-6">
                    <li>Audience: Trainers, supervisors, L&D practitioners.</li>
                    <li>Methods: Teaching labs, video review, facilitation drills.</li>
                    <li>Measurement: Facilitation assessment rubric.</li>
                  </ul>
                </li>

              </ol>
            </div>
          </div>

          {/* RIGHT SIDE - IMAGE */}
          <div className="lg:sticky lg:top-24">
            <img
              src={TrainingImage}
              alt="Training & Facilitation"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}