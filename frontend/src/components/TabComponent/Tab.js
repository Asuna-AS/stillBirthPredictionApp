import React, { useState } from 'react';
import axios from "axios";
function ControlledTabsExample() {
    const [tab, setTab] = useState('tab1');
    const [age, setAge] = useState();
    const [placentalAbs, setplacentalAbs] = useState();
    const [prevSb, setprevSb] = useState();
    const [depression, setdepression] = useState();
    const [obesity, setobesity] = useState();
    const [drugIntake, setdrugIntake] = useState();
    const [chrAbr, setchrAbr] = useState();
    const [diabetes, setdiabetes] = useState();
    const [kidney, setkidney] = useState();
    const [thyroid, setthyroid] = useState();
    const [married, setmarried] = useState();
    const [blackrace, setblackrace] = useState();
    const [financial, setfinancial] = useState();
    const [sleep, setsleep] = useState();
    const [result, setResult] = useState();
    const [multipleGestation, setMultipleGestation] = useState();
    const [fetalMovement, setFetalMovement] = useState();
    const [fetalHeartbeat, setFetalHeartbeat] = useState();
    const [gestationAge,setgestationAge] = useState();
    const [plcentalWeight,setplcentalWeight] = useState();
    const [fetusWeight,setfetusWeight] = useState();
    function handleMaternalForm(event)
    {
        event.preventDefault();
            console.log(age, placentalAbs, prevSb, depression, obesity, drugIntake, chrAbr, diabetes, kidney, thyroid, married, blackrace, financial, sleep)
        if(age && placentalAbs && prevSb && depression && obesity && drugIntake && chrAbr && diabetes && kidney && thyroid && married && blackrace && financial && sleep && multipleGestation && fetalMovement && fetalHeartbeat && gestationAge && plcentalWeight && fetusWeight)
        {
            let formData = {"placentalAbs": placentalAbs, "prevSb": prevSb, "depression": depression, "obesity":obesity, "drugIntake" : drugIntake, "age" : age, "chrAbr": chrAbr, "kidney": kidney, "diabetes": diabetes, "thyroid": thyroid, "married": married, "blackrace": blackrace, "financial": financial, "sleep":sleep}
            console.log(formData)
            axios.post("http://localhost:5000/api", formData).then((response)=>{
                console.log(response.data.result);
                setResult(response.data.result);
            }).catch((error)=>{
                console.log(error);
            })
        }
        else
        {
            console.log("Empty form")
        }
    }

    function handlePlacentalForm(event)
    {
        event.preventDefault();
        console.log(age, placentalAbs, prevSb, depression, obesity, drugIntake, chrAbr, diabetes, kidney, thyroid, married, blackrace, financial, sleep)
        if(age && placentalAbs && prevSb && depression && obesity && drugIntake && chrAbr && diabetes && kidney && thyroid && married && blackrace && financial && sleep)
        {
            let formData = {"placentalAbs": placentalAbs, "prevSb": prevSb, "depression": depression, "obesity":obesity, "drugIntake" : drugIntake, "age" : age, "chrAbr": chrAbr, "kidney": kidney, "diabetes": diabetes, "thyroid": thyroid, "married": married, "blackrace": blackrace, "financial": financial, "sleep":sleep}
            console.log(formData)
            axios.post("http://localhost:5000/api", formData).then((response)=>{
                console.log(response.data.result);
                setResult(response.data.result);
            }).catch((error)=>{
                console.log(error);
            })
        }
        else
        {
            console.log("Empty form")
        }
    }

    function handleFetalForm(event)
    {
        event.preventDefault();
        console.log(age, placentalAbs, prevSb, depression, obesity, drugIntake, chrAbr, diabetes, kidney, thyroid, married, blackrace, financial, sleep)
        if(multipleGestation && fetalMovement && fetalHeartbeat && gestationAge && plcentalWeight && fetusWeight)
        {
            let formData = {"placentalAbs": placentalAbs, "prevSb": prevSb, "depression": depression, "obesity":obesity, "drugIntake" : drugIntake, "age" : age, "chrAbr": chrAbr, "kidney": kidney, "diabetes": diabetes, "thyroid": thyroid, "married": married, "blackrace": blackrace, "financial": financial, "sleep":sleep, "multipleGestation" : multipleGestation, "fetalMovement" : fetalMovement, "fetalHeartbeat": fetalHeartbeat,"gestationAge" : gestationAge, "plcentalWeight" : plcentalWeight,"fetusWeight" : fetusWeight  }
            console.log(formData)
            axios.post("http://localhost:5000/api", formData).then((response)=>{
                console.log(response.data.result);
                setResult(response.data.result);
            }).catch((error)=>{
                console.log(error);
            })
        }
        else
        {
            console.log("Empty form")
        }
    }

    return (

        <div className="flex flex-col items-center space-x-2 pb-4 px-28">
            <form className="bg-white mt-6 p-6 rounded-lg shadow-lg shadow-cyan-500/50">
            <div>
                <button className="border border-black hover:border-gray-200 p-3 m-4 hover:bg-gray-200 rounded font-semibold text-black " onClick={e => { setTab("tab1") }}>Maternal Factors</button>
                <button className="border border-black hover:border-gray-200 p-3 m-4 hover:bg-gray-200 rounded font-semibold text-black " onClick={e => { setTab("tab2") }}>Placental Factors</button>
                <button className="border border-black hover:border-gray-200 p-3 m-4 hover:bg-gray-200 rounded font-semibold text-black " onClick={e => { setTab("tab3") }}>Fetal Factors</button>
            </div>
            {tab == "tab1" &&
                <div className='bg-white rounded-xl transition-all duration-300 w-4/5 p-4 px-6'>
                    <h1 className='text-lg font-semibold flex flex-row justify-center pb-4'>Prediction on the basis of Placental factors</h1>
                    <div className='flex flex-col bg-indigo-200 gap-3 rounded-2xl px-3 py-4'>
                        <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                            Have a Blood Clotting Disorder?
                            <div className='flex flex-row gap-3 flex-wrap'>
                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                    <p className='pb-1'>Yes</p>
                                    <input required type="radio" id="yes" name="bloodClotting" value="1"></input>
                                </label>
                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                    <p className='pb-1'>No</p>
                                    <input required type="radio" id="no" name="bloodClotting" value="0"></input>
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                            Have a High Blood Pressure?
                            <div className='flex flex-row gap-3 flex-wrap'>
                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                    <p className='pb-1'>Yes</p>
                                    <input required type="radio" id="yes" name="bloodPressure" value="1"></input>
                                </label>
                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                    <p className='pb-1'>No</p>
                                    <input required type="radio" id="no" name="bloodPressure" value="0"></input>
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                            Have a Renal Disease?
                            <div className='flex flex-row gap-3 flex-wrap'>
                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                    <p className='pb-1'>Yes</p>
                                    <input required type="radio" id="yes" name="renalDisease" value="1"></input>
                                </label>
                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                    <p className='pb-1'>No</p>
                                    <input required type="radio" id="no" name="renalDisease" value="0"></input>
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                            Late Term Pregnancy?
                            <div className='flex flex-row gap-3 flex-wrap'>
                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                    <p className='pb-1'>Yes</p>
                                    <input required type="radio" id="yes" name="lateTermPregnancy" value="1"></input>
                                </label>
                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                    <p className='pb-1'>No</p>
                                    <input required type="radio" id="no" name="lateTermPregnancy" value="0"></input>
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                            Have Oligohydramnios?
                            <div className='flex flex-row gap-3 flex-wrap'>
                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                    <p className='pb-1'>Yes</p>
                                    <input required type="radio" id="yes" name="oligohydramnios" value="1"></input>
                                </label>
                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                    <p className='pb-1'>No</p>
                                    <input required type="radio" id="no" name="oligohydramnios" value="0"></input>
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                            Have a issue with Umbilical Cord?
                            <div className='flex flex-row gap-3 flex-wrap'>
                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                    <p className='pb-1'>Yes</p>
                                    <input required type="radio" id="yes" name="umbilicalCordIssue" value="1"></input>
                                </label>
                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                    <p className='pb-1'>No</p>
                                    <input required type="radio" id="no" name="umbilicalCordIssue" value="0"></input>
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                            Have a Group B infection?
                            <div className='flex flex-row gap-3 flex-wrap'>
                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                    <p className='pb-1'>Yes</p>
                                    <input required type="radio" id="yes" name="groupBInfection" value="1"></input>
                                </label>
                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                    <p className='pb-1'>No</p>
                                    <input required type="radio" id="no" name="groupBInfection" value="0"></input>
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                            Water Break?
                            <div className='flex flex-row gap-3 flex-wrap'>
                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                    <p className='pb-1'>Yes</p>
                                    <input required type="radio" id="yes" name="waterBreak" value="1"></input>
                                </label>
                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                    <p className='pb-1'>No</p>
                                    <input required type="radio" id="no" name="waterBreak" value="0"></input>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {tab == "tab2" &&
                <div className='bg-white rounded-xl transition-all duration-300 w-4/5 p-4 px-6'>
                    <h1 className='text-lg font-semibold flex flex-row justify-center pb-4'>Prediction on the basis of Maternal factors</h1>
                    <div className='flex flex-col gap-3 items-center bg-indigo-200 rounded-2xl py-4'>
                        <form className='flex flex-col w-full px-12'>
                            <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                                Age
                                <div className='flex flex-row gap-3 flex-wrap'>
                                    <label className='flex flex-row gap-4 m-auto flex-wrap'>

                                        <input required onChange={(e) => { setAge(e.target.value) }} type="number" placeholder="Age" id="sleepDisorder" name="sleepDisorder" className='bg-transparent border-b text-center border-black w-16'></input>
                                    </label>
                                </div>
                            </div>
                            <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                                Have Placental Abruption?

                                <div className='flex flex-row gap-3 flex-wrap'>
                                    <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                        <p className='pb-1'>Yes</p>
                                        <input required onClick={(e) => { setplacentalAbs(e.target.value) }} type="radio" id="yes" name="placentalAbruption" value="1"></input>
                                    </label>
                                    <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                        <p className='pb-1'>No</p>
                                        <input required onClick={(e) => { setplacentalAbs(e.target.value) }} type="radio" id="no" name="placentalAbruption" value="0"></input>
                                    </label>
                                </div>
                            </div>
                            <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                                Have Previous Stillbirth?
                                <div className='flex flex-row gap-3 flex-wrap'>
                                    <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                        <p className='pb-1'>Yes</p>
                                        <input required type="radio" onClick={(e) => { setprevSb(e.target.value) }} id="yes" name="previousStillbirth" value="1"></input>
                                    </label>
                                    <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                        <p className='pb-1'>No</p>
                                        <input required type="radio" onClick={(e) => { setprevSb(e.target.value) }} id="no" name="previousStillbirth" value="0"></input>
                                    </label>
                                </div>
                            </div>
                            <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                                Have Depression?
                                <div className='flex flex-row gap-3 flex-wrap'>
                                    <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                        <p className='pb-1'>Yes</p>
                                        <input required type="radio" onClick={(e) => { setdepression(e.target.value) }} id="yes" name="depression" value="1"></input>
                                    </label>
                                    <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                        <p className='pb-1'>No</p>
                                        <input required type="radio" onClick={(e) => { setdepression(e.target.value) }} id="no" name="depression" value="0"></input>
                                    </label>
                                </div>
                            </div>
                            <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                                Have Obesity?
                                <div className='flex flex-row gap-3 flex-wrap'>
                                    <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                        <p className='pb-1'>Yes</p>
                                        <input required type="radio" onClick={(e) => { setobesity(e.target.value) }} id="yes" name="obesity" value="1"></input>
                                    </label>
                                    <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                        <p className='pb-1'>No</p>
                                        <input required type="radio" onClick={(e) => { setobesity(e.target.value) }} id="no" name="obesity" value="0"></input>
                                    </label>
                                </div>
                            </div>
                            <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                                Drug Intake?
                                <div className='flex flex-row gap-3 flex-wrap'>
                                    <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                        <p className='pb-1'>Yes</p>
                                        <input required type="radio" onClick={(e) => { setdrugIntake(e.target.value) }} id="yes" name="drugIntake" value="1"></input>
                                    </label>
                                    <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                        <p className='pb-1'>No</p>
                                        <input required type="radio" onClick={(e) => { setdrugIntake(e.target.value) }} id="no" name="drugIntake" value="0"></input>
                                    </label>
                                </div>
                            </div>
                            <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                                Chromosomal/Genetic Abnormalities?
                                <div className='flex flex-row gap-3 flex-wrap'>
                                    <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                        <p className='pb-1'>Yes</p>
                                        <input required type="radio" onClick={(e) => { setchrAbr(e.target.value) }} id="yes" name="geneticAbnormalities" value="1"></input>
                                    </label>
                                    <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                        <p className='pb-1'>No</p>
                                        <input required type="radio" onClick={(e) => { setchrAbr(e.target.value) }} id="no" name="geneticAbnormalities" value="0"></input>
                                    </label>
                                </div>
                            </div>
                            <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                                Have Diabetes?
                                <div className='flex flex-row gap-3 flex-wrap'>
                                    <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                        <p className='pb-1'>Yes</p>
                                        <input required type="radio" onClick={(e) => { setdiabetes(e.target.value) }} id="yes" name="diabetes" value="1"></input>
                                    </label>
                                    <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                        <p className='pb-1'>No</p>
                                        <input required type="radio" onClick={(e) => { setdiabetes(e.target.value) }} id="no" name="diabetes" value="0"></input>
                                    </label>
                                </div>
                            </div>
                            <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                                Have a Kidney Disease?
                                <div className='flex flex-row gap-3 flex-wrap'>
                                    <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                        <p className='pb-1'>Yes</p>
                                        <input required type="radio" onClick={(e) => { setkidney(e.target.value) }} id="yes" name="kidneyDisease" value="1"></input>
                                    </label>
                                    <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                        <p className='pb-1'>No</p>
                                        <input required type="radio" onClick={(e) => { setkidney(e.target.value) }} id="no" name="kidneyDisease" value="0"></input>
                                    </label>
                                </div>
                            </div>
                            <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                                Have Thyroid?
                                <div className='flex flex-row gap-3 flex-wrap'>
                                    <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                        <p className='pb-1'>Yes</p>
                                        <input required type="radio" onClick={(e) => { setthyroid(e.target.value) }} id="yes" name="thyroid" value="1"></input>
                                    </label>
                                    <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                        <p className='pb-1'>No</p>
                                        <input required type="radio" onClick={(e) => { setthyroid(e.target.value) }} id="no" name="thyroid" value="0"></input>
                                    </label>
                                </div>
                            </div>
                            <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                                Married?
                                <div className='flex flex-row gap-3 flex-wrap'>
                                    <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                        <p className='pb-1'>Yes</p>
                                        <input required type="radio" onClick={(e) => { setmarried(e.target.value) }} id="yes" name="married" value="1"></input>
                                    </label>
                                    <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                        <p className='pb-1'>No</p>
                                        <input required type="radio" onClick={(e) => { setmarried(e.target.value) }} id="no" name="married" value="0"></input>
                                    </label>
                                </div>
                            </div>
                            <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                                Black Race?
                                <div className='flex flex-row gap-3 flex-wrap'>
                                    <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                        <p className='pb-1'>Yes</p>
                                        <input required type="radio" onClick={(e) => { setblackrace(e.target.value) }} id="yes" name="blackRace" value="1"></input>
                                    </label>
                                    <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                        <p className='pb-1'>No</p>
                                        <input required type="radio" onClick={(e) => { setblackrace(e.target.value) }} id="no" name="blackRace" value="0"></input>
                                    </label>
                                </div>
                            </div>
                            <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                                Financial Issues?
                                <div className='flex flex-row gap-3 flex-wrap'>
                                    <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                        <p className='pb-1'>Yes</p>
                                        <input required type="radio" onClick={(e) => { setfinancial(e.target.value) }} id="yes" name="financialIssues" value="1"></input>
                                    </label>
                                    <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                        <p className='pb-1'>No</p>
                                        <input required type="radio" onClick={(e) => { setfinancial(e.target.value) }} id="no" name="financialIssues" value="0"></input>
                                    </label>
                                </div>
                            </div>
                            <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                                Sleep Disorder?
                                <div className='flex flex-row gap-3 flex-wrap'>
                                    <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                        <p className='pb-1'>Yes</p>
                                        <input required type="radio" onClick={(e) => { setsleep(e.target.value) }} id="yes" name="sleepDisorder" value="1"></input>
                                    </label>
                                    <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                        <p className='pb-1'>No</p>
                                        <input required type="radio" onClick={(e) => { setsleep(e.target.value) }} id="no" name="sleepDisorder" value="0"></input>
                                    </label>
                                </div>
                            </div>
                            <div className='flex justify-center pt-2'>
                                <button type='button' onClick={(event) => {handleForm(event)}} className='bg-gray-700 p-2 rounded-xl text-white'>Submit</button>
                            </div>
                        </form>
                        <div>
                            {(result <=40) ? "Low chances of stillBirth" : (result<=70 && result >= 40) ? "StillBirth can occur" : "Risk is high consult nearby hospital" }
                        </div>
                    </div>
                </div>
            }
            {tab == "tab3" &&
                <div className='bg-white rounded-xl transition-all duration-300 w-4/5 p-4 px-6'>
                    <h1 className='text-lg font-semibold flex flex-row justify-center pb-4'>Prediction on the basis of Fetal Factors</h1>
                    <div className='flex flex-col gap-3 items-center bg-indigo-200 px-3 rounded-2xl py-4'>
                        <div className="flex flex-row w-full flex-wrap gap-4 justify-between px-8 hover:shadow-xl hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                            Multiple Gestation
                            <div className='flex flex-row gap-3 flex-wrap'>
                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                    <p className='pb-1'>Twins</p>
                                    <input required type="radio" id="2" name="multipleGestation" value="2"></input>
                                </label>
                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                    <p className='pb-1'>Triplets</p>
                                    <input required type="radio" id="3" name="multipleGestation" value="3"></input>
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                            Fetal Movement
                            <div className='flex flex-row gap-3 flex-wrap'>
                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                    <input required type="number" placeholder="per hour" id="fetalMovement" name="fetalMovement" className='border-b bg-transparent border-black w-32 text-center'></input>
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                            Fetal Heartbeat
                            <div className='flex flex-row gap-3 flex-wrap'>
                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                    <input required type="number" placeholder="per min" id="fetalHeartbeat" name="fetalHeartbeat" className='border-b bg-transparent border-black w-32 text-center'></input>
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                            Gestation Age
                            <div className='flex flex-row gap-3 flex-wrap'>
                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                    <input required type="number" placeholder="in weeks" id="gestationAge" name="gestationAge" className='border-b bg-transparent border-black w-32 text-center'></input>
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                            Plcental Weight
                            <div className='flex flex-row gap-3 flex-wrap'>
                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                    <input required type="number" placeholder="in kg" id="plcentalWeight" name="plcentalWeight" className='border-b bg-transparent border-black w-32 text-center'></input>
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                            Fetus Weight
                            <div className='flex flex-row gap-3 flex-wrap'>
                                <label className='flex flex-row gap-4 m-auto flex-wrap'>
                                    <input required type="number" placeholder="in grams" id="fetusWeight" name="fetusWeight" className='border-b bg-transparent border-black w-32 text-center'></input>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            }

            </form>
        </div>
    );
}

export default ControlledTabsExample;