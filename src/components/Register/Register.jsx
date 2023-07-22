import React from 'react';

const Register = () => {
    return (
        <div className=" container mx-auto h-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 flex justify-center items-center">

        <div className='container mx-auto bg-transparent rounded-lg p-8 m-5 max-w-lg shadow-2xl'>
            <div className='flex justify-center font-bold text-black text-3xl p-4 mb-5'>Register</div>
            <form action='' className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                    <label className='font-bold text-black'>Name</label>
                    <input type="text" name="username" id="username" placeholder='Enter Your Name' className='bg-transparent border rounded border-gray-700 text-black p-2' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-bold text-black'>Email</label>
                    <input type="email" name="email" id="email" placeholder='Enter Your Email' className='bg-transparent border rounded border-gray-700 text-black p-2 ' />
                     
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-bold text-black'>Password</label>
                    <input type="password" name="password" id="password" placeholder='Set a Passward' className='bg-transparent border rounded border-gray-700 text-black p-2' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-bold text-black'>Confirm Password</label>
                    <input type="password" name="confirmp" id="confirmp" placeholder='Confirm Password' className='bg-transparent border rounded border-gray-700 text-black p-2' />
                </div>
                <button type="submit" className='border p-2 w-full font-bold text-black bg-green-300 '>Sign Up</button>
            </form>
        </div>
        </div>
    );
};

export default Register;