import { useState } from "react";

export default function TeacherSubmissionRow(props) {
    const [grade, setGrade] = useState(props.e.grade);

    const submit = async () => {
        const data = JSON.parse(localStorage.getItem("AuthCookie"));
        try {
          const d = new FormData();
          d.append("email", data["email"]);
          d.append("password", data["password"]);
          d.append("assignment_id", props.assignment.id);
          d.append("student_email", props.e.student_email);
          d.append("grade", grade);
         
          const response = await fetch(`${process.env.REACT_APP_BACKEND}/course/grade`, {
            method: "PATCH",
            body: d,
          });
        
          if (response.status === 201) {
            alert(`Grade updated for ${props.e.student_name}`);
          } else {
            const res = await response.json();
            alert(res.detail);
          }
        } catch (error) {
          alert("Unexpected Error Occurred!");
          console.error("Error:", error);
        }
      }

    return <tr className="hover:bg-light-theme">
    <td className="border border-gray-400 px-4 py-2">
      {props.e.student_name}
    </td>
    <td className="border border-gray-400 px-4 py-2">
      {props.e.student_email}
    </td>
    <td className="border border-gray-400 px-4 py-2">
      <a
        href={props.e.file_url}
        target="_blank"
        className="text-dark-theme hover:underline"
      >
        Download File
      </a>
    </td>
    <td className="border border-gray-400 px-4 py-2">
      {props.e.created_at}
    </td>
    <td className="border border-gray-400 px-4 py-2">
      <div className="flex flex-row">
        <input
          value={grade}
          className="bg-transparent text-right px-2"
          onChange={(e) => setGrade(e.target.value)}
        />
        <div> / {props.assignment.total_grade}</div>
      </div>
    </td>
    <td className="border border-gray-400 px-4 py-2 flex justify-center items-center">
      <div onClick={submit} className="font-semibold font-inter flex justify-center bg-green-700 text-white rounded-full w-[70%] hover:cursor-pointer">
        Submit
      </div>
    </td>
  </tr>;
}