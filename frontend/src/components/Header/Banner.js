import React from 'react';
import Fade from 'react-reveal/Fade';
import { useHistory } from 'react-router-dom';
import Button from '../Form/Button';

import hp2 from '../../home-page-2.png'
const Banner = () => {
    const history = useHistory();

    return (
        <section className="m-auto pl-72 pr-20 z-50">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 pt-20">
                    <Fade left>
                        <div className="order-1 lg:order-1 flex flex-col justify-center h-full space-y-6">

                            <div className="flex flex-col flex-wrap space-y-2">
                                {/* <img className="w-24" src="../../../assets/banner/medal.png" alt="banner" /> */}
                                <h1 className="poppins text-gray-700 font-semibold text-3xl lg:text-3xl leading-relaxed"><span className="text-5xl text-white">Life's biggest miracle is the gift of life growing inside you.</span></h1>
                                <p className="text-black text-light text-xl"></p>
                            </div>
            
                            {/* button  */}
                            <div className="flex flex-row flex-wrap gap-5 ">
                                <button className="bg-white text-green-300 rounded-lg hover:bg-transparent py-3 px-4 hover:bg-green-300 hover:text-white poppins w-48 mt-6" onClick={() => history.push('/checkup')}>Get Started <span className='text-lg' aria-hidden="true">&rarr;</span></button> 
                                <button className="border-white border-4 rounded-lg bg-transparent py-3 px-4 text-white poppins w-48 mt-6 hover:bg-white hover:text-black shadow-lg" text="Reach us" onClick={() => history.push('/contact')}>Reach Us</button>
                            </div>

                        </div>
                    </Fade>

                    <Fade right>
                        <div className="order-1 lg:order-2">
                             <img src={hp2} alt="banner" />
                        </div>
                    </Fade>
                </div>
            
        </section>
    )
}

export default Banner
