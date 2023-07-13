import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-darkBackground-700 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col lg:w-1/4">
            <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 text-sm">
              BookMyShow is India's largest entertainment ticketing platform that allows users to book tickets for movies,
              events, plays, sports, and more.
            </p>
          </div>
          <div className="flex flex-col lg:w-1/4 mt-6 lg:mt-0">
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-400 text-sm">
              <li className="mb-2">
                <a href="/" className="hover:text-white">Home</a>
              </li>
              <li className="mb-2">
                <a href="/movies" className="hover:text-white">Movies</a>
              </li>
              <li className="mb-2">
                <a href="/events" className="hover:text-white">Events</a>
              </li>
              <li className="mb-2">
                <a href="/tv" className="hover:text-white">TV Shows</a>
              </li>
              <li className="mb-2">
                <a href="/sports" className="hover:text-white">Sports</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col lg:w-1/4 mt-6 lg:mt-0">
            <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                <FaFacebookF className="text-white text-2xl hover:text-gray-400" />
              </a>
              <a href="https://twitter.com" target="_blank"  rel="noreferrer"> 
                <FaTwitter className="text-white text-2xl hover:text-gray-400" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram className="text-white text-2xl hover:text-gray-400" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                <FaYoutube className="text-white text-2xl hover:text-gray-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-600 my-6" />
      <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
        <p> &copy; 2023 Shan-G2-Sri. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
