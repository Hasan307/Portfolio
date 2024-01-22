import "../assets/css/skills.css";
import {useState, useEffect } from "react";

const Skills = () => {


  const [isSectionVisible, setIsSectionVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('#my-section2');
      const rect = section.getBoundingClientRect();
      setIsSectionVisible(rect.top >= 0 && rect.bottom <= window.innerHeight);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    const bars = document.querySelectorAll(".inner");
    const values = document.querySelectorAll(".num");
    const endValues = [80, 90, 90, 100]; // End values for each progress bar
    const speeds = [30, 25, 25, 20]; // Speeds for each progress bar
    let intervals = []; // Declare intervals array outside the useEffect
    
    if (isSectionVisible) {
      bars.forEach((bar, index) => {
        let startValue = 0;
        const progress = setInterval(() => {
          startValue++;
          values[index].innerText = `${startValue}%`;
          bar.style.background = `conic-gradient(#00d81d ${startValue * 3.6}deg, #2b2b2b 0deg)`;
          if (startValue === endValues[index]) {
            clearInterval(progress);
          }
        }, speeds[index]);
  
        intervals.push(progress);
      });
    } else {
      intervals.forEach(interval => clearInterval(interval)); // Clear intervals if section is not visible
      intervals = []; // Reset intervals array
      values.forEach(value => value.innerText = '0%'); // Reset values to 0%
      bars.forEach(bar => bar.style.background = 'conic-gradient(#2b2b2b 0deg, #2b2b2b 0deg)'); // Reset bar styles
    }
  
    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [isSectionVisible]);
  


  return (
    <div  className="flex flex-col lg:flex-row relative justify-evenly bg-[#06040f] py-10 w-[90%] m-auto rounded-[70px] "data-aos="fade-up" id="my-section2">
      <div className="outer" data-aos="fade-up" >
        <div className="inner">
          <div className="circle">
            <div className="num"></div>
           
          </div>
        </div>
      </div>
      <div className="outer"data-aos="fade-up">
        <div className="inner">
          <div className="circle">
            <div className="num"></div>
            
          </div>
        </div>
      </div>
      <div className="outer"data-aos="fade-up">
        <div className="inner">
          <div className="circle">
            <div className="num"></div>
          
          </div>
        </div>
      </div>
        <div className="outer"data-aos="fade-up">
            <div className="inner">
            <div className="circle">
                <div className="num"></div>
              
            </div>
            </div>
            </div>
            
    </div>
    
  );
  
};

export default Skills;
