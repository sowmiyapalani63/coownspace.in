import React from "react";

const WhatSetusApart = () => {
  const whatSetsApartData = [
    {
      title: "Personalized Approach",
      text: "We believe in treating each client as an individual with unique needs and preferences.",
    },
    {
      title: "Transparent Communication",
      text: "We believe in transparent communication and open dialogue with our clients.",
    },
    {
      title: "Innovative Technology",
      text: "We leverage the latest technology and tools to streamline the real estate process & enhance the client experience.",
    },
  ];

  return (
    <div className="section-gap">
      <div className="w-layout-blockcontainer container-default w-container w-layout-blockcontainer container-default w-container  max-w-[960px] mx-auto px-[15px] sm:px-0 lg:max-w-[1170px] lg:px-0 xl:max-w-[1290px] xl:px-0">
        <div className="what-sets-apart-wrapper  flex flex-col gap-8 md:flex-row">
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
                <p className="subtitle text-primaryTwo text-[20px] font-medium leading-[1.4]">Why Choose Us</p>
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
                What Sets NestBes Apart
              </h2>
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
                  <h3 className="heading-style-h4 sets-apart-list-title text-primaryOne text-primary font-medium text-xl leading-tight md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="what-sets-apart-list-text pl-[38px]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div

            className="sets-apart-video-wrapper rounded-[32px] overflow-hidden sm:w-[600px] h-[600px]"
          >
            <a
              href="#"

              style={{
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
              className="sets-apart-video-lightbox w-inline-block w-lightbox flex items-center justify-center w-full h-full rounded-[32px] bg-cover bg-no-repeat relative "
              aria-label="open lightbox"
              aria-haspopup="dialog"
            >
              <div className="our-intro-video-wrapper flex items-center justify-center w-[180px] h-[180px] relative">
                <div

                  className="intro-video-play-icon-wrapper flex items-center justify-center w-[98px] h-[98px] relative z-2 text-white transition-all duration-300"
                >
                  <div
                    style={{ color: "rgb(84, 79, 204)" }}
                    className="sets-apart-play-button w-embed  absolute bg-[#544fcc] flex items-center justify-center rounded-full w-[98%] h-[98%]"
                  >
                    <svg
                      width="32"
                      height="37"
                      viewBox="0 0 32 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M29.9998 15.1697C32.6665 16.7093 32.6665 20.5583 29.9998 22.0979L5.99982 35.9543C3.33315 37.4939 -0.000184895 35.5694 -0.00018476 32.4902L-0.000183549 4.77738C-0.000183414 1.69818 3.33315 -0.22632 5.99982 1.31328L29.9998 15.1697Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div
                    style={{
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                    className="intro-video-icon-bg w-full h-full inset-0 bg-customWhite rounded-full"
                  ></div>
                  <div
                    style={{
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                    className="intro-video-icon-hover-bg w-full h-full z-[-1] absolute bg-primaryThree rounded-full"
                  ></div>
                </div>
                <div
                  style={{
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1.26672, 1.26672, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                    opacity: 0.69691,
                    willChange: "opacity, transform",
                  }}
                  className="intro-video-icon-overlay-small bg-[#544fcc] rounded-full w-[98%] h-[98%] absolute opacity-0"
                ></div>
              </div>
              <div
                style={{
                  opacity: 0,
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
                className="card-animation-overlay  absolute bottom-0 w-full h-full bg-white opacity-0 pointer-events-none origin-[50%_100%] rounded-[15px]"
              ></div>
              <script
                type="application/json"
                className="w-json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    items: [
                      {
                        url: "https://www.youtube.com/watch?v=UWgKk0KTVtI",
                        originalUrl:
                          "https://www.youtube.com/watch?v=UWgKk0KTVtI",
                        width: 940,
                        height: 528,
                        html: `<iframe class="embedly-embed" 
                        src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FUWgKk0KTVtI&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DUWgKk0KTVtI&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=google" width="940" height="528" scrolling="no" title="YouTube embed" frameborder="0" allow="autoplay; fullscreen; encrypted-media; picture-in-picture;" allowfullscreen="true"></iframe>`,
                        type: "video",
                      },
                    ],
                    group: "",
                  }),
                }}
              ></script>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatSetusApart;
