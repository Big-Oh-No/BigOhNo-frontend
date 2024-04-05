import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export default function SideBar(props) {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(true);
  };

  const hideSidebar = () => {
    setSidebarVisible(false);
  };
  const [current, setCurrent] = useState("syllabus");
  const navigate = useNavigate();
  const onChangePage = (page) => {
    setCurrent(page);
    props.changeHandler(page);
  };
  return (
    <div className="flex items-center w-full h-full">
      <div
        onMouseEnter={toggleSidebar}
        className={`absolute w-14 h-20 rounded-r-full bg-dark-theme text-white flex flex-col justify-center items-center text-3xl pr-2 ${
          !sidebarVisible ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="h-full w-full flex flex-col justify-center">
        <div
          onMouseLeave={hideSidebar}
          className={`h-full w-full bg-dark-theme flex flex-col items-center py-10 space-y-2 rounded-br-[50px] rounded-tr-[50px] ${
            sidebarVisible ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
          style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.14)" }}
        >
          <div className="text-white font-bold text-5xl font-inter">
            {props.data.meta.dept} {props.data.meta.code}
          </div>
          <div className="h-10"></div>
          <div
            className={`w-[70%] h-14 ${
              current === "dashboard"
                ? "text-white bg-black"
                : "bg-white text-black hover:text-white hover:bg-black"
            } rounded-2xl flex items-center justify-center text-xl hover:scale-105 transition duration-300 hover:cursor-pointer shadow`}
            onClick={() => {
              navigate("/dashboard");
              setCurrent("dashboard");
            }}
          >
            Dashboard
          </div>
          <div
            className={`w-[70%] h-14 ${
              current === "syllabus"
                ? "text-white bg-black"
                : "bg-white text-black hover:text-white hover:bg-black"
            } rounded-2xl flex items-center justify-center text-xl hover:scale-105 transition duration-300 hover:cursor-pointer shadow`}
            onClick={() => {
              onChangePage("syllabus");
            }}
          >
            Syllabus
          </div>
          <div
            className={`w-[70%] h-14 ${
              current === "assignments"
                ? "text-white bg-black"
                : "bg-white text-black hover:text-white hover:bg-black"
            } rounded-2xl flex items-center justify-center text-xl hover:scale-105 transition duration-300 hover:cursor-pointer shadow`}
            onClick={() => {
              onChangePage("assignments");
            }}
          >
            Assignments
          </div>
          <div
            className={`w-[70%] h-14 ${
              current === "discussions"
                ? "text-white bg-black"
                : "bg-white text-black hover:text-white hover:bg-black"
            } rounded-2xl flex items-center justify-center text-xl hover:scale-105 transition duration-300 hover:cursor-pointer shadow`}
            onClick={() => {
              onChangePage("discussions");
            }}
          >
            Discussions
          </div>
          <div
            className={`w-[70%] h-14 ${
              current === "discussions"
                ? "text-white bg-black"
                : "bg-white text-black hover:text-white hover:bg-black"
            } rounded-2xl flex items-center justify-center text-xl hover:scale-105 transition duration-300 hover:cursor-pointer shadow`}
            onClick={() => {
              localStorage.removeItem("AuthCookie");
              navigate("/");
            }}
          >
            Logout
          </div>
        </div>
      </div>
    </div>
  );
}
