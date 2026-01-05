import React from 'react';
import Image from 'next/image';

function WhyUs() {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8 lg:px-16 "
    style={{ backgroundImage: 'url(/assets/whyus.png)', backgroundSize: 'cover', backgroundPosition:'center'}}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-white uppercase">Why Us ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="relative bg-black text-white p-8 rounded-lg shadow-xl border-t-4 border-l-4 border-indigo-900 transition-transform transform hover:scale-105 ">
        <div className='absolute -z-10 top-0 left-0 w-full h-full  rounded-lg '></div>
            <div className="flex items-center mb-4">
                <Image
                    width={25}
                    height={25}
                    alt='message-icon'
                    className='bg-indigo-900'
                    src='/assets/message.png'
                ></Image>
              <h3 className="text-xl font-bold text-white ml-4">User-Friendly Interface</h3>
            </div>
            <p className="text-gray-300"> Navigate effortlessly with our intuitive and easy-to-use design, tailored for all user levels.</p>
          </div>

          <div className="relative bg-black text-white p-8 rounded-lg shadow-xl border-t-4 border-l-4 border-indigo-900 transition-transform transform hover:scale-105 ">
          <div className='absolute -z-10 top-0 left-0 w-full h-full  rounded-lg '></div>
            <div className="flex items-center mb-4">
                <Image
                    width={25}
                    height={25}
                    alt='message-icon'
                    className='bg-indigo-900'
                    src='/assets/message.png'
                ></Image>
              
              <h3 className="text-xl font-bold text-white ml-4"> Comprehensive Search and Catalog </h3>
            </div>
            <p className="text-gray-300">
            Quickly find books, e-books, or other resources with our advanced search and organized catalog system.
            </p>
          </div>

          <div className="relative bg-black text-white p-8 rounded-lg shadow-xl border-t-4 border-l-4 border-indigo-900 transition-transform transform hover:scale-105 ">
          <div className='absolute -z-10 top-0 left-0 w-full h-full  rounded-lg '></div>
            <div className="flex items-center mb-4">
                <Image
                    width={25}
                    height={25}
                    alt='message-icon'
                    className='bg-indigo-900'
                    src='/assets/message.png'
                ></Image>
              
              <h3 className="text-xl font-bold text-white ml-4"> Seamless Borrowing and Returning </h3>
            </div>
            <p className="text-gray-300">
            Enjoy hassle-free borrowing and returning processes with automated reminders and renewal options.
            </p>
          </div>

          <div className="relative bg-black text-white p-8 rounded-lg shadow-xl border-t-4 border-l-4 border-indigo-900 transition-transform transform hover:scale-105 ">
          <div className='absolute -z-10 top-0 left-0 w-full h-full  rounded-lg '></div>
            <div className="flex items-center mb-4">
               <Image
                width={25}
                height={25}
                alt='message-icon'
                className='bg-indigo-900'
                src="/assets/message.png"
               ></Image>
              <h3 className="text-xl font-bold text-white ml-4">24/7 Digital Access</h3>
            </div>
            <p className="text-gray-300">
            Access e-books, research materials, and your account anytime, anywhere.
            </p>
          </div>
          <div className="relative bg-black text-white p-8 rounded-lg shadow-xl border-t-4 border-l-4 border-indigo-900 transition-transform transform hover:scale-105 ">
          <div className='absolute -z-10 top-0 left-0 w-full h-full  rounded-lg '></div>
            <div className="flex items-center mb-4">
               <Image
                width={25}
                height={25}
                alt='message-icon'
                className='bg-indigo-900'
                src="/assets/message.png"
               ></Image>
              <h3 className="text-xl font-bold text-white ml-4"> Customizable for Institutions </h3>
            </div>
            <p className="text-gray-300">
            Designed to adapt to your library’s unique needs, ensuring a personalized experience for users and administrators.
            </p>
          </div>
          <div className="relative bg-black text-white p-8 rounded-lg shadow-xl border-t-4 border-l-4 border-indigo-900 transition-transform transform hover:scale-105 ">
            <div className='absolute -z-10 top-0 left-0 w-full h-full  rounded-lg '></div>
            <div className="flex items-center mb-4">
               <Image
                width={25}
                height={25}
                alt='message-icon'
                className='bg-indigo-900'
                src="/assets/message.png"
               ></Image>
              <h3 className="text-xl font-bold text-white ml-4"> Dedicated Support </h3>
            </div>
            <p className="text-gray-300">
            Our team is always ready to assist with any technical issues or inquiries to enhance your experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}



export default WhyUs;