import React from 'react'
import NavbarLogin from '../components/NavbarLogin'
import { MdMail } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io";
import Footer from '../components/Footer';

const Login = () => {
    return (
        <div className='bg-gray-100 min-h-screen flex flex-col justify-between gap-10'>
            <NavbarLogin  />
            <div className='flex flex-col items-center justify-center gap-5'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <h1 className='text-4xl font-extrabold'>Welcome Back</h1>
                    <h3 className='text-gray-600  '>Secure your financial future</h3>
                </div>
                <form action="" className='w-full max-w-md  mx-auto rounded-xl p-6 sm:p-8 bg-gray-50 flex flex-col gap-6 items-center justify-center  border border-gray-300'>
                    <div className='flex flex-col gap-2 w-full '>
                        <label className='text-sm font-medium text-gray-700 '>Email Address</label>
                        <div className='flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-300'>
                            <MdMail className=' text-gray-400' size={30} />
                            <input type="email" name="email" id="" placeholder=' name@company.com' className='outline-none w-full bg-transparent text-gray-700' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <label className='text-sm font-medium text-gray-700 flex justify-between gap-5'>Password <a href="#" className='hover:underline text-blue-800'>Forgot Passward?</a></label>
                        <div className='flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-300'>
                            <FaLock className=' text-gray-400' size={25} />
                            <input type="password" placeholder='........' className='outline-none w-full bg-transparent text-gray-700 placeholder:text-3xl placeholder:font-medium ' />
                        </div>
                    </div>

                    <button className=' py-4  bg-blue-700 text-gray-100 font-semibold w-full rounded-lg hover:cursor-pointer hover:shadow-lg active:scale-95 transition-transform '>Log In</button>
                    <div className='flex items-center gap-4 w-full'> <hr className='flex-1 border-gray-300' /><span className='text-sm text-gray-500 whitespace-nowrap'>OR CONTINUE WITH </span><hr className='flex-1 border-gray-300' /></div>
                    <div className='flex justify-between items-center gap-5 w-full'>
                        <button className='w-full px-5 py-3 rounded-lg border border-gray-300 flex justify-center gap-3 items-center font-semibold text-gray-600 hover:cursor-pointer active:bg-gray-200 '><FcGoogle size={25} /> Google</button>
                        <button className='w-full px-5 py-3 rounded-lg border border-gray-300 flex justify-center gap-3 items-center font-semibold text-gray-600 hover:cursor-pointer active:bg-gray-200'><IoLogoApple size={25} /> Apple</button>
                    </div>


                </form>
                <p className='text-sm text-gray-600 mb-5'>
                    By Logging in, you agree to our <a className='text-gray-800 hover:underline' href="">Terms of Service</a> and <a className='text-gray-800 hover:underline' href="">Privacy Policy</a>.
                </p>

            </div>
            <Footer/>

        </div>
    )
}

export default Login