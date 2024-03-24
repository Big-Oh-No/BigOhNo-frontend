import { useParams } from "react-router-dom";
import AssignmentCard from "../components/course/StudentCourse/AssignmentCard";


export default function Course(props) {
    const params = useParams();

  return (
    <div>
    <AssignmentCard />
  
    {/* // <div className="w-screen h-screen">
    //     COURSE ID: {params.id}
    // </div> */}

    </div>
  );
}
