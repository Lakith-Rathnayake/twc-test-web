import './Welcome.css';
import React, {useState} from "react";
import {getUser} from "../../service/user-service.ts";

export function Welcome() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleLoginClick = async () => {
        try {
            const user = await getUser(email, password);
            console.log('User data:', user);
            alert('Logging success');
            // Handle successful login, such as redirecting to another page
        } catch (error) {
            alert('Logging failed');
            console.error('Error logging in:', error);
            // Handle login error, such as displaying an error message to the user
        }
    }

    return (
        <>
            <div className='w-full flex flex-row'>
                <div className='w-7/12'>

                    {/* Background Images */}
                    <div className='h-screen absolute inset-0 z-10'>
                        <img src='src/assets/Ellipse.png' alt='Ellipse' loading={"eager"} width={1000} height={1000} className='h-full w-auto object-cover pr-0' />
                    </div>
                    <div className=' h-screen absolute inset-0 ml-[600px]'>
                        <img src='src/assets/bg.png' alt='bg' width={1000} height={1000} className='h-full w-full object-cover pr-0' />
                    </div>

                    {/* Header and Login Form */}
                    <div className='w-7/12 h-screen relative text-white z-20'>
                        <div className='absolute inset-0 flex flex-col xl:ml-40 ml-20'>
                            <p className='text-white font-bold text-[46px] ml-0 xl:mt-32 mt-20'>Hi there,</p>
                            <p className='text-[28px] font-sans mt-2 ml-0 font-normal'>
                                Welcome to our<br />
                                contacts portal
                            </p>

                            <input onChange={handleEmailChange} type='email'  placeholder='e-mail' className='mt-14 w-full rounded-3xl p-[8px] text-black pl-8 font-bold' />


                            <input onChange={handlePasswordChange} type='password' placeholder='password' className='mt-8 w-full rounded-3xl p-[8px] text-black pl-8 font-bold' />


                            <div className='flex flex-row mt-10 xl:mt-20 items-center'>
                                <button onClick={handleLoginClick}  className='border-2 p-[4px] px-[30px] rounded-3xl'>login</button>
                                <p className='mx-4'>or</p>
                                <p  className='underline cursor-pointer'>Click here to Register</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='w-5/12 z-10'>
                    <div className='ml-10 xl:mt-[250px] mt-[220px]'>
                        <img src='src/assets/twc-logo.png' alt='logo' className='h-auto' width={150} height={60} />
                        <p className='font-bold text-6xl text-custom mt-2'>contacts</p>
                        <p className='text-5xl text-custom font-semibold'>portal</p>
                    </div>
                </div>
            </div>
        </>
    );
}