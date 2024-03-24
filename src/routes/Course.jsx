import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AccessDenied from "./AccessDenied";

export default function Course(props) {
  const params = useParams();
  const navigate = useNavigate();
  // const [validCourseID, setValidCourseID] = useState(null);
  const [accessDenied, setAccessDenied] = useState(false);

  // useEffect(() => {
  //   const courseID = parseInt(params.id);
  //   if (isValidCourseID(courseID)) {
  //     setValidCourseID(courseID);
  //   } else {
  //     navigate("/");
  //     return;
  //   }
  // });

  return (
    <div className="w-screen h-screen">
      {accessDenied ? <AccessDenied /> : <div>Course ID: {params.id}</div>}
    </div>
  );
}
