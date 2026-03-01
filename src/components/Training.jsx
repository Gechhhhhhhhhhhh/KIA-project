import React from 'react'
import { NavBar } from './NavBar'
import { Footer } from './Footer'
export const Training = () => {
  return (
    <div>
      <NavBar/>
      <div className="max-w-7xl mx-auto px-6 text-primary mt-3 ">
        <h1 className='font-bold text-4xl py-5' >HUMAN+</h1>
        <p >HUMAN+™ is a Human Capital Operating System that helps 
          individuals, families, and organizations grow through one 
          integrated framework — combining emotional intelligence, 
          leadership development, parenting psychology, and practical
          coaching methods.</p>
          <p className='py-5'>Instead of short-term motivation, HUMAN+™ focuses on
             lasting transformation. Using its signature Transform7™ methodology, participants move through a structured journey of awareness, reflection, practice, and integration — building real skills that translate 
            into daily behavior, stronger relationships, and sustainable performance.</p>
            <p>Whether you are a leader building high-performing teams, a parent shaping your child’s emotional future, or an organization investing in human
               potential, HUMAN+™ provides a clear path forward through 
               three core domains:</p>
               <p>
                <ul className='list-disc pl-10 py-3'>
                  <li>Leadership Architecture — Strengthen communication, influence, and emotional mastery.</li>
                  <li> Parenting Psychology — Raise confident, resilient, and emotionally intelligent children.</li>
                  <li> Human Capital Development — Build learning cultures that drive real organizational growth.</li>
                </ul>
               </p>
               <p className='text-secondary text-xl mt-8 italic w-7/9 mx-auto text-center'>" HUMAN+™ is more than a course or workshop.
It is a structured ecosystem designed to help people grow with clarity, purpose, and measurable impact. "</p>
      </div>
      <Footer/>
    </div>
  )
}
