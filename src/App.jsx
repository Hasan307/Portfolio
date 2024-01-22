import Hero from './components/Hero';
import NavBar from './components/NavBar';
import {BrowserRouter as Router} from 'react-router-dom';
import Services from './components/Services';
import LeaveReview from './components/LeaveReview';
import Footer from './components/Footer';
import About from './components/About';
import './assets/css/style.css';
import {useEffect, useState} from 'react';
import PuffLoader from "react-spinners/PuffLoader";
import Skills from './components/Skills';


export default function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    },1000);
  }
  , []);

  


  return (
   <div >
    {
      loading ? <PuffLoader className='m-auto my-[300px] ' color="#ff8a00" />
    : 
    <div>
    <div className='bg-image'></div>
   <Router>
   <NavBar/>
   </Router>
   <Hero/>
   <Services/>
   <About/>
   <Skills/>
   <LeaveReview/>
   
   <Footer/>
    </div>
    }

    
    
   </div>
  )
}