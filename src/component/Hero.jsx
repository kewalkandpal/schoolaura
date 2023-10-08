import { useState } from 'react';
import ParentLogin from './ParentLogin';
import StudentLogin from './StudentLogin';
import bannerBg from '../assets/banner-bg.png';
import headerGirl from '../assets/header-girl-icon.png';

function Hero() {
    const [show, setShow] = useState(false);

    return (
        <div className="w-full min-h-screen flex justify-center items-center mb-20 bg-[#ff5202] relative">
            <div className="absolute left-0 top-0 w-full h-full bg-contain" style={{ backgroundImage: `url(${bannerBg})` }} />
            <div className="w-full lg:w-[85%] h-full lg:mt-20 mt-36 mx-10  flex justify-around items-center flex-col-reverse lg:flex-row z-30 pb-3">
                <div className="w-full lg:w-[70%] flex justify-center items-center flex-col mt-8 lg:mt-10 xl:mt-0">
                    <div className="flex justify-center items-center lg:items-start flex-col ml-3">
                        <h1 className="text-3xl md:text-[40px] xl:text-[60px] font-semibold text-[#06091b] font-Open Sans" style={{ lineHeight: "45px" }}><span className="text-white">BE A</span> SMART STUDENT</h1>
                        <h2 className="text-white text-lg xl:text-[26px] font-semibold font-Open Sans mt-0 lg:mt-2">SchoolAura Is A Smart Education Platform</h2>
                    </div>
                    <div className='w-full flex justify-center lg:justify-start items-center flex-wrap mt-5 relative'>
                        <div className='hidden lg:block w-[180px] h-[278px] bg-contain bg-no-repeat absolute left-[-72px] top-[-60px]' style={{ backgroundImage: `url(${headerGirl})` }} />
                        <div className='w-[176px] m-2 h-[211px] bg-white p-5 shadow-2xl text-center rounded-md'>
                            <div className='text-[#212529] mb-5'>
                                <h1 className='text-[18px] font-semibold'>ENTERANCE</h1>
                                <h2 className='text-[18px] font-semibold'>Solution</h2>
                            </div>
                            <div className='flex justify-center items-center flex-col'>
                                <button className='inline-block w-[125px] h-[31px] bg-[#ff5202] text-white text-[14px] rounded-xl mb-2 cursor-pointer hover:bg-[#f79365ee]'>Exam</button>
                                <button className='inline-block w-[125px] h-[31px] bg-[#ff5202] text-white text-[14px] rounded-xl mb-2 cursor-pointer hover:bg-[#f79365ee]'>Courses</button>
                            </div>
                            <p className='text-[#06091b] text-[14px] font-semibold cursor-pointer'>READ MORE</p>
                        </div>
                        <div className='w-[176px] m-2 h-[211px] bg-white px-[10px] py-[20px] shadow-2xl text-center rounded-md'>
                            <div className='text-[#212529] mb-5'>
                                <h1 className='text-[18px] font-semibold'>COMPETITIVE</h1>
                                <h2 className='text-[18px] font-semibold'>Solution</h2>
                            </div>
                            <div className='flex justify-center items-center flex-col'>
                                <button className='inline-block w-[125px] h-[31px] bg-[#ff5202] text-white text-[14px] rounded-xl mb-2 cursor-pointer hover:bg-[#f79365ee]'>Exam</button>
                                <button className='inline-block w-[125px] h-[31px] bg-[#ff5202] text-white text-[14px] rounded-xl mb-2 cursor-pointer hover:bg-[#f79365ee]'>Courses</button>
                            </div>
                            <p className='text-[#06091b] text-[14px] font-semibold cursor-pointer'>READ MORE</p>
                        </div>
                        <div className='w-[176px] m-2 h-[211px] bg-white px-[10px] py-[20px] shadow-2xl text-center rounded-md'>
                            <div className='text-[#212529] mb-5'>
                                <h1 className='text-[18px] font-semibold'>KG - 12TH</h1>
                                <h2 className='text-[18px] font-semibold'>SCHOOL</h2>
                            </div>
                            <div className='flex justify-center items-center flex-col'>
                                <button className='inline-block w-[125px] h-[31px] bg-[#ff5202] text-white text-[14px] rounded-xl mb-2 cursor-pointer hover:bg-[#f79365ee]'>Exam</button>
                                <button className='inline-block w-[125px] h-[31px] bg-[#ff5202] text-white text-[14px] rounded-xl mb-2 cursor-pointer hover:bg-[#f79365ee]'>Courses</button>
                            </div>
                            <p className='text-[#06091b] text-[14px] font-semibold cursor-pointer'>READ MORE</p>
                        </div>
                        <div className='w-[176px] m-2 h-[211px] bg-white px-[10px] py-[20px] shadow-2xl text-center rounded-md'>
                            <div className='text-[#212529] mb-5'>
                                <h1 className='text-[18px] font-semibold'>TUTOR</h1>
                                <h2 className='text-[18px] font-semibold'>SOLUTION</h2>
                            </div>
                            <div className='flex justify-center items-center flex-col'>
                                <button className='inline-block w-[125px] h-[31px] bg-[#ff5202] text-white text-[14px] rounded-xl mb-2 cursor-pointer hover:bg-[#f79365ee]'>Exam</button>
                                <button className='inline-block w-[125px] h-[31px] bg-[#ff5202] text-white text-[14px] rounded-xl mb-2 cursor-pointer hover:bg-[#f79365ee]'>Courses</button>
                            </div>
                            <p className='text-[#06091b] text-[14px] font-semibold cursor-pointer'>READ MORE</p>
                        </div>
                    </div>
                </div>
                {
                    show ? <ParentLogin show={show} setShow={setShow} /> : <StudentLogin show={show} setShow={setShow} />
                }
            </div>
        </div>
    )
}
export default Hero;