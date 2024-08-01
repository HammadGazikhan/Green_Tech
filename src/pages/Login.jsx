import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
// import axios from 'axios';
// import emailjs from 'emailjs-com';
// import Notiflix from 'notiflix';

const Contact = () => {
    useDocTitle('LCS | LCS - Send us a message')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [errors, setErrors] = useState([])

    const clearErrors = () => {
        setErrors([])
    }

    const clearInput = () => {

        setEmail('')
        setPassword('')

    }
    const sendEmail = (e) => {
        alert("Sending email to", email)
    }


    return (
        <>

            <div id='contact' className="flex justify-center items-center mt-12 w-full bg-white py-12 lg:py-24 ">
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">

                    <form onSubmit={sendEmail}>

                        <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:px-20 mx-auto rounded-2xl shadow-2xl">
                            <div className="flex">
                                <h1 className="font-bold text-center lg:text-left text-lime-600 uppercase text-4xl">Login</h1>
                            </div>
                            <div className="grid grid-cols-1 gap-5  my-12">
                                

                                <div>
                                    <input
                                        name="email"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="email"
                                        placeholder="Email*"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors &&
                                        <p className="text-red-500 text-sm">{errors.email}</p>
                                    }
                                </div>

                                <div>
                                    <input
                                        name="password"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="password"
                                        placeholder="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors &&
                                        <p className="text-red-500 text-sm">{errors.password}</p>
                                    }
                                </div>
                            </div>
                            
                            <div className="my-2 w-full ">
                                <button type="submit" id="submitBtn" className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-lime-600 text-gray-100 p-3 rounded-lg w-full 
                                    focus:outline-none focus:shadow-outline">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>


    )
}

export default Contact;