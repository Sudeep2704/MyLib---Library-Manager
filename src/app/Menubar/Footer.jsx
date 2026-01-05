// import React from "react";
// import "./Footer.css";

// const Footer = () => {
//   return (
//     <footer className="footer overflow-x-hidden">
//       <div className="footer-container">

//         <div className="footer-links">
//           <div className="column">
//             <h4>Features</h4>
//             <a href="/">Growth</a>
//             <a href="/">Sales</a>
//             <a href="/">Chat</a>
//           </div>
//           <div className="column">
//             <h4>Pricing</h4>
//             <a href="/">Free Trial</a>
//             <a href="/">Standard</a>
//             <a href="/">Business</a>
//           </div>
//           <div className="column">
//             <h4>Enterprise</h4>
//             <a href="/">Personalize</a>
//             <a href="/">Automation</a>
//             <a href="/">Invoicing</a>
//             <a href="/">24/7 Support</a>
//           </div>
//           <div className="column">
//             <h4>Careers</h4>
//             <a href="/">Open Positions</a>
//             <a href="/">Part-Time</a>
//             <a href="/">Contractual</a>
//             <a href="/">Contact Us</a>
//           </div>
//         </div>

//         <div className="footer-bottom">
//           <p>© Copyright 2024. Your Site. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";

const Footer = () => {
  return (
    <footer className="bg-transparent text-black py-16 md:py-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Links Section */}
        <div className="flex flex-wrap justify-center gap-60 mb-6 " >
          <div className="flex flex-col items-center gap-2">
            <h4 className="text-lg font-bold mb-4">Features</h4>
            <a href="/" className="hover:text-blue-500 transition-colors">Growth</a>
            <a href="/" className="hover:text-blue-500 transition-colors">Sales</a>
            <a href="/" className="hover:text-blue-500 transition-colors">Chat</a>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h4 className="text-lg font-bold mb-4">Pricing</h4>
            <a href="/" className="hover:text-blue-500 transition-colors">Free Trial</a>
            <a href="/" className="hover:text-blue-500 transition-colors">Standard</a>
            <a href="/" className="hover:text-blue-500 transition-colors">Business</a>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h4 className="text-lg font-bold mb-4">Enterprise</h4>
            <a href="/" className="hover:text-blue-500 transition-colors">Personalize</a>
            <a href="/" className="hover:text-blue-500 transition-colors">Automation</a>
            <a href="/" className="hover:text-blue-500 transition-colors">Invoicing</a>
            <a href="/" className="hover:text-blue-500 transition-colors">24/7 Support</a>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h4 className="text-lg font-bold mb-4">Careers</h4>
            <a href="/" className="hover:text-blue-500 transition-colors">Open Positions</a>
            <a href="/" className="hover:text-blue-500 transition-colors">Part-Time</a>
            <a href="/" className="hover:text-blue-500 transition-colors">Contractual</a>
            <a href="/" className="hover:text-blue-500 transition-colors">Contact Us</a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-sm mt-4">
          <p>© Copyright 2024. Your Site. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
