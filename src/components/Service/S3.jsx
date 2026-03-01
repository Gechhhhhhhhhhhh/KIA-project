import React from 'react'
import { NavBar } from '../NavBar'
import { Footer } from '../Footer'
import pd from "../../assets/ec.png"  // You can replace with a COM image if needed

export const S3= () => {
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
                Effective Communication
              </h1>
              <p className='py-3'>
                Tagline: Bridging Gaps, Building Bridges
              </p>
              <p>Course Code: KIA-COM-0200</p>
            </div>

            {/* Course Details */}
            <div className="text-primary mt-10">
              <ol className="list-decimal text-2xl font-semibold space-y-6 pl-6">

                {/* 1 */}
                <li>
                  Course Overview
                  <ul className="list-disc text-base font-normal mt-2 space-y-2 pl-6">
                    <li>
                      A comprehensive program to improve clarity, confidence, empathy, and interpersonal understanding.
                    </li>
                  </ul>
                </li>

                {/* 2 */}
                <li>
                  Learning Objectives
                  <ul className="list-disc text-base font-normal mt-2 space-y-2 pl-6">
                    <li>Identify communication barriers.</li>
                    <li>Adapt styles to audiences.</li>
                    <li>Strengthen assertiveness.</li>
                    <li>Build trust using empathy.</li>
                  </ul>
                </li>

                {/* 3 */}
                <li>
                  Course Content (Modules)
                  <ul className="text-secondary text-base font-normal mt-2 space-y-4 pl-6">

                    <li>
                      <span className="font-semibold">Intro</span>
                      <ul className="list-disc pl-6 mt-2 space-y-1 text-primary">
                        <li>Understanding communication fundamentals.</li>
                        <li>Barriers and message clarity.</li>
                        <li>Empathy drills.</li>
                      </ul>
                    </li>

                    <li>
                      <span className="font-semibold">1-Day Format</span>
                      <ul className="pl-6 mt-2 space-y-1 list-disc text-primary">
                        <li>Communication styles.</li>
                        <li>Assertiveness skill-building.</li>
                        <li>Active listening.</li>
                        <li>Managing misunderstandings.</li>
                      </ul>
                    </li>

                    <li>
                      <span className="font-semibold">2-Day Format</span>
                      <ul className="pl-6 mt-2 space-y-1 list-disc text-primary">
                        <li>Difficult conversations practice.</li>
                        <li>Non-verbal communication.</li>
                        <li>Influence and persuasion.</li>
                        <li>Scenario workshops.</li>
                      </ul>
                    </li>

                    <li>
                      <span className="font-semibold">3-Day Format</span>
                      <ul className="pl-6 mt-2 space-y-1 list-disc text-primary">
                        <li>Real-case simulations.</li>
                        <li>Feedback rounds.</li>
                        <li>Communication mastery blueprint.</li>
                      </ul>
                    </li>

                  </ul>
                </li>

                {/* 4 */}
                <li>
                  Audience & Methods
                  <ul className="list-disc text-base font-normal mt-2 space-y-2 pl-6">
                    <li>Target Audience: All departments.</li>
                    <li>Methods: Role-play, case studies, coaching circles.</li>
                    <li>Measurement: Kirkpatrick 1–3.</li>
                  </ul>
                </li>

              </ol>
            </div>
          </div>

          {/* RIGHT SIDE - IMAGE */}
          <div className="lg:sticky lg:top-24">
            <img
              src={pd}
              alt="Effective Communication"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}