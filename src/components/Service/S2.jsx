import React from 'react'
import { NavBar } from '../NavBar'
import { Footer } from '../Footer'
import EQImage from "../../assets/eq.jpg"   // 👈 import your image

export const S2 = () => {
  return (
    <div>
      <NavBar />

      <div className="max-w-7xl mx-auto px-6 py-10 text-primary">

        {/* 2 Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE - TEXT */}
          <div>
            <div>
              <h1 className="underline text-3xl font-semibold mt-4">
                Emotional Intelligence
              </h1>
              <p className="py-3">
                Tagline: Maximize Potential & Increase Happiness
              </p>
              <p>Course Code: KIA-EQC-0100</p>
            </div>

            <div className="mt-10">
              <ol className="list-decimal text-2xl font-semibold space-y-6 pl-6">

                <li>
                  Course Overview
                  <ul className="list-disc text-base font-normal mt-2 space-y-2 pl-6">
                    <li>
                      Learners master emotional awareness, regulation,
                      empathy, and conflict resolution under pressure.
                    </li>
                  </ul>
                </li>

                <li>
                  Learning Objectives
                  <ul className="list-disc text-base font-normal mt-2 space-y-2 pl-6">
                    <li>Name emotions accurately.</li>
                    <li>Use 4-step emotional regulation routines.</li>
                    <li>Resolve conflict constructively.</li>
                    <li>Strengthen resilience.</li>
                    <li>Coach others using EQ tools.</li>
                  </ul>
                </li>

                <li>
                  Course Content (Modules)
                  <ul className="text-base font-normal mt-2 space-y-4 pl-6">

                    <li>
                      <span className="font-semibold">Intro</span>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>EQ vs IQ; amygdala triggers.</li>
                        <li>Identify–Use–Understand–Adjust routine.</li>
                        <li>Empathy micro-skills.</li>
                      </ul>
                    </li>

                    <li>
                      <span className="font-semibold">1-Day Format</span>
                      <ul className="pl-6 mt-2 space-y-1 list-disc">
                        <li>Emotion labeling.</li>
                        <li>Respond vs react.</li>
                        <li>Assertive scripts.</li>
                        <li>EQ in customer/team interactions.</li>
                      </ul>
                    </li>

                    <li>
                      <span className="font-semibold">2-Day Format</span>
                      <ul className="pl-6 mt-2 space-y-1 list-disc">
                        <li>Stress-management toolkit.</li>
                        <li>EQ coaching with GROW.</li>
                        <li>Relationship repair frameworks.</li>
                        <li>Peer feedback.</li>
                      </ul>
                    </li>

                    <li>
                      <span className="font-semibold">3-Day Format</span>
                      <ul className="pl-6 mt-2 space-y-1 list-disc">
                        <li>High-stakes role-play.</li>
                        <li>360° peer coaching.</li>
                        <li>EQ 90-day action plan.</li>
                      </ul>
                    </li>

                  </ul>
                </li>

                <li>
                  Audience & Methods
                  <ul className="list-disc text-base font-normal mt-2 space-y-2 pl-6">
                    <li>Target Audience: All roles, leaders.</li>
                    <li>Methods: Scenarios, drills, role-plays.</li>
                    <li>Measurement: Kirkpatrick 1–3.</li>
                  </ul>
                </li>

              </ol>
            </div>
          </div>

          {/* RIGHT SIDE - IMAGE */}
          <div className="lg:sticky lg:top-24">
            <img
              src={EQImage}
              alt="Emotional Intelligence"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}