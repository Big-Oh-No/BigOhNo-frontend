export default function Syllabus(props){
    return(
        <div className="w-screen h-screen">
     <div className="text-5xl font-semibold font-inter pt-10 w-full pl-10 pb-10 bg-dark-theme z-20 text-white fixed">
        Syllabus
      </div>
      <div className='pt-32 flex flex-col w-full h-full p-5 px-10 space-y-10'>
        <div className="flex flex-row justify-between">
        <div className="pt-10 font-semibold  text-5xl p-5 rounded-xl w-max">{props.data.meta.name}</div>
        </div>
        <div className="flex flex-row justify-between items-center space-x-32">
        <div className="flex flex-col space-y-2">
            <div className="text-2xl font-semibold">Description</div>
            <div className="font-semibold text-black text-xl rounded-xl ">{props.data.meta.description}</div>
        </div>
        <div className="h-full w-[25rem] overflow-clip flex items-center justify-between rounded-xl ml-5">
            <img src={props.data.meta.image_url ? props.data.meta.image_url : require("../../assets/course.jpeg")} alt="course image" />
        </div>
        </div>
        <div className="flex flex-col items-center">
        <div className="flex flex-row justify-center space-x-10">
            <div className="bg-violet-400 text-black p-5 rounded-xl text-xl font-semibold hover:bg-opacity-75">Credits: {props.data.meta.credits}</div>
            <div className="bg-emerald-400 text-black p-5 rounded-xl text-xl font-semibold hover:bg-opacity-75">{props.data.meta.dept} {props.data.meta.code}</div>
            <div className="bg-rose-400 text-black p-5 rounded-xl text-xl font-semibold hover:bg-opacity-75">{props.data.meta.term} {props.data.meta.year}</div>
        </div>
        <div className="hover:bg-opacity-75 mt-10 font-semibold text-white text-2xl bg-black p-5 rounded-xl w-max">Instructor: {props.data.meta.teacher_name}</div>
        <a href={props.data.meta.syllabus_url} className="hover:bg-opacity-75 mt-10 font-semibold text-black text-2xl bg-teal-500 p-5 rounded-xl w-max">{props.data.meta.syllabus_url ? "Download Syllabus" : "Syllabus Unavailable"}</a>
        </div>
        <div className="flex flex-row items-center p-5 space-x-10 shadow w-max bg-dark-theme text-white rounded-xl">
        <img
                src={
                  props.data.teacher_profile_url
                    ? props.data.teacher_profile_url
                    : require("../../assets/pfp.png")
                }
                alt="Profile"
                className="rounded-full h-40 w-40"
              />
        <div className="flex flex-col space-y-5 text-xl">
            <div className="">Email: {props.data.teacher_email}</div>
            <div className="">Office: {props.data.teacher_office}</div>
            <div className="">Contact: {props.data.teacher_contact}</div>
            
        </div>
        </div>
        
        
      </div>
    </div>
    )
}