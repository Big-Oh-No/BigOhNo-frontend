import { useNavigate } from "react-router-dom"
import { useState } from "react";
export default function SideBar(props) {
    const [current, setCurrent] = useState("syllabus");
    const navigate = useNavigate();
    const onChangePage = (page) => {
        setCurrent(page);
        props.changeHandler(page);
    }
    return <div className="h-full w-full bg-dark-theme flex flex-col items-center py-10 space-y-5">
        <div className="text-white font-bold text-4xl mt-5 font-rock">COSC 101</div>
        <div className="h-10"></div>
        <div className={`w-[80%] h-14 ${current === "dashboard" ? "text-white bg-black" : "bg-white text-black hover:text-white hover:bg-black"} rounded-2xl flex items-center justify-center text-xl hover:scale-105 transition duration-300 hover:cursor-pointer shadow`} onClick={() => {navigate("/dashboard"); setCurrent("dashboard");}}>
            Dashboard
        </div>
        <div className={`w-[80%] h-14 ${current === "syllabus" ? "text-white bg-black" : "bg-white text-black hover:text-white hover:bg-black"} rounded-2xl flex items-center justify-center text-xl hover:scale-105 transition duration-300 hover:cursor-pointer shadow`} onClick={() => {onChangePage("syllabus");}}>
            Syllabus
        </div>
        <div className={`w-[80%] h-14 ${current === "assignments" ? "text-white bg-black" : "bg-white text-black hover:text-white hover:bg-black"} rounded-2xl flex items-center justify-center text-xl hover:scale-105 transition duration-300 hover:cursor-pointer shadow`} onClick={() => {onChangePage("assignments");}}>
            Assignments
        </div>
        <div className={`w-[80%] h-14 ${current === "discussions" ? "text-white bg-black" : "bg-white text-black hover:text-white hover:bg-black"} rounded-2xl flex items-center justify-center text-xl hover:scale-105 transition duration-300 hover:cursor-pointer shadow`} onClick={() => {onChangePage("discussions");}}>
            Discussions
        </div>
    </div>
}