// import {Link, useLocation} from 'react-router-dom';

import navbarLogo from '../assets/navbarLogoInvert.png'
import {Link} from "react-router";

function NavBar() {
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
                        <Link to="/" className="list-item">
                            home
                        </Link>
                        <Link to="/active" className="list-item">
                            active house
                        </Link>
                        <Link to="/chapter" className="list-item">
                            chapter roster
                        </Link>
                        <Link to="/rush" className="list-item">
                            rush
                        </Link>
                    </ol>
                </div>
            </div>
        </>
    );
}

export default NavBar;