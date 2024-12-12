import React from 'react'
import headarrow from '../../Assets/imges/headarrow.png'
import titleicon1 from '../../Assets/imges/titleicon1.png'
import titleicon from '../../Assets/imges/titleicon.png'

const dashboardhead = () => {
  return (
    <div>
      <h1 className='text-center py-[200px] relative text-[70px] font-semibold'>
        Get Real Estate Experience To The
        <br />
        <img src={headarrow} alt="Arrow" className='inline-block my-4' />
        Next Level With
        <span className='border-2 border-[#339449] text-[#339449] rounded-lg px-1 relative inline-block'>
          Nestbees
          <img
            src={titleicon}
            alt="Left Icon"
            className='absolute left-[-20px] top-0 transform -translate-y-1/2'
          />
          <img
            src={titleicon1}
            alt="Right Icon"
            className='absolute right-[-20px] top-0 transform -translate-y-1/2'
          />
        </span>

      </h1>


    </div>
  )
}

export default dashboardhead