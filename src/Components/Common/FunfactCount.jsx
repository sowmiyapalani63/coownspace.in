import React from 'react';

const WhyChooseFunFacts = () => {
  return (
    <div
   
      style={{
        transform:
          'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
        transformStyle: 'preserve-3d',
        opacity: 1,
      }}
      className="why-choose-fun-facts-wrapper grid grid-cols-4 auto-cols-fr mt-[60px] text-white"
    >
      {/** Fun Fact 1 */}
      <div
        
        className="why-choose-fun-facts relative"
      >
        <div className="fun-fact-number-wrapper why-choose-fun-fact flex flex-row justify-center items-stretch overflow-hidden h-[39px] md:h-[41px] lg:h-[47px] xl:h-[58px] 2xl:h-[58px]">
          <div
            style={{ transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1)' }}
            className="fun-fact-number-block upper-movement"
          >
            {/* <h4 className="heading-style-h2 why-choose-fun-fact-number">7</h4>
            <h4 className="heading-style-h2 why-choose-fun-fact-number">6</h4>
            <h4 className="heading-style-h2 why-choose-fun-fact-number">5</h4>
            <h4 className="heading-style-h2 why-choose-fun-fact-number">4</h4> */}
            <h4 className="heading-style-h2 why-choose-fun-fact-number">3</h4>
          </div>
          <div
            style={{ transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1)' }}
            className="fun-fact-number-block lower-movement"
          >
            <h4 className="heading-style-h2 why-choose-fun-fact-number">0</h4>
            {/* <h4 className="heading-style-h2 why-choose-fun-fact-number">9</h4>
            <h4 className="heading-style-h2 why-choose-fun-fact-number">8</h4>
            <h4 className="heading-style-h2 why-choose-fun-fact-number">7</h4>
            <h4 className="heading-style-h2 why-choose-fun-fact-number">6</h4> */}
          </div>
          <div
            style={{ transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1)' }}
            className="fun-fact-number-block upper-movement"
          >
           <h4 className="heading-style-h2 why-choose-fun-fact-number">0</h4>
            {/* <h4 className="heading-style-h2 why-choose-fun-fact-number">9</h4>
            <h4 className="heading-style-h2 why-choose-fun-fact-number">8</h4>
            <h4 className="heading-style-h2 why-choose-fun-fact-number">7</h4>
            <h4 className="heading-style-h2 why-choose-fun-fact-number">6</h4> */}
          </div>
          
          <h4 className="heading-style-h2 why-choose-fun-fact-suffix">+</h4>
        </div>
   
        <p className="paragraph-small why-choose-fun-fact-text">Property Ready</p>
        <div className="why-choose-fun-facts-separator"></div>
      </div>

      {/** Fun Fact 2 */}
      <div
        id="w-node-_6732789f-114c-1f5b-1d07-b911f32ef4f1-c163cef9"
        data-w-id="6732789f-114c-1f5b-1d07-b911f32ef4f1"
        className="why-choose-fun-facts"
      >
        <div className="fun-fact-number-wrapper why-choose-fun-fact">
          <div
            style={{ transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1)' }}
            className="fun-fact-number-block upper-movement"
          >
            <h4 className="heading-style-h2 why-choose-fun-fact-number">7</h4>
            <h4 className="heading-style-h2 why-choose-fun-fact-number">6</h4>
            <h4 className="heading-style-h2 why-choose-fun-fact-number">5</h4>
            <h4 className="heading-style-h2 why-choose-fun-fact-number">4</h4>
            <h4 className="heading-style-h2 why-choose-fun-fact-number">1</h4>
          </div>
          <h4 className="heading-style-h2 why-choose-fun-fact-suffix">k+</h4>
        </div>
        <p className="paragraph-small why-choose-fun-fact-text">Happy Customer</p>
        <div className="why-choose-fun-facts-separator"></div>
      </div>

      {/** Additional Fun Facts can be added here */}
    </div>
  );
};

export default WhyChooseFunFacts;
