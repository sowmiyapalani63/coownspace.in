import React from "react";

const ContactInfoCards = ({ ContactInfoCardDetails }) => {


  return (
    <div className="contact-info-cards-wrapper grid grid-cols-1 md:grid-cols-3 gap-0 pb-8 md:pb-16">
      {ContactInfoCardDetails.map((item, index) => (
        <div
          key={index}
          style={{
            transform:
              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
            opacity: 1,
          }}
          className="contact-info-card custom-1440:px-[75px] flex flex-col items-center justify-start relative"
        >
          <div className="contact-info-icon-wrapper bg-[#544fcc33] rounded-[12px] flex justify-center items-center w-[74px] h-[74px] p-[17px] md:w-[60px] md:h-[60px]">
            <img
              src="https://cdn.prod.website-files.com/668f4d3cb04ed39f764a5ecc/669395bccd99474748a4b581_Phone%20Icon.svg"
              loading="lazy"
              alt="Contact Info Icon"
              className="contact-info-icon"
            />
          </div>
          <p className="heading-style-h3 contact-info-title text-center mt-[28px] mb-[16px]">{item.Contacttype}</p>
          <div className="contact-info-items-wrapper flex flex-col">
            <a href="tel:(505)555-0125" className="contact-info-item">
              {item.Contact1}
            </a>
            <a href="tel:(505)555-0125" className="contact-info-item">
              {item.Contact2}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

ContactInfoCards.defaultProps = {
  ContactInfoCardDetails: [],
};

export default ContactInfoCards;
