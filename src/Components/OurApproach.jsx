import React, { useState } from "react";
import OurApproachImagelg from "../Assets/imges/OurApproachImagelg.jpg";
import BedIcon from "../Assets/svg/BedIcon.svg";
import BathIcon from "../Assets/svg/BathIcon.svg";
import OurMission from "./OurMission";

const OurApproach = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordionClick = (index) => {
        console.log("Clicked index:", index);
        console.log("Previous active index:", activeIndex);
        setActiveIndex(activeIndex === index ? null : index);
        console.log("Updated active index:", activeIndex);
    };
    const whatSetsApartData = [
        {
          title: "Listening to Your Needs:",
          text: "We start by listening. Understanding your specific needs, preferences, and objectives allows us to tailor our approach to meet your unique requirements.",
        },
        {
          title: "Customized Strategies",
          text: "No two real estate transactions are alike, which is why we develop customized strategies for each client. Whether you're buying or selling, we tailor our approach to meet your unique needs..",
        },
        {
          title: "Attention to Detail",
          text: "We're committed to excellence in everything we do. Our dedication to providing exceptional service, delivering outstanding results.",
        },
      ];

    const accordionItems = Array.isArray(data) ? data : [];

    return (
        <section className="about-us-section about-us-page">
            <div className="section-gap pt-24 pb-24">
                <div className="container mx-auto px-4">
                <OurMission/>
                    <div className="about-us-wrapper">
                        <div className="about-content-wrapper flex flex-col text-center lg:text-left lg:flex-row lg:gap-[164px] gap-10">
                        <div className="relative flex justify-center items-center">
                                {/* Image and Border */}
                                <div className="relative">
                                    <div className="relative z-10 rounded-lg overflow-hidden">
                                        <img
                                            src={OurApproachImagelg}
                                            alt="About Us"
                                            className="w-full max-w-lg object-cover"
                                        />
                                    </div>
                                    <div className="absolute top-4 right-4 lg:top-[-15px] lg:left-[-13px] z-0 w-[3980px] h-[430] md:w-[300px] md:h-[300px] md:top-[-1rem] md:left-[-2rem] border border-primaryTwo rounded-lg"></div>
                                </div>

                                {/* Floating Card */}
                                <div className="about-floating-card absolute z-20 bg-white rounded-xl shadow-lg p-4 w-11/12 max-w-lg lg:max-w-xl bottom-4 right-4 lg:left-10 xl:bottom-48 xl:right-32">
                                    <div className="flex items-center justify-between flex-col sm:flex-row">
                                        <div>
                                            <div className="property-float-card-title mb-[10px] text-base xl:text-[30px] text-text">
                                                <span className="float-card-property-price text-[40px] text-primaryOne">$3699.00</span>/Month
                                            </div>
                                            <div className="heading-style-h3-small floating-card-property-name text-primaryOne leading-[1] text-[24px] font-medium xl:text-[26px]">Orchard House</div>
                                        </div>
                                        <div className="flex items-center gap-6 mt-4">
                                            <div className="flex items-center gap-2">
                                                <img src={BedIcon} alt="Bed" className="w-6 h-6" />
                                                <span className="text-[27px] text-text">3</span>
                                            </div>
                                            <div className="floating-card-meta-separator bg-textColor w-[1px] h-[24px] border border-text-text"></div>
                                            <div className="flex items-center gap-2">
                                                <img src={BathIcon} alt="Bath" className="w-6 h-6" />
                                                <p className="floating-card-meta-text text-[27px] text-text">2</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            
                            <div className="sets-apart-content-wrapper lg:w-[600px]  rounded-[32px] bg-lightblueBg px-[15px] py-[25px] sm:p-[32px]">
            <div className="section-title-block w-full  mb-[30px] lg:max-w-[487px] xl:max-w-[520px]">
              <div

                style={{
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  opacity: 1,
                }}
                className="subtitle-wrapper flex items-center gap-[8px] mb-[15px]"
              >
                <div className="subtitle-point-wrapper border border-primaryTwo rounded-full justify-center items-center w-5 h-5 flex">
                  <div className="subtitle-point bg-primaryTwo rounded-full w-3 h-3"></div>
                </div>
                <p className="subtitle text-primaryTwo text-[20px] font-medium leading-[1.4]">Our Approach</p>
              </div>
              <h2

                style={{
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  opacity: 1,
                }}
                className="section-title text-[38px] lg:text-[40px] xl:text-[44px] font-semibold leading-[1.3]"
              >
                Personalized Solutions for Your Real Estate Needs
              </h2>
              <div className="our-approach-text-wrapper mt-[12px] mb-[28px]">
              <p
    
      style={{
        transform:
          'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
        transformStyle: 'preserve-3d',
        opacity: 1,
      }}
      className="our-mission-text mb-0 text-text"
    >
      At NestBes, we believe in a personalized approach to real estate. We take
      the time to listen to your needs, understand your goals, &amp; tailor our
      services to meet.
    </p>
              </div>
            </div>
            <div className="what-sets-apart-list-wrapper flex flex-col lg:gap-[28px] gap-[25px]">
              {whatSetsApartData.map((item, index) => (
                <div

                  style={{
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                    opacity: 1,
                  }}
                  className="what-sets-apart-list-item"
                >
                  <h3 className="heading-style-h4 our-approach-list-title text-primaryOne text-primary font-medium text-xl leading-tight md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="what-sets-apart-list-text pl-[38px]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

                            {/* Right Content */}
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurApproach;
