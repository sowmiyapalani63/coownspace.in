import React from 'react';
import logo2 from '../../Assets/imges/logo2.png';
import logo3 from '../../Assets/imges/logo3.png';
import logo4 from '../../Assets/imges/logo4.png';
import logo5 from '../../Assets/imges/logo5.png';
import logo6 from '../../Assets/imges/logo6.png';

const TrustedCompanies = () => {
    return (
        <div className="py-[100px]  px-[20px] sm:px-[50px] max-w-[1290px] mx-auto">
            <h3 className="text-center relative mb-8">
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 sm:w-1/4 md:w-1/8 lg:w-1/5 xl:w-1/4 border-t border-gray-400"></span>
                Trusted by <span className="text-[#544fcc]">1000+</span> companies around the world
                <span className="absolute right-0 top-1/2 transform -translate-y-1/2 sm:w-1/4 md:w-1/8 lg:w-1/5 xl:w-1/4 border-t border-gray-400"></span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-8 sm:p-[40px] md:border-b border-gray-400">
                <img src={logo2} alt="Logo 2" className="w-full bg-gray-100 px-[28px] py-[20px] border rounded-lg" />
                <img src={logo3} alt="Logo 3" className="w-full bg-gray-100 px-[28px] py-[20px] border rounded-lg" />
                <img src={logo4} alt="Logo 4" className="w-full bg-gray-100 px-[28px] py-[20px] border rounded-lg" />
                <img src={logo5} alt="Logo 5" className="w-full bg-gray-100 px-[28px] py-[20px] border rounded-lg" />
                <img src={logo6} alt="Logo 6" className="w-full bg-gray-100 px-[28px] py-[20px] border rounded-lg" />
                <img src={logo4} alt="Logo 4" className="w-full bg-gray-100 px-[28px] py-[20px] border rounded-lg" />
            </div>
        </div>

    );
}

export default TrustedCompanies;
