import "../assets/css/Services.css";
import "../assets/css/style.css";

const Services = () => {
    return (
        <div>
            <div className="flex justify-center">
        <div className="w-[20%] h-[1px] bg-[#db9617] my-8 mx-[8px] "></div>
        <h1 className="text-center text-4xl font-bold py-4 px-4">Services</h1>
        <div className="w-[20%] h-[1px] bg-[#db9617] my-8 mx-[8px] "></div>
      </div>

      <section className=" flex justify-center p-10 video-container">
        <div className="video-wrapper p-10">
          <video id="video1" autoPlay muted loop>
            <source src="images/graphicdesigner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-text">
            <p>Graphics Design</p>
          </div>
        </div>
        <div className="video-wrapper p-10">
          <video id="video2" autoPlay muted loop>
            <source src="images/webdesigner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-text">
            <p>Web Design</p>
          </div>
        </div>
      </section>
        </div>
    );
};

export default Services;