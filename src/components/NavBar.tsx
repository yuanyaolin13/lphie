import navbarLogo from '../assets/navbarLogoInvert.png'
import {Link, useLocation} from "react-router";
import {useEffect, useState} from "react";

function NavBar() {

    let location = useLocation();
    let [open, setOpen] = useState(false);

    let openNav = () => {
        setOpen(open => !open);
    }

    useEffect(() => {
        if (open) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [open]);

    return (
        <>
            <div className="absolute z-20 w-full flex justify-center bg-black ">
                <div className="w-full flex flex-row lg:mx-8 my-4 items-center">
                    <Link to='/' className="p-4">
                        <img src={navbarLogo}
                             alt='navbar Logo'
                             className="h-8"
                        />
                    </Link>
                    <div className='ml-auto px-2'>
                        <button onClick={openNav} type="button"
                                className="inline-flex items-center p-2 w-12 h-12 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="navbar-default" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round"
                                      stroke-linejoin="round" stroke-width="2"
                                      d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                    </div>
                    <ol className="ml-auto hidden w-full lg:block lg:w-auto justify-center p-4 space-x-12">
                        <Link to="/"
                              className={location.pathname === "/" ? " text-blue-700 " : " duration-500 hover:text-blue-700"}>
                            home
                        </Link>
                        <Link to="/active"
                              className={location.pathname === "/active" ? " text-blue-700 " : " duration-500  hover:text-blue-700"}>
                            active house
                        </Link>
                        <Link to="/chapter"
                              className={location.pathname === "/chapter" ? " text-blue-700 " : " duration-500  hover:text-blue-700"}>
                            chapter roster
                        </Link>
                        <Link to="/rush" className={location.pathname === "/rush" ? " text-blue-700 " : "duration-500 hover:text-blue-700"}>
                            rush
                        </Link>
                    </ol>
                </div>
            </div>
            <div
                className={`fixed inset-0 z-20 flex flex-col bg-black/80 backdrop-blur-sm transition-opacity duration-600
                ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            >
                <div className="flex items-center ml-auto p-4">
                    <button
                        onClick={openNav}
                        type="button"
                        className="inline-flex items-center w-12 h-12 justify-center rounded-lg lg:hidden focus:outline-none"
                        aria-controls="navbar-default"
                        aria-expanded={open}
                    >
                        <span className="sr-only">Close menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l12 12M13 1L1 13"/>
                        </svg>
                    </button>
                </div>
                <ol
                    className={`w-full lg:hidden text-2xl font-bold flex flex-col text-right pr-6 my-8 space-y-6 transition-all duration-600 
                    ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                >
                    <Link to="/" onClick={openNav}
                          className={location.pathname === "/" ? "text-blue-700" : ""}>
                        home
                    </Link>
                    <Link to="/active" onClick={openNav}
                          className={location.pathname === "/active" ? "text-blue-700" : ""}>
                        active house
                    </Link>
                    <Link to="/chapter" onClick={openNav}
                          className={location.pathname === "/chapter" ? "text-blue-700" : ""}>
                        chapter roster
                    </Link>
                    <Link to="/rush" onClick={openNav}
                          className={location.pathname === "/rush" ? "text-blue-700" : ""}>
                        rush
                    </Link>
                </ol>
            </div>
        </>
    );
}

export default NavBar;