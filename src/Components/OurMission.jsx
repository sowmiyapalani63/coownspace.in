import React from 'react';
import startIcon from '../Assets/svg/StarIcon.svg'
import missionIcon1 from '../Assets/svg/MissionIcon1.svg'
import missionIcon2 from '../Assets/svg/MissionIcon2.svg'
import OurMissionImage from '../Assets/imges/OurMissionImage.jpg'

const OurMission = () => {
    const missionCards = [
        {
            id: 1,
            imgSrc: missionIcon1,
            title: "Client-Centric Approach",
            text: "Putting our clients' needs first is at the core of our mission. We strive to understand your unique goals.",
        },
        {
            id: 2,
            imgSrc: missionIcon2,
            title: "Make Informed Decisions",
            text: "We believe in empowering our clients to make informed decisions. Through clear communication.",
        },
    ];

    return (
        <div className="mission-wrapper flex flex-col text-center lg:text-left lg:flex-row lg:gap-[30px] gap-10 lg:pb-[160px] pb-[60px]">
            <div className="mission-content-wrapper relative w-full xl:max-w-[645px] lg:max-w-[50%]">
                <img
                    src={startIcon}
                    loading="lazy"
                    alt="Our Mission Star Shape"
                    className="our-mission-star-shape  absolute right-0 top-[-28px] w-[50px]  lg:top-[-48px]"
                />
                <div className="section-title-block lg:max-w-[487px] xl:max-w-[520px]  max-w-[470px]">
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
                        <p className="subtitle text-primaryTwo text-[20px] font-medium leading-[1.4]">Our Mission</p>
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
                        Empowering Your Real Estate Journey
                    </h2>
                </div>
                <div

                    style={{
                        transform:
                            'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                        transformStyle: 'preserve-3d',
                        opacity: 1,
                    }}
                    className="our-mission-text-wrapper border-b mt-[12px] mb-[38px] pb-[32px] lg:mb-[25px] lg:pb-[25px] "
                >
                    <p className="our-mission-text text-text">
                        To empower individuals and families to make informed real estate
                        decisions and achieve their homeownership goals. We understand that
                        buying or selling a home.
                    </p>
                </div>
                <div className="our-mission-cards-wrapper flex flex-col sm:flex-row gap-[20px] sm:gap-[24px]">
                    {missionCards.map((card) => (
                        <div

                            style={{
                                transform:
                                    'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                                transformStyle: 'preserve-3d',
                                opacity: 1,
                            }}
                            className="our-mission-card bg-[#0606140d] rounded-[12px] py-[20px] pl-[20px] pr-[24px]"
                        >
                            <img
                                src={card.imgSrc}
                                loading="lazy"
                                alt="Our Mission Card Icon"
                                className="our-mission-card-icon"
                            />
                            <h3 className="heading-style-h4 our-mission-card-title mt-[20px] mb-[8px] text-primaryOne text-[24px] font-medium leading-[1.3]" >
                                {card.title}
                            </h3>
                            <p className="paragraph-small our-mission-card-text text-[16px] leading-[1.6]">
                                {card.text}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
            <div className="mission-image-wrapper w-full max-w-full py-[15px] pr-[15px]">
                <div className="mission-image-block relative  rounded-[20px]">
                    <img
                        src={OurMissionImage}
                        loading="lazy"
                        style={{
                            transform:
                                'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                            transformStyle: 'preserve-3d',
                            opacity: 1,
                        }}
                        sizes="(max-width: 767px) 92vw, (max-width: 991px) 695px, (max-width: 1279px) 915px, (max-width: 1439px) 543.9666748046875px, 597.9833374023438px"
                        alt="Mission Image"
                        srcSet={`${OurMissionImage} 500w, ${OurMissionImage} 557w`}
                        className="mission-image w-full rounded-[20px]"
                    />

                    <div
                        style={{
                            opacity: 0,
                            transform:
                                'translate3d(0px, 0px, 0px) scale3d(0, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                            transformStyle: 'preserve-3d',
                        }}
                        className="card-animation-overlay right-animation-overlay"
                    ></div>
                </div>
                <div
                    style={{
                        transform:
                            'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                        transformStyle: 'preserve-3d',
                        opacity: 1,
                    }}
                    className="mission-image-border top-0 right-0 absolute z-[-1] border border-primaryTwo rounded-[32px] w-[200px] lg:w-[220px] xl:w-[258px]"
                ></div>
            </div>
        </div>
    );
};

export default OurMission;
