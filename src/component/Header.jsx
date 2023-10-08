import logo from '../assets/logo_school.png';
import cloudLogo from '../assets/logo_cloud.png';
import { useState } from 'react';

function Header() {
    const [open, setOpen] = useState(false);
    return (
        <header className="flex justify-between items-center flex-col">
            <div className="w-full flex justify-between items-center xl:px-[100px] py-1">
                <div className="flex space-x-3 pl-10 xl:pl-0">
                    <div className="flex justify-center items-center">
                        <div className="p-1 mr-1 bg-[#ff5202] rounded-full flex justify-center items-center"><i className="fa-solid fa-phone text-white text-[12px]"></i></div>
                        <p className="text-[14px] text-[#0056b3] hover:text-[#406da1] font-Open-sans cursor-pointer">+91-9540349392</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="p-1 mr-1 bg-[#ff5202] rounded-full flex justify-center items-center"><i className="fa-solid fa-envelope text-white text-[12px]"></i></div>
                        <p className="text-[14px] font-Open-sans cursor-pointer">contact@schoolaura.com</p>
                    </div>
                </div>
                <div className="hidden md:flex space-x-3 pr-10 xl:pr-0">
                    <button className="hidden lg:block w-[105px] h-[28px] text-[16px] rounded-md text-white bg-[#1bd741] font-Open-sans"><i className="fa-brands fa-whatsapp text-[14px]"></i> WhatsApp</button>
                    <button className="hidden lg:block w-[105px] h-[28px] text-[16px] rounded-md text-white bg-[#a4c639] font-Open-sans"><i className="fa-solid fa-mobile-screen-button text-[14px]"></i> Mobile App</button>
                    <button className="w-[105px] h-[28px] text-[16px] rounded-md text-white bg-[#0d1028] font-Open-sans">Login</button>
                    <button className="w-[105px] h-[28px] text-[16px] rounded-md text-white bg-[#0d1028] font-Open-sans">Registration</button>
                </div>
            </div>
            <div className="relative w-full h-auto flex justify-between items-center px-[100px] py-1 bg-[#ff5202]">
                <div className="absolute left-0 top-0 w-[220px] h-[90px] xl:w-[280px] xl:h-[130px] bg-no-repeat z-10 bg-contain" style={{ backgroundImage: `url(${cloudLogo})` }}>
                    <img src={logo} alt="logo" className='w-[120px] h-[38px] xl:w-[130px] xl:h-[44px] ml-8 mt-2 xl:ml-24 xl:mt-2 z-20' />
                </div>
                <div className={open ? 'fixed xl:hidden top-0 left-0 bg-black z-50 w-[250px] h-[100%] pt-3 pb-3 overflow-y-scroll' : 'hidden xl:block absolute top-[10px] right-[100px] z-40'}>
                    <ul className={open ? 'flex flex-col' : 'flex justify-center items-center'}>
                        <li className='mb-5 xl:ml-2'><a href='/' className='text-white text-lg pl-5 hover:text-[#efff00]'>Home</a></li>
                        <li className='mb-5 xl:ml-2'>
                            <a href='/' className='text-white text-lg pl-5 hover:text-[#efff00]'>Exam Solution <i className="fa-solid fa-caret-down"></i></a>
                            <ul className={open ? "mt-2 block" : "hidden"}>
                                <li className='p-2 bg-gray-700 border-b border-[#ff5202]'><a href='/' className='pl-6 text-white hover:text-[#efff00]'>a <sup>st</sup>12<sub>th</sub> Exam</a></li>
                                <li className='p-2 bg-gray-700 border-b border-[#ff5202]'><a href='/' className='pl-6 text-white hover:text-[#efff00]'>Competitive Exam</a></li>
                                <li className='p-2 bg-gray-700 border-b border-[#ff5202]'><a href='/' className='pl-6 text-white hover:text-[#efff00]'>Entrance Exam</a></li>
                            </ul>
                        </li>
                        <li className='mb-5 xl:ml-2'>
                            <a href='/' className='text-white text-lg pl-5 hover:text-[#efff00]'>Online Study <i className="fa-solid fa-caret-down"></i></a>
                            <ul className={open ? "mt-2 block" : "hidden"}>
                                <li className='p-2 bg-gray-700 border-b border-[#ff5202]'><a href='/' className='pl-6 text-white hover:text-[#efff00]'>a <sup>st</sup>12<sub>th</sub> Class</a></li>
                                <li className='p-2 bg-gray-700 border-b border-[#ff5202]'><a href='/' className='pl-6 text-white hover:text-[#efff00]'>Competitive Class</a></li>
                                <li className='p-2 bg-gray-700 border-b border-[#ff5202]'><a href='/' className='pl-6 text-white hover:text-[#efff00]'>Entrance Class</a></li>
                            </ul>
                        </li>
                        <li className='mb-5 xl:ml-2'>
                            <a href='/' className='text-white text-lg pl-5 hover:text-[#efff00]'>Tutor Solution  <i className="fa-solid fa-caret-down"></i></a>
                            <ul className={open ? "mt-2 block" : "hidden"}>
                                <li className='p-2 bg-gray-700 border-b border-[#ff5202]'><a href='/' className='pl-6 text-white hover:text-[#efff00]'>Find Tutor</a></li>
                                <li className='p-2 bg-gray-700 border-b border-[#ff5202]'><a href='/' className='pl-6 text-white hover:text-[#efff00]'>Become Tutor</a></li>
                            </ul>
                        </li>
                        <li className='mb-5 xl:ml-2'><a href='/' className='text-white text-lg pl-5 hover:text-[#efff00]'>Blogs</a></li>
                        <li className='mb-5 xl:ml-2'><a href='/' className='text-white text-lg pl-5 hover:text-[#efff00]'>Contact Us</a></li>
                        <li className='mb-5 xl:ml-2 xl:bg-[#0d1028] xl:px-2 xl:py-1 xl:rounded-md'><a href='/' className='text-white text-lg pl-5 xl:pl-2 hover:text-[#efff00]'>School Management</a></li>
                    </ul>
                </div>
                <div className='xl:hidden fixed right-10 top-10 z-10 flex justify-center items-center w-[44px] h-[34px] rounded-md bg-white cursor-pointer' onClick={() => setOpen(!open)}>
                    <i class="fa-solid fa-bars text-[16px] text-black"></i>
                </div>
            </div>
        </header>
    )
};
export default Header;

