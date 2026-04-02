

import React, { useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

function Header() {
    const [isOpen, setIsOpen] = React.useState(false); // State for mobile menu
    const location = useLocation(); // Hook to get the current location

    // Effect to close the mobile menu when the route changes
    useEffect(() => {
        setIsOpen(false); // Close the menu when the route changes
    }, [location]); // Dependency array includes location

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-slate-950 border-gray-200 px-4 lg:px-6 py-2.5">
              
                        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white">
                            {/* Mobile menu button */}
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                    <div className={`hidden lg:flex justify-between items-center w-full lg:w-auto lg:order-1 ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-400" : "text-white"} hover:bg-gray-700`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-400" : "text-white"} hover:bg-gray-700`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-400" : "text-white"} hover:bg-gray-700`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/github"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-400" : "text-white"} hover:bg-gray-700`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                           
                        </ul>
                    </div>
                    {/* Mobile menu for smaller screens */}
                    <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
                        <ul className="flex flex-col mt-4 font-bold">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-400" : "text-white"} hover:bg-gray-700`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-400" : "text-white"} hover:bg-gray-700`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-400" : "text-white"} hover:bg-gray-700`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/github"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-400" : "text-white"} hover:bg-gray-700`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
