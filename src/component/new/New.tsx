import './New.css';
import {NavLink} from "react-router-dom";

export function New() {
    return (
        <>
            <div className='flex flex-col bg-teal-800 rounded-tr-[0px] h-screen text-white '>

                <div className='ml-72 mt-20'>
                    <img src='src/assets/twc-logo.png' width={80} height={70} alt='logo' className='w-auto h-auto'/>
                    <p className='font-bold text-3xl'>contacts</p>
                    <p className='text-2xl'>portal</p>

                    <p className='text-white font-futura-md-bt font-bold text-[34px] mt-14 xl:mt-24'>New Contact</p>


                    <div className='flex flex-row'>
                        {/* Add Full Name */}
                        <input type='text'
                               placeholder='full name'
                               className='mt-10 w-[350px] xl:w-[400px] mr-8 rounded-3xl p-[8px] text-custom pl-8 font-bold'/>

                        {/* Add email */}
                        <input type='email'
                               placeholder='e-mail'
                               className='mt-10 w-[350px] xl:w-[400px] rounded-3xl p-[8px] text-custom pl-8 font-bold'/>
                    </div>


                    <div className='flex flex-row items-center'>
                        {/* Add Phone Number */}
                        <input type='text'
                               placeholder='phone number'
                               className='mt-8 w-[350px] mr-8 rounded-3xl p-[8px] xl:w-[400px] text-custom pl-8 font-bold'/>

                        {/* Add Gender */}
                        <div className='flex flex-row items-center justify-center mt-[24px] xl:mt-[28px] ml-2'>

                            <p className=''>Gender</p>

                            {/*<div className='w-4 h-4 border-white border-2 cursor-pointer bg-red-600  rounded-full mx-2 ml-14 xl:ml-20' ></div>*/}

                            <div className='w-4 h-4 border-white border-2 cursor-pointer  rounded-full mx-2 ml-14 xl:ml-20 bg-white'></div>
                            <p>male</p>

                            {/*<div className='w-4 h-4 border-white border-2 cursor-pointer bg-red-600 rounded-full mx-2 ml-10 xl:ml-20'></div>*/}

                            <div className='w-4 h-4 border-white border-2 cursor-pointer rounded-full mx-2 ml-10 xl:ml-20' ></div>
                            <p>female</p>

                        </div>
                    </div>


                    <button className='border border-b-2 rounded-2xl px-6 py-1 mt-10'>Add Contact</button>

                </div>
            </div>
        </>
    );
}