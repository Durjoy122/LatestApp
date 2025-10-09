
import image from '../../assets/logo.png'
import image2 from '../../assets/github.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const links = (
        <>
            <Link to="/">
                <li className="m-2 px-4 py-2 rounded-md transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white">
                    Home
                </li>
            </Link>
            <Link to="/apps">
                <li className="m-2 px-4 py-2 rounded-md transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white">
                    Apps
                </li>
            </Link>
            <Link to="/install">
                <li className="m-2 px-4 py-2 rounded-md transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white">
                    Installation
                </li>
            </Link>
        </>
    );
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                         {links}
                    </ul>
                </div>
                <div className="flex items-center ml-[50px]">
                   <Link to="/" className="flex items-center gap-2">
                        <img className="w-10" src={image} alt="Hero Logo" />
                        <span className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                           HERO.IO
                        </span>
                   </Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                     {links}
                </ul>
            </div>
            <div className="navbar-end mr-[50px]">
                <a className="btn bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center gap-2">
                    <img src={image2} alt="icon" className="w-[20px]" />
                    Contributor
                </a>
            </div>
        </div>
    );
};

export default Navbar;