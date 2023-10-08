import userImg from '../assets/user-img.png';

function ParentLogin({ show, setShow }) {
    return (
        <div className="w-[300px] h-[379px] bg-white shadow-2xl p-5 relative">
            <div className='absolute left-[30%] top-[-80px]'>
                <img src={userImg} alt="userImg" />
            </div>
            <div className="flex justify-between items-center  border-b-2 mt-10 mb-4">
                <span className="text-[16px] text-[#9a9a9a] font-Open Sans  cursor-pointer" onClick={() => setShow(false)}>Student Login</span>
                <span className="text-[16px] text-[#9a9a9a] font-Open Sans  cursor-pointer" style={{ borderBottom: `${show ? "3px solid #ff5202" : ""}` }} onClick={() => setShow(true)}>Parents Login</span>
            </div>
            <form>
                <div className="mb-3">
                    <span className="text-[14px] text-[#212529] font-Open Sans ">Parent Mobile or Email</span>
                    <input type="text" className="w-[260px] h-[35px] px-2 text-[14px] text-[#495067] border border-[#cccccc] bg-[#f1f1f1] font-Open Sans " />
                </div>
                <div className="mb-3">
                    <span className="text-[14px] text-[#212529] font-Open Sans ">Parent Password</span>
                    <input type="password" className="w-[260px] h-[35px] px-2 text-[14px] text-[#495067] border border-[#cccccc] bg-[#f1f1f1] font-Open Sans " />
                </div>
                <div className="mt-5 mb-4">
                    <button className="text-[16px] font-semibold text-white bg-black w-full h-[44px] font-Open Sans cursor-pointer">Login</button>
                </div>
            </form>
            <div className="w-full flex justify-end items-center">
                <span className="text-[12px] text-[#373737] font-Open Sans  cursor-pointer">Forgot Password</span>
            </div>
        </div>
    )
}

export default ParentLogin;