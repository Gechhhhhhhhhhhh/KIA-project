import React from 'react'
import { NavBar } from '../NavBar'
import { Footer } from '../Footer'
import LeadershipImage from "../../assets/ls.png" // Replace with your actual image

export const S8 = () => {
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
                Leadership Skills
              </h1>
              <p className='py-3'>
                Tagline: Lead with Vision, Inspire with Purpose
              </p>
              <p>Course Code: KIA-LDS-0700</p>
            </div>

            {/* Course Details */}
            <div className="text-primary mt-10">
              <ol className="list-decimal text-2xl font-semibold space-y-6 pl-6">

                {/* 1 */}
                <li>
                  Course Overview
                  <ul className="list-disc text-base font-normal mt-2 space-y-2 pl-6">
                    <li>
                      A practical leadership program helping managers lead themselves and others with clarity, communication, and influence.
                    </li>
                  </ul>
                </li>

                {/* 2 */}
                <li>
                  Learning Objectives
                  <ul className="list-disc text-base font-normal mt-2 space-y-2 pl-6">
                    <li>Develop personal leadership vision.</li>
                    <li>Apply self-leadership routines.</li>
                    <li>Communicate with influence.</li>
                    <li>Empower teams for performance.</li>
                  </ul>
                </li>

                {/* 3 */}
                <li>
                  Course Content (Modules)
                  <ul className="text-secondary text-base font-normal mt-2 space-y-4 pl-6">

                    <li>
                      <span className="font-semibold">Intro</span>
                      <ul className="list-disc pl-6 mt-2 space-y-1 text-primary">
                        <li>Leadership fundamentals.</li>
                      </ul>
                    </li>

                    <li>
                      <span className="font-semibold">1-Day Format</span>
                      <ul className="pl-6 mt-2 space-y-1 list-disc text-primary">
                        <li>Self-leadership practices.</li>
                        <li>Motivation and influence.</li>
                        <li>Effective communication for leaders.</li>
                      </ul>
                    </li>

                    <li>
                      <span className="font-semibold">2-Day Format</span>
                      <ul className="pl-6 mt-2 space-y-1 list-disc text-primary">
                        <li>Negotiation and conflict management.</li>
                        <li>Coaching conversations.</li>
                        <li>Performance management.</li>
                      </ul>
                    </li>

                    <li>
                      <span className="font-semibold">3-Day Format</span>
                      <ul className="pl-6 mt-2 space-y-1 list-disc text-primary">
                        <li>Leadership simulations.</li>
                        <li>Behavior change labs.</li>
                        <li>90-day leadership growth plan.</li>
                      </ul>
                    </li>

                  </ul>
                </li>

                {/* 4 */}
                <li>
                  Audience & Methods
                  <ul className="list-disc text-base font-normal mt-2 space-y-2 pl-6">
                    <li>Audience: Supervisors, managers, emerging leaders.</li>
                    <li>Methods: Leadership labs, coaching, scenario work.</li>
                    <li>Measurement: Leadership competency assessment.</li>
                  </ul>
                </li>

              </ol>
            </div>
          </div>

          {/* RIGHT SIDE - IMAGE */}
          <div className="lg:sticky lg:top-24">
            <img
              src={LeadershipImage}
              alt="Leadership Skills"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}