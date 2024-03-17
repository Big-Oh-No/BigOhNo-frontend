import NavBar from "../common/NavBar";
import AdminAdd from "./AdminAdd";
import AdminHome from "./AdminHome";
import {
  faHouse,
  faUser,
  faGraduationCap,
  faShieldHalved,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import AdminVerify from "./AdminVerify";
import AdminEnroll from "./AdminEnroll";
import AdminProfile from "./AdminProfile";
import Loading from "../common/Loading";

export default function AdminDash() {
  const [selectedOption, setSelectedOption] = useState("home");
  const OPTIONS = [
    ["enroll", faGraduationCap],
    ["verify", faShieldHalved],
    ["home", faHouse],
    ["add", faPlus],
    ["profile", faUser],
  ];
  return (
    <div className="w-full h-full">
      {selectedOption === "home" ? (
        <AdminHome />
      ) : selectedOption === "add" ? (
        <AdminAdd />
      ) : selectedOption === "verify" ? (
        <AdminVerify />
      ) : selectedOption === "enroll" ? (
        <AdminEnroll />
      ) : selectedOption === "profile" ? (
        <AdminProfile />
      ) : (
        <Loading />
      )}
      <div className="absolute bottom-8 w-full h-20 flex flex-row justify-center">
        <NavBar options={OPTIONS} default="home" onChange={setSelectedOption}/>
      </div>
    </div>
  );
}
