import { useState } from "react";
import { Link } from "@remix-run/react";

export default function TopNav({ navItems = [] }) {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);
  return (
    <nav
      id="header"
      className="fixed w-full z-30 top-0 text-white bg-slate-800"
    >
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <Link
            className="text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            to="/"
          >
            <svg
              className="h-8 fill-current inline"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512.005 512.005"
            >
              <rect
                fill="#e70cef"
                x="16.539"
                y="425.626"
                width="479.767"
                height="50.502"
                transform="matrix(1,0,0,1,0,0)"
              />
              <path
                className="plane-take-off"
                d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
              />
            </svg>{" "}
            LANDING
          </Link>
        </div>
        <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            onClick={toggleMenu}
            className="flex items-center p-1 text-fuchsia-500 hover:text-white focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 lg:bg-transparent bg-slate-800 text-black p-4 lg:p-0 z-20 ${
            show ? "" : "hidden"
          }`}
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            {navItems.map((item, index) => {
              switch (item.type) {
                case "link":
                  return (
                    <li key={index} className="mr-3">
                      <Link
                        className="inline-block py-2 px-4 text-fuchsia-500 font-bold no-underline"
                        to={item.path}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                case "button":
                  return (
                    <li key={index} className="mr-3">
                      <Link
                        to={item.path}
                        id="navAction"
                        className="mx-auto lg:mx-0 bg-fuchsia-500 text-slate-800 font-bold rounded-full mt-4 lg:mt-0 py-1 px-4 shadow opacity-75 focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                      >
                        Action
                      </Link>
                    </li>
                  );
                default:
                  return null;
              }
            })}
          </ul>
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
}
