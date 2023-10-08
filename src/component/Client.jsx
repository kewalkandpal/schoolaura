import schoolAuraAppImg from '../assets/school_aura_app.jpg';
import manImg from '../assets/spreading.png';
import bgImg from '../assets/Clip.png'
import clingImg from '../assets/client.png';
import client1 from '../assets/client-1.png';
import client2 from '../assets/client-2.png';
import client3 from '../assets/client-3.png';
import client4 from '../assets/client-4.png';

function Client() {
    return (
        <div className="w-full flex justify-center flex-col items-center mb-20">
            <div className="w-full flex flex-col md:flex-row">
                <div className="flex-[0.6] md:flex-[0.5] md:h-[500px]">
                    <img src={schoolAuraAppImg} alt="img" className='w-[100%] h-[100%] bg-cover' />
                </div>
                <div className='flex-1 md:h-[500px] bg-[#f1f1f1] flex justify-center items-start flex-col pl-8 pr-8'>
                    <div className='mb-4 mt-10 md:mt-0'>
                        <h1 className='text-3xl md:text-[40px] font-semibold text-[#0d1028] mb-3 leading-none'>Easy to Access with <span className='text-[#ff5202]'>Mobile APP</span></h1>
                        <p className='text-md text-[#212529]'>If you're looking for easily accessible resources for your classroom, then you're in the right place. Online learning with the Android app is very easy to access. That's why we've hand-curated the School Aura free app and website. Easy to use and learn!</p>
                    </div>
                    <div className='mb-4'>
                        <p className='text-md text-[#212529]'>To learn online, you need to be reasonably comfortable with Smart Mobile Phone, Tab, Laptops, and the internet. The advantage of learning online via an android app is that you can pause the video/audio whenever you need to take notes or simply absorb what has been said. Another fantastic feature of online learning is that you can re-listen to different parts as needed, which is something you can't do in a live lecture!
                        </p>
                    </div>
                    <button className='w-[144px] h-[38px] bg-[#007bff] text-md text-white rounded-md hover:bg-[#2f70b6] mb-10 md:mb-0'>Download Now</button>
                </div>
            </div>
            <div className='w-[85%] mt-14'>
                <div className='w-[100%] flex flex-col lg:flex-row justify-center items-center space-x-10'>
                    <div className='flex flex-col flex-1 lg:flex-1'>
                        <div className='mb-3'>
                            <h1 className='text-3xl md:text-[40px] font-semibold text-[#0d1028] mb-0 md:mb-3'>Benefits of</h1>
                            <h1 className='text-3xl md:text-[40px] font-semibold text-[#ff5202]'>Online Education</h1>
                            <div className='border border-black mt-3 md:mt-5 w-20 md:w-28'></div>
                        </div>
                        <div className='mt-4 md:mt-6'>
                            <p className='text-md text-[#212529]'>
                                Online Education increases engagement by adding a human element. Studying in the comfort of your own home is convenient, but there are various other advantages of online study. It's especially beneficial for students who aren't as self-sufficient or who are used to the traditional educational model of "teacher and class."
                            </p>
                            <ul className='mt-4'>
                                <li className='text-md text-[#212529]'>Time and Location Flexibility</li>
                                <li className='text-md text-[#212529]'>Find Unlimited Course Category</li>
                                <li className='text-md text-[#212529]'>No Need to Carry Books</li>
                                <li className='text-md text-[#212529]'>Get Access in any mobile, Tab, Laptop with your credential</li>
                                <li className='text-md text-[#212529]'>Use your time when you are traveling, Outing and free time</li>
                                <li className='text-md text-[#212529]'>Exam Practice before exam</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex-1 lg:flex-[0.4] relative -z-10'>
                        <img src={manImg} alt="img" className='bg-cover h-[400px] md:h-full mt-5 md:mt-0' />
                        <div className='absolute top-[110px] -z-10 w-[100px] h-[100px] rounded-full bg-[#f1f1f1]'></div>
                    </div>
                </div>
                <div className='w-[100%] flex justify-evenly flex-wrap p-2 bg-[#0d1028] mt-[-36px] z-10' style={{ backgroundImage: `url(${bgImg})` }}>
                    <div className=' m-2 p-1'>
                        <h1 className='text-white text-2xl md:text-[42px] font-medium'>10000+</h1>
                        <h1 className='text-[#ff5202] text-xl font-medium mt-3'>Total Exams</h1>
                    </div>
                    <div className=' m-2 p-1'>
                        <h1 className='text-white text-2xl md:text-[42px] font-medium'>600+</h1>
                        <h1 className='text-[#ff5202] text-xl font-medium mt-3'>Coursess</h1>
                    </div>
                    <div className=' m-2 p-1'>
                        <h1 className='text-white text-2xl md:text-[42px] font-medium'>3000+</h1>
                        <h1 className='text-[#ff5202] text-xl font-medium mt-3'>Sucess Stories</h1>
                    </div>
                    <div className=' m-2 p-1'>
                        <h1 className='text-white text-2xl md:text-[42px] font-medium'>4.5/5</h1>
                        <h1 className='text-[#ff5202] text-xl font-medium mt-3'>Rating</h1>
                    </div>
                </div>
            </div>
            <div className='w-[100%] bg-[#f1f1f1] flex justify-center items-center mt-16 pt-10 pb-10'>
                <div className='w-full flex flex-col lg:flex-row jutify-center items-center pl-[100px] pr-[100px]'>
                    <div className='relative z-10  '>
                        <img src={clingImg} alt='img' className='h-[400px] scale-105 ' />
                        <div className='w-[250px] h-[75%] bg-[#666666] absolute left-[-10px] lg:left-[-30px] top-[60px] -z-10'></div>
                        <div className='w-[240px] h-[80%] bg-[#0d1028] absolute left-[-55px] lg:left-[-90px] top-[90px] -z-20'></div>
                    </div>
                    <div className='w-full flex justify-center items-center flex-col pl-0 lg:pl-20 mt-20 lg:mt-0'>
                        <div className='w-full mb-3'>
                            <h1 className='text-3xl md:text-[40px] font-semibold text-[#0d1028] mb-0 md:mb-3'>WE</h1>
                            <h1 className='text-3xl md:text-[40px] font-semibold text-[#ff5202]'>ARE SPREADING</h1>
                            <div className='border border-black mt-3 md:mt-5 w-20 md:w-28'></div>
                        </div>
                        <div className='w-[100%] flex justify-start items-start flex-wrap mt-8'>
                            <div className='flex justify-start items-center m-4'>
                                <div className='w-full md:w-[70px] h-[60px] mr-4'>
                                    <img src={client1} alt="img" className='bg-conatin' />
                                </div>
                                <div>
                                    <h1 className='text-[#0d1028] text-2xl md:text-[42px] font-medium'>108+</h1>
                                    <h1 className='text-[#ff5202] text-xl font-medium mt-3'>Happy School</h1>
                                </div>
                            </div>
                            <div className='flex justify-start items-center m-4'>
                                <div className='w-full md:w-[70px] h-[60px] mr-4'>
                                    <img src={client2} alt="img" className='bg-conatin' />
                                </div>
                                <div>
                                    <h1 className='text-[#0d1028] text-2xl md:text-[42px] font-medium'>58030+</h1>
                                    <h1 className='text-[#ff5202] text-xl font-medium mt-3'>Students</h1>
                                </div>
                            </div>
                            <div className='flex justify-start items-center m-4'>
                                <div className='w-full md:w-[70px] h-[60px] mr-4'>
                                    <img src={client3} alt="img" className='bg-conatin' />
                                </div>
                                <div>
                                    <h1 className='text-[#0d1028] text-2xl md:text-[42px] font-medium'>5360+</h1>
                                    <h1 className='text-[#ff5202] text-xl font-medium mt-3'>Happy Parents</h1>
                                </div>
                            </div>
                            <div className='flex justify-start items-center m-4'>
                                <div className='w-full md:w-[70px] h-[60px] mr-4'>
                                    <img src={client4} alt="img" className='bg-conatin' />
                                </div>
                                <div>
                                    <h1 className='text-[#0d1028] text-2xl md:text-[42px] font-medium'>10+</h1>
                                    <h1 className='text-[#ff5202] text-xl font-medium mt-3'>Happy Tutors</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Client;