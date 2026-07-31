import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import userPng from "@/assets/user.png"
import logo from "@/assets/logo.png";
const Navbar = () => {
    return (
        <div className=" mx-auto shadow-md  bg-slate-800 sm:px-4">
            <div className="navbar  min-h-[4rem]">

                <div className=" hidden sm:block">
                    <Link href="/">
                        <Image className=" rounded-full w-10 h-10" src={logo} width={40} height={40} alt="Logo"></Image>
                    </Link>
                </div>

                {/* Left Side: Mobile Menu Button */}
                <div className="navbar-start w-auto lg:w-1/3">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[50] mt-3 w-52 p-2 shadow-lg border border-gray-100"
                        >
                            <li><NavLink href="/">Home</NavLink></li>
                            <li><NavLink href="/about-us">All Books</NavLink></li>
                            <li><NavLink href="/career">My Profile</NavLink></li>
                        </ul>
                    </div>
                </div>

                {/* Middle Section: Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-medium gap-2">
                        <li><NavLink href="/">Home</NavLink></li>
                        <li><NavLink href="/about-us">All Books</NavLink></li>
                        <li><NavLink href="/career">My Profile</NavLink></li>
                    </ul>
                </div>

                {/* Right Side: Auth / Profile Section */}
                <div className="navbar-end flex-1 justify-end gap-2 sm:gap-3">

                    <div className="flex items-center gap-2 sm:gap-3">

                        <h2 className="text-sm font-medium whitespace-nowrap max-w-[100px] xs:max-w-[140px] sm:max-w-[200px] truncate">
                            Hello
                        </h2>

                        <Image
                            className="rounded-full shrink-0 w-8 h-8 sm:w-10 sm:h-10 object-cover border border-gray-200"
                            src={userPng}
                            width={40}
                            height={40}
                            alt="User Image"
                        />
                        <Link
                            href="/"
                            className="btn btn-sm sm:btn-md bg-gray-800 hover:bg-gray-900 text-white border-none shrink-0"
                        >
                            Login
                        </Link>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default Navbar;