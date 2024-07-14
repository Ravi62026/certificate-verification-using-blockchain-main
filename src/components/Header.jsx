import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.png'
import { connectWallet } from '../Blockchain'
import { truncate, useGlobalState } from '../store'
export default function Header() {

  const [connectedAccount] = useGlobalState('connectedAccount')

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-black px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex h-20 w-20 items-center rounded-full overflow-hidden">
            <img
              src={logo}
              className="mr-3 h-20 w-20 object-fill object-center "
              alt="Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
          <>
          {connectedAccount ? (
                <button
                  className="px-4 py-2.5 bg-black 
                  border border-white
                  font-semibold text-xs leading-tight uppercase
                  rounded-full shadow-md  text-white hover:text-orange-600
                  transition duration-150 ease-in-out"
                >
                  {truncate(connectedAccount, 4, 4, 11)}
                </button>
              ) : (
                <button
                  className="px-4 py-2.5 bg-black 
                  border border-white
                  font-semibold text-xs leading-tight uppercase
                  rounded-full shadow-md  text-white hover:text-orange-600
                  transition duration-150 ease-in-out 
                  "
                  onClick={connectWallet}
                >
                  Connect Wallet
                </button>
              )}
            </>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                to="/"
                  className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ?"text-orange-600" :"text-zinc-300"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                to="/upload"
                  className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ?"text-orange-600" :"text-zinc-300"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Upload
                </NavLink>
              </li>
              <li>
                <NavLink
                to="/verify"
                  className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ?"text-orange-600" :"text-zinc-300"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Verify
                </NavLink>
              </li>
              <li>
                <NavLink
                to="/about"
                  className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ?"text-orange-600" :"text-zinc-300"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
