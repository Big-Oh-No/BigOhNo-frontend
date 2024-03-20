import { useParams } from "react-router-dom";

export default function Course(props) {
    const params = useParams();

  return (
    <div className="w-screen h-screen">
        COURSE ID: {params.id}
    </div>
  );
}
