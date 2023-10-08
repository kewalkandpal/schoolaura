import user1Img from '../assets/user-3 (1).png';
import user2Img from '../assets/user2.jpg';
import user4Img from '../assets/user-4.jpg';
import user5Img from '../assets/user-5.jpg';
import user6Img from '../assets/user-6.jpg';

function About() {
    return (
        <div className="w-full flex justify-center items-center flex-col mb-20">
            <div className="w-[85%] bg-[#f1f1f1] flex py-10 px-2 flex-col xl:flex-row">
                <div className="h-[300px] flex flex-col md:flex-row justify-center items-center bg-[#212529] px-10">
                    <div className="text-[50px] ml-10">
                        <i className="fa-solid fa-circle-exclamation text-white"></i>
                    </div>
                    <div className="ml-8 w-[300px]">
                        <h2 className="text-white text-2xl mb-3">Video unavailable</h2>
                        <p className="text-white text-sm md:text-md">This video is no longer available because the YouTube account associated with this video has been terminated.
                        </p>
                    </div>
                </div>

                <div className="ml-10 p-1 mt-10 xl:mt-0">
                    <h1 className="text-[#0d1028] text-3xl lg:text-[42px] font-medium mb-5 leading-none">VISIT OUR CAMPUS WITH <span className="text-[#ff5202]"> IMAGE GALLERY</span></h1>
                    <div className="w-[100px] border border-[#0d1028] mb-5" />
                    <p className="text-[#212529] text-lg mb-5">Even slightly believable. If you are going use a passage of Lorem Ipsum need</p>
                    <h1 className="text-[#0d1028] text-3xl lg:text-[42px] font-medium mb-8">OR WATCH WITH VIDEO</h1>
                    <button className="w-[160px] h-[50px] font-semibold text-lg md:text-xl text-[#0d1028] hover:shadow-lg hover:shadow-black transition-all ease-in-out"> <i className="fa-solid fa-play text-[#ff5202] mr-2"></i> PLAY NOW</button>
                </div>
            </div>

            <div className="w-full flex justify-center items-center flex-col mt-10 md:mt-20 bg-[#f1f1f1] p-10">
                <h1 className="text-[#0d1028] text-3xl lg:text-[42px] font-medium mb-5">WHAT <span className="text-[#ff5202]">PARENT SAYS</span></h1>
                <div className="w-full flex items-center overflow-x-scroll no-scrollbar">
                    <div className="min-w-[247px] h-auto p-2 shadow-xl border rounded-lg m-4">
                        <div className="w-full flex justify-center items-center mt-3">
                            <img src={user1Img} alt="useImg" className="w-[50px] h-[50px] rounded-full bg-contain" />
                            <div className='ml-2'>
                                <h4 className="text-[#212925] font-medium text-lg">Rasmi Panday</h4>
                                <small className="text-[#ff5202]">Indore, Madhya Pradesh</small>
                            </div>
                        </div>
                        <div className="w-full p-2">
                            <p className="text-[#666666]">"My daughter used to despise math, but now she can confidently take math tests." She's become enamoured with math, which is fantastic!" Thank You School Aura for your tremendous support.</p>
                        </div>
                    </div>
                    <div className="min-w-[247px] h-auto p-2 shadow-xl border rounded-lg m-4">
                        <div className="w-full flex justify-center items-center mt-3">
                            <img src={user2Img} alt="useImg" className="w-[50px] h-[50px] rounded-full bg-contain" />
                            <div className='ml-2'>
                                <h4 className="text-[#212925] font-medium text-lg">Ravi Kaushal</h4>
                                <small className="text-[#ff5202]">Delhi</small>
                            </div>
                        </div>
                        <div className="w-full p-2">
                            <p className="text-[#666666]">I have seen my son go from hating math to absolutely loving it. His marks have improved so much from last year. He looks forward to attending math sessions taken by …. Thank you, School Aura, for making math so much fun for my child! :)</p>
                        </div>
                    </div>
                    <div className="min-w-[247px] h-auto p-2 shadow-xl border rounded-lg m-4">
                        <div className="w-full flex justify-center items-center mt-3">
                            <img src={user4Img} alt="useImg" className="w-[50px] h-[50px] rounded-full bg-contain" />
                            <div className='ml-2'>
                                <h4 className="text-[#212925] font-medium text-lg">Rakesh Sharma</h4>
                                <small className="text-[#ff5202]">Faridabad, Haryana</small>
                            </div>
                        </div>
                        <div className="w-full p-2">
                            <p className="text-[#666666]">A parent who has a phobia for math would dread to see her child going through the same. I am glad we found School Aura, which gave a great teacher and a great platform for learning..</p>
                        </div>
                    </div>
                    <div className="min-w-[247px] h-auto p-2 shadow-xl border rounded-lg m-4">
                        <div className="w-full flex justify-center items-center mt-3">
                            <img src={user6Img} alt="useImg" className="w-[50px] h-[50px] rounded-full bg-contain" />
                            <div className='ml-2'>
                                <h4 className="text-[#212925] font-medium text-lg">Varun Kasyap</h4>
                                <small className="text-[#ff5202]">Uttar Pradesh</small>
                            </div>
                        </div>
                        <div className="w-full p-2">
                            <p className="text-[#666666]">"My daughter used to despise math, but now she can confidently take math tests." She's become enamoured with math, which is fantastic!" Thank You School Aura for your tremendous support.</p>
                        </div>
                    </div>
                    <div className="min-w-[247px] h-auto p-2 shadow-xl border rounded-lg m-4">
                        <div className="w-full flex justify-center items-center mt-3">
                            <img src={user5Img} alt="useImg" className="w-[50px] h-[50px] rounded-full bg-contain" />
                            <div className='ml-2'>
                                <h4 className="text-[#212925] font-medium text-lg">Vishal Kumar</h4>
                                <small className="text-[#ff5202]">Delhi</small>
                            </div>
                        </div>
                        <div className="w-full p-2">
                            <p className="text-[#666666]">School Aura Teachers make sure one understands the concept by giving everyday observations. Thank You!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About;