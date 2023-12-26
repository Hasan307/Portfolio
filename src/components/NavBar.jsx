import { NavLink } from "react-router-dom";
import "../assets/css/style.css";
import { NavItems } from "./NavItems";
import { useState } from "react";

const NavBar = () => {
   const [mobileMenu, setMobileMenu] = useState(false);
    
  return (
    <div>
        <div className="mobile-menu" onClick={()=>{setMobileMenu(!mobileMenu)}}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="text-white absolute my-[10px] mx-8">
        <img src="./src/assets/images/logo.PNG" alt="not found" className="w-[40px]"/>
      </div>
      
      <section className={mobileMenu? "absolute z-10 flex right-[27px] content-end my-10 " : " absolute flex right-[2px] h-14"} >
        <div className={mobileMenu?"nevigation-bar-mobile" : "nevigation-bar"}>
          {NavItems.map((item) => {
            return (
              <NavLink 
                className={({ isActive }) =>
                  isActive ? " marker p-4" : "p-4 heffect"
                }
                to={item.url}
                key={item.title}
              >
                {item.title}
                </NavLink>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default NavBar;
