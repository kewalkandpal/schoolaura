import footerImg from '../assets/footer.png';
import fbImg from '../assets/fb.png';
import instaImg from '../assets/insta.png';
import twitImg from '../assets/twitter.png';
import whappImg from '../assets/whatsapp.png';

function Footer() {
    return (
        <div className="w-full flex justify-center items-center flex-col mb-20 relative">
            <div className="w-[85%] h-auto lg:h-[150px] flex flex-col lg:flex-row justify-around items-center bg-cover bg-no-repeat p-2" style={{ backgroundImage: `url(${footerImg})` }}>
                <div className='w-full flex justify-center items-center  flex-col mt-10 mb-5 lg:mb-0 lg:mt-0'>
                    <h1 className="text-[#0d1028] text-2xl md:text-[42px] font-semibold mb-0 lg:mb-3">SUBSCRIBE OUR</h1>
                    <h1 className="text-[#ff5202] text-2xl md:text-[42px] font-semibold lg:ml-[-50px]">NEWSLETTER</h1>
                </div>
                <div className="w-full flex justify-center items-center mb-5 lg:mb-0">
                    <input type="text" required placeholder="Email Address" className="md:w-[374px] h-[50px] bg-white placeholder-gray-600 px-4 text-lg border-none outline-none" />
                    <button className="w-[113px] h-[50px] px-2 bg-[#ff5202] text-white text-lg ml-1">Subscribe</button>
                </div>
            </div>
            <div className='w-full bg-[#0d1028] absolute -z-10 top-[75px] flex justify-center items-center flex-col'>
                <div className='w-[85%] flex justify-center items-start flex-wrap mt-[150px]'>
                    <div className='w-[200px] p-2 m-2'>
                        <h3 className='text-lg text-[#ff5202] mb-2'>About US</h3>
                        <p className='text-md text-[#aaaaaa]'>SchoolAura Smart Education Platform is a step towards making learning better and effective for the students and help to acheiving their goals.</p>
                    </div>
                    <div className='min-w-[200px] p-2 m-2'>
                        <h3 className='text-lg text-[#ff5202] mb-2'>Quick Links</h3>
                        <div className='flex items-center mb-2'>
                            <i className="fa-solid fa-angle-right text-[#ff5202] mr-2"></i>
                            <p className='text-md text-[#aaaaaa] cursor-pointer hover:text-white'>About Us</p>
                        </div>
                        <div className='flex items-center mb-2'>
                            <i className="fa-solid fa-angle-right text-[#ff5202] mr-2"></i>
                            <p className='text-md text-[#aaaaaa] cursor-pointer hover:text-white'>Benefits</p>
                        </div>
                        <div className='flex items-center mb-2'>
                            <i className="fa-solid fa-angle-right text-[#ff5202] mr-2"></i>
                            <p className='text-md text-[#aaaaaa] cursor-pointer hover:text-white'>Blogs</p>
                        </div>
                        <div className='flex items-center mb-2'>
                            <i className="fa-solid fa-angle-right text-[#ff5202] mr-2"></i>
                            <p className='text-md text-[#aaaaaa] cursor-pointer hover:text-white'>Testimonials</p>
                        </div>
                        <div className='flex items-center mb-2'>
                            <i className="fa-solid fa-angle-right text-[#ff5202] mr-2"></i>
                            <p className='text-md text-[#aaaaaa] cursor-pointer hover:text-white'>Featurs</p>
                        </div>
                    </div>
                    <div className='min-w-[200px] p-2 m-2'>
                        <h3 className='text-lg text-[#ff5202] mb-2'>Help & Support</h3>
                        <div className='flex items-center mb-2'>
                            <i className="fa-solid fa-angle-right text-[#ff5202] mr-2"></i>
                            <p className='text-md text-[#aaaaaa] cursor-pointer hover:text-white'>Services</p>
                        </div>
                        <div className='flex items-center mb-2'>
                            <i className="fa-solid fa-angle-right text-[#ff5202] mr-2"></i>
                            <p className='text-md text-[#aaaaaa] cursor-pointer hover:text-white'>Support</p>
                        </div>
                        <div className='flex items-center mb-2'>
                            <i className="fa-solid fa-angle-right text-[#ff5202] mr-2"></i>
                            <p className='text-md text-[#aaaaaa] cursor-pointer hover:text-white'>Terms & condition</p>
                        </div>
                        <div className='flex items-center mb-2'>
                            <i className="fa-solid fa-angle-right text-[#ff5202] mr-2"></i>
                            <p className='text-md text-[#aaaaaa] cursor-pointer hover:text-white'>Privacy Policy</p>
                        </div>
                        <div className='flex items-center mb-2'>
                            <i className="fa-solid fa-angle-right text-[#ff5202] mr-2"></i>
                            <p className='text-md text-[#aaaaaa] cursor-pointer hover:text-white'>Sitemap</p>
                        </div>
                    </div>
                    <div className='min-w-[200px] p-2 m-2'>
                        <h3 className='text-lg text-[#ff5202] mb-2'>Help & Support</h3>
                        <div className='flex items-center mb-2 space-x-3'>
                            <img src={fbImg} alt="img" className='bg-contain cursor-pointer' />
                            <img src={instaImg} alt="img" className='bg-contain cursor-pointer' />
                        </div>
                        <div className='flex items-center mb-2 space-x-3'>
                            <img src={twitImg} alt="img" className='bg-contain cursor-pointer' />
                            <img src={whappImg} alt="img" className='bg-contain cursor-pointer' />
                        </div>
                    </div>
                    <div className='w-full border border-[#aaaaaa]' />
                </div>

                <div className='w-full flex justify-center items-start flex-wrap mt-10'>
                    <div className='w-[300px] p-2 flex justify-start md:justify-center items-center'>
                        <div className='w-[50px] h-[50px] rounded-full bg-[#666666] flex justify-center items-center'>
                            <i className="fa-solid fa-phone text-2xl text-white"></i>
                        </div>
                        <div className='text-left ml-3'>
                            <h2 className='text-[#ff5202] font-semibold text-xl'>CaLL US</h2>
                            <p className='text-blue-600 text-lg cursor-pointer hover:text-blue-800'>+91-9540349392</p>
                        </div>
                    </div>
                    <div className='w-[300px] p-2 flex justify-start md:justify-center items-center'>
                        <div className='w-[50px] h-[50px] rounded-full bg-[#666666] flex justify-center items-center'>
                            <i className="fa-regular fa-envelope text-2xl text-white"></i>
                        </div>
                        <div className='text-left ml-3'>
                            <h2 className='text-[#ff5202] font-semibold text-xl'>MAIL US</h2>
                            <p className='text-blue-600 text-lg cursor-pointer hover:text-blue-800'>contact@schoolaura.com</p>
                        </div>
                    </div>
                    <div className='w-[500px] p-2 flex flex-col md:flex-row justify-center items-center'>
                        <div className='w-[50px] h-[50px] rounded-full bg-[#666666] flex justify-center items-center'>
                            <i className="fa-solid fa-location-pin text-2xl text-white"></i>
                        </div>
                        <div className='text-left ml-3'>
                            <h2 className='text-[#ff5202] font-semibold text-xl'>Office Address</h2>
                            <p className='text-white text-md'>E 44/3, Pocket D, Okhla Phase II, Okhla Industrial Area, New Delhi, Delhi 110020, India</p>
                        </div>
                    </div>
                </div>
                <div className='w-full h-auto md:h-[90px] bg-[#06091b] flex justify-around items-center pb-1 flex-col md:flex-row'>
                    <h2 className='text-lg text-white'>2021 © SchoolAura. All Right Reserved</h2>
                    <h2 className='text-lg text-white'>Design & Development by <span className='text-[#ff5202]'>Kewal</span></h2>
                </div>
            </div>
        </div>
    )
};

export default Footer;