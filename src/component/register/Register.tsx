import './Register.css';
import {NavLink, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {saveUser} from "../../service/user-service.ts";

export function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value);
    }

    function handleConfirmPasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
        setConfirmPassword(e.target.value);
    }

    async function handleRegisterClick() {
        if (password !== confirmPassword) {
            alert('Passwords do not match. Please enter matching passwords.');
            return; // Stop registration if passwords don't match
        }
        try {
            const user = await saveUser(email, password);
            console.log('User data:', user);
            navigate('/login');
        } catch (error) {
            alert('Registration failed');
            console.error('Error logging in:', error);
        }
    }

    return (
        <>
            <div className='w-full flex flex-row'>

                <div className='w-7/12'>
                    <div className='h-screen absolute inset-0 z-10'>
                        <img src='src/assets/Ellipse.png' width={1000} height={1000} className='h-full w-auto object-cover pr-0' alt='ellipse' />
                    </div>
                    <div className=' h-screen absolute inset-0 ml-[600px]'>
                        <img src='src/assets/bg.png' width={1000} height={1000} className='h-full w-full object-cover pr-0' alt='background' />
                    </div>

                    <div className='w-7/12 h-screen relative text-white z-20'>
                        <div className='absolute inset-0 flex flex-col xl:ml-40 ml-20'>
                            <p className='text-white font-bold text-[42px] ml-0 xl:mt-32 mt-20'>Register Now!</p>

                            <input onChange={handleEmailChange} type='email' placeholder='e-mail' className='mt-10 w-full rounded-3xl p-[8px] text-black pl-8 font-bold' />

                            <input onChange={handlePasswordChange} type='password' placeholder='create password' className='mt-8 w-full rounded-3xl p-[8px] text-black pl-8 font-bold' />


                            <input onChange={handleConfirmPasswordChange} type='password' placeholder='confirm password' className='mt-8 w-full rounded-3xl p-[8px] text-black pl-8 font-bold' />


                            <button onClick={handleRegisterClick} className='border-2 p-[4px] px-[30px] rounded-3xl w-[150px] mt-20'>register</button>
                            <NavLink to={'/login'}> <p className='mt-20 underline ml-2 cursor-pointer' >&lt; Back to login</p> </NavLink>
                        </div>
                    </div>
                </div>


                <div className='w-5/12 z-10'>
                    <div className='ml-10 xl:mt-[250px] mt-[200px]'>
                        <img src='src/assets/twc-logo.png' className='w-[140px] h-auto' width={150} height={60} alt='logo' />
                        <p className='font-bold text-6xl text-custom mt-2'>contacts</p>
                        <p className='text-5xl text-custom font-semibold'>portal</p>
                    </div>
                </div>

            </div>
        </>
    );
}