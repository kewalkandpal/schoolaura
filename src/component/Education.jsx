import { useEffect, useState } from "react";

function Education(){
    const option = ["School","Competitive","Enterance","Tutors"];
    const data = [
        {
            id:0,
            option:"School",
            type:"11th class",
            items:"182+"
        },
        {
            id:1,
            option:"School",
            type:"12th class",
            items:"178+"
        },
        {
            id:2,
            option:"School",
            type:"6th class",
            items:"151+"
        },
        {
            id:3,
            option:"School",
            type:"7th class",
            items:"150+"
        },
        {
            id:4,
            option:"School",
            type:"10th class",
            items:"150+"
        },
        {
            id:5,
            option:"Competitive",
            type:"ssc chsl",
            items:"29+"
        },
        {
            id:6,
            option:"Competitive",
            type:"ssc cgl",
            items:"15+"
        },
        {
            id:7,
            option:"Competitive",
            type:"upsc ias",
            items:"8+"
        },
        {
            id:8,
            option:"Competitive",
            type:"sbi clerk",
            items:"5+"
        },
        {
            id:9,
            option:"Competitive",
            type:"ssc cpo",
            items:"5+"
        },
        {
            id:10,
            option:"Competitive",
            type:"ssc mts",
            items:"29+"
        },
        {
            id:11,
            option:"Enterance",
            type:"viteee",
            items:"9+"
        },
        {
            id:12,
            option:"Enterance",
            type:"cat",
            items:"5+"
        },
        {
            id:13,
            option:"Enterance",
            type:"mat",
            items:"4+"
        },
        {
            id:14,
            option:"Tutors",
            type:"",
            items:""
        }
    ];
    const [select,setSelect] = useState("School");
    const [category, setCategory] = useState([]);
    useEffect(()=>{
        const filterDate = data.filter((item)=> item.option === select);
        setCategory(filterDate);
    },[select])

    return(
        <div className="w-full min-h-100% flex justify-center items-center mb-20">
            <div className="w-[85%] flex justify-start items-start flex-col">
            <div className="w-[100%] p-1 mb-3">
                <h1 className="text-3xl md:text-[40px] font-semibold text-[#0d1028] mb-1">PROVIDE</h1>
                <h1 className="text-3xl md:text-[40px] font-semibold text-[#ff5202]">BEST EDUCATIONAL</h1>
            </div>
            <div className="w-full max-h-[100%] flex flex-col lg:flex-row justify-center items-start space-x-3 shadow-2xl mt-2">
                <div className="w-full lg:w-[300px] flex lg:flex-col">
                    {
                        option?.map((item,id)=>{
                            return(
                                <div className="w-[80px] md:flex-1 p-3 md:p-4 mb-1 bg-[#f1f1f1] text-[#666666] text-md md:text-[22px] cursor-pointer" style={{backgroundColor:`${select === item ? "white" : ""}`,borderLeft:`${select === item ? "5px solid #ff5202" : ""}`,color:`${select === item ? "#ff5202" : ""}`}} key={id} onClick={()=> setSelect(item)}>{item}</div>
                            )
                        })
                    }
                </div>
                <div className="flex h-auto flex-wrap justify-center lg:justify-start items-center flex-1 p-5">
                        {
                            category?.map((item)=>{
                                {
                                    return item.type ? 
                                        <div className="w-[198px] h-[60px] flex items-center space-x-2 m-2 border" key={item.id}>
                                        <div className="w-[55px] h-[100%] bg-[#0d1028] relative">
                                        <h1 className="text-[60px] font-extrabold text-[#343541] absolute right-[-4px] bottom-[-20px]">N</h1>
                                    </div>
                                        <div>
                                        <h2 className="text-xl text-[#ff5202] font-semibold uppercase">{item.type}</h2>
                                        <h3 className="text-2xl text-[#666666] font-medium">{item.items}</h3>
                                        </div>
                                    </div>
                                     : <div className="w-[100%] flex justify-center items-center mb-10"><h2 className="text-[20px] text-[#212529]">Comming Soon</h2></div>
                                }
                           
                            })
                        }
                </div>
            </div>
            <div className="w-[100%] flex justify-center items-center flex-col mt-28 mb-10">
                <div className="p-1 text-center">
                    <h1 className="text-2xl text-[40px] font-semibold text-[#0d1028] mb-3">BENEFITS OF SCHOOLAURA</h1>
                    <h1 className="text-2xl text-[40px] font-semibold text-[#ff5202]">FOR STUDENT</h1>
                </div>
                <div className="flex justify-center items-center flex-wrap mt-8">
                <div className="w-[350px] h-[270px] rounded-xl flex justify-start items-center flex-col shadow-xl border p-5 m-2">
                        <div className="text-3xl md:text-[40px] font-bold">
                            <i className="fa-solid fa-share"></i>
                        </div>
                        <h2 className="text-2xl font-normal text-[#212529] mb-1">
                            Task Activities
                        </h2>
                        <p className="text-md text-[#212529] text-center">
                        Daily assignments and tasks can be easily completed through online availability of information. Subject wise homework can be submitted online which helps students to finish their tasks online.
                        </p>
                    </div>
                    <div className="w-[350px] h-[270px] rounded-xl flex justify-start items-center flex-col shadow-xl border p-5 m-2">
                        <div className="text-3xl md:text-[40px] font-bold">
                            <i className="fa-solid fa-list-check"></i>
                        </div>
                        <h2 className="text-2xl font-normal text-[#212529] mb-1">
                        Exam Results
                        </h2>
                        <p className="text-md text-[#212529] text-center">
                        Exam and assessment results of each individual student can be seen. The report cards will be generated online for each individual student.
                        </p>
                    </div>
                    <div className="w-[350px] h-[270px] rounded-xl flex justify-start items-center flex-col shadow-xl border p-5 m-2">
                        <div className="text-3xl md:text-[40px] font-bold">
                            <i className="fa-solid fa-file"></i>
                        </div>
                        <h2 className="text-2xl font-normal text-[#212529] mb-1">
                        Notice Updates
                        </h2>
                        <p className="text-md text-[#212529] text-center">
                        The necessary announcements and updates will reach to the students and parents quickly.
                        </p>
                    </div>
                    <div className="w-[350px] h-[270px] rounded-xl flex justify-start items-center flex-col shadow-xl border p-5 m-2">
                        <div className="text-3xl md:text-[40px] font-bold">
                            <i className="fa-solid fa-info"></i>
                        </div>
                        <h2 className="text-2xl font-normal text-[#212529] mb-1">
                        Monitoring
                        </h2>
                        <p className="text-md text-[#212529] text-center">
                        All the essential academic and administrative tasks can be easily monitored, such as students profile, exam results, fee details, transportation details etc.
                        </p>
                    </div>
                    <div className="w-[350px] h-[270px] rounded-xl flex justify-start items-center flex-col shadow-xl border p-5 m-2">
                        <div className="text-3xl md:text-[40px] font-bold">
                            <i className="fa-solid fa-eye"></i>
                        </div>
                        <h2 className="text-2xl font-normal text-[#212529] mb-1">
                        Connectivity
                        </h2>
                        <p className="text-md text-[#212529] text-center">
                        When all the information is available online, and is shared regularly with parents and students transparency will be maintained.
                        </p>
                    </div>
                    <div className="w-[350px] h-[270px] rounded-xl flex justify-start items-center flex-col shadow-xl border p-5 m-2">
                        <div className="text-3xl md:text-[40px] font-bold">
                            <i className="fa-solid fa-link"></i>
                        </div>
                        <h2 className="text-2xl font-normal text-[#212529] mb-1">
                        Planning & Sharing
                        </h2>
                        <p className="text-md text-[#212529] text-center">
                        It becomes important nowadays for students to share their thoughts and ideas, SchoolAura Smart Education Platform will provide you a perfect stage to showcase and share your brilliant ideas.
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Education;