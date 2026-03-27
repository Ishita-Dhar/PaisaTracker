import React from 'react'


const Settings = () => {
    return (
        <div className=' flex justify-center min-h-screen'>
            <div className='w-full max-w-5xl p-6 pb-6 space-y-6'>
                <div className='w-full'>
                    <h1 className='text-3xl font-extrabold text-gray-900'>Settings</h1>
                    <p className='text-gray-500'>Manage your profile, security, and app experience.</p>
                </div>
                <div className='bg-white rounded-lg border'>
                    <div className='flex justify-between items-center py-6 px-4 border-b'>
                        <h1 className='text-xl font-bold'>Profile Information</h1>
                        <button className='text-blue-700 font-medium cursor-pointer hover:underline'>Edit Profile</button>
                    </div>
                    <span className='flex gap-4 p-4'>
                        <div className='flex justify-center items-center'>
                            <div className='w-40 h-40 relative object-cover rounded-full'>
                                <img src="https://images.unsplash.com/photo-1654874060431-8e2aa5dfe0ec?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile" className='w-40 h-40 p-1 border object-cover bg-blue-200 rounded-full' />
                            </div>

                        </div>
                        <div className='px-2 flex flex-1 flex-col gap-4'>
                            <ul className='flex justify-between'>
                                <li>
                                    <h2 className='uppercase text-xs font-semibold tracking-wide text-gray-600'>Full Name</h2>
                                    <h1>Ishita Dhar</h1>
                                </li>
                                <li>
                                    <h2 className='uppercase text-xs font-semibold tracking-wide text-gray-600'>Email Address</h2>
                                    <h1>fhgsldkfhg@example.com</h1>
                                </li>
                            </ul>
                            <ul>
                                <li className='uppercase text-xs font-semibold tracking-wide text-gray-600'>Bio</li>
                                <li className='font-light text-gray-700 text-sm'> Financially focused professional tracking investmets and monthly expenses for personal growth</li>
                            </ul>

                        </div>

                    </span>
                </div>
                <div  className='bg-white rounded-lg border'>
                    <div className='flex justify-between items-center py-6 px-4 border-b'>
                        <h1 className='text-xl font-bold'>Account Security</h1>
                    </div>
                    <div className='flex justify-between items-center py-6 px-6'>
                        <h2 className='text-sm font-bold '>Password</h2>
                        <button className='bg-gray-200 hover:bg-gray-300 py-1 px-2 rounded-lg text-sm font-semibold cursor-pointer'>Change Password</button>
                    </div>

                </div>
                <div  className='bg-white rounded-lg border'>
                    <div className='flex justify-between items-center py-6 px-4 border-b'>
                        <h1 className='text-xl font-bold'>Preferences</h1>
                    </div>
                    <div className='flex justify-between items-center py-6 px-6'>
                        <span>
                            <h2 className='text-sm font-bold '>Dark Mode</h2>
                            <p className='text-sm text-gray-600 '>Enable high-contrast dark theme</p>
                        </span>
                        <button>

                        </button>
                    </div>
                    

                </div>
                <div className='p-3'>

                </div>
            </div>
        </div>
    )
}

export default Settings