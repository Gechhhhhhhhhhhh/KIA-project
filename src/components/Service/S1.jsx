import React from 'react'
import {NavBar} from '../NavBar'
import {Footer} from '../Footer'
import pd from "../../assets/pd.png"
export const S1 = () => {
  return (
    <div>
      <NavBar/>
      <div className="max-w-7xl mx-auto px-6  py-4 text-primary">

        <div  className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="">

        <div className="">
            <h1 className='underline text-3xl font-semibold mt-10'>Personal Development</h1>
            <p className='py-3'>Tagline: Grow From Within, Shine Beyond</p>
            <p>Course Code: KIA-PDC-0001</p>
        </div>
        <div className="text-primary mt-10">
  <ol className="list-decimal text-2xl font-semibold space-y-6 pl-6">

    {/* 1 */}
    <li>
      Course Overview
      <ul className="list-disc text-base font-normal mt-2 space-y-2 pl-6">
        <li>
          A transformative journey that strengthens self-awareness, core values,
          growth mindset, and personal operating systems.
        </li>
      </ul>
    </li>

    {/* 2 */}
    <li>
      Learning Objectives
      <ul className="list-disc text-base font-normal mt-2 space-y-2 pl-6">
        <li>Identify core values and intrinsic drivers.</li>
        <li>Apply growth routines to build consistency.</li>
        <li>Design energy and focus rituals.</li>
        <li>Translate goals into weekly behaviors.</li>
        <li>Build a personal learning system.</li>
      </ul>
    </li>

    {/* 3 */}
    <li>
      Course Content (Modules)
      <ul className="text-secondary text-base font-normal mt-2 space-y-4 pl-6">

        <li>
          <span className="font-semibold">Intro (2–3 hours)</span>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-primary">
            <li>Self-discovery snapshot.</li>
            <li>Growth mindset primer.</li>
            <li>Micro-habit design for 1% daily improvement.</li>
          </ul>
        </li>

        <li>
          <span className="font-semibold">1-Day Format</span>
          <ul className="pl-6 mt-2 space-y-1 list-disc text-primary">
            <li>Values → behaviors.</li>
            <li>Goal architecture: vision → quarter → week.</li>
            <li>Time-boxing and focus systems.</li>
            <li>Accountability partner setup.</li>
          </ul>
        </li>

        <li>
          <span className="font-semibold">2-Day Format</span>
          <ul className="pl-6 mt-2 space-y-1 list-disc text-primary">
            <li>Cognitive reframing.</li>
            <li>Boundary-setting.</li>
            <li>Learning system design.</li>
            <li>30/60/90 execution plan.</li>
          </ul>
        </li>

        <li>
          <span className="font-semibold">3-Day Format</span>
          <ul className="pl-6 mt-2 space-y-1 list-disc text-primary">
            <li>Implementation labs.</li>
            <li>Coaching triads.</li>
            <li>Relapse-prevention strategies.</li>
            <li>Personal playbook development.</li>
          </ul>
        </li>

      </ul>
    </li>

    {/* 4 */}
    <li>
      Audience & Methods
      <ul className="list-disc text-base font-normal mt-2 space-y-2 pl-6">
        <li>Target Audience: All staff, supervisors, managers.</li>
        <li>Methods: Workshops, coaching drills, guided reflections.</li>
        <li>Measurement: Kirkpatrick 1–3 + 90-day plan.</li>
      </ul>
    </li>

  </ol>
</div>
        </div>
         <div className="lg:sticky lg:top-24">
                    <img
                      src={pd}
                      alt="Emotional Intelligence"
                      className="rounded-2xl shadow-xl w-full object-cover"
                    />
                  </div>

        </div>
      </div>
      <Footer/>
    </div>
  )
}
