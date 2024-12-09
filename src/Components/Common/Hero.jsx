import React from "react";
import springicon from '../../Assets/svg/springicon.svg'
import StarIcon from '../../Assets/svg/StarIcon.svg'
import propertyData from '../../lib/consts/data.json';
import '../../styles/global.css'

const Hero = () => {
   const {propertyHead,propertyTitle,propertyText} = propertyData.PropertiesDetails[1]

  return (
    <section class="page-hero bg-lightblueBg pt-[235px] pb-[100px] ">
    <div class="container mx-auto max-w-[1290px] px-4 md:px-[50px] lg:px-[15px]">
      <div class="relative flex flex-col items-center">
        <img
          src={springicon}
          alt="Page Hero Shape"
          class="absolute left-0 top-0 transform w-[100px] md:w-[80px] lg:w-[142px] hidden md:block"
        />
        <img
          src={StarIcon}
          alt="Page Hero Shape"
          class="absolute right-0 top-1/2 transform -translate-y-1/2 w-[60px] md:w-[60px] lg:w-[90px] hidden md:block"
        />
        <div className="flex items-center justify-center gap-[10px] mb-[20px]">
                <div className="border border-primaryTwo rounded-full flex justify-center items-center w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]">
                  <div className="bg-primaryTwo rounded-full w-[8px] h-[8px] sm:w-[12px] sm:h-[12px]"></div>
              </div>
              <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-primaryTwo font-medium leading-[1.4]">
              {propertyHead}
              </p>
          </div>

        <div class="flex flex-col items-center mt-6">
          <h1 class="page-hero-title text-center max-w-[750px] lg:max-w-[800px] xl:max-w-[950px] text-[60px] font-bold leading-tight">
            {propertyTitle}
          </h1>
        </div>
        <div class="flex flex-col items-center mt-4 ">
          <p class="text-center text-text max-w-[795px]">
            {propertyText}
          </p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Hero;