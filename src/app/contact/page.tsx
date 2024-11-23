import React from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
const Contact = () => {
  return (
    <div className="text-white bg-gray-900 body-font relative h-auto">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 hover:text-green-500 text-white">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base hover:text-green-500">
            Feel free to contact us if you have any questions or need
            assistance.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                Submit
              </button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
              <Link href="mailto:jamilraza001@gmail" className="text-green-400">
                jamilraza001@gmail.com
              </Link>
              <p className="leading-normal my-5 text-green-400">0310-3118833</p>
              <span className="inline-flex text-5xl">
                <Link
                  href={"https://www.linkedin.com/in/jamilrazaa"}
                  target="_blank"
                  className="text-green-500"
                >
                  <FaLinkedin />
                </Link>
                <Link href={"https://www.instagram.com/jamilraza001/"} target="_blank" className="ml-4 text-green-400">
                  <FaInstagramSquare />
                </Link>
                <Link href={"https://github.com/JamilRaza001"} target="_blank" className="ml-4 text-green-400">
                  <FaSquareGithub />
                </Link>
                
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
