import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="w-full md:w-36 bg-gray-900 md:bg-gray-900 px-2 mt-40 md:rounded-r-3xl text-center fixed bottom-0 md:pt-8 md:top-0 md:left-0 h-10 md:h-64  md:border-r-4 md:border-gray-600">
        <div className="md:relative mx-auto lg:float-right lg:px-6">
          <ul className="list-reset flex flex-row md:flex-col text-center md:text-left">
            <li className="mr-3 flex-1">
              <a
                href="#"
                className="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500"
              >
                <i className="fas fa-link pr-0 md:pr-3"></i>
                <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
                  Countries
                </span>
              </a>
            </li>
            <li className="mr-3 flex-1">
              <a
                href="#"
                className="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500"
              >
                <i className="fas fa-link pr-0 md:pr-3"></i>
                <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
                  America
                </span>
              </a>
            </li>
            <li className="mr-3 flex-1">
              <a
                href="#"
                className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-pink-600"
              >
                <i className="fas fa-link pr-0 md:pr-3 text-pink-500"></i>
                <span className="pb-1 md:pb-0 text-xs md:text-base text-white md:font-bold block md:inline-block">
                  Europe
                </span>
              </a>
            </li>
            <li className="mr-3 flex-1">
              <a
                href="#"
                className="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500"
              >
                <i className="fas fa-link pr-0 md:pr-3"></i>
                <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
                  Asia
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
