import './Welcome.css';
import {NavLink} from "react-router-dom";

export function Welcome() {
    return (
        <>
            <div className='flex flex-col bg-teal-900 rounded-tr-[0px] h-screen text-white '>

                <div className='ml-72 mt-20'>
                    <img src='src/assets/twc-logo.png' width={80} height={70} alt='Logo'/>
                    <p className='font-bold text-3xl'>contacts</p>
                    <p className='text-2xl'>portal</p>

                    <p className='text-white font-futura-md-bt font-bold text-[40px] mt-20 xl:mt-24'>Welcome,</p>
                    <p className='text-[25px] font-futura-md-bt font-normal'>
                        This is where your contacts will live. Click the button below <br></br> to add a new contact.
                    </p>

                    <div className='flex flex-col gap-x-40'>
                        <button className='w-[150px] s border border-b-2 rounded-2xl px-6 py-1 mt-20'>Contacts</button>
                        <p className='mt-20 underline ml-2 cursor-pointer' >&lt; Logout</p>
                    </div>

                </div>
            </div>
        </>
    );
}