// import {Link, useLocation} from 'react-router-dom';

import navbarLogo from '../assets/navbarLogoInvert.png'
import {Link, useLocation} from "react-router";

function NavBar() {

    let location = useLocation();

    return (
        <>
            <div className="absolute z-20 w-full flex justify-center bg-black ">
                <div className="w-full flex flex-row md:mx-8 my-4">
                    <Link to='/'>
                        <img src={navbarLogo}
                             alt='navbar Logo'
                             className="h-16 p-4"
                        />
                    </Link>
                    <ol className="ml-auto hidden md:flex justify-center p-4 space-x-12">
                        <Link to="/" className={location.pathname === "/" ? " text-blue-700 " : " duration-500 hover:text-blue-700"}>
                            home
                        </Link>
                        <Link to="/active" className={location.pathname === "/active" ? " text-blue-700 " : " duration-500  hover:text-blue-700"}>
                            active house
                        </Link>
                        <Link to="/chapter" className={location.pathname === "/chapter" ? " text-blue-700 " : " duration-500  hover:text-blue-700"}>
                            chapter roster
                        </Link>
                        <Link to="/rush" className={location.pathname === "/rush" ? " text-blue-700 " : "duration-500 hover:text-blue-700"}>
                            rush
                        </Link>
                    </ol>
                </div>
            </div>
        </>
    );
}

export default NavBar;