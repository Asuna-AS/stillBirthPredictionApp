import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import Fade from 'react-reveal/Fade';
import { NavLink } from 'react-router-dom';
import AuthorizeUser from './AuthorizeUser';
import AuthorizeUserMobile from './AuthorizeUserMobile';
import NavBrand from './NavBrand';


const Navbar = () => {
    const [changeHeader, setChangeHeader] = useState(false)
    const [mobileNav, setMobileNav] = useState(false)

    const menu = [
        { id: 1, text: 'Home', to: '/' },
        { id: 2, text: 'Blogs', to: '/blogs' },
        { id: 3, text: 'Checkup', to: '/checkup' },
        { id: 4, text: 'Hospitals', to: '/hospitals' },
        { id: 5, text: 'Contact', to: '/contact' },
    ]

    //handle click 
    const handleClick = () => {
        setMobileNav(!mobileNav)
    }
    //header change function 
    const onChangeHeader = () => {
        if (window.scrollY >= 50) {
            setChangeHeader(true)
        } else {
            setChangeHeader(false)
        }
    }

    //change header by scrolling
    window.addEventListener('scroll', onChangeHeader)

    return (
        <header className={changeHeader ? "bg-white fixed z-50 top-0 left-0 w-full shadow-md transition duration-500" : "bg-transparent fixed z-50 top-0 left-0 w-full transition duration-500"}>
            {/* desktop nav  */}
            <nav className="flex justify-around items-center max-w-screen-xl mx-auto px-6 py-3">
                <div className="flex">
                    <NavBrand />
                </div>
                <div className="hidden md:flex lg:flex space-x-8">
                    <ul className="flex items-center gap-5">
                        {menu.map(item => (
                            <li key={item.id}>
                                <NavLink exact to={item.to} className="text-black text-lg poppins" activeClassName="text-black border-2 p-2 bg-white border-gray-400 rounded-xl shadow-xl">{item.text}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <AuthorizeUser />

                {/* menu icon  */}
                <div className="block md:hidden lg:hidden">
                    <HiMenuAlt3 className="w-10 h-10 ring-blue-300 text-gray-700 border border-gray-400 focus:ring-4 cursor-pointer rounded-lg p-2 transform transition duration-200 hover:scale-110" onClick={handleClick} />
                </div>
                
            </nav>
            {mobileNav && (
                <Fade>
                    <nav className="bg-white shadow-lg mx-6 mt-2 p-4 rounded-lg border border-gray-300 py-4 block md:hidden lg:hidden">
                        <ul className="mb-2">
                            {menu.map(item => (
                                <li key={item.id} className="mb-3">
                                    <NavLink exact key={item.id} to={item.to} className="text-gray-600 poppins text-lg text-center py-2 px-3 w-full hover:bg-gray-200 transition duration-300 cursor-default block rounded-lg" activeClassName="border-l-4 border-blue-700 bg-gray-200">
                                    {item.text}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
        
                        <div>
                            <AuthorizeUserMobile />
                        </div>
                    </nav>
                </Fade>
            )}
        </header>  
    )
                        }
            {/* mobile nav  */}
    

export default Navbar