import React from 'react'
import { Link,NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'

export default function Footer() {
    return (
        <footer className="bg-black border-y ">
            <div className="mx-auto w-full h-28 max-w-screen-xl p-4 py-2 lg:py-3">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex h-20 w-20 items-center overflow-hidden ">
                        <img
                            src={logo}
                            className="mr-3 h-20 w-20 rounded-full  object-fill object-center"
                            alt="Logo"
                        />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <ul className="text-zinc-500 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="text-zinc-500 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/Ravi62026"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                
                                
                            </ul>
                        </div>
                        <div>
                            <ul className="text-zinc-500 font-medium">
                            <li className="mb-4">
                                    <a
                                        href="https://www.linkedin.com/in/ravi-shankar-3bab62247/"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Linkedin
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}