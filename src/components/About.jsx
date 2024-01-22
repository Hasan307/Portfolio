import "../assets/css/about.css";
const About = () => {
  return (
    <div className="relative">
      <div className="flex lg:flex-row justify-center relative flex-col ">
        <div
          className="flex justify-center relative grow-[4] w-[20%]"
          data-aos="fade-up"
        >
          <img src="images/about.png" alt="" />
        </div>
        <div
          className=" justify-center  relative grow-[8] w-[70%]"
          data-aos="fade-up"
        >
          <div className=" align-bottom ">
          <h1 className=" fw-bolder relative font-black text-[20px] ">
            About Me
          </h1>
          <p>
            I'm Hasan, a passionate and versatile web and graphic designer
            dedicated to crafting unique and visually stunning digital
            experiences. With a keen eye for detail and a love for all things
            creative, I bring a fresh perspective to every project I undertake.
          </p>

          <h1>What Sets Me Apart?</h1>
          <p>
            My approach is centered around understanding your brand identity and
            translating it into compelling visuals. From sleek and modern web
            designs to eye-catching logos and branding materials, I specialize
            in creating cohesive and memorable designs that leave a lasting
            impression. I believe in the power of design to communicate ideas
            and evoke emotions, and I strive to deliver solutions that resonate
            with your target audience.
          </p>
          <br />

          <h2>Hasan</h2>
          <div className="flex relative">
            <div className="button3 relative ">
              <a href="">download CV</a>
            </div>
            <div className="button3 mx-3 relative">
              <a href="">download CV</a>
            </div>
          </div>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row justify-center relative flex-col  bg-[#161616] p-[20px]  ">
        <div
          className=" justify-center relative grow-[8] w-[70%] bg-[#000000] p-[40px] rounded-[40px] 
          shadow-[20px_20px_20px_-15px_rgba(255,165,0)]"
          data-aos="fade-up"
        >
          <h1 className="  relative font-black text-[20px] ">
            Who Am I?
          </h1>
          <div className="h-[1px] w-[100%] bg-white my-6"></div>
          <p>
            I am not just a <span className="text-[#ffdd48] text-lg ">designer</span>, I am a <span className=" text-[20px] text-[#ffdd48] font-black ">storyteller</span>  who uses pixels and
            colors to weave narratives that captivate and engage. My journey in
            the world of design started with a fascination for the seamless
            blend of aesthetics and functionality. Over the years, I have honed
            my skills to create designs that not only look good but also enhance
            user experiences.
          </p>
        </div>
        <div>
          <img src="images/why2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
