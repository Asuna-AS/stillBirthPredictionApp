import React from 'react';
import Fade from 'react-reveal/Fade';
import NavBrand from '../Navbar/NavBrand';

const Footer = () => {
    return (
        <Fade left>
        <footer className="text-white poppins bg-transparent">
            <div className="flex flex-wrap gap-20 pl-60 pr-20 mx-auto justify-center pt-10 pb-16">
                    <div>
                        <h2 className="poppins text-white text-xl text-base mb-3 font-semibold border-b-2 pb-2">Working Hours</h2>
                        <p className="pt-3 text-lg">Sat - Sun</p>
                        <p className="text-sm">9 AM - 9 PM</p>
                    </div>
                    <div>
                        <h2 className="poppins text-white text-xl text-base mb-3 font-semibold border-b-2 text-center pb-2">Contact</h2>
                        <p className="pt-3">
                            <ul className='text-lg'>
                                <li>Arunim Singhal</li>
                                <li>Priya Sharma</li>
                                <li>Koyna Mittal</li>
                                <li>Rolly</li>
                            </ul>
                        </p>
                    </div>
            </div>
            <div className="bg-transparent">
                <div className="max-w-screen-xl mx-auto pb-3 px-5 flex flex-wrap flex-col justify-center sm:flex-row">
                    <p className="text-white text-xl text-center sm:text-left">© StillBirth Prediction App
                        <a href="https://github.com/19smabtahinoot" rel="noopener noreferrer" className="text-white ml-1" target="_blank"></a>
                    </p>
                </div>
            </div>
        </footer>
        </Fade>
    )
}

export default Footer
