// import logoImg from "./../../assets/images/logo.webp";
import logoImg from "./../../assets/images/logo.png";

import { FaWhatsapp } from "react-icons/fa";
import { MdCall } from "react-icons/md";

import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header className="lol flex h-28 w-full items-center justify-evenly gap-3 border-b px-4 font-primary text-base font-semibold lg:h-36 lg:gap-6 lg:px-8 lg:text-lg">
                <div className="lg:hidden">
                    <HiOutlineMenuAlt2 className="text-3xl" />
                </div>
                <div>
                    <img className="w-[80px] hover:cursor-pointer md:w-[130px]" src={logoImg} alt="LOGO" />
                </div>

                <section className="hidden min-w-fit items-center justify-center gap-1 lg:flex">
                    <NavLink
                        to={"/"}
                        className={({ isActive }) =>
                            `rounded-full px-3 py-2 transition-all duration-150 hover:bg-primary-green hover:text-white xl:px-5 ${isActive && "bg-primary-green text-white"}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to={"/popular-destinations"}
                        className={({ isActive }) =>
                            `rounded-full px-3 py-2 transition-all duration-150 hover:bg-primary-green hover:text-white xl:px-5 ${isActive && "bg-primary-green text-white"}`
                        }
                    >
                        Destinations
                    </NavLink>
                    <p
                        className={
                            "cursor-not-allowed rounded-full px-3 py-2 transition-all duration-150 hover:bg-primary-green hover:text-white xl:px-5"
                        }
                    >
                        Gallery
                    </p>
                    <NavLink
                        to={"/our-features"}
                        className={({ isActive }) =>
                            `rounded-full px-3 py-2 transition-all duration-150 hover:bg-primary-green hover:text-white xl:px-5 ${isActive && "bg-primary-green text-white"}`
                        }
                    >
                        About Us
                    </NavLink>
                    <NavLink
                        to={"/contacts"}
                        className={({ isActive }) =>
                            `rounded-full px-3 py-2 transition-all duration-150 hover:bg-primary-green hover:text-white xl:px-5 ${isActive && "bg-primary-green text-white"}`
                        }
                    >
                        Contacts
                    </NavLink>
                </section>

                <section className="flex items-center gap-4 lg:gap-6">
                    <button className="group flex items-center gap-2 rounded-md bg-primary-green px-2 py-1 text-sm text-gray-50 transition-all duration-150 hover:bg-black hover:text-white sm:py-4 md:px-4 lg:px-8">
                        <span>Book on Whatsapp</span>
                        <FaWhatsapp className="text-xl text-secondary-purple group-hover:text-white" />
                    </button>
                    {/* Phone Logo */}

                    <div className="hidden h-12 w-12 min-w-12 items-center justify-center rounded-md bg-gray-500/80 text-4xl transition-all duration-200 hover:bg-secondary-purple lg:flex">
                        <MdCall className="fill-white" />
                    </div>
                </section>
            </header>

            <Outlet />
        </>
    );
};
export default Header;
