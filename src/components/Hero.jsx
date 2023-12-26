import { Cursor, useTypewriter } from "react-simple-typewriter";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Web Designer", "Graphics Designer"],
    loop: Infinity,
  });
  return (
    <div>
      <section className="py-10">
        <div className="container1 px-9">
          <div className="text-white items-center self-end hero-text">
            <div className="p-4">
              <h1 className="text-2xl py-7  font-bold">Hi there!</h1>
              <h1 className="text-3xl font-bold hero-texts">
                Are You looking For a    
                <span className="text-[#ffe600] designations"> {text}?</span>
                <span style={{ color: "red" }}>
                  <Cursor cursorStyle="!" />
                </span>
              </h1>
              <h2 className="py-8">What are you waiting for?</h2>
              <Router>
              <NavLink to='https://www.fiverr.com/hasan307raj' className="hire-now-button">Hire now</NavLink>
              </Router>
              
            </div>
            <div className="p-4">
                <p>
                I am a Web Developer and Graphics designer. I'm a best Combo Packege For you. I have vast knowledge about graphics design so I can Use it On your Websites. Feel free to browse my gigs and message me for your ideas and projects in mind. Let's work together!
                </p>
            </div>
          </div>
          <div >
            <div className="hero-img">
            <img src="./src/assets/images/hero.PNG" alt="notfound" />
            </div>
            <div className="w-100% px-2 hero-info">
               <h1 className="abu-hasan">Abu Hasan</h1>
                <div className="flex p-2 justify-center">
                <Router>
                    <NavLink to='https://www.facebook.com/A.Hasan307/'> <FaFacebook className="text-[#ffe600] hover:text-[white] px-2 " size={50}  />
                </NavLink>
                <NavLink to='https://github.com/Hasan307' > <FaGithub className="text-[#ffe600] px-2" size={50} />
                </NavLink>
                <NavLink to='https://www.linkedin.com/in/abu-hasan-3b0b3a1b3/'> <CiLinkedin className="text-[#ffe600] px-2" size={50} />
                </NavLink>
                </Router>
                

                </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
