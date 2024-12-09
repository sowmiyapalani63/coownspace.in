import React from 'react';


const WhyChooseUsCard = ({ ProductCradDetails }) => {
    const ProductCradItem = Array.isArray(ProductCradDetails) ? ProductCradDetails : [];
    return (
        <div className="why-choose-us-cards flex flex-warp flex-col md:flex-row gap-[30px] ">
            {ProductCradItem.map((item, index) => (


                <div

                    style={{
                        
                        transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                        opacity: 1,
                    }}
                    key={index}
                    className="why-choose-us-card p-[20px] sm:px-[30px] sm:py-[25px] bg-white rounded-[16px] relative hover:bg-primaryThree hover:text-white"
                >
                    <h3 
                        className="heading-style-h2-small why-choose-card-number text-[26px] custom-991:text-[28px] custom-1280:text-[32px] custom-1440:text-[38px] font-semibold leading-[1.3]"
                    >
                        {item.number}
                    </h3>
                    <h4
                      
                        className="heading-style-h3 why-choose-card-title text-[26px] md:text-[28px]  mt-[18px] mb-[10px] font-medium leading-[1.3]"
                    >
                        {item.title}
                    </h4>
                    <p
                        
                        className="why-choose-card-text text-text font-normal hover:text-white"
                    >
                        {item.text}
                    </p>
                    <img
                        src={require(`../../Assets/svg/${item.icon}`)}
                        loading="lazy"
                        alt="Why Choose Card Icon"
                        className="why-choose-card-icon absolute top-0 right-0"
                    />
                </div>
            ))}
        </div>
    );
};

export default WhyChooseUsCard;
