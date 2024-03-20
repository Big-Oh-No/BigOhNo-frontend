import NavBar from "../common/NavBar";
import {
  faHouse,
  faUser,
  faRightFromBracket
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Loading from "../common/Loading";
import TeacherHome from "./TeacherHome";
import TeacherProfile from "./TeacherProfile";
import { useNavigate } from "react-router-dom";

export default function TeacherDash(props) {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("home");
  const OPTIONS = [
    ["logout", faRightFromBracket],
    ["home", faHouse],
    ["profile", faUser],
  ];
  const handleLogout = () => {
    localStorage.removeItem("AuthCookie");
    navigate("/");
  };
  return (
    <div className="w-full h-full">
      {selectedOption === "home" ? (
        <TeacherHome />
      ) : selectedOption === "profile" ? (
        <TeacherProfile user={props.profile}/>
      ) : (selectedOption === "logout" && handleLogout()) ? (
        <Loading />
      ) : <Loading />}
      <div className="bottom-8 w-full h-20 flex flex-row justify-center fixed">
        <NavBar options={OPTIONS} default="home" onChange={setSelectedOption}/>
      </div>
    </div>
  );
}
