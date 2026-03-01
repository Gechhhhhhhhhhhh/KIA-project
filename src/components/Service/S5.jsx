import React from 'react'
import { NavBar } from '../NavBar'
import { Footer } from '../Footer'
import ParentingImage from "../../assets/ps.png" // Replace with your actual image

export const S5 = () => {
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
                Parenting Skills
              </h1>
              <p className='py-3'>
                Tagline: Nurturing the Future, One Child at a Time
              </p>
              <p>Course Code: KIA-PAR-0400</p>
            </div>

            {/* Course Details */}
            <div className="text-primary mt-10">
              <ol className="list-decimal text-2xl font-semibold space-y-6 pl-6">

                {/* 1 */}
                <li>
                  Course Overview
                  <ul className="list-disc text-base font-normal mt-2 space-y-2 pl-6">
                    <li>
                      A modern evidence-based program helping parents build confidence, emotional bonding, and long-term child development.
                    </li>
                  </ul>
                </li>

                {/* 2 */}
                <li>
                  Learning Objectives
                  <ul className="list-disc text-base font-normal mt-2 space-y-2 pl-6">
                    <li>Understand parenting styles.</li>
                    <li>Use positive reinforcement.</li>
                    <li>Apply effective discipline with warmth.</li>
                    <li>Manage stress and model emotional control.</li>
                  </ul>
                </li>

                {/* 3 */}
                <li>
                  Course Content (Modules)
                  <ul className="text-secondary text-base font-normal mt-2 space-y-4 pl-6">

                    <li>
                      <span className="font-semibold">Intro</span>
                      <ul className="list-disc pl-6 mt-2 space-y-1 text-primary">
                        <li>Understanding child physical/emotional needs.</li>
                        <li>Modern parenting styles.</li>
                      </ul>
                    </li>

                    <li>
                      <span className="font-semibold">1-Day Format</span>
                      <ul className="pl-6 mt-2 space-y-1 list-disc text-primary">
                        <li>Positive reinforcement.</li>
                        <li>Confidence-building strategies.</li>
                        <li>Growth mindset for children.</li>
                      </ul>
                    </li>

                    <li>
                      <span className="font-semibold">2-Day Format</span>
                      <ul className="pl-6 mt-2 space-y-1 list-disc text-primary">
                        <li>Structure vs flexibility.</li>
                        <li>Behavior guidance.</li>
                        <li>Digital-age parenting.</li>
                      </ul>
                    </li>

                    <li>
                      <span className="font-semibold">3-Day Format</span>
                      <ul className="pl-6 mt-2 space-y-1 list-disc text-primary">
                        <li>Parent-child communication.</li>
                        <li>Conflict management at home.</li>
                        <li>Home environment transformation.</li>
                      </ul>
                    </li>

                  </ul>
                </li>

                {/* 4 */}
                <li>
                  Audience & Methods
                  <ul className="list-disc text-base font-normal mt-2 space-y-2 pl-6">
                    <li>Audience: Parents, caregivers, educators.</li>
                    <li>Methods: Demonstrations, real-life cases, practice.</li>
                    <li>Measurement: Pre/post reflection + habits plan.</li>
                  </ul>
                </li>

              </ol>
            </div>
          </div>

          {/* RIGHT SIDE - IMAGE */}
          <div className="lg:sticky lg:top-24">
            <img
              src={ParentingImage}
              alt="Parenting Skills"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}