import React from 'react';
import Image from 'next/image';

const Aboutus = () => {
  return (
    <div className='flex flex-col gap-4 w-full min-h-screen bg-[#EDFFF5] p-4 sm:p-12'>
      <div className='w-full sm:w-9/12 md:w-11/12 mx-auto flex flex-col sm:flex-row gap-8 items-center sm:items-start text-center sm:text-left'>
        <div className='text flex flex-col gap-3 w-full sm:w-1/2'>
          <h2 className='font-semibold text-2xl sm:text-3xl'>About US</h2>
          <p className='text-sm sm:text-base'>
            Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard.
          </p>
          <div className='flex flex-col gap-4 items-center sm:items-start'>
            <div className='flex flex-row gap-4 items-center'>
              <Image width={20} height={40} alt="" className='w-5 h-5' src="/assets/check.png" />
              <p className='text-sm sm:text-base'>Efficient Book Tracking</p>
            </div>
            <div className='flex flex-row gap-4 items-center'>
              <Image width={20} height={40} alt="" className='w-5 h-5' src="/assets/check.png" />
              <p className='text-sm sm:text-base'>User-Friendly Interface</p>
            </div>
            <div className='flex flex-row gap-4 items-center'>
              <Image width={20} height={40} alt="" className='w-5 h-5' src="/assets/check.png" />
              <p className='text-sm sm:text-base'>Real-Time Updates</p>
            </div>
          </div>
          <div className='flex flex-row justify-center sm:justify-start mt-3 gap-4 items-center'>
            <p className='text-blue-600 text-sm sm:text-base'>Learn More</p>
            <Image width={4000} height={1650} src="/assets/Button.png" className='w-[30px] h-[30px] cursor-pointer' alt="About page" />
          </div>
        </div>
        <Image width={600} height={660} src="/assets/about1.png" className='rounded-5xl max-w-[90%] sm:max-w-[500px] mx-auto sm:mx-0 h-[250px] sm:h-[340px]' alt="About page" />
      </div>

      {/* Second Section */}
      <div className='w-full sm:w-9/12 md:w-11/12 mx-auto flex flex-col sm:flex-row gap-8 mt-12 items-center sm:items-start text-center sm:text-left'>
        <Image width={4000} height={1650} src="/assets/about2.png" className='rounded-2xl max-w-[90%] sm:max-w-[500px] mx-auto sm:mx-0 h-[250px] sm:h-[340px]' alt="About page" />
        <div className='text flex flex-col gap-3 w-full sm:w-1/2'>
          <h4 className='text-green-600 text-sm sm:text-base'>Customer Favourite</h4>
          <h2 className='font-semibold text-2xl sm:text-3xl'>Discover the highest-rated books, loved by Our customers.</h2>
          <p className='text-sm sm:text-base'>
            Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard.
          </p>
          <div className='flex flex-col gap-4 items-center sm:items-start'>
            <div className='flex flex-row gap-4 items-center'>
              <Image width={20} height={40} alt="" className='w-5 h-5' src="/assets/check.png" />
              <p className='text-sm sm:text-base'>Efficient Book Tracking</p>
            </div>
            <div className='flex flex-row gap-4 items-center'>
              <Image width={20} height={40} alt="" className='w-5 h-5' src="/assets/check.png" />
              <p className='text-sm sm:text-base'>User-Friendly Interface</p>
            </div>
          </div>
          <div className='flex flex-row justify-center sm:justify-start mt-3 gap-4 items-center'>
            <p className='text-green-600 text-sm sm:text-base'>Learn More</p>
            <Image width={4000} height={1650} src="/assets/Button1.png" className='w-[30px] h-[30px] cursor-pointer' alt="About page" />
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className='w-full sm:w-9/12 md:w-11/12 mx-auto flex flex-col sm:flex-row gap-8 mt-12 items-center sm:items-start text-center sm:text-left'>
        <div className='text flex flex-col gap-3 w-full sm:w-1/2'>
          <h2 className='font-semibold text-2xl sm:text-3xl'>Events & Announcements:</h2>
          <p className='text-sm sm:text-base'>
            Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard.
          </p>
          <div className='flex flex-col sm:flex-row gap-8 mt-7 items-center sm:items-start'>
            <div className='flex flex-col gap-2'>
              <p className='font-semibold text-2xl'>100+</p>
              <p className='text-sm sm:text-base'>Event Organised</p>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='font-semibold text-2xl'>800+</p>
              <p className='text-sm sm:text-base'>Event Organised</p>
            </div>
          </div>
          <div className='flex flex-row justify-center sm:justify-start mt-5 gap-4 items-center'>
            <p className='text-pink-600 text-sm sm:text-base'>Learn More</p>
            <Image width={4000} height={2650} src="/assets/Button2.png" className='w-[30px] h-[30px] cursor-pointer' alt="About page" />
          </div>
        </div>
        <Image width={4000} height={2650} src="/assets/about3.png" className='rounded-3xl max-w-[90%] sm:max-w-[500px] mx-auto sm:mx-0 h-[250px] sm:h-[340px]' alt="About page" />
      </div>
    </div>
  );
};

export default Aboutus;
