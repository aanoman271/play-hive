import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaHeart,
} from "react-icons/fa";

const Fotter = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* ১. ব্র্যান্ড + স্লোগান */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-purple-600">PH</span>
              </div>
              <h2 className="text-3xl font-extrabold">PlayHive</h2>
            </div>
            <p className="text-lg font-medium">Toys • Fun • Learning</p>
            <p className="text-sm mt-2 opacity-90">
              Making childhood magical since 2025
            </p>
            <div className="flex gap-2 mt-4">
              <div className="w-8 h-8 bg-white/20 rounded-full animate-bounce"></div>
              <div className="w-8 h-8 bg-white/20 rounded-full animate-bounce delay-100"></div>
              <div className="w-8 h-8 bg-white/20 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>

          {/* ২. কুইক লিঙ্ক */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b-2 border-white/30 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/all-toys" className="hover:underline">
                  All Toys
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="hover:underline">
                  My Wishlist
                </Link>
              </li>
              <li>
                <Link to="/profile" className="hover:underline">
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* ৩. সাপোর্ট */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b-2 border-white/30 inline-block">
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Return Policy
                </a>
              </li>
            </ul>
          </div>

          {/* ৪. সোশ্যাল + নিউজলেটার */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b-2 border-white/30 inline-block">
              Stay Connected
            </h3>

            <div className="flex gap-4 text-2xl mb-4">
              <a href="#" className="hover:scale-125 transition">
                <FaFacebook />
              </a>
              <a href="#" className="hover:scale-125 transition">
                <FaInstagram />
              </a>
              <a href="#" className="hover:scale-125 transition">
                <FaTwitter />
              </a>
              <a href="#" className="hover:scale-125 transition">
                <FaYoutube />
              </a>
            </div>

            <p className="text-sm mb-2">Subscribe for exclusive offers!</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="input input-sm rounded-r-none text-black"
              />
              <button className="btn btn-sm btn-warning rounded-l-none">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* কপিরাইট + লাভ */}
        <div className="border-t border-white/30 mt-10 pt-6 text-center">
          <p className="text-sm">
            © 2025 PlayHive - All Rights Reserved | Made with
            <FaHeart className="inline mx-1 text-red-300" /> by
            <span className="font-bold"> Noman </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Fotter;
