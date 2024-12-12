import React, { useState } from "react";
import '../../styles/global.css'

const Navbar = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  return (
    //     <div className="container mx-auto max-w-[960px]">
    //       <nav className="bg-[#e5e9ef] rounded-[20px] mt-[35px] px-[20px] py-[25px] mx-[20px]">
    //         <div className="max-w-7xl mx-auto flex items-center justify-between">
    //           {/* Logo */}
    //           <div className="text-white text-2xl font-bold">
    //             <a href="#">MyLogo</a>
    //           </div>

    //           {/* Menu for large screens */}
    //           <div className="hidden md:flex space-x-4 gap-[30px]">
    //             <a
    //               href="#"
    //               className="text-[#06061] text-[20px] font-normal relative hover:text-[#544fcc] group"
    //             >
    //               Home
    //               <span className="absolute left-0 bottom-[-5px] w-full h-[2px] bg-[#544fcc] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></span>
    //             </a>
    //             <a
    //               href="#"
    //               className="text-[#06061] text-[20px] font-normal relative hover:text-[#544fcc] group"
    //             >
    //               About Us
    //               <span className="absolute left-0 bottom-[-5px] w-full h-[2px] bg-[#544fcc] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></span>
    //             </a>
    //             <a
    //               href="#"
    //               className="text-[#06061] text-[20px] font-normal relative hover:text-[#544fcc] group"
    //             >
    //               Property
    //               <span className="absolute left-0 bottom-[-5px] w-full h-[2px] bg-[#544fcc] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></span>
    //             </a>

    //             {/* Dropdown (Show on Hover) */}
    //             <div className="relative group">
    //               <button className="text-[#06061] text-[20px] font-normal hover:text-[#544fcc]">
    //                 Pages
    //               </button>
    //               <div className="absolute left-0 hidden mt-2 w-48 bg-gray-700 text-white rounded-md shadow-lg group-hover:block group-hover:scale-100 scale-0 transition-all duration-300 ease-in-out transform origin-top">
    //                 <a
    //                   href="#"
    //                   className="block px-4 py-2 hover:text-[#544fcc] hover:underline"
    //                 >
    //                   Web Development
    //                 </a>
    //                 <a
    //                   href="#"
    //                   className="block px-4 py-2 hover:text-[#544fcc] hover:underline"
    //                 >
    //                   Mobile App Development
    //                 </a>
    //                 <a
    //                   href="#"
    //                   className="block px-4 py-2 hover:text-[#544fcc] hover:underline"
    //                 >
    //                   UI/UX Design
    //                 </a>
    //               </div>
    //             </div>

    //             <a
    //               href="#"
    //               className="text-[#06061] text-[20px] font-normal relative hover:text-[#544fcc] group"
    //             >
    //               Agent
    //               <span className="absolute left-0 bottom-[-5px] w-full h-[2px] bg-[#544fcc] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></span>
    //             </a>
    //           </div>

    //           {/* Contact Us Button for large screens */}
    //           <div className="hidden md:block">
    //             <button className="text-white bg-black px-[16px] py-[6px] rounded-[8px] font-normal text-[20px]">
    //               Contact Us
    //             </button>
    //           </div>

    //           {/* Toggle button for mobile */}
    //           <button
    //   onClick={toggleMenu}
    //   className="md:hidden text-white focus:outline-none bg-[#544fcc] border-2 border-[#544fcc] rounded-[8px] p-2"
    // >
    //   {isMenuOpen ? (
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       stroke="currentColor"
    //       className="w-7 h-7"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth="2"
    //         d="M6 18L18 6M6 6l12 12"
    //       />
    //     </svg>
    //   ) : (
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       stroke="currentColor"
    //       className="w-7 h-7"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth="2"
    //         d="M4 6h16M4 12h16M4 18h16"
    //       />
    //     </svg>
    //   )}
    // </button>

    //         </div>

    //         {/* Mobile Menu with slide-in effect */}
    //         <div
    //           className={`fixed top-0 left-0 bottom-0 bg-black transition-transform duration 1000 ease-in-out transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
    //             } md:hidden`}
    //           style={{
    //             zIndex: isMenuOpen ? 50 : -1,
    //             width: "50%",
    //           }}
    //         >
    //           <div className="space-y-4 p-4">
    //             <a
    //               href="#"
    //               className="block text-white hover:text-[#544fcc] py-2 relative group"
    //             >
    //               Home
    //               <span className="absolute left-0 bottom-[-5px] w-0 group-hover:w-[45px] h-[2px] bg-[#544fcc] transition-all duration-500 ease-in-out"></span>
    //             </a>
    //             <a
    //               href="#"
    //               className="block text-white hover:text-[#544fcc] py-2 relative group"
    //             >
    //               About Us
    //               <span className="absolute left-0 bottom-[-5px] w-0 group-hover:w-[65px] h-[2px] bg-[#544fcc] transition-all duration-500 ease-in-out"></span>
    //             </a>

    //             {/* Mobile dropdown */}
    //             <div className="relative">
    //               <button
    //                 onClick={toggleDropdown}
    //                 className="block text-white hover:text-[#544fcc] py-2 relative group"
    //               >
    //                 Property
    //                 <span className="absolute left-0 bottom-[-5px] w-0 group-hover:w-[60px] h-[2px] bg-[#544fcc] transition-all duration-500 ease-in-out"></span>
    //               </button>
    //               {isDropdownOpen && (
    //                 <div className="absolute left-0 mt-2 w-full bg-gray-700 text-white rounded-md shadow-lg">
    //                   <a
    //                     href="#"
    //                     className="block px-4 py-2 hover:text-[#544fcc] hover:underline"
    //                   >
    //                     Web Development
    //                   </a>
    //                   <a
    //                     href="#"
    //                     className="block px-4 py-2 hover:text-[#544fcc] hover:underline"
    //                   >
    //                     Mobile App Development
    //                   </a>
    //                   <a
    //                     href="#"
    //                     className="block px-4 py-2 hover:text-[#544fcc] hover:underline"
    //                   >
    //                     UI/UX Design
    //                   </a>
    //                 </div>
    //               )}
    //             </div>

    //             <a
    //               href="#"
    //               className="block text-white hover:text-[#544fcc] py-2 relative group"
    //             >
    //               Pages
    //               <span className="absolute left-0 bottom-[-5px] w-0 group-hover:w-[40px] h-[2px] bg-[#544fcc] transition-all duration-500 ease-in-out"></span>
    //             </a>
    //             <a
    //               href="#"
    //               className="block text-white hover:text-[#544fcc] py-2 relative group"
    //             >
    //               Agent
    //               <span className="absolute left-0 bottom-[-5px] w-0 group-hover:w-[40px] h-[2px] bg-[#544fcc] transition-all duration-500 ease-in-out"></span>
    //             </a>

    //             {/* Contact Us Button for mobile */}
    //             <div className="mt-4">
    //               <button className="w-[150px] text-white bg-black px-[16px] py-[6px] border border-white rounded-[8px] font-normal text-[20px] ">
    //                 Contact Us
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </nav>
    //     </div>
    <div>
      <main className="main-wrapper">
        <header className="header">
          <div className="w-layout-blockcontainer container-default navbar-container w-container">
            <div className="navbar-content-wrapper">
              {/* Site logo */}
              <a href="/home/home-one" className="navbar-brand w-nav-brand">
                <img
                  src="https://cdn.prod.website-files.com/668f4d3cb04ed39f764a5ecc/66939e29659895fa7c0698a5_Site%20Logo.png"
                  loading="lazy"
                  alt="Site Logo"
                  className="site-logo"
                />
              </a>

              {/* Navigation bar */}
              <div
                data-animation="over-left"
                data-collapse="medium"
                data-duration="400"
                data-easing="ease"
                data-easing2="ease"
                data-doc-height="1"
                role="banner"
                className="navbar-pages-wrapper w-nav"
              >
                <nav role="navigation" className="nav-menu-wrapper w-nav-menu">
                  <ul role="list" className="nav-menu-list-wrapper">

                    {/* Mobile logo */}
                    <li className="nav-menu-item-wrapper mobile-menu-logo-wrapper">
                      <a href="/home/home-one" className="navbar-brand w-nav-brand">
                        <img
                          src="https://cdn.prod.website-files.com/668f4d3cb04ed39f764a5ecc/6693ba56a9c4da84d6feb9da_Footer%20Logo%20Image.png"
                          loading="lazy"
                          alt="Site Logo White"
                          className="site-logo"
                        />
                      </a>
                    </li>

                    {/* Home Dropdown */}
                    <li className="nav-menu-item-wrapper">
                      <div className="nav-menu-dropdown w-dropdown">
                        <div className="nav-menu-dropdown-button w-dropdown-toggle">
                          <div className="nav-menu-item">
                            <div className="nav-menu-link top-menu-link">Home</div>
                            <div className="nav-item-border"></div>
                          </div>
                          <div className="nav-menu-dropdown-icon w-embed">
                            <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M6.27832 7.0584C6.19635 7.0594 6.11508 7.04323 6.03973 7.01094C5.96438 6.97865 5.89663 6.93095 5.84082 6.8709L0.21582 1.2459C-0.0341797 0.995898 -0.0341797 0.608398 0.21582 0.358398C0.46582 0.108398 0.85332 0.108398 1.10332 0.358398L6.29082 5.5459L11.4658 0.370898C11.7158 0.120898 12.1033 0.120898 12.3533 0.370898C12.6033 0.620898 12.6033 1.0084 12.3533 1.2584L6.72832 6.8834C6.60332 7.0084 6.44082 7.0709 6.29082 7.0709L6.27832 7.0584Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                        <nav className="nav-dropdown-list small-dropdown-list w-dropdown-list">
                          <div className="dropdown-items-column">
                            <div className="nav-menu-item">
                              <a href="/home/home-one" className="nav-menu-link dropdown-menu-link">
                                Home One
                              </a>
                              <div className="nav-item-border"></div>
                            </div>
                            <div className="nav-menu-item">
                              <a href="/home/home-two" className="nav-menu-link dropdown-menu-link w--current">
                                Home Two
                              </a>
                              <div className="nav-item-border"></div>
                            </div>
                          </div>
                        </nav>
                      </div>
                    </li>

                    {/* About Us */}
                    <li className="nav-menu-item-wrapper">
                      <div className="nav-menu-item">
                        <a href="/about-us" className="nav-menu-link top-menu-link">About Us</a>
                        <div className="nav-item-border"></div>
                      </div>
                    </li>

                    {/* Property */}
                    <li className="nav-menu-item-wrapper">
                      <div className="nav-menu-item">
                        <a href="/property" className="nav-menu-link top-menu-link">Property</a>
                        <div className="nav-item-border"></div>
                      </div>
                    </li>

                    {/* Pages Dropdown */}
                    <li className="nav-menu-item-wrapper">
                      <div className="nav-menu-dropdown w-dropdown">
                        <div className="nav-menu-dropdown-button w-dropdown-toggle">
                          <div className="nav-menu-item">
                            <div className="nav-menu-link top-menu-link">Pages</div>
                            <div className="nav-item-border"></div>
                          </div>
                          <div className="nav-menu-dropdown-icon w-embed">
                            <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M6.27832 7.0584C6.19635 7.0594 6.11508 7.04323 6.03973 7.01094C5.96438 6.97865 5.89663 6.93095 5.84082 6.8709L0.21582 1.2459C-0.0341797 0.995898 -0.0341797 0.608398 0.21582 0.358398C0.46582 0.108398 0.85332 0.108398 1.10332 0.358398L6.29082 5.5459L11.4658 0.370898C11.7158 0.120898 12.1033 0.120898 12.3533 0.370898C12.6033 0.620898 12.6033 1.0084 12.3533 1.2584L6.72832 6.8834C6.60332 7.0084 6.44082 7.0709 6.29082 7.0709L6.27832 7.0584Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                        <nav className="nav-dropdown-list w-dropdown-list">
                          <div className="nav-menu-dropdown-wrapper">
                            <div className="dropdown-items-column">
                              <div className="nav-menu-item">
                                <a href="/blog" className="nav-menu-link dropdown-menu-link">Blog</a>
                                <div className="nav-item-border"></div>
                              </div>
                              <div className="nav-menu-item">
                                <a href="https://nestbes.webflow.io/properties/luxurious-penthouse" className="nav-menu-link dropdown-menu-link">
                                  Property Details
                                </a>
                                <div className="nav-item-border"></div>
                              </div>
                              <div className="nav-menu-item">
                                <a href="https://nestbes.webflow.io/agents/guy-hawkins" className="nav-menu-link dropdown-menu-link">
                                  Agent Details
                                </a>
                                <div className="nav-item-border"></div>
                              </div>
                              <div className="nav-menu-item">
                                <a href="https://nestbes.webflow.io/post/top-trends-shaping-the-real-estate-market-in-2024" className="nav-menu-link dropdown-menu-link">
                                  Blog Details
                                </a>
                                <div className="nav-item-border"></div>
                              </div>
                            </div>
                          </div>
                        </nav>
                      </div>
                    </li>

                    {/* Agent */}
                    <li className="nav-menu-item-wrapper">
                      <div className="nav-menu-item">
                        <a href="/agent" className="nav-menu-link top-menu-link">Agent</a>
                        <div className="nav-item-border"></div>
                      </div>
                    </li>

                    {/* Contact Us CTA */}
                    <li className="nav-menu-item-wrapper mobile-menu-nav-cta">
                      <a href="/contact-us" className="secondary-button-wrapper mobile-menu-cta-button w-inline-block">
                        <p className="secondary-button-text">Contact Us</p>
                      </a>
                    </li>
                  </ul>

                  {/* Close button */}
                  <div className="menu-button menu-close-button w-nav-button">
                    <img
                      src="https://cdn.prod.website-files.com/668f4d3cb04ed39f764a5ecc/66949902d284a8bb493d9377_close%20icon.png"
                      loading="lazy"
                      alt="Close menu"
                      className="menu-icon cross-icon"
                    />
                  </div>
                </nav>

                {/* Mobile menu toggle */}
                <div className="menu-button w-nav-button">
                  <div className="menu-icon w-icon-nav-menu"></div>
                </div>
              </div>

              {/* Desktop CTA */}
              <div className="navbar-cta-wrapper">
                <a href="/contact-us" className="secondary-button-wrapper w-inline-block">
                  <p className="secondary-button-text">Contact Us</p>
                </a>
              </div>
            </div>
          </div>
        </header>
      </main>

    </div>
  );
};

export default Navbar;
