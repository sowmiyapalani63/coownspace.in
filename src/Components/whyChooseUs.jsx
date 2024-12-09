import React from 'react';
import WhyChooseUsCard from './Common/WhyChooseUsCard';
import ProductCradDetails from '../lib/consts/data.json'
import WhyChooseFunFacts from './Common/FunfactCount';

const WhyChooseUs = () => {
    return (
        <>
            <section className="why-choose-us-section bg-primaryOne">
                <div className="section-gap overflow-hidden py-extraSmall md:py-medium lg:py-large xl:py-extraLarge ">
                    <div className="w-layout-blockcontainer container-default w-container  max-w-[960px] mx-auto px-[15px] sm:px-0 lg:max-w-[1170px] lg:px-0 xl:max-w-[1290px] xl:px-0">
                        <div className="why-choose-us-wrapper">
                            <div className="section-top-wrapper why-choose-us-section border-b justify-between  mb-[60px] flex-col md:flex-row gap-[20px] md:gap-[20px] md:items-start border-[#4f4f4f80] pb-[30px] md:pb-[40px] lg:pb-[60px] flex relative">
                                <div className="section-title-block w-full  lg:max-w-[487px] xl:max-w-[520px]">
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
                                        <p className="subtitle text-primaryTwo text-[20px] font-medium leading-[1.4]">Why Choose Us</p>
                                    </div>
                                    <h2
                                    
                                        style={{
                                            transform:
                                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                            transformStyle: "preserve-3d",
                                            opacity: 1,
                                        }}
                                        className="section-title text-customWhite text-[38px] lg:text-[40px] xl:text-[44px] font-semibold leading-[1.3]"
                                    >
                                        Why Choose NestBes for Real Estate Partner
                                    </h2>
                                </div>
                                <div
                        
                                    style={{
                                        transform:
                                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                        transformStyle: "preserve-3d",
                                        opacity: 1,
                                    }}
                                    className="section-top-text-wrapper w-full max-w-[468px] "
                                >
                                    <p className="section-top-text why-choose-section-top-text text-[#ffffffb3] font-normal text-[20px]">
                                    At NestBes, we understand that choosing a real estate partner is a
                                    significant decision. Here's why we stand out from the rest
                                    </p>
                                </div>
                            </div>
                            <WhyChooseUsCard ProductCradDetails={ProductCradDetails.ProductCradDetails}/>
                            {/* <WhyChooseFunFacts/>                         */}
                            
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default WhyChooseUs;
