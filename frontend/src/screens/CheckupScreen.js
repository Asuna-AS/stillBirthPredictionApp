import React, { useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import ContactForm from '../components/Contact/ContactForm';
import TextField from '../components/Form/TextField';
import sick from "../sick.png"
import Heading from '../components/Heading';
import { set } from 'mongoose';
import { RiNumber1 } from 'react-icons/ri';
import Tabs from './../components/TabComponent/Tab'

let CheckupScreen = () => {
    // function formSubmit() {
    //     if ((age > 0) && placentalAbs && prevSb && depression && obesity && drugIntake && chrAbr && diabetes && kidney && thyroid && married && blackrace && financial && sleep)
    //         console.warn({ age, placentalAbs, prevSb, depression, obesity, drugIntake, chrAbr, diabetes, kidney, thyroid, married, blackrace, financial, sleep })
    // }

    return (
        <section className="max-w-screen-xl pt-36 mx-auto overflow-y-hidden">
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
                    {/* <div className='poppins text-2xl pt-14 content-center'><h1 className='pb-10 Yesl-28'>Unwell?</h1><img  name="maternal" value=""className='w-3/5' src={sick}></img></div> */}
                    <Zoom left>
                            <Tabs />
                    </Zoom>

                </div>
            </div>
        </section>
    )
}

export default CheckupScreen