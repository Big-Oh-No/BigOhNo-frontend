import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AccessDenied from "./AccessDenied";
import SideBar from "../components/SideBar";

export default function Course(props) {
  const params = useParams();
  const navigate = useNavigate();
  const [accessDenied, setAccessDenied] = useState(false);
  const [page, setPage] = useState("syllabus");


  return (
    <div className="w-screen h-screen bg-light-theme">
      {accessDenied ? <AccessDenied /> : <div className="w-full h-full flex flex-row">
        <div className="h-full w-[17%]"><SideBar changeHandler={(e) => setPage(e)}/></div>
        {page}
        </div>}
    </div>
  );
}