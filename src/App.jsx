import Hero from './components/Hero';
import NavBar from './components/NavBar';
import {BrowserRouter as Router} from 'react-router-dom';
import Services from './components/Services';
import LeaveReview from './components/LeaveReview';

export default function App() {

  return (
   <div>
    <Router>
      <NavBar/>
    </Router>
    <Hero/>
    <Services/>
    <LeaveReview/>
    
   </div>
  )
}