import { useParams } from "react-router-dom";
import AssignmentCard from "../components/course/StudentCourse/AssignmentCard";
import AssignmentList from "../components/course/StudentCourse/AssignmentList";



export default function Course(props) {
    const params = useParams();

  return (
    <div>
    <AssignmentList />
  
    {/* // <div className="w-screen h-screen">
    //     COURSE ID: {params.id}
    // </div> */}

    </div>
  );
}
