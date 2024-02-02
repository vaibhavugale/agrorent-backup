import React from "react";
import bgLandscape3 from "../../assets/images/bg-landescap.png";
import "../about/About.css";
import farmer from "../../assets/images/farmer.png";
import bulldozer from "../../assets/bulldozerLogo.png"
import leaf from '../../assets/leaf.png';
import success from "../../assets/success.png"
import CountUp from "react-countup";

const Index = () => {
  return (
    <div>
      {/* Welcome section */}
      <section className="w-full h-[93vh] flex justify-between flex-col items-center  mb-6">
        <div className="text-5xl mt-[10vh] text-center">
          <div className="bird-container bird-container-one">
            <div className="bird bird-one"></div>
          </div>
          <div className="bird-container bird-container-two">
            <div className="bird bird-two"></div>
          </div>
          <div className="bird-container bird-container-three">
            <div className="bird bird-three"></div>
          </div>
          <div className="bird-container bird-container-four">
            <div className="bird bird-four"></div>
          </div>
          <p className=" text-orange-900 font-bold ">
            Welcome To{" "}
            <span className="text-center transition-all duration-500 cursor-pointer  hover:tracking-widest   md:text-5xl bg-gradient-to-r   from-green-800  from-15%  via-green-600 to-green-800  text-transparent  bg-clip-text">
              AGRORENT
            </span>{" "}
          </p>
          <p className=" text-lg mt-[8%] w-[75%] mx-auto">
            At <span className=" text-green-700">AGRORENT</span>, we're sowing
            the seeds of innovation in agriculture. Our platform is not just a
            rental service; it's a gateway to a future where farming meets
            cutting-edge technology. Join us in revolutionizing the way you
            cultivate, nurture, and harvest.
          </p>
         
        </div>
        
        <img className="w-full " src={bgLandscape3} alt="img" loading="lazy" />
      </section>

      {/* Explore section */}
      <section className="h-[80vh]  relative flex justify-center  ">
        <div className=" w-[1080px] ">
          <img
            src={farmer}
            alt="img"
            className=" h-[600px]  md:visible  invisible top-9  absolute"
            loading="lazy"
          />

          <div className=" flex  justify-center md:ml-[30%] items-center md:w-[580px] p-7 flex-col">
            <p className="  text-4xl w-full font-medium mt-[7%]">
              Explore Our Green Revolution
            </p>
            <div className=" flex flex-col mt-[10%]">
              <div className=" flex gap-4 mt-8 w-full">
                <img src={bulldozer} className=" w-[24px] h-[30px]"  alt="img" loading="lazy"/>
                <div>
                  <h1 className=" font-semibold">Advanced Equipment, Accessible to All</h1>
                  <p className=" font-thin">
                    Unearth a treasure trove of state-of-the-art agricultural
                    equipment. From powerful tractors to precision planting
                    tools, our diverse range caters to farmers of all scales.
                    Experience the efficiency of modern farming, one rent away.
                  </p>
                </div>
              </div>
              <div className=" flex gap-4 mt-8 w-ful ">
                <img src={success} className=" w-[50px] h-[40px]"   alt="img" loading="lazy" />
                <div>
                  <h1 className=" font-semibold">Your Success, Our Priority</h1>
                  <p className=" font-thin">
                  Our platform is more than a marketplace; it's a community. As you navigate through the digital fields, know that your success is at the core of everything we do. Responsive customer support, transparent transactions, and a commitment to your growth make us your true agri-partner.
                  </p>
                </div>
              </div>
              <div className=" flex gap-3 mt-8 w-full">
                <img src={leaf} className=" w-[50px] h-[40px]"   alt="img" loading="lazy" />
                <div>
                  <h1 className=" font-semibold">Sustainable Solutions, Harvesting Tomorrow</h1>
                  <p className=" font-thin">
                  We believe in farming for the future. Our commitment to sustainability reflects in our equipment choices. Efficient, eco-friendly, and designed to leave a minimal footprint on the earth. Let's cultivate tomorrow's harvest, responsibly.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>


      {/* {Number section } */}
      <section className=" h-[50vh] overflow-x-clip bg-tractor w-full flex justify-center items-center  bg-cover bg-center relative bg-fixed  ">
        <div className=" flex  justify-between w-[1080px]">
           <div>
            <CountUp 
              className=" text-7xl font-semibold text-gray-700"
              end={100}
              duration={10}
            />
           </div>
           <div>   <CountUp 
              className=" text-7xl font-semibold text-gray-700"
              end={100}
              duration={10}
              loading={"lazy"}
            /></div>
           <div> <CountUp 
              className=" text-7xl font-semibold text-gray-700"
              end={100}
              duration={10}
            /></div>
           <div>  <CountUp 
              className=" text-7xl font-semibold text-gray-700"
              end={100}
              duration={10}
            /></div>

        </div>
      </section>
    </div>
  );
};

export default Index;
