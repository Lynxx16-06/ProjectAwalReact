import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./HomePage";
import ModulPage from '../components/Module.jsx';
import ModulDetail from '../components/ModuleDetail.jsx';
import Quiz from '../components/Quiz.jsx';
import ScoreChart from '../components/Chart.jsx';

function Home() {
  return (
    <HomePage/>
  )
}
function About() {
  return (
  <h1>hallo about</h1>
  // <HomePage/>
)
}
function Contact() {
  return (
  <h1>hallo contact</h1>
    // <HomePage/>
  )
}


export default function App() {

  const [isOpen, setIsOpen] = useState();
  return (
    <div>
      <Router>
        <nav className=" flex md:justify-around justify-between items-center z-100 px-5 py-4 shadow bg-gray-200 fixed w-full"> 
          <h1 className="font-bold text-4xl">Lynxx</h1>
        <div className="lg:hidden md:hidden">
        <svg onClick={() => setIsOpen(!isOpen)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        </div>
        {isOpen && (
          <>
          <div className="flex gap-5 text-lg font-mediumlight md:hidden">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="flex gap-5 text-xl bg-blue-300 px-5 py-3 rounded-md md:hidden">
            <Link>Setting</Link>
          </div>
          </>
        )}
          <div className="md:flex gap-5 text-lg font-mediumlight hidden">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="md:flex gap-5 text-xl bg-blue-300 px-5 py-3 rounded-md hidden">
            <Link to="/grafik-skor" className="text-white rounded-lg">Lihat Skor 📊</Link>
            {/* <Link>Setting</Link> */}
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/modul" element={<ModulPage />} />
          <Route path="/modul/:id" element={<ModulDetail />}/>
          <Route path="/quiz/:modulId" element={<Quiz />} />
          <Route path="/grafik-skor" element={<ScoreChart />} />
        </Routes>
      </Router>
    </div>
  )
}