import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import  {Home}  from "./components/Home";
import { Books } from "./components/Books";
import { Contact } from "./components/Contact";
import {Profile} from './components/Profile'
import {Training} from './components/Training'
import {Coaching} from './components/Coaching'
import {Consulting} from './components/Consulting'
// import {Feedback} from './components/Fbb'
import {S1} from "./components/Service/S1"
import {S2} from "./components/Service/S2"
import {S3} from "./components/Service/S3"
import {S4} from "./components/Service/S4"
import {S5} from "./components/Service/S5"
import {S6} from "./components/Service/S6"
import {S7} from "./components/Service/S7"
import {S8} from "./components/Service/S8"
import {S9} from "./components/Service/S9"
import {S10} from "./components/Service/S10"
import {S11} from "./components/Service/S11"
import {S12} from "./components/Service/S12"
import ScroolToTop from "./components/ScroolToTop";

export default function App() {
  return (
   <BrowserRouter>
    <ScroolToTop />   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/books" element={<Books />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
        {/* <Route path="/testimonial" element={<Feedback />} /> */}
        <Route path="/services/human" element={<Training />} />
        <Route path="/services/LearningPrograms" element={<Coaching />} />
        <Route path="/services/consulting" element={<Consulting />} />
        <Route path="/services/LearningPrograms/S1" element={<S1 />} />
        <Route path="/services/LearningPrograms/S2" element={<S2 />} />
        <Route path="/services/LearningPrograms/S3" element={<S3 />} />
        <Route path="/services/LearningPrograms/S4" element={<S4 />} />
        <Route path="/services/LearningPrograms/S5" element={<S5 />} />
        <Route path="/services/LearningPrograms/S6" element={<S6 />} />
        <Route path="/services/LearningPrograms/S7" element={<S7 />} />
        <Route path="/services/LearningPrograms/S8" element={<S8 />} />
        <Route path="/services/LearningPrograms/S9" element={<S9 />} />
        <Route path="/services/LearningPrograms/S10" element={<S10 />} />
        <Route path="/services/LearningPrograms/S11" element={<S11 />} />
        <Route path="/services/LearningPrograms/S12" element={<S12 />} />
        
      </Routes>
    </BrowserRouter>
  );
}
