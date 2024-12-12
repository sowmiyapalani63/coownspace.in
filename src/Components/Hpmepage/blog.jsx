import React from 'react';
import blog1 from '../../Assets/imges/blog1.jpg';
import blog2 from '../../Assets/imges/blog2.jpg';
import { FaArrowRightLong } from "react-icons/fa6";

const Blog = () => {
    return (
        <div className="px-[20px]   pb-[80px] sm:pb-[100px] md:pb-[120px] lg:pb-[140px] max-w-[1290px] mx-auto">
        {/* Blog header section */}
        <div className="flex items-center gap-[10px] mb-[20px]">
            <div className="border border-primaryTwo rounded-full flex justify-center items-center w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]">
                <div className="bg-primaryTwo rounded-full w-[8px] h-[8px] sm:w-[12px] sm:h-[12px]"></div>
            </div>
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-primaryTwo font-medium leading-[1.4]">
                Our blog
            </p>
        </div>
    
        {/* Title and Button Section */}
        <div className="flex justify-between items-center flex-wrap gap-[20px]">
            <div>
                <h2 className="text-4xl font-bold">Stay Informed With Our</h2>
                <h2 className="text-4xl font-bold">Our Real Estate Blog</h2>
            </div>
            <div className="px-[24px]">
                <button className="font-medium bg-gray-100 text-[24px] px-[24px] py-[12px] border-2 border-black rounded-lg">
                    View All Posts
                </button>
            </div>
        </div>
    
        {/* Blog Image Section */}
        <div className="pt-[60px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[30px] justify-center">
            <div className="max-w-full flex flex-col gap-[12px]">
                <div className="overflow-hidden relative">
                    <img
                        src={blog1}
                        alt="blog"
                        className="w-full h-auto border rounded-xl transition-transform duration-300 transform hover:scale-110"
                    />
                </div>
                <div className='flex gap-[20px]'>
                    <button className='cursor-pointer bg-gray-100 py-[4px] px-[12px] border border-black rounded-lg text-[16px] font-medium'>
                        Trending
                    </button>
                    <p>July 29, 2024</p>
                </div>
                <h2 className='border-b pb-[20px] hover:text-[#544fcc] cursor-pointer'>
                    Top Trends Shaping the Real Estate Market in 2024
                </h2>
                <div className='flex justify-between'>
                    <p>9 mins to Read</p>
                    <div className="flex items-center gap-[8px]">
                        <p className="text-black font-medium hover:text-[#544fcc] cursor-pointer">
                            View details
                        </p>
                        <FaArrowRightLong className="text-black hover:text-[#544fcc] transition-transform duration-300 transform hover:translate-x-1" />
                    </div>
                </div>
            </div>
    
            <div className="max-w-full flex flex-col gap-[12px]">
                <div className="overflow-hidden relative">
                    <img
                        src={blog2}
                        alt="blog"
                        className="w-full h-auto border rounded-xl transition-transform duration-300 transform hover:scale-110"
                    />
                </div>
                <div className='flex gap-[20px]'>
                    <button className='cursor-pointer bg-gray-100 py-[4px] px-[12px] border border-black rounded-lg text-[16px] font-medium'>
                        Trending
                    </button>
                    <p>July 29, 2024</p>
                </div>
                <h2 className='border-b pb-[20px] hover:text-[#544fcc] cursor-pointer'>
                    Top Trends Shaping the Real Estate Market in 2024
                </h2>
                <div className='flex justify-between'>
                    <p>9 mins to Read</p>
                    <div>
                        <div className="flex items-center gap-[8px]">
                            <p className="text-black font-medium hover:text-[#544fcc] cursor-pointer">
                                View details
                            </p>
                            <FaArrowRightLong className="text-black hover:text-[#544fcc] transition-transform duration-300 transform hover:translate-x-1" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    );
};

export default Blog;
