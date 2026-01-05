// import React from "react";
// import Image from "next/image";
// const Testimonials = () => {
//   return (
//     <section className="bg-green-700 text-white py-20 md:py-28 px-6 relative min-h-screen flex flex-col items-center">
//       <div className="text-center mb-10">
//         <h2 className="text-4xl font-bold">Hear from our users</h2>
//         <p className="text-lg mt-2">Loved by readers, trusted by all!</p>
//       </div>

//       <div className="absolute inset-x-0 top-40 md:top-32 flex justify-center mt-20">
//         <div>
//       <Image width={450} height={600} alt=""  className="w-96 h-96" src="/assets/test.png" />      
//         </div>
//       </div>

//       <div className="relative z-10 flex  flex-row justify-center gap-8 px-6 md:px-16 max-w-6xl mt-16">
//         <TestimonialCard
//           name="Robert Fox"
//           role="CEO of Bifco Enterprises Ltd."
//           text="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet? Ut enim ad minima veniam, quis nostrum exercitationem ullam."
//           logo="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
//         />
//         <TestimonialCard
//           name="Brooklyn Simmons"
//           role="CEO of AB.co"
//           text="Ut enim ad minima veniam, quis nostrum exercitationem ullam? Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
//           logo="https://upload.wikimedia.org/wikipedia/commons/5/50/X_logo_2023.svg"
//         />
//         <TestimonialCard
//           name="Cameron Black"
//           role="CEO at Barone LLC."
//           text="Adipiscing elit duis tristique sollicitudin. Nibh viverra maecenas accumsan. Nemo enim voluptatem quia voluptas sit aspernatur."
//           logo="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
//         />
//       </div>
//     </section>
//   );
// };

// const TestimonialCard = ({ name, role, text, logo }) => {
//   return (
//     <div className="bg-white text-black rounded-lg shadow-lg p-6 w-80 sm:w-96 flex flex-col items-center transition-transform transform hover:scale-105">
//       <div className="flex items-center w-full">
//         <div className="flex-1">
//           <h3 className="font-bold">{name}</h3>
//           <p className="text-sm text-gray-500">{role}</p>
//         </div>
//         <img src={logo} alt="Logo" className="w-8 h-8" />
//       </div>
//       <p className="mt-4 text-gray-700">{text}</p>
//     </div>
//   );
// };

// export default Testimonials;


import React from "react";
import Image from "next/image";
import { AiFillGoogleCircle, AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";

const Testimonials = () => {
  return (
    <section className="bg-green-700 text-white py-20 md:py-28 px-6 relative min-h-screen flex flex-col items-center">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Hear from our users</h2>
        <p className="text-lg mt-2">Loved by readers, trusted by all!</p>
      </div>

      <div className="absolute inset-x-0 top-40 md:top-32 flex justify-center mt-20">
        <Image width={450} height={600} alt="Testimonials" className="w-96 h-96" src="/assets/test.png" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row justify-center gap-8 px-6 md:px-16 max-w-6xl mt-16">
        <TestimonialCard
          name="Robert Fox"
          role="CEO of Bifco Enterprises Ltd."
          text="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet? Ut enim ad minima veniam, quis nostrum exercitationem ullam."
          Icon={AiFillGoogleCircle}
        />
        <TestimonialCard
          name="Brooklyn Simmons"
          role="CEO of AB.co"
          text="Ut enim ad minima veniam, quis nostrum exercitationem ullam? Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
          Icon={AiOutlineTwitter}
        />
        <TestimonialCard
          name="Cameron Black"
          role="CEO at Barone LLC."
          text="Adipiscing elit duis tristique sollicitudin. Nibh viverra maecenas accumsan. Nemo enim voluptatem quia voluptas sit aspernatur."
          Icon={AiFillFacebook}
        />
      </div>
    </section>
  );
};

const TestimonialCard = ({ name, role, text, Icon }) => {
  return (
    <div className="bg-white text-black rounded-lg shadow-lg p-6 w-80 sm:w-96 flex flex-col items-center transition-transform transform hover:scale-105">
      <div className="flex items-center w-full">
        <div className="flex-1">
          <h3 className="font-bold">{name}</h3>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
        <Icon className="text-3xl text-blue-600" />
      </div>
      <p className="mt-4 text-gray-700">{text}</p>
    </div>
  );
};

export default Testimonials;
