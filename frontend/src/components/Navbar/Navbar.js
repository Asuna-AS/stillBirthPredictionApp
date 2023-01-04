import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import Fade from 'react-reveal/Fade';
import { NavLink } from 'react-router-dom';
import AuthorizeUser from './AuthorizeUser';
import AuthorizeUserMobile from './AuthorizeUserMobile';


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
        <header className='flex max-w-screen-md z-50'>
            {/* desktop nav  */}
            <nav className="flex flex-col w-1/5 px-20 flex-wrap pt-4 fixed z-50">
                <AuthorizeUser />
                <div className="hidden md:flex  pt-14">
                    <ul className="flex flex-col gap-7">
                        {menu.map(item => (
                            <li key={item.id}>
                                <NavLink exact to={item.to} className="text-white text-xl poppins" activeClassName="text-red-200 border-l-4 p-2 border-red-200">{item.text}</NavLink>
                            </li>
                        ))}
                    </ul>

                </div>

                {/* menu icon  */}
                <div className="block md:hidden lg:hidden">
                    <HiMenuAlt3 className="w-10 h-10 ring-blue-300 text-gray-700 border border-gray-400 focus:ring-4 cursor-pointer rounded-lg p-2 transform transition duration-200 hover:scale-110" onClick={handleClick} />
                </div>
                
            </nav>
        </header>  
    )
                        }
            {/* mobile nav  */}
            {/* {mobileNav && (
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
            )} */}
    

export default Navbar