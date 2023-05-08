import React, { useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import NormalFeatures from '../components/TabComponent/NormalFeatures'
import AdvancedFeatures from '../components/TabComponent/AdvancedFeatures'
import Doctor from './doctor.png' 
import Patient from './patient.png'
import {AiOutlineArrowLeft} from 'react-icons/ai' 
import { useHistory } from 'react-router-dom';
let CheckupScreen = () => { 
    let history = useHistory();
    return (
        <section className="max-w-screen-xl pt-32 mx-auto overflow-y-hidden">
            {/* heading  */}
            <div className="flex flex-col">
                <Zoom>
                    <div className="flex flex-col mx-auto pb-4">
                        <h1 className="text-black poppins font-semibold text-3xl">Check<span className="text-white lg:text-4xl select-none">Up</span></h1>
                        <div className="bg-black w-8 h-1 mt-2 rounded-full"></div>
                    </div>
                </Zoom>
                <div className='flex flex-col flex-wrap w-4/5 mx-auto'>
                    <Zoom>
                        <div className='items-center flex justify-center'><h1 className='text-center text-xl w-max text-white pb-8 poppins pt-3'>Calculate the Risk of having stillbirth</h1>
                        </div>
                    </Zoom>
                    <Zoom left>
                            <div className='items-center flex justify-evenly mx-0 text-white'>
                                <div className='bg-transparent flex flex-col justify-center'>
                                    <img width={300} src={Doctor}></img>
                                    <button className='border p-4 hover:text-black hover:bg-gray-100' type="button" onClick={() => history.push('/doctorForm')}>Are You a doctor?</button>
                                </div>
                                <div className='bg-transparent flex flex-col justify-center'> 
                                    <img width={300} src={Patient}></img>
                                    <button className='bg-white text-black border p-4 hover:text-white hover:bg-transparent' type="button" onClick={() => history.push('/patientForm')}>Are You a Patient?</button>
                                </div>  
                            </div>
                    </Zoom>

                </div>
            </div>
        </section>
    )
}

export default CheckupScreen