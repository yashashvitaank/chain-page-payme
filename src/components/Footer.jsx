// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import social media icons
import logo from '/logoblack.svg'; // Import logo image

const Footer = () => {
  return (
    <div className="bg-white border-t border-zinc-300">
      {/* Top Black Line */}
      <div className="border-b-2 border-zinc-300"></div>

      <div className="container mx-auto px-4 py-8">
        {/* Footer Content Row */}
        <div className="flex flex-wrap">
          {/* Logo Section */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <div className="mb-4">
              <img src={logo} alt="Company Logo" className="w-40 h-auto" />
            </div>
            <div className="flex space-x-2 mt-2">
              <a href="#" className="bg-blue-500 text-white p-2 rounded-full text-sm"><FaFacebook /></a>
              <a href="#" className="bg-blue-400 text-white p-2 rounded-full text-sm"><FaTwitter /></a>
              <a href="#" className="bg-blue-700 text-white p-2 rounded-full text-sm"><FaLinkedin /></a>
              <a href="#" className="bg-pink-500 text-white p-2 rounded-full text-sm"><FaInstagram /></a>
            </div>
          </div>

          {/* Company Column */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4 text-primary-black">Company</h3>
            <ul className="space-y-2 text-sm text-primary-black">
              <li><a href="https://paymefin.tech/"  target='_blank' className="hover:underline">Home</a></li>
              <li><a href="https://paymefin.tech/about" target='_blank' className="hover:underline">About</a></li>
              <li><a href="https://paymefin.tech/contact" target='_blank' className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Careers Column */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4 text-primary-black">Careers</h3>
            <ul className="space-y-2 text-sm text-primary-black">
              <li><a href="#" className="hover:underline">Freshers</a></li>
              <li><a href="#" className="hover:underline">Students</a></li>
              <li><a href="#" className="hover:underline">Posts</a></li>
            </ul>
          </div>

          {/* Company Details Column */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4 text-primary-black">Contact Details</h3>
            <ul className="space-y-2 text-sm text-primary-black">
              <li><a href="#" className="hover:underline">Kaushalya Niwas 70, Ground Floor Sector 48 Near Badkal Mor Metro Station Faridabad Haryana 121001</a></li>
              <li><a href="#" className="hover:underline">+91 33 6125 0706</a></li>
              <li><a href="mailto:support@paymefin.tech" className="hover:underline">support@paymefin.tech</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Black Line */}
      <div className="border-t-2 border-zinc-300"></div>

      {/* Footer Links */}
      <div className="bg-gray-100 py-4 text-center text-sm">
        <p className="mb-2 text-primary-black">
          <a href="#" className="hover:underline">Disclaimer</a> |
          <a href="#" className="hover:underline"> Copyright@BITPayme Technology Pvt Ltd</a> |
          <a href="#" className="hover:underline"> Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
