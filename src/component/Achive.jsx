import clipPng from '../assets/Clip.png'
import achiveBanner from '../assets/Layer-20.png';

function Achive() {
    return (
        <div className="w-full min-h-[100%] flex justify-center mb-20 md:mb-32">
            <div className="w-[85%] flex justify-center items-center flex-col">
                <div className='w-full flex flex-col-reverse lg:flex-row justify-center items-center lg:space-x-10'>
                    <div className="w-full lg:flex-[0.5] h-[340px] md:h-[380px] relative flex justify-center items-center bg-[#0d1028] mt-5">
                        <img src={clipPng} alt="achive-img" className="w-full h-full bg-conatin" />
                        <div className='absolute'>
                            <h2 className='text-white text-2xl md:text-[28px]'>- 256 Courses</h2>
                            <h2 className='text-white text-2xl md:text-[28px]'>- Expert Teachers</h2>
                            <h2 className='text-white text-2xl md:text-[28px]'>- Online Education</h2>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className='mb-2'>
                            <h1 className='text-2xl md:text-[34px] font-semibold text-[#0d1028] mb-3'>Why Online Study With SchoolAura</h1>
                            <p className='text-md md:text-[16px] text-[#212529]'>The world is changing for the better. Because of the advancement of technology, geek minds have grown tired of doing more work, and carrying books, notebooks and how much to buy books?</p>
                        </div>
                        <div className='mb-2'>
                            <p className='text-md md:text-[16px] text-[#212529]'><span>Solution:</span> Now you can find a simple solution with schoolaura. In these days almost everyone has a Smartphone, Tab or Laptop. So just open your device and start your study from anywhere anytime while you are travelling, sitting in the park, and etc.</p>
                        </div>
                        <div className='mb-2'>
                            <p className='text-md md:text-[16px] text-[#212529]'>Now Use your time and gain knowledge in every second and Use your device for right things not for waste your time</p>
                        </div>
                    </div>
                </div>
                <div className='mt-[-100px] z-10'>
                    <img src={achiveBanner} alt='achive_banner' className='bg-contain' />
                </div>
            </div>
        </div>
    )
}
export default Achive;