import { useState } from "react";
import {
  FaArrowRight,
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import PlayStore from "../images/android.png";
import AppStore from "../images/ios.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

function Footer() {
  const [email, setEmail] = useState("");

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailSubscription = (e) => {
    e.preventDefault();
    toast.success("Email Subscribed");
    console.log("Subscribed email:", email);
    setEmail("");
  };

  return (
    <div className="footerContent w-full bg-white">
      <div className="footerLogo w-full border-y border-gray-300 py-4">
        <Link to="/">
        <h1
          className="logo text-center text-5xl text-[#132643] max-450:text-4xl max-350:text-3xl "
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
          The Indian Times
        </h1>
          </Link>
      </div>
      <div className="footerLinksSection w-full grid grid-cols-1 sm:grid-cols-2 950:grid-cols-4 py-8 px-8 gap-4">
        <div className="footerLinkCard w-full flex flex-col text-start">
          <h3 className="font-semibold text-2xl mb-4">Get The Post</h3>
          <p className="text-lg font-normal cursor-pointer text-gray-600 hover:text-gray-700">
            World News
          </p>
          <p className="text-lg font-normal cursor-pointer text-gray-600 hover:text-gray-700">
            Indian News
          </p>
          <p className="text-lg font-normal cursor-pointer text-gray-600 hover:text-gray-700">
            Sports
          </p>
          <p className="text-lg font-normal cursor-pointer text-gray-600 hover:text-gray-700">
            Entertainment
          </p>
        </div>
        <div className="footerLinkCard w-full flex flex-col text-start">
          <h3 className="font-semibold text-2xl mb-4">Our Sites</h3>
          <p className="text-lg font-normal cursor-pointer text-gray-600 hover:text-gray-700">
            Tribute To Indian Army
          </p>
          <p className="text-lg font-normal cursor-pointer text-gray-600 hover:text-gray-700">
            Advertise Locally
          </p>
          <p className="text-lg font-normal cursor-pointer text-gray-600 hover:text-gray-700">
            Customer Service
          </p>
          <p className="text-lg font-normal cursor-pointer text-gray-600 hover:text-gray-700">
            Sell Your Home
          </p>
        </div>
        <div className="footerLinkCard w-full flex flex-col text-start">
          <h3 className="font-semibold text-2xl mb-4">Quick Links</h3>
          <p className="text-lg font-normal cursor-pointer text-gray-600 hover:text-gray-700">
            About Us
          </p>
          <p className="text-lg font-normal cursor-pointer text-gray-600 hover:text-gray-700">
            Careers
          </p>
          <p className="text-lg font-normal cursor-pointer text-gray-600 hover:text-gray-700">
            Today's Paper
          </p>
          <p className="text-lg font-normal cursor-pointer text-gray-600 hover:text-gray-700">
            Digital Library
          </p>
        </div>
        <div className="footerLinkCard w-full flex flex-col text-start 950:border-l 950:pl-4 950:border-gray-400">
          <div className="socialLinks">
            <h3 className="font-semibold text-2xl mb-4">Follow Us</h3>
            <div className="flex flex-row gap-1">
              <p className="p-3 rounded-full border border-gray-400 text-xl transition-all duration-500 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] cursor-pointer">
                <FaFacebookF />
              </p>
              <p className="p-3 rounded-full border border-gray-400 text-xl transition-all duration-500 hover:text-white hover:bg-black hover:border-black cursor-pointer">
              <FaXTwitter />
              </p>
              <p className="p-3 rounded-full border border-gray-400 text-xl transition-all duration-500 hover:text-white hover:bg-[#FF0000] hover:border-[#FF0000] cursor-pointer">
                <FaYoutube />
              </p>
              <p className="p-3 rounded-full border border-gray-400 text-xl transition-all duration-500 hover:text-white hover:bg-[#25D366] hover:border-[#25D366] cursor-pointer">
              <FaWhatsapp />
              </p>
            </div>
          </div>
          <div className="downloadAppSection">
            <h3 className="font-semibold text-2xl my-3">Download App</h3>
            <div className="flex flex-row w-full gap-3">
              <img
                className="w-2/5 cursor-pointer"
                src={PlayStore}
                alt="Download on Play Store"
              />
              <img
                className="w-2/5 cursor-pointer"
                src={AppStore}
                alt="Download on App Store"
              />
            </div>
          </div>
          <div className="subscribe">
            <h3 className="font-semibold text-2xl my-3">Subscribe</h3>
            <form
              onSubmit={handleEmailSubscription}
              className="flex w-full border border-gray-400 rounded-lg overflow-hidden"
            >
              <input
                type="email"
                value={email}
                onChange={handleEmailInput}
                className="w-full text-lg bg-white outline-0 px-4 py-2"
                placeholder="Enter Your Email"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 p-2 text-white font-semibold hover:bg-blue-800 transition-colors"
              >
                <FaArrowRight />
              </button>
              <ToastContainer
                position="top-right"
                autoClose={2000}
                limit={2}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover
                theme="light"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
