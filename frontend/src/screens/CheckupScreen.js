import React from 'react';
import Bounce from 'react-reveal/Bounce';
import ContactForm from '../components/Contact/ContactForm';
import TextField from '../components/Form/TextField';
import sick from "../sick.png"
const CheckupScreen = () => {
    return (
        <section className="mx-auto pl-60 pr-20 pt-24 overflow-y-hidden flex-wrap">
            {/* heading  */}
            <div className="flex flex-col items-center space-x-2 pb-4 px-28">
                <Bounce left><h1 className="text-white poppins text-3xl">Check {" "} <span className="text-red-200 font-semibold select-none">Up</span></h1>
                    <div className="bg-red-200 flex items-center justify-center w-16 h-1 mt-2 rounded-full"></div>
                </Bounce>
                <div className='flex flex-col flex-wrap'>
                    <Bounce left>
                        <h1 className='text-center text-lg text-white poppins pt-3'></h1>
                        {/* <div className='poppins text-2xl pt-14 content-center'><h1 className='pb-10 Yesl-28'>Unwell?</h1><img  name="maternal" value=""className='w-3/5' src={sick}></img></div> */}

                        <form className="bg-white mt-6 p-6 rounded-lg shadow-lg shadow-cyan-500/50">
                            <div className='text-center pb-5'><h1 className="text-2xl font-semibold text-black brand-font select-none">Fill Your Details</h1></div>
                            <div className='flex flex-col gap-5 items-center'>
                                <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8">
                                    Have a Blood Clotting Disorder?
                                    <div className='flex flex-row gap-3 flex-wrap'>
                                        <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                            <p className='pb-1'>Yes</p>
                                            <input type="radio" id="yes" name="bloodClotting" value="yes"></input>
                                        </label>
                                        <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                            <p className='pb-1'>No</p>
                                            <input type="radio" id="no" name="bloodClotting" value="no"></input>
                                        </label>
                                    </div>
                                </div>
                                <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8">
                                    Have a High Blood Pressure?
                                    <div className='flex flex-row gap-3 flex-wrap'>
                                        <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                            <p className='pb-1'>Yes</p>
                                            <input type="radio" id="yes" name="bloodPressure" value="yes"></input>
                                        </label>
                                        <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                            <p className='pb-1'>No</p>
                                            <input type="radio" id="no" name="bloodPressure" value="no"></input>
                                        </label>
                                    </div>
                                </div>
                                <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8">
                                    Have a Renal Disease?
                                    <div className='flex flex-row gap-3 flex-wrap'>
                                        <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                            <p className='pb-1'>Yes</p>
                                            <input type="radio" id="yes" name="renalDisease" value="yes"></input>
                                        </label>
                                        <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                            <p className='pb-1'>No</p>
                                            <input type="radio" id="no" name="renalDisease" value="no"></input>
                                        </label>
                                    </div>
                                </div>
                                <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8">
                                    Late Term Pregnancy?
                                    <div className='flex flex-row gap-3 flex-wrap'>
                                        <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                            <p className='pb-1'>Yes</p>
                                            <input type="radio" id="yes" name="lateTermPregnancy" value="yes"></input>
                                        </label>
                                        <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                            <p className='pb-1'>No</p>
                                            <input type="radio" id="no" name="lateTermPregnancy" value="no"></input>
                                        </label>
                                    </div>
                                </div>
                                <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8">
                                    Have Oligohydramnios?
                                    <div className='flex flex-row gap-3 flex-wrap'>
                                        <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                            <p className='pb-1'>Yes</p>
                                            <input type="radio" id="yes" name="oligohydramnios" value="yes"></input>
                                        </label>
                                        <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                            <p className='pb-1'>No</p>
                                            <input type="radio" id="no" name="oligohydramnios" value="no"></input>
                                        </label>
                                    </div>
                                </div>
                                <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8">
                                    Have a issue with Umbilical Cord?
                                    <div className='flex flex-row gap-3 flex-wrap'>
                                        <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                            <p className='pb-1'>Yes</p>
                                            <input type="radio" id="yes" name="umbilicalCordIssue" value="yes"></input>
                                        </label>
                                        <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                            <p className='pb-1'>No</p>
                                            <input type="radio" id="no" name="umbilicalCordIssue" value="no"></input>
                                        </label>
                                    </div>
                                </div>
                                <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8">
                                    Have a Group B infection?
                                    <div className='flex flex-row gap-3 flex-wrap'>
                                        <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                            <p className='pb-1'>Yes</p>
                                            <input type="radio" id="yes" name="groupBInfection" value="yes"></input>
                                        </label>
                                        <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                            <p className='pb-1'>No</p>
                                            <input type="radio" id="no" name="groupBInfection" value="no"></input>
                                        </label>
                                    </div>
                                </div>
                                <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8">
                                    Water Break?
                                    <div className='flex flex-row gap-3 flex-wrap'>
                                        <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                            <p className='pb-1'>Yes</p>
                                            <input type="radio" id="yes" name="waterBreak" value="yes"></input>
                                        </label>
                                        <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                            <p className='pb-1'>No</p>
                                            <input type="radio" id="no" name="waterBreak" value="no"></input>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </form>

                    </Bounce>

                </div>
            </div>

            {/* form  */}
            {/* <ContactForm /> */}
        </section>
    )
}

export default CheckupScreen