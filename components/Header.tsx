import React from "react";
import Image from 'next/image'


export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <div className="hidden sm:block  fixed top-0 w-full z-30 clearNav sm:bg-opacity-30 bg-gray-600 transition duration-300 ease-in-out  border-b-2 border-gray-400 border-opacity-25">
      <div className="flex flex-col px-0 mx-auto sm:items-center sm:justify-between sm:flex-row sm:px-1 md:px-6 sm:pt-1 md:pt-2 lg:px-8">
        <div className="flex flex-row items-center justify-between md:p-2">
          <div
            className="selection:text-lg font-semibold rounded-lg tracking-widest focus:outline-none focus:shadow-outline"
          >
            {/* <img className="relative object-cover w-7 sm:w-14 rounded-full bg-gray-100 border-gray-400 border-2 "   alt="Logo"
             src="/images/iland-50pcSize-8bit.png"
            ></img> */}
            <div className="relative w-14 h-14  rounded-full bg-gray-100  bg-opacity-80 border-gray-400 border-2"> 
            <Image
             src="/images/iland-50pcSize-8bit.png"
             alt="image"
             layout="fill" // required
             objectFit="cover" 
             />
             </div>
            
          </div>
          <button
            className="text-white cursor-pointer leading-none px-3 py-1 sm:hidden outline-none focus:outline-none "
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#191919"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className={ "sm:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")    }>
          <nav className="flex-col flex-grow ">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li className="rounded-full bg-gray-100 border-gray-400 border-2 mx-2 ">
              <a  href="https://discord.gg/xPyUvWNh84" >
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#8c9eff" d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z"/></svg>

              </a>
              </li>
              <li className="rounded-full bg-gray-100 border-gray-400 border-2  mx-2">
              <a href="https://twitter.com/BonanzaTurtleC" >
                  
                  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"/></svg>
    
                  </a>
              </li>

              {/* <li>
                <a
                  className="inline-flex items-center px-4 py-2 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-orange-1 rounded-lg text-md md:mt-0 md:ml-4"
                  href="/"
                >
                  <span className="justify-center ">Connect METAMASK</span>
                  
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center px-4 py-2 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent rounded-lg text-md md:mt-0 md:ml-4 bg-gray-900"
                  href="/"
                >
                  <span className="justify-center">Download</span>
                  <svg
                    className="w-3 h-3 fill-current text-gray-400 flex ml-2 -mr-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </a>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
