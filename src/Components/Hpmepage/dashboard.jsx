import React, { useState } from 'react';
import star from '../../Assets/imges/Vector.jpg';
import review from '../../Assets/imges/reviewers.png';
import home1 from '../../Assets/imges/home1.jpg';
import home2 from '../../Assets/imges/home2.jpg';
import rotatelogo from '../../Assets/imges/rotatelogo.png';
import Dashboardhead from '../Common/dashboardhead';
import { BsArrowUpRight } from "react-icons/bs";
import '../../styles/global.css';


const Dashboard = () => {
  // Define state for dropdowns and search input
  const [dropdown1, setDropdown1] = useState('');
  const [dropdown2, setDropdown2] = useState('');
  const [search, setSearch] = useState('');

  // Handle dropdown 1 change
  const handleDropdown1Change = (e) => {
    setDropdown1(e.target.value);
  };

  // Handle dropdown 2 change
  const handleDropdown2Change = (e) => {
    setDropdown2(e.target.value);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Handle search button click
  const handleSearchClick = () => {
    console.log('Search:', search);
    console.log('Dropdown 1:', dropdown1);
    console.log('Dropdown 2:', dropdown2);
    // Perform your search action here
  };

  return (
    <div className='bg-gray-100'>
      <Dashboardhead />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mx-auto max-w-[1290px] p-4">
        {/* Left section */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="w-[40px] h-[40px]">
              <img
                src={star}
                alt="Star"
                className="bg-white p-[10px] border rounded-full w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-[20px] font-medium">4.5</p>
              <p className="text-[16px] font-normal text-gray-600">Positive Reviews</p>
            </div>
          </div>

          <div className="flex gap-4 bg-white p-4 border rounded-lg w-full sm:w-[250px]">
            <img src={review} alt="review" />
            <p className="text-[16px] font-normal">Happy Customers</p>
          </div>

          <p className="text-[20px] font-normal text-gray-600">
            Embark on a journey to find your ideal living space with NestBes. Explore a curated selection of properties.
          </p>

          {/* Dropdowns */}
          <div className="flex gap-4 flex-col p-4 w-full sm:w-[320px] bg-white rounded-lg shadow-md">
            <select
              value={dropdown1}
              onChange={handleDropdown1Change}
              className="p-4 border rounded-lg text-[16px] font-normal bg-gray-100 transition-all duration-300 ease-in-out transform hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <option value="" className='text-gray-200'>Location</option>
              <option className="text-gray-600 bg-white hover:bg-gray-200" value="option1">Option 1</option>
              <option className="text-gray-600 bg-white hover:bg-gray-200" value="option2">Option 2</option>
              <option className="text-gray-600 bg-white hover:bg-gray-200" value="option3">Option 3</option>
            </select>

            <select
              value={dropdown2}
              onChange={handleDropdown2Change}
              className="p-4 border rounded-lg text-[16px] font-normal bg-gray-100 transition-all duration-300 ease-in-out transform hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <option value="" className="text-gray-600">Price</option>
              <option className="text-gray-600 bg-white hover:bg-gray-200" value="optionA">Option A</option>
              <option className="text-gray-600 bg-white hover:bg-gray-200" value="optionB">Option B</option>
              <option className="text-gray-600 bg-white hover:bg-gray-200" value="optionC">Option C</option>
            </select>

            {/* Search Input and Button */}
            <div className="flex items-center gap-4">
              <button
                onClick={handleSearchClick}
                className="bg-[#544fcc] text-white py-3 px-6 rounded-lg font-semibold"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="w-full p-4 pt-[100px] relative group">
          <img
            src={rotatelogo}
            alt="Home Image 1"
            className="absolute top-[50px] left-1 p-[10px] h-auto bg-white border rounded-full w-[125px] rotate-animation  group-hover:text-white transition-all duration-300 cursor-pointer"
          />

         <div className="absolute top-[113px] left-[66px] transform -translate-x-1/2 -translate-y-1/2 group-hover:rotate-[45deg] transition-transform duration-300 cursor-pointer">
            <BsArrowUpRight className="w-[65px] h-[65px] text-black bg-gray-300 p-[10px] rounded-full group-hover:text-white group-hover:bg-black transition-all duration-300" />
          </div>
          <img
            src={home1}
            alt="Home Image 1"
            className="border rounded-xl w-full h-auto mb-4"
          />
        </div>


        <div className="w-full p-4">
          <img src={home2} alt="Home Image 2" className="border rounded-xl w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
