import React from 'react';
import footer from '../../Assets/imges/footer.png';
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialInstagram } from "react-icons/sl";
import { FaFacebookF } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
    return (
        <div>
            {/* Footer Main Section */}
            <footer className="bg-black text-white py-12">
                <div className="max-w-[1290px] mx-auto lg:pl-[15px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                        {/* Column 1: About Us */}
                        <div className='flex flex-col gap-5'>
                            <img src={footer} className='w-[200px]' alt="Footer Logo" />

                            {/* Search Input Box with Button */}
                            <div className="relative flex items-center w-full">
                                <input
                                    type="text"
                                    className="p-3 text-black rounded-md w-full pr-16"  /* pr-16 adds right padding to make space for the button */
                                    placeholder="Search"
                                />
                                <button className="absolute right-1 top-1 bg-[#544fcc] text-white px-[10px] py-[5px] rounded-md">
                                    Subscribe
                                </button>
                            </div>

                            <p>
                                Embark on a journey to find your ideal living space with NestBes. Explore a curated selection of properties.
                            </p>
                            <div className="flex space-x-4">
                                <FaXTwitter className="bg-white text-[#544fcc] rounded-full p-[5px] w-[30px] h-[30px]" />
                                <SlSocialInstagram className="bg-white text-[#544fcc] rounded-full p-[5px] w-[30px] h-[30px]" />
                                <FaFacebookF className="bg-white text-[#544fcc] rounded-full  p-[5px] w-[30px] h-[30px]" />
                                <CiLinkedin className="bg-white text-[#544fcc] rounded-full p-[5px] w-[30px] h-[30px]" />
                            </div>

                        </div>

                        {/* Column 2: Quick Links */}
                        <div className="flex flex-col gap-[20px]">
                            <h3 className="text-white text-xl font-semibold">Quick Links</h3>
                            <div className="space-y-5">
                                <p className="hover:text-white text-gray-300 cursor-pointer text-[16px] font-normal">Home</p>
                                <p className="hover:text-white text-gray-300 cursor-pointer text-[16px] font-normal">About Us</p>
                                <p className="hover:text-white text-gray-300 cursor-pointer text-[16px] font-normal">Property</p>
                                <p className="hover:text-white text-gray-300 cursor-pointer text-[16px] font-normal">Blog</p>
                                <p className="hover:text-white text-gray-300 cursor-pointer text-[16px] font-normal">Contact</p>
                            </div>
                        </div>

                        {/* Column 3: Utility Pages */}
                        <div className="flex flex-col gap-[20px]">
                            <h3 className="text-white text-xl font-semibold">Utility Pages</h3>
                            <div className="space-y-5">
                                <p className="hover:text-white text-gray-300 cursor-pointer text-[16px] font-normal">Password Protected</p>
                                <p className="hover:text-white text-gray-300 cursor-pointer text-[16px] font-normal">404 Not Found</p>
                                <p className="hover:text-white text-gray-300 cursor-pointer text-[16px] font-normal">Style Guide</p>
                                <p className="hover:text-white text-gray-300 cursor-pointer text-[16px] font-normal">License</p>
                                <p className="hover:text-white text-gray-300 cursor-pointer text-[16px] font-normal">Changelog</p>
                            </div>
                        </div>

                        {/* Column 4: Contact Info */}
                        <div className='flex flex-col gap-5'>
                            <h3 className="text-white text-xl font-semibold mb-4">Contact</h3>
                            <p className="text-sm">1234 Real Estate St, City Name, Country</p>
                            <p className="text-sm mt-2">Phone: (123) 456-7890</p>
                            <p className="text-sm">Email: contact@realestate.com</p>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Footer Bottom Section */}
            <div className='bg-gray-900 py-[20px]'>
                <div className="border-gray-700 pt-4 text-center text-sm flex justify-center items-center">
                    <h5 className='text-white'>
                        Copyright© NestBes | Designed by <span className='text-[#544fcc]'>Brandbes</span> - Powered by <span className='text-[#544fcc]'>Webflow</span>.
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default Footer;
