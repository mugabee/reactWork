import React, { Component } from "react";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.openMenu = this.openMenu.bind(this);
  }
  openMenu() {
    this.setState(() => {
      console.log(this.state.isOpen);
      return { isOpen: !this.state.isOpen };
    });
  }
  render() {
    const { isOpen } = this.state;
    const menuOpen =
      "w-full flex-grow lg:flex lg:items-center lg:w-auto  lg:block mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20";
    const menuClosed =
      "w-full flex-grow lg:flex lg:items-center lg:w-auto  hidden lg:block mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20";
    return (
      <nav className="w-full z-30 top-0 text-black py-1 lg:py-6">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-2 lg:py-6">
          <div className="pl-4 flex items-center">
            <a
              className="text-black no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="#"
            >
              React Work
            </a>
          </div>

          <div className="block lg:hidden pr-4">
            <button
              id="nav-toggle"
              onClick={this.openMenu}
              className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-green-500 appearance-none focus:outline-none"
            >
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

          <div className={isOpen ? menuOpen : menuClosed} id="nav-content">
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              <li className="mr-3">
                <a
                  className="inline-block md:border border-black hover:bg-blue-200 py-2 px-4 text-black font-bold no-underline"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="mr-3">
                <a
                  className="inline-block md:border border-black hover:bg-blue-200 text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                  href="#"
                >
                  About Us
                </a>
              </li>
              <li className="mr-3">
                <a
                  className="inline-block md:border border-black hover:bg-blue-200 text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
