import React, { useState, useEffect, useRef } from 'react'

const testimonials = [
  {
    name: "- Dr. Mike O'Connor",
    position: "Professor Emeritus, Seattle University, USA",
    text: " Vanni is a leader, and have been for as long as I have known him. Vanni has a very engaging manner. When he puts his manner together with his knowledge and his communication skills, the result is a wonderful combination! All the persons he has already trained and will train benefit from not only what he knows, but how he is as a person. They remember his qualities as well as his knowledge.",
  },
  {
    name: "- Dr. Mike O'Connor",
    position: "Professor Emeritus, Seattle University, USA",
    text: " You are making huge  contributions to the lives of these kids, their parents, and the community! Your contributions to this generation will have ripple effects for future generations. Your early learners will have earned a vast array of possibilities and opportunities from the foundations you are helping them build. Their kids and grandkids in turn will build upon these ever expanding opportunities. What a difference you are making! You are a very impressive contributing couple, both personally and professionally.",
  },
  {
    name: "- Dr. Jeanette Coufal",
    position: "Coach",
    text: "You have achieved a lot professionally and I know you to be a person of compassion and integrity. I think you are right that fostering the positive development of people is “where it’s at.",
  },
  {
    name: "- Alice Triyoes",
    position: "MSN, APN, A-GNP-C, USA",
    text: "I highly recommend Mr. Vanni for any leadership or consultation position. He is a motivating and empathic leader who can assist you with creating and sparking solutions. He has consistently evolved personally and professionally which has been motivating to be around.",
  },
  {
    name: "- Chandeth TIV",
    position: "Co-Founder, IMPL Co., Ltd",
    text: "It was a privilege to study with Mr. Vanni. He conducted a great mentoring and coaching service with life changing experience and great results. I believe in Mr. Vanni to build better leaders of Cambodia.",
  },
  {
    name: "- Chantha MAO",
    position: "Senior Officer",
    text: "My profound appreciation to coach for his expertise and passion during the session. Participating in the Coaching Workshop was a truly transformative. The insights and techniques shared have significantly making a positive impact on our daily operation. I left the session feeling motivated and equipped with practical skills that I can immediately implement in my work.",
  },
  {
    name: "- Chanvisal Sok",
    position: "L&D Manager Sokimex Investment Group",
    text: "The coaching skills training has been an eye-opening and truly rewarding experience for me. Having taken several courses in the past, I can confidently say this one stands out. The trainer’s deep expertise and genuine passion for our growth created an environment where I felt both supported and challenged. With practical tools and insightful guidance, I now feel better equipped to inspire and guide others. This course has empowered me to step into a coaching role with confidence and clarity, and I’m excited to share what I’ve learned with my team. Thank you for such a transformative experience!",
  },
  {
    name: "- Sypha Sreng",
    position: "Learning and Development Manager, Starbucks (Cambodia and Laos PDR)",
    text: "I am so delighted and lucky to know Mr. Vanni. He has enormous influences on me both personal and professional life throughout his training and his personality. After attending his Self-Development training course, it helped me changed lots. I spend more time on reading! I think, speak, and act positively. I believe that his training plays an important role for my career growth, moving from executive to supervisor level. More than that, I learn lots from his personality. He is humble, motivated and positive. He is an understanding person who I can share and consult with. I always come back from meeting him with full of energy and creative solutions. All in all, I’m blessed to know Mr. Vanni in my life.",
  },
  {
    name: "- Chea Sopanha",
    position: "Sales Manager, One Fraternity Co., Ltd.",
    text: "Mr. Vanni Ing has influenced my life on so many levels. He has a special way of jumping into a smooth and relaxed conversation with just anyone. His friendliness and kindness along with deep soft-skill expertise allow him to passionately share and teach a variety of essential life lessons through both casual talks and formal training courses ranging from Self-Development, Communication, to Parenting. His training courses have transformed my life to be a much brighter one. My personal growth wouldn’t have manifested itself the same way was it not for the powerful inspiration and lessons injected unconsciously to me and a lot other around him for almost two years I worked quite closely with Mr. Vanni. Knowing him is one of my life-changing experiences.",
  },
  {
    name: "- Thida Sin",
    position: "Human Resource Manager, Hanuman Beverage Co., Ltd.",
    text: "I grateful and admire Mr. Vanni who has brought in of positives mindset, self-development, learning culture, improve the effectiveness communication skills for Vital’s members of all levels. He has never tired to share and advise in order for me to see my true potential and talents. I am proud and feel blessed to have the true friendship with him.",
  },
  {
    name: "- Sovathara Som",
    position: "Brand and Corporate Affairs, Chevron",
    text: "“Vanni has been developing himself very well and have become a very good role model to many people. His positive personality has impacted positively to people around him, and he always see the best in people. Vanni is a good listener, a good trainer, a good coach, and good counselor. Whatever project under Vanni’s responsibility, he always ensure the best results. Vanni always pay attention to detail. I highly recommend Vanni to whoever or any organization that require his services.” ",
  },
  {
    name: "- Sou PRUM",
    position: "Talent Acquisition and Career Management Manager",
    text: "I was impressed with Mr. Vanni exceptional skills of making my mental change to be positive, team’s transformation, and mindset. Through his special skill making the whole team got big impact by his courses such as Team Motivating session, 21 Days Transformation, 21 Day Plus and so on. In short, I could say he’s high expertise of human development both personal & professional.",
  },
  {
    name: "- Solinna CHEK",
    position: "HRBP Manufacturing & Employee Services Manager, CMIC",
    text: "Mr. Vanni is a great teammate, coach, advisor. His contribution brought a big impact on team spirit, development and growth mindset.",
  },
  {
    name: "- Samang Uy",
    position: "Senior Water Supply Engineer",
    text: "Mr. Vanni is a great leader who I have known and I can say that he is best of the best leader. Judging people is not in his option. After I have known and engaged with him, I had built my personality strongly. I have thousands of words to describe his great personality and professionalism that crucially impact positively people around him.",
  },
  {
    name: "- THLEN Sokunnara",
    position: "",
    text: "I am very much delighted that I am offered an Australia Awards Scholarship. Without the coaching sessions with Mr. Vanni Ing, I may not be able to receive this wonderful opportunity. Mr. Vanni helped me to 'go the extra mile'. His statement has inspired me and changed my points of view in reaching this scholarship opportunity. Every time I saw him, I always had something new for the preparation of being a potential candidate. With his support, I am very confident for the interview and I finally received the award!",
  },
  {
    name: "- Bopha Neak",
    position: "",
    text: "Mr. Vanni exudes positivity and serves as a great source of motivation. His leadership has proven to be invaluable to me, providing me with valuable insights. I have gained a wealth of knowledge under his guidance and am thankful for the opportunities he has provided for my growth and skill development. I deeply appreciate the trust he has placed in me.",
  },
  {
    name: "- John Morefield",
    position: "",
    text: "Vanni is hard working, very smart, responsible and has very good human relations skills.Vanni, just looked at the website of Kinder Early Learning. Congratulations! Very, very impressive. Looks like a wonderful place for children. All the best to you. John",
  },
  {
    name: "- Chantha Prak",
    position: "",
    text: "Mr. Vanni has conducted lots of soft-skills training for the many people. Every time I joined his training sessions, I felt motivated, empowered and I have earned lots of benefits from those sessions. He is a great soft-skills trainer, a good active listener, and has a high work ethic.",
  },
  {
    name: "- Leakhena Prum",
    position: "",
    text: "Completing my studies in Professional Life and Humanity in Leadership has been a transformative experience. I am deeply grateful to my lecturer, Mr. Ing Vanni, for his inspiring guidance and thoughtful teaching. This course has not only changed my mindset, helping me approach challenges with resilience and positivity, but also improved my emotional intelligence, both personally and as a leader. I have developed stronger communication skills and a deeper ability to connect with others empathetically. These lessons have left me motivated to lead with purpose, create positive change, and make a meaningful impact.",
  },
  {
    name: "- Choeurn Kosin",
    position: "Junior social media specialist tux global institute",
    text: "What do I learn from Mr. ING Vanni's course? In Mr. ING Vanni's course on Soft Skills and Leadership Skills, I have gained invaluable insights into the development of critical thinking, emotional intelligence, and leadership skills. The course has helped me to refine my ability to analyze complex situations, navigate interpersonal dynamics with greater empathy, and strengthen my leadership capabilities. Moreover, it has provided me with a clearer vision of my personal and professional aspirations, allowing me to better visualize and align my goals with my values and ambitions.",
  },
  {
    name: "- MON Ina",
    position: "",
    text: "There are no words to express how grateful I am to Mr. Ing Vanni. Mr. Vanni is truly an angel! He always motivates us, treats us with kindness, and teaches us valuable lessons. I am so thankful to him for sharing his experiences. I truly enjoyed listening to him and learning from his advice. It’s the best guidance I’ve ever received Mr. Ing Vanni made complex ideas simple and connected them to real-life leadership. His passion and dedication to teaching have inspired me, and I’m incredibly grateful for everything I’ve learned from him. These lessons will undoubtedly help me in the future.",
  },
  {
    name: "- NHEOUM VEASNA",
    position: "",
    text: "        Mr. Vanni Ing has influenced my life so many times. He has a special way of jumping into a smooth and relaxed conversation with just anyone. He is the best lecturer and friend for me. I can talk with him about anything and he always supports me. I love the personality, leading, and sharing. He has brought in positive mindset, self-development, learning culture, improve the effective  communication skills for TGI's students.",
  },
  {
    name: "- Chhin Somalin",
    position: "Assistant Manager Sdach Prey",
    text: "My heartfelt gratitude to Mr. Vanni for his time and invaluable wisdom. His advice— 'Know Yourself, Be Happy, Be Open-minded, Be Possible, and enjoy the process' will serve as a guiding map as I strive to inspire others on my Adventurous journey. This session has been pivotal for my growth; it’s like a one light switch on button that lights up my path and I look forward to implementing what I’ve learned from this moment onward.",
  },
  {
    name: "- SAM Keopechsangvarath",
    position: "Lawyer",
    text: "    I would like to thank Mr. Ing Vanni for sharing his knowledge and experience about raising children. I was really happy and felt very lucky to attend the parenting training course on September 23, 2023. After learning, I realized that this knowledge is invaluable, which I never knew before, that there are good methods in parenting to achieve long-term goals in the future.",
  },
  {
    name: "- Sam Keo Pich Sangvaroth",
    position: "",
    text: "I would like to thank Mr. Ing Vanny for sharing his knowledge and experience about raising children. I really enjoyed and felt very lucky to have attended the Parenting Workshop on September 23, 2023. After learning Haiti, I realized that this knowledge was invaluable, that I had never known before that there are good ways to raise children to achieve long-term goals in the future.",
  },
  {
    name: "- Mrs. Tiv Chandet",
    position: "Managing Director",
    text: "Getting started with parenting is a big reward and there are many challenges. By attending a one-day short course on effective child rearing by Mr. Ing Vanny, I have received many positive changes. I have gained an in-depth understanding of effective parenting techniques, including working with my husband to develop and implement family rules that help build strong relationships with our children. Recently, I have been practicing positive and open parenting, which has greatly reduced my stress and anger. With better communication skills, more patience, and an understanding of the long-term goals of educating my children, I have become a better listener and mentor for my children. In addition, my husband and I have very little disagreement when it comes to parenting because we both take this short course together. Investing in this course is priceless. It helps us to be full-fledged, less stressful, but productive parents.",
  },
  {
    name: "- Sorn Sok Kheang",
    position: "MC, Writer, Producer",
    text: "When you try to earn money to get your child to school, to get a good education, to have the right attitude, to have a dignified attitude, you forget that as a parent you need to learn more to be a pioneer in becoming a good child in society.",
  },
  {
    name: "- Teok Chan Monea ",
    position: "Project Officer, Cambodia Women's Crisis Center (CWCC)",
    text: "Thank you Vanny and all of you for sharing your good experiences in educating your children. In this course, I received many good lessons and new experiences to practice in the family.",
  },
  {
    name: "- Sovithiya Bonna",
    position: "Accountant",
    text: "I want to say that I have learned a lot about this workshop and what I have learned, I will do my best to know that parenting is great for modern parents.",
  },
  {
    name: "- Khem Soklida ",
    position: "Sihanouk Hospital Center of Hope",
    text: "I am very excited to be involved and gain a lot of technical skills from parenting training. Without attention and love, there is no such good training! As a mother, I am very interested in inspiration and encouragement, it is really the best new technique among the lessons and the style that we want to raise our children.",
  },
  {
    name: "- Chheng Savet",
    position: "Online bookseller & a mother of 2 children",
    text: "This class gives me many benefits. I have no words to describe it, but I have applied some important points that I have learned. The techniques in the lesson are very effective! So I will practice more to clarify what I have learned and show the benefits I get from the course.",
  },
  {
    name: "- Mann SOBON",
    position: "Sales Manager SINET",
    text: "The Foundations of Leadership training course was a great opportunity to refresh my leadership mindset and learn practical ways to lead my team more effectively. The trainer’s experience and clear explanations made the session engaging and very useful for my daily work. After the training, I will apply and share this knowledge to help my team grow stronger together. I appreciate this training and look forward to putting these lessons into practice.",
  },
  {
    name: "- Tat Mony",
    position: "Regainal Supervisor SINET",
    text: "I am very grateful for the opportunity to take the Foundations of Leadership, Speak to Connect, Listen to Lead, and Master Yourself to Lead Others courses. They have significantly improved my current work, family life, and communication skills. I want to thank the coach. I hope to be selected for more soft skills training in the future.",
  },
  {
    name: "– Pich Vabilget",
    position: "",
    text: "I would like to express my sincere gratitude to Mr. Vanni for delivering such an insightful EQ training. The program has significantly enhanced my understanding of emotional regulation, brain function, and how to apply this knowledge effectively in both personal and professional contexts. I also deeply appreciate the contributions and valuable insights shared by fellow participants. Indeed, learning from the best is the first step to becoming the best.",
  },
  {
    name: "- Eng Bunleng",
    position: "",
    text: "Truly grateful for the opportunity to learn about Emotional Intelligence today. A big thank you to Mr. Ing Vanni for the insightful session.",
  },
]

export const Fbb = () => {
  const [current, setCurrent] = useState(0)
  const intervalRef = useRef(null)

  const startSlider = () => {
    intervalRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length)
    }, 5000)
  }

  const stopSlider = () => {
    clearInterval(intervalRef.current)
  }

  useEffect(() => {
    startSlider()
    return () => stopSlider()
  }, [])

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-primary text-center mb-12">What People Say</h2>

        <div
          className="relative overflow-hidden"
          onMouseEnter={stopSlider}
          onMouseLeave={startSlider}
        >
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`transition-transform duration-700 ease-in-out ${
                idx === current ? "translate-x-0" : "translate-x-full absolute top-0 left-0 w-full"
              }`}
            >
              <div className="bg-white p-8 rounded-2xl  text-center">
                <p className="text-gray-700 mb-4 italic">"{t.text}"</p>
                <h3 className="text-xl font-semibold">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}