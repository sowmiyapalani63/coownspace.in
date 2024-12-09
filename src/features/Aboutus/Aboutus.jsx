import React, { useState } from "react";
import AboutUslg from "../../Assets/imges/Aboutuslg.jpg";
import BedIcon from "../../Assets/svg/BedIcon.svg";
import BathIcon from "../../Assets/svg/BathIcon.svg";
import DoubleArrowIcon from "../../Assets/svg/DoubleArrowIcon.svg";
import DoubleDownArrow from "../../Assets/svg/DoubleDownArrow.svg";

const Aboutus = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordionClick = (index) => {
        console.log("Clicked index:", index);
        console.log("Previous active index:", activeIndex);
        setActiveIndex(activeIndex === index ? null : index);
        console.log("Updated active index:", activeIndex);
    };
    

    const accordionItems = Array.isArray(data) ? data : [];

    return (
        <section className="about-us-section about-us-page">
            <div className="section-gap pt-24 pb-24">
                <div className="container mx-auto px-4">
                    <div className="about-us-wrapper">
                        <div className="about-content-wrapper flex flex-col text-center lg:text-left lg:flex-row lg:gap-[164px] gap-10">
                            {/* Left Content */}
                            <div className="about-content-left max-w-lg">
                                <div className="section-title-block mb-10">
                                    <div className="subtitle-wrapper flex items-center gap-2 mb-4">
                                        <div className="subtitle-point-wrapper border border-primaryTwo rounded-full w-5 h-5 flex justify-center items-center">
                                            <div className="subtitle-point bg-primaryTwo rounded-full w-3 h-3"></div>
                                        </div>
                                        <p className="subtitle text-primaryTwo text-[20px] font-medium leading-[1.4]">About Us</p>
                                    </div>
                                    <h2 className="section-title text-[44px] mt-0 mb-0 font-bold text-primaryOne">
                                        Elevate Your Real Estate Experience With NestBes
                                    </h2>
                                </div>
                                <div className="about-us-accordions-wrapper mb-[30px]">
                                    {accordionItems.map((item, index) => (
                                        <div
                                            key={index}
                                            className={`about-us-accordion border-b border-text cursor-pointer w-full pt-[30px] pb-[30px] lg:pt-[40px] lg:pb-[40px] ${activeIndex === index ? 'active-class' : ''}`}

                                            onClick={() => handleAccordionClick(index)}
                                            aria-expanded={activeIndex === index}>
                                            <div className="about-accordion-title-wrapper flex items-center gap-[24px]">
                                                <img
                                                    src={activeIndex === index ? DoubleArrowIcon : DoubleDownArrow}
                                                    alt="Accordion Icon"
                                                    className="about-us-accordion-icon"
                                                />
                                                <h3 className="about-us-accordion-title text-[26px] font-medium">
                                                    {item.title}
                                                </h3>
                                            </div>
                                            {activeIndex === index && (
                                                <div className="about-accordion-content-wrapper mt-[18px] pl-[48px]">
                                                    <p className="about-accordion-content">{item.content}</p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <a
                                    href="/about-us"
                                    className="border border-primaryOne rounded-lg px-[24px] py-[12px] leading-[1.4] transition-all duration-200 inline-flex relative overflow-hidden max-w-full text-primary-color-one font-medium no-underline bg-transparent"
                                >
                                    <p className="button-text gap-x-[10px] gap-y-[10px] flex justify-center items-center text-[20px] font-medium leading-[1.4]">
                                        More About Us
                                    </p>
                                </a>
                            </div>

                            {/* Right Content */}
                            <div className="relative flex justify-center items-center">
                                {/* Image and Border */}
                                <div className="relative">
                                    <div className="relative z-10 rounded-lg overflow-hidden">
                                        <img
                                            src={AboutUslg}
                                            alt="About Us"
                                            className="w-full max-w-lg object-cover"
                                        />
                                    </div>
                                    <div className="absolute top-4 right-4 lg:top-[-62px] lg:right-[-32px] z-0 w-[3980px] h-[430] md:w-[300px] md:h-[300px] md:top-[-1rem] md:right-[-1rem] border border-primaryTwo rounded-lg"></div>
                                </div>

                                {/* Floating Card */}
                                <div className="about-floating-card absolute z-20 bg-white rounded-xl shadow-lg p-4 w-11/12 max-w-lg lg:max-w-xl bottom-4 right-4 lg:right-10 xl:bottom-48 xl:right-32">
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Aboutus;
