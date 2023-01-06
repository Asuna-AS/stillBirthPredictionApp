import React, { useState } from 'react';
import Bounce from 'react-reveal/Bounce';
import ContactForm from '../components/Contact/ContactForm';
import TextField from '../components/Form/TextField';
import sick from "../sick.png"
const CheckupScreen = () => {

    const [value, setValue] = useState(()=>{return 1});
    function settingValue(event, val) {
        // setValue(prevValue => val);
        setValue(val);

    }

    return (
        <section className="max-w-screen-xl py-24 mx-auto px-6  overflow-y-hidden">
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
                            <div className='text-center pb-5'><h1 className="text-2xl font-bold text-black brand-font select-none">Fill Your Details</h1></div>
                            {/* jhjhjhjhjh */}
                            <div>
                                <button className="border border-black hover:border-gray-200 p-3 m-4 hover:bg-gray-200 rounded font-semibold text-black " onClick={e => settingValue(e, 1)}>Fetal Factors</button>
                                <button className="border border-black hover:border-gray-200 p-3 m-4 hover:bg-gray-200 rounded font-semibold text-black " onClick={e => settingValue(e, 2)}>Maternal Factors</button>
                                <button className="border border-black hover:border-gray-200 p-3 m-4 hover:bg-gray-200 rounded font-semibold text-black " onClick={e => settingValue(e, 3)}>Placental Factors</button>
                            </div>
                            <div className='border border-black rounded p-3 m-2'>
                                {
                                    (() => {
                                        switch(value) {
                                                
                                            case(1): {
                                                    return (
                                                        <div className='flex flex-col gap-5 items-center'>
                                                        <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8">
                                                            Multiple Gestation(Twins=2, Triplets=3)
                                                            <div className='flex flex-row gap-3 flex-wrap'>
                                                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                                                    <p className='pb-1'>2</p>
                                                                    <input type="radio" id="2" name="multipleGestation" value="2"></input>
                                                                </label>
                                                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                                                    <p className='pb-1'>3</p>
                                                                    <input type="radio" id="3" name="multipleGestation" value="3"></input>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8">
                                                            Fetal Movement(mov/hr)
                                                            <div className='flex flex-row gap-3 flex-wrap'>
                                                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                                                    <input type="number" placeholder="" id="fetalMovement" name="fetalMovement" className='border border-gray-200 rounded'></input>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8">
                                                            Fetal Heartbeat(/min)
                                                            <div className='flex flex-row gap-3 flex-wrap'>
                                                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                                                <input type="number" placeholder="" id="fetalHeartbeat" name="fetalHeartbeat" className='border border-gray-200 rounded'></input>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8">
                                                            Gestation Age(in weeks)
                                                            <div className='flex flex-row gap-3 flex-wrap'>
                                                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                                                <input type="number" placeholder="" id="gestationAge" name="gestationAge" className='border border-gray-200 rounded'></input>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8">
                                                            Plcental Weight
                                                            <div className='flex flex-row gap-3 flex-wrap'>
                                                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                                                <input type="number" placeholder="" id="plcentalWeight" name="plcentalWeight" className='border border-gray-200 rounded'></input>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8">
                                                            Fetus Weight
                                                            <div className='flex flex-row gap-3 flex-wrap'>
                                                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                                                <input type="number" placeholder="" id="fetusWeight" name="fetusWeight" className='border border-gray-200 rounded'></input>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    )
                                                }
                                            break;
                                                
                                            case(2): {
                                                return (
                                                    <div className='flex flex-col gap-5 items-center'>
                                                        <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8">
                                                            Have Placental Abruption?
                                                            <div className='flex flex-row gap-3 flex-wrap'>
                                                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                                                    <p className='pb-1'>Yes</p>
                                                                    <input type="radio" id="yes" name="placentalAbruption" value="yes"></input>
                                                                </label>
                                                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                                                    <p className='pb-1'>No</p>
                                                                    <input type="radio" id="no" name="placentalAbruption" value="no"></input>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8">
                                                            Have Previous Stillbirth?
                                                            <div className='flex flex-row gap-3 flex-wrap'>
                                                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                                                    <p className='pb-1'>Yes</p>
                                                                    <input type="radio" id="yes" name="previousStillbirth" value="yes"></input>
                                                                </label>
                                                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                                                    <p className='pb-1'>No</p>
                                                                    <input type="radio" id="no" name="previousStillbirth" value="no"></input>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8">
                                                            Have Depression?
                                                            <div className='flex flex-row gap-3 flex-wrap'>
                                                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                                                    <p className='pb-1'>Yes</p>
                                                                    <input type="radio" id="yes" name="depression" value="yes"></input>
                                                                </label>
                                                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                                                    <p className='pb-1'>No</p>
                                                                    <input type="radio" id="no" name="depression" value="no"></input>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8">
                                                            Have Obesity?
                                                            <div className='flex flex-row gap-3 flex-wrap'>
                                                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                                                    <p className='pb-1'>Yes</p>
                                                                    <input type="radio" id="yes" name="obesity" value="yes"></input>
                                                                </label>
                                                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                                                    <p className='pb-1'>No</p>
                                                                    <input type="radio" id="no" name="obesity" value="no"></input>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8">
                                                            Drug Intake?
                                                            <div className='flex flex-row gap-3 flex-wrap'>
                                                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                                                    <p className='pb-1'>Yes</p>
                                                                    <input type="radio" id="yes" name="drugIntake" value="yes"></input>
                                                                </label>
                                                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                                                    <p className='pb-1'>No</p>
                                                                    <input type="radio" id="no" name="drugIntake" value="no"></input>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8">
                                                            Chromosomal/Genetic Abnormalities?
                                                            <div className='flex flex-row gap-3 flex-wrap'>
                                                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                                                    <p className='pb-1'>Yes</p>
                                                                    <input type="radio" id="yes" name="geneticAbnormalities" value="yes"></input>
                                                                </label>
                                                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                                                    <p className='pb-1'>No</p>
                                                                    <input type="radio" id="no" name="geneticAbnormalities" value="no"></input>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8">
                                                            Have Diabetes?
                                                            <div className='flex flex-row gap-3 flex-wrap'>
                                                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                                                    <p className='pb-1'>Yes</p>
                                                                    <input type="radio" id="yes" name="diabetes" value="yes"></input>
                                                                </label>
                                                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                                                    <p className='pb-1'>No</p>
                                                                    <input type="radio" id="no" name="diabetes" value="no"></input>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8">
                                                            Have a Kidney Disease?
                                                            <div className='flex flex-row gap-3 flex-wrap'>
                                                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                                                    <p className='pb-1'>Yes</p>
                                                                    <input type="radio" id="yes" name="kidneyDisease" value="yes"></input>
                                                                </label>
                                                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                                                    <p className='pb-1'>No</p>
                                                                    <input type="radio" id="no" name="kidneyDisease" value="no"></input>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8">
                                                            Have Thyroid?
                                                            <div className='flex flex-row gap-3 flex-wrap'>
                                                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                                                    <p className='pb-1'>Yes</p>
                                                                    <input type="radio" id="yes" name="thyroid" value="yes"></input>
                                                                </label>
                                                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                                                    <p className='pb-1'>No</p>
                                                                    <input type="radio" id="no" name="thyroid" value="no"></input>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8">
                                                            Married?
                                                            <div className='flex flex-row gap-3 flex-wrap'>
                                                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                                                    <p className='pb-1'>Yes</p>
                                                                    <input type="radio" id="yes" name="kidneyDisease" value="yes"></input>
                                                                </label>
                                                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                                                    <p className='pb-1'>No</p>
                                                                    <input type="radio" id="no" name="kidneyDisease" value="no"></input>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8">
                                                            Black Race?
                                                            <div className='flex flex-row gap-3 flex-wrap'>
                                                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                                                    <p className='pb-1'>Yes</p>
                                                                    <input type="radio" id="yes" name="blackRace" value="yes"></input>
                                                                </label>
                                                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                                                    <p className='pb-1'>No</p>
                                                                    <input type="radio" id="no" name="blackRace" value="no"></input>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8">
                                                            Financial Issues?
                                                            <div className='flex flex-row gap-3 flex-wrap'>
                                                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                                                    <p className='pb-1'>Yes</p>
                                                                    <input type="radio" id="yes" name="financialIssues" value="yes"></input>
                                                                </label>
                                                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                                                    <p className='pb-1'>No</p>
                                                                    <input type="radio" id="no" name="financialIssues" value="no"></input>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8">
                                                            Sleep Disorder?
                                                            <div className='flex flex-row gap-3 flex-wrap'>
                                                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                                                    <p className='pb-1'>Yes</p>
                                                                    <input type="radio" id="yes" name="sleepDisorder" value="yes"></input>
                                                                </label>
                                                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                                                    <p className='pb-1'>No</p>
                                                                    <input type="radio" id="no" name="sleepDisorder" value="no"></input>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8">
                                                            Age 
                                                            <div className='flex flex-row gap-3 flex-wrap'>
                                                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                                                    {/* <p className='pb-1'>Yes</p> */}
                                                                    <input type="number" placeholder="Age" id="sleepDisorder" name="sleepDisorder" className='border border-gray-200 rounded'></input>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                            break;

                                            case(3): {
                                                return (
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
                                                )
                                            }
                                            break;
                                            
                                            default: {
                                                    return (
                                                        <p>Bye</p>
                                                    )
                                                }
                                            break;
                                            }
                                    })()  
                                }  
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