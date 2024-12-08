import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer > {/* Change background and text color */}
      <div className="text-white body-font bg-black w-[1441] h-[589]"> {/* Change footer bottom background color */}
        <h1>hgjhgj</h1>
      </div>
      <div className="container px-5 py-20 mx-auto  w-[1441] h-[499]">
        <div className="flex flex-wrap md:text-left text-center order-first">
          {/* Category 1 */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-black tracking-widest text-sm mb-3">CATEGORIES</h2> {/* Change text color */}
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-300 hover:text-black-400">First Link</a> {/* Change text color */}
              </li>
              <li>
                <a className="text-gray-300 hover:text-black-400">Second Link</a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-black-400">Third Link</a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-black-400">Fourth Link</a>
              </li>
            </nav>
          </div>

          {/* Category 2 */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-black tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-300 hover:text-gray-400">First Link</a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-gray-400">Second Link</a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-gray-400">Third Link</a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-gray-400">Fourth Link</a>
              </li>
            </nav>
          </div>

          {/* Category 3 */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-black tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-300 hover:text-gray-400">First Link</a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-gray-400">Second Link</a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-gray-400">Third Link</a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-gray-400">Fourth Link</a>
              </li>
            </nav>
          </div>
            {/* Category 3 */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-black tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-300 hover:text-gray-400">First Link</a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-gray-400">Second Link</a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-gray-400">Third Link</a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-gray-400">Fourth Link</a>
              </li>
            </nav>
          </div>

          {/* Subscribe Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-black tracking-widest text-sm mb-3">SUBSCRIBE</h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label htmlFor="footer-field" className="leading-7 text-sm text-gray-300">Enter your email</label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Subscribe</button>
            </div>
            <p className="text-gray-300 text-sm mt-2 md:text-left text-center">Get the latest updates
              <br className="lg:block hidden" />directly in your inbox
            </p>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
