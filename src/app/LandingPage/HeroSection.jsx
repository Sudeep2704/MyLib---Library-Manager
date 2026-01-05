import React from "react";
import Image from "next/image";
import Link from "next/link";
import Aboutus from "@/app/LandingPage/Aboutus";
import Faq from "@/app/LandingPage/faq";
import WhyUs from "@/app/LandingPage/WhyUs";
import Footer from "@/app/Menubar/Footer";
import Testimonials from "./Testimonials";

export default function HeroSection() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="bg-[#EDFFF5] w-full relative sm:pt-32 pt-24 text-black overflow-hidden">
        {/* image */}
        <div className="absolute left-2/4 ml-28 mt-4 bg-contain opacity-50 bg-no-repeat ">
          <Image
            alt=""
            width={200}
            height={200}
            className="hidden sm:block md:w-full h-40 sm:h-52 md:h-72 "
            src="/assets/herobook1.png"
            priority
          ></Image>
        </div>
        {/* content */}
        <div className="relative flex justify-center items-center flex-col gap-1 sm:gap-3  ">
          <h1
            className=" font-bold text-center text-2xl 
      sm:text-4xl lg:text-6xl p-3 leading-tight word-wrap"
          >
            Organize, Access, Inspire:
            <br className="text-center"></br>
            Your Library, Your Way!
          </h1>
          <p
            className="text-center leading-snug text-xs 
      sm:text-sm md:text-base tracking-tight md:tracking-wide break-words"
          >
            Streamline your library experience with easy book management,
            seamless <br></br> searching, and quick access to your favorite
            resources.
          </p>
          <div className="flex justify-between gap-6">
          <Link href="/signup">
          <button
              className="w-24 h-8 md:w-32 md:h-12
       text-white text-sm md:text-base
      rounded-md mt-2 bg-[#4328EB]"
            >
              Get Started{" "}
            </button>
          </Link>
            <Link href="/signup">
              <Image
                width={40}
                height={26}
                alt=""
                className="w-8 h-8 md:w-12 md:h-10 mt-2
       md:mt-3 cursor-pointer rounded-full p-2 bg-[#4328EB] bg-opacity-20"
                src="/assets/arrow.png"
              ></Image>
            </Link>
          </div>
        </div>
        <Image
          width={500}
          height={470}
          alt="Cubic"
          className="w-3/12 h-2/6 relative bottom-14
      sm:bottom-28 md:bottom-28 overflow-hidden"
          src="/assets/cubic.png"
        ></Image>
        <div
          className=" sm:mt-8 lg:mt-0 xl:-mt-40 h-36 sm:h-20 md:h-40 lg:h-48 xl:h-96"
          style={{
            backgroundImage: `url('/assets/hero-bg.png')`,
            backgroundSize: "cover", 
            backgroundPosition: " center", 
            backgroundRepeat: "no-repeat",

          }}
        >
          <div
           className="relative flex bottom-40 sm:bottom-80 sm:left-20 md:bottom-60 left-[68px] lg:bottom-80 md:left-40 lg:left-60 "
           >
            <Image
              width={1300}
              height={1300}
              alt="Library"
              className="sm:w-6/12 w-8/12 rounded-2xl"
              src="/assets/lib.jpeg"
            ></Image>
     <Image 
            width={1300}
            height={1300}
             alt='Library'
             className=' w-2/12 sm:w-2/12 relative -left-20 lg:top-20 top-10 hidden sm:block '
             src='/assets/mobile.png'
            ></Image>
          </div>
        </div>
      </div>
      <Aboutus />
      <WhyUs />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
}
