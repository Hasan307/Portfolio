import Hero from './components/Hero';
import NavBar from './components/NavBar';
import {BrowserRouter as Router} from 'react-router-dom';
import Services from './components/Services';
import LeaveReview from './components/LeaveReview';
import './assets/css/style.css';


export default function App() {


  return (
   <div>
    <div className='bg-image'></div>
   
    <Router>
      <NavBar/>
    </Router>
    <Hero/>
    <Services/>
    <LeaveReview/>
    
   </div>
  )
}