import React from 'react';
import FooterCtaShape1 from '../Assets/imges/FooterCtaShape1.png'
import FooterCtaShape2 from '../Assets/imges/FooterCtaShape2.png'
import FooterCtaShape3 from '../Assets/imges/FooterCtaShape3.png'

const FooterTopCTA = () => {
  return (
    <div className="section-gap footer-top-cta-v2">
      <div className="w-layout-blockcontainer container-default w-container">
        <div
        
          style={{
            transform:
              'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
            transformStyle: 'preserve-3d',
            opacity: 1,
          }}
          className="footer-top-cta-wrapper bg-primaryOne rounded-[32px] p-[40px] relative custom-991:flex custom-991:justify-start custom-1440:p-[60px]"
        >
          <div className="footer-shape-bg-wrapper inset-0 pointer-events-none absolute">
            <img
              src={FooterCtaShape1}
              loading="lazy"
              alt="Footer Cta Shape"
              className="footer-cta-shape1 absolute top-[-70px]  custom-991:top-[-80px] left-1/2 transform -translate-x-1/2 " 
            />
            <img
              src={FooterCtaShape2}
              loading="lazy"
              alt="Footer Cta Shape"
              className="footer-cta-shape2 absolute left-1/2 bottom-[50px] custom-1280:left-[45%] custom-1440:bottom-[77px]  "
            />
            <img
              src={FooterCtaShape3}
              loading="lazy"
              alt="Footer Cta Shape"
              className="footer-cta-shape3 absolute  left-[30%] bottom-0 w-[30px] custom-991:left-[]24px]"
            />
          </div>
          <div className="footer-top-cta-content text-customWhite flex flex-col ">
            <h2
              data-w-id="b28523b3-3e93-55d1-753d-a8fd1a15c068"
              style={{
                transform:
                  'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                transformStyle: 'preserve-3d',
                opacity: 1,
              }}
              className="footer-top-cta-title custom-1440:text-[44px] custom-1280:text-[40px] mb-0 font-semibold leading-[1.3] mt-0 text-[38px]"
            >
              Find Your Dream Home? Contact Us Today!
            </h2>
            <p
              
              style={{
                transform:
                  'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                transformStyle: 'preserve-3d',
                opacity: 1,
              }}
              className="footer-top-cta-text mt-[16px] mb-[35px] lg:max-w-[500px]"
            >
              Take the first step towards homeownership and reach out to our expert team at NestBes.
            </p>
            <a
             
              style={{
                transform:
                  'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                transformStyle: 'preserve-3d',
                opacity: 1,
              }}
              href="/contact-us"
              className="primary-button-wrapper cta-button w-inline-block bg-customWhite max-w-[147.33px]  rounded-lg px-6 py-3 leading-6 transition-all duration-200 inline-flex relative overflow-hidden"
            >
              <p className="button-text text-text tetx-[20px] ">Contact Us</p>
            </a>
          </div>
          <div
            
            style={{
              transform:
                'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d',
              opacity: 1,
            }}
            className="footer-top-cta-image-wrapper hidden md:absolute "
          >
            <img
              src="https://cdn.prod.website-files.com/668f4d3cb04ed39f764a5ecc/66a1f24bfd8a60fbf773f029_Footer%20Top%20CTA%20Image.png"
              loading="lazy"
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 260px, (max-width: 1279px) 400px, (max-width: 1439px) 500px, 555px"
              srcSet="https://cdn.prod.website-files.com/668f4d3cb04ed39f764a5ecc/66a1f24bfd8a60fbf773f029_Footer%20Top%20CTA%20Image-p-500.png 500w, https://cdn.prod.website-files.com/668f4d3cb04ed39f764a5ecc/66a1f24bfd8a60fbf773f029_Footer%20Top%20CTA%20Image.png 555w"
              alt="Footer Top CTA Image"
              className="footer-top-cta-image align-middle custom-1280:w-[500px] w-[400px]  " 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTopCTA;
