import React from 'react'
import { NavBar } from './NavBar'
import { Footer } from './Footer'
import Book from '../assets/Book.png'
import IMG from '../assets/Gbook.png'
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "តើសៀវភៅនេះសម្រាប់នរណាខ្លះ?",
    answer:
      "សៀវភៅនេះសម្រាប់មាតាបិតា គ្រូបង្រៀន និងអ្នកដែលធ្វើការជាមួយកុមារ ដែលចង់យល់ពីកុមារ និងវិធីជួយឱ្យកុមារអភិវឌ្ឍពេញលេញ។",
  },
  {
    question: "តើខ្លឹមសារសៀវភៅមានអ្វីខ្លះ?",
    answer:
      "សៀវភៅនេះមាន ១០ជំពូក ៤៨មេរៀន គ្របដណ្តប់លើចិត្តសាស្ត្រកុមារ ការទំនាក់ទំនងគ្រួសារ ការគ្រប់គ្រងអារម្មណ៍ ការស្ដាប់សកម្ម និងការជួយបណ្តុះចិត្តគំនិតនិងជំនាញកុមារ។ សូមអានតារាងមាតិការខាងលើ។",
  },
  {
    question: "តើមានសៀវភៅបោះពុម្ពឬអេឡិចត្រូនិច (E-book)?",
    answer:
      "បច្ចុប្បន្នមានសៀវភៅបោះពុម្ព (Printed Book) ហើយមិនទាន់មានអេឡិចទេ។",
  },
  {
    question: "តើមានសៀវភៅសម្លេង (Audiobook) ឬទេ?",
    answer:
      "មាន! ដើម្បីមានភាពងាយស្រួល សៀវភៅជាសម្លេងនឹងត្រូវចេញផ្សាយនៅថ្ងៃទី១៥ ខែវិច្ឆិកា ឆ្នាំ២០២៥។ ",
  },
  {
    question: "តើអាចបង់ប្រាក់ដោយវិធីណាខ្លះ?",
    answer:
      "អាចបង់តាម ABA QR ឬបង់សាច់ប្រាក់តាមអ្នកដឹនៅពេលទទួលសៀវភៅសម្រាប់អ្នកនៅភ្នំពេញ។ សម្រាប់អ្នកនៅតាមខេត្ត ត្រូវបង់ប្រាក់មុន។",
  },
  {
    question: "តើអាចទិញសៀវភៅនៅទីណាបាន?",
   answer: (
    <div className="space-y-2">
      <p>បន្ទាប់ពីការចេញផ្សាយផ្លូវការ អ្នកអាចទិញសៀវភៅបាននៅ:</p>

      <ol className="list-decimal pl-6 space-y-1">
        <li>
          ទីតាំងរបស់ Kinder Early Learning 
          (#31i, St. 209B, Street 598, Chrang Chamres 1, 
          Russey Keo, Phnom Penh)
        </li>

        <li>
          គ្រប់សាខាបណ្ណាគារអន្តរជាតិ (IBC)
        </li>
      </ol>
    </div>
  ),
  },
  {
    question: "តើខ្ញុំអាចទាក់ទងបានដោយវិធីណា?",
  answer: (
    <ul className="space-y-3">
      <li>
        <strong>ទូរស័ព្ទ៖ </strong>
        093-500-901
      </li>

      <li className="">
        <strong>តេឡេក្រាម៖ </strong>
        <a
          href="https://t.me/KinderImpactAcademy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          https://t.me/KinderImpactAcademy
        </a>
      </li>

      <li className="">
        <strong>ទម្រង់៖ </strong>
        <a
          href="https://forms.gle/zemJ98eMzZRX3dsJ8"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          https://forms.gle/zemJ98eMzZRX3dsJ8
        </a>
      </li>

    </ul>
  ),
  },
];
export const Books = () => {
   const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className='bg-gray-100'><NavBar/>
    <div className="max-w-7xl mx-auto px-6 py-4 ">
      <h1 className='text-4xl font-bold text-primary mt-5'>Parenting Book </h1>
    </div>
  <div className="">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-15 items-center">

        {/* Left Side - Image */}
        <div className=''>
          <img
            src={Book}
            alt="Contact"
            className="w-full "
          />
        </div>

        {/* Right Side - Content */}
        <div>
         

          <p className="text-primary mb-6 leading-relaxed text-2xl font-semibold">
        តើអ្នកកំពុងតែស្វែងរកមធ្យោបាយក្នុងការចិញ្ចឹមអប់រំកូនឱ្យបានត្រឹមត្រូវមែនទេ?
          </p>
          <p className="text-primary mb-6 leading-relaxed">
        <ul className='list-decimal pl-10 space-y-2'>
          <li>សៀវភៅនេះបង្ហាញពីរបៀបចិញ្ចឹមអប់រំកូនដោយមានក្តីស្រឡាញ់ គោលបំណង និងចក្ខុវិស័យវែងឆ្ងាយ។</li>
          <li>យល់ស៊ីជម្រៅពីកុមារ—របៀបដែលខួរក្បាល ចិត្ត អារម្មណ៍ និងរបៀបដែលកុមារអភិវឌ្ឍសមត្ថភាពពេញលេញ។</li>
          <li>ឈប់ប្រើការដាក់ទណ្ឌកម្ម​ និងការគំរាមដោយចាប់ផ្តើមប្រើ ការចិញ្ចឹមអប់រំកូនតាមបែបវិជ្ជមាន ដើម្បីឱ្យកុមារមានភាពឆ្លាតវៃខាងអារម្មណ៍ មានទំនុកចិត្ត និងមានទំនួលខុសត្រូវ។</li>
          <li>ស្វែងយល់ពីរបៀបដែលការអភិវឌ្ឍខ្លួនឯងជាឪពុកម្តាយក្លាយជាអាថ៌កំបាំងក្នុងភាពជោគជ័យរបស់កូនអ្នក។</li>
          <li>បណ្តុះកូនឱ្យក្លាយជាបុគ្គលអស្ចារ្យ! ត្រៀមពួកគេទៅជា អ្នកគិតជាសកល អ្នកដឹកនាំ និងអ្នកផ្លាស់ប្ដូរពិភពលោក។</li>
        </ul>
          </p>

         
        </div>

      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 py-1 ">
      <h1 className='text-4xl font-bold text-primary mt-5'>Parenting Book </h1>
    </div>
     <div className="mt-5">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 md:gap-15  items-center">

        {/* Left Side - Image */}
        <div className='space-y-5 lg:-mt-30 md:mt-3'>
          <div>
         

          <p className="text-primary mb-2 leading-relaxed text-l font-semibold"><span className='text-orange'>ជំពូកទី១ </span>
        តើអ្នកកំពុងតែស្វែងរកមធ្យោបាយក្នុងការចិញ្ចឹមអប់រំកូនឱ្យបានត្រឹមត្រូវមែនទេ?
          </p>
          <p className="text-primary mb-3 leading-relaxed">
        <ul className='pl-13 space-y-2'>
          <li>មេរៀន១៖ អបអរសាទរ និងសូមស្វាគមន៍ដល់អ្នកអាន</li>
          <li>មេរៀន២៖ តើអ្វីជាការចិញ្ចឹមអប់រំកូន និងអ្វីជាជំនាញក្នុងការចិញ្ចឹមអប់រំកូន</li>
          <li>មេរៀន៣៖ តម្លៃនៃការចិញ្ចឹមអប់រំកូន</li>
          <li>មេរៀន៤៖ ផលតបស្នងនៃការចិញ្ចឹមអប់រំកូន</li>
          <li>មេរៀន៥៖ ការវិនិយោគពេញមួយជីវិត</li>
        </ul>
          </p>

         
        </div>
          <div>
         

          <p className="text-primary mb-2 leading-relaxed text-l font-semibold"><span className='text-orange'>ជំពូកទី២  </span>
        ចង់ចិញ្ចឹមអប់រំកូនបានល្អត្រូវចាប់ផ្តើមពីខ្លួនឯងសិន
          </p>
          <p className="text-primary mb-3 leading-relaxed">
        <ul className='pl-13 space-y-2'>
          <li>មេរៀន១៖ វិធីងាយៗដែលធ្វើឱ្យអ្នកសប្បាយចិត្ត</li>
          <li>មេរៀន២៖ ការគ្រប់គ្រងថាមពល</li>
          <li>មេរៀន៣៖ ការគ្រប់គ្រងភាពតានតឹងចិត្ត</li>
          <li>មេរៀន៤៖ ការស្គាល់ខ្លួនឯង</li>
          <li>មេរៀន៥៖ ការអភិវឌ្ឍផ្នត់គំនិតរីកចម្រើន</li>
        </ul>
          </p>

         
        </div>
          <div>
         

          <p className="text-primary mb-2 leading-relaxed text-l font-semibold"><span className='text-orange'>ជំពូកទី៣ </span>
        ការចិញ្ចឹមអប់រំកូនតាមបែបវិជ្ជមាន
          </p>
          <p className="text-primary mb-3 leading-relaxed">
        <ul className='pl-13 space-y-2'>
          <li>មេរៀន១៖ ធាតុផ្សំនៃការប្រៀនប្រដៅបែបវិជ្ជមាន</li>
          <li>មេរៀន២៖ ការកំណត់គោលដៅរយៈពេលវែង</li>
          <li>មេរៀន៣៖ ការផ្ដល់ភាពកក់ក្តៅ</li>
          <li>មេរៀន៤៖ ការផ្ដល់ដែនកំណត់ (វិន័យ ការណែនាំ និងច្បាប់ទម្លាប់)</li>
          <li>មេរៀន៥៖ ការយល់ដឹងពីការគិត និងអារម្មណ៍របស់កុមារ</li>
        </ul>
          </p>

         
        </div>
          <div>
         

          <p className="text-primary mb-2 leading-relaxed text-l font-semibold"><span className='text-orange'>ជំពូកទី៤ </span>
        យល់ពីកុមារថាពួកគេមិនមែនជាមនុស្សចាស់ដែលមានរាងកាយតូចទេ
          </p>
          <p className="text-primary mb-3 leading-relaxed">
        <ul className='pl-13 space-y-2'>
          <li>មេរៀន១៖ ដំណាក់កាលនៃការលូតលាស់ និងអភិវឌ្ឍកុមារ</li>
          <li>មេរៀន២៖ ការយល់ខុសពីកុមារដែលធ្វើឱ្យរាំងស្ទះដល់ការអភិវឌ្ឍរបស់ពួកគេ</li>
          <li>មេរៀន៣៖ តអាថ៌កំបាំងនៅពីក្រោយការអភិវឌ្ឍកុមារ</li>
        </ul>
          </p>

         
        </div>
          <div>
         

          <p className="text-primary mb-2 leading-relaxed text-l font-semibold"><span className='text-orange'>ជំពូកទី៥ </span>
        ជំនាញក្នុងការដោះស្រាយបញ្ហាជាមួយកុមារ
          </p>
          <p className="text-primary mb-3 leading-relaxed">
        <ul className='pl-13 space-y-2'>
          <li>មេរៀន១៖ ការស្តាប់ដោយយកចិត្តទុកដាក់</li>
          <li>មេរៀន២៖ ការយល់ចិត្តកុមារ</li>
          <li>មេរៀន៣៖ វិធីសាស្រ្តក្នុងការជួយព្យាបាលផ្លូវចិត្តកុមារ</li>
          <li>មេរៀន៤៖ ការដោះស្រាយទំនាស់ជាមួយកុមារ</li>
        </ul>
          </p>

         
        </div>
        </div>

        {/* Right Side - Content */}
        <div className="space-y-5">

         <div>
         

          <p className="text-primary mb-2 leading-relaxed text-l font-semibold"><span className='text-orange'>ជំពូកទី៦ </span>
       គន្លឹះផ្សេងៗទៀតដែលសំខាន់សម្រាប់ឪពុកម្ដាយ
          </p>
          <p className="text-primary mb-3 leading-relaxed">
        <ul className='pl-13 space-y-2'>
          <li>មេរៀន១៖ ការយល់ដឹងអំពីខួរក្បាលរបស់កូនអ្នក (ខួរក្បាលស្តាំខួរក្បាលឆ្វេង)</li>
          <li>មេរៀន២៖ របៀបបង្រៀនកូនឱ្យក្លាយជាអ្នកប្រាជ្ញ</li>
          <li>មេរៀន៣៖ សមត្ថភាពក្នុងការរៀននិងការរៀន</li>
        </ul>
          </p>

         
        </div>
         <div>
         

          <p className="text-primary mb-2 leading-relaxed text-l font-semibold"><span className='text-orange'>ជំពូកទី៧  </span>
       ជំនាញនិងគុណភាពសំខាន់ៗសម្រាប់ឪពុកម្ដាយ
          </p>
          <p className="text-primary mb-3 leading-relaxed">
        <ul className='pl-13 space-y-2'>
          <li>មេរៀន១៖ ការសរសើរឬលើកទឹកចិត្តកូន</li>
          <li>មេរៀន២៖ របៀបចិញ្ចឹមអប់រំកូន (Parenting Style)</li>
          <li>មេរៀន៣៖ សំឡេងរបស់ឪពុកម្តាយក្នុងចិត្តកូន</li>
          <li>មេរៀន៤៖ ការទទួលស្គាល់របស់ឪពុកម្តាយចំពោះកូន</li>
        </ul>
          </p>

         
        </div>
         <div>
         

          <p className="text-primary mb-2 leading-relaxed text-l font-semibold"><span className='text-orange'>ជំពូកទី៨ </span>
        ជំនាញនិងគុណភាពសំខាន់ៗសម្រាប់កុមារ
          </p>
          <p className="text-primary mb-3 leading-relaxed">
        <ul className='pl-13 space-y-2'>
          <li>មេរៀន១៖ ផ្នត់គំនិត</li>
          <li>មេរៀន២៖ ការគិតវែងឆ្ងាយ</li>
          <li>មេរៀន៣៖ ការគិតបែបស៊ីជម្រៅ</li>
          <li>មេរៀន៤៖ សេរីភាពហិរញ្ញវត្ថុ</li>
          <li>មេរៀន៥៖ ការកសាងចំណងទាក់ទងដ៏រឹងមាំ</li>
          <li>មេរៀន៦៖ របៀបសម្រេចចិត្ត</li>
          <li>មេរៀន៧៖ គំនិតច្នៃប្រឌិត</li>
          <li>មេរៀន៨៖ ការកសាងភាពស៊ាំ (Resilience)</li>
          <li>មេរៀន៩៖ អក្ខរកម្មឌីជីថល (Digital Literacy)</li>
          <li>មេរៀន១០៖ ភាពឆ្លាតវៃខាងអារម្មណ៍ (Emotional Intelligence)</li>
          <li>មេរៀន១១៖ ការអភិវឌ្ឍផ្នត់គំនិតបត់បែន (Agility Mindset)</li>
          <li>មេរៀន១២៖ ការមានវិន័យលើខ្លួនឯង</li>
        </ul>
          </p>

         
        </div>
         <div>
         

          <p className="text-primary mb-2 leading-relaxed text-l font-semibold"><span className='text-orange'>ជំពូកទី៩ </span>
        ចំណងអាពាហ៍ពិពាហ៍ដើម្បីកូន
          </p>
          <p className="text-primary mb-3 leading-relaxed">
        <ul className='pl-13 space-y-2'>
          <li>មេរៀន១៖ ការផ្ដាច់ចំណងអាពាហ៍ពិពាហ៍ (លែងលះ)</li>
          <li>មេរៀន២៖ ជម្រើសដែលល្អជាងការលែងលះ</li>
          <li>មេរៀន៣៖ ហេតុផលដែលមនុស្សនៅប្រទេសជឿនលឿនមិនចង់រៀបការបង្កើតគ្រួសារ</li>
        </ul>
          </p>

         
        </div>
         <div>
         

          <p className="text-primary mb-2 leading-relaxed text-l font-semibold"><span className='text-orange'>ជំពូកទី១០ </span>
        បើអាចធ្វើជាឪពុកម្ដាយម្តងទៀត
          </p>
          <p className="text-primary mb-3 leading-relaxed">
        <ul className='pl-13 space-y-2'>
          <li>មេរៀន១៖ មុនរៀបការ និងការត្រៀមខ្លួនដើម្បីបង្កើតគ្រួសារ</li>
          <li>មេរៀន២៖ ត្រៀមខ្លួនមុនពេលមានកូន</li>
          <li>មេរៀន៣៖ ពេលមានគភ៌</li>
          <li>មេរៀន៤៖ បន្ទាប់ពីកំណើតកូន</li>
        </ul>
          </p>

         
        </div>
        </div>

      </div>
    </div>
     <div className="mt-10">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-15 ">

        {/* Left Side - Image */}
          <div>
         

         
          <p className="text-primary mb-6 leading-relaxed">
        <h1 className='text-secondary text-4xl font-bold py-5'>អំពីអ្នកនិពន្ធ:<span className='text-primary text-2xl'>លោក អុីង វន្នី</span></h1>
        <p>លោក អុីង វន្នី មានជំនាញច្បាស់លាស់ពីការចិញ្ចឹមអប់រំកូនទាំងការអប់រំ ការងារវិជ្ជាជីវៈ និង ការអនុវត្តផ្ទាល់។ លោកបានចូលរួមការស្រាវជ្រាវ ការផលិតកម្មវិធីអប់រំ និងការបណ្តុះបណ្តាលពីការចិញ្ចឹមអប់រំកុមារ។ លោកបានផ្តល់ការបណ្តុះបណ្តាលការចិញ្ចឹមអប់រំកុមារដល់បុគ្គលិកអង្គ  ការជាតិ អន្តរជាតិ មន្ត្រីរដ្ឋាភិបាល និង សាធារណៈជនជាច្រើនពាន់នាក់ក្នុងរយៈពេលជាង២០ឆ្នាំកន្លងមក។ 
លោក អុីង វន្នី ជាអ្នកមានការជឿជាក់ខ្លាំងលើការអប់រំ បូកបញ្ចូលទាំងការអប់រំក្នុងសាលា និងការរៀនដោយខ្លួនឯង។ គាត់ជឿថាមនុស្សដែលមានកំណើតមក គឺមានលក្ខខណ្ឌគ្រប់គ្រាន់ដើម្បីជោគជ័យ និងសប្បាយចិត្ត។</p>
          </p>

         
        </div>
        {/* Right Side - Content */}
        
  <div className=''>
          <img
            src={IMG}
            alt="Contact"
            className="w-full "
          />
        </div>
      </div>
    </div>
    <div className="min-h-screen bg-gray-100 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Title */}
        <div className=" w-1/2 mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl  text-center font-semibold mb-4">
            Frequently <span className='text-primary'>Asked</span> Questions
          </h1>
          
        </div>

        {/* FAQ Boxes */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className=" text-lg">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`px-6 pb-6 text-gray-600 transition-all duration-300 ${
                  activeIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
    <Footer/>
    </div>
  )
}
