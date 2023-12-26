import Hero from './components/Hero';
import NavBar from './components/NavBar';
import {BrowserRouter as Router} from 'react-router-dom';

export default function App() {

  return (
   <div>
    <Router>
      <NavBar/>
    </Router>
    <Hero/>
    
   </div>
  )
}