import React, {useState} from 'react';
import Bounce from 'react-reveal/Bounce';
import TextField from '../Form/TextField';
import {db} from '../../config/firebase.js'
import {addDoc, collection} from 'firebase/firestore'

const ContactForm = () => {
    //form inputs
    // const Inputs = [
    //     { id: 1, type: "text", placeholder: "Full Name" },
    //     { id: 2, type: "email", placeholder: "Email" },
    //     { id: 3, type: "number", placeholder: "Phone Number" },
    // ]

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [message, setMessage] = useState();

    const userCollectionRef = collection(db, "contactData")
    
    const handleSubmit=()=>{
         addDoc(userCollectionRef,{name:name, email: email, phone: phone, message: message})
    }
    return (
        <form className="p-6 flex flex-col justify-center w-full lg:w-2/4 mx-auto" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col space-y-6">
                <Bounce left>
                        <TextField
                            type={name}
                            placeholder="Full Name"
                            onChange={(event)=>{setName(event.target.value)}}
                        />
                        <TextField
                            type={email}
                            placeholder="Email"
                            onChange={(event)=>{setEmail(event.target.value)}}
                        />
                        <TextField
                            type={phone}
                            placeholder="Phone Number"
                            onChange={(event)=>{setPhone(event.target.value)}}
                        />
                        <TextField
                            className="w-full px-4 py-3 h-36 rounded-lg ring-blue-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 resize-none"
                            type={message}
                            placeholder="Message"
                            onChange={(event)=>{setMessage(event.target.value)}}
                        />
                </Bounce>

            </div>
            {/* text field  */}
            <Bounce left>
                <button type="submit" onClick={handleSubmit} className="btn-primary bg-blue-500 px-6 py-3 w-36 mt-6 hover:bg-red-500">
                    Submit
                </button>
            </Bounce>
        </form>

    )
}

export default ContactForm
