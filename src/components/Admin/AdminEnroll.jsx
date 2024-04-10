import { useEffect, useState } from "react"; // Importing useEffect and useState hooks from React
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook from React Router
import EnrollmentRequests from "../../models/enrollment_requests"; // Importing EnrollmentRequests model

export default function AdminEnroll() {
  const [requests, setRequests] = useState([]); // State to manage enrollment requests
  const [comment, setComment] = useState(); // State to manage comment for enrollment requests
  const navigate = useNavigate(); // Accessing the navigate function from React Router

  // Function to handle enrollment requests
  const handleRequest = async (name, student_id, course_id, dir) => {
    // Checking if comment is provided
    if (comment === null || comment === undefined || comment.length === 0) {
      showAlert("Please enter a comment");
      return;
    }
    try {
      const data = JSON.parse(localStorage.getItem("AuthCookie")); // Retrieving authentication cookie from local storage
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND}/course/enrollment_update/${dir}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: data["email"],
            password: data["password"],
            student_id: student_id,
            course_id: course_id,
            comment: comment,
          }),
        }
      );

      if (response.status === 201) {
        init(); // Refreshing enrollment requests after handling
        showAlert(`${name}'s enrollment request handled successfully!`);
      } else {
        const detail = await response.json();
        showAlert(detail["detail"]);
      }
    } catch (error) {
      showAlert("Unexpected error occurred");
    }
  };

  // Function to display alerts
  const showAlert = (message) => {
    alert(`${message}`);
  };

  // Function to initialize enrollment requests
  useEffect(() => init, []);
  const init = async () => {
    const data = JSON.parse(localStorage.getItem("AuthCookie")); // Retrieving authentication cookie from local storage

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND}/course/enrollment_status`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: data["email"],
            password: data["password"],
          }),
        }
      );

      if (response.status === 200) {
        const response_json = await response.json();
        console.log(response_json.length);
        let request_array = [];
        for (let i = 0; i < response_json.length; ++i) {
          const current_request = new EnrollmentRequests({
            student_id: response_json[i].student_id,
            course_id: response_json[i].course_id,
            firstName: response_json[i].first_name,
            lastName: response_json[i].last_name,
            email: response_json[i].email,
            dept: response_json[i].dept,
            code: response_json[i].code,
            term: response_json[i].term,
            year: response_json[i].year,
          });
          request_array.push(current_request);
        }
        setRequests(request_array); // Updating state with enrollment requests
      } else {
        localStorage.removeItem("AuthCookie");
        navigate("/"); // Navigating user to the home page if authentication fails
        return;
      }
    } catch (error) {
      return;
    }
  };

  // JSX code for rendering AdminEnroll component
  return (
    <div className="w-screen h-screen flex flex-col">
      {/* Header */}
      <div className="text-5xl font-bold font-inter pt-10 w-full pl-10 pb-10 z-20">
        Pending Enrollment Requests
      </div>
      {/* Table to display enrollment requests */}
      <div className="pt-5 flex flex-col justify-center w-full p-10">
        <table className="border border-gray-400">
          <thead className="text-2xl text-white bg-dark-theme">
            <tr>
              <th className="border border-gray-400 px-4 py-2">First Name</th>
              <th className="border border-gray-400 px-4 py-2">Last Name</th>
              <th className="border border-gray-400 px-4 py-2">Email</th>
              <th className="border border-gray-400 px-4 py-2">Course</th>
              <th className="border border-gray-400 px-4 py-2">Session</th>
              <th className="border border-gray-400 px-4 py-2">Comment</th>
              <th className="border border-gray-400 px-4 py-2">Decision</th>
            </tr>
          </thead>
          <tbody className="text-xl">
            {/* Mapping through enrollment requests and rendering each row */}
            {requests.map((request) => {
              return (
                <tr className="hover:bg-light-theme" key={request.student_id}>
                  <td className="border border-gray-400 px-4 py-2">
                    {request.firstName}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {request.lastName}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {request.email}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {request.dept} {request.code}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {request.year} {request.term}
                  </td>
                  <td className="border border-gray-400 px-4 pt-2">
                    {/* Textarea for entering comment */}
                    <textarea
                      className="w-full h-full border p-2"
                      onChange={(value) => setComment(value.target.value)}
                      required
                    ></textarea>
                  </td>
                  <td className="border border-gray-400">
                    <div className="w-full h-full py-3 text-3xl flex justify-around">
                      {/* Button to accept enrollment request */}
                      <div
                        className="flex justify-center hover:cursor-pointer"
                        onClick={() => {
                          handleRequest(
                            `${request.firstName} ${request.lastName}`,
                            request.student_id,
                            request.course_id,
                            0
                          );
                        }}
                      >
                        ✅
                      </div>
                      {/* Button to reject enrollment request */}
                      <div
                        className="flex justify-center hover:cursor-pointer"
                        onClick={() => {
                          handleRequest(
                            `${request.firstName} ${request.lastName}`,
                            request.student_id,
                            request.course_id,
                            1
                          );
                        }}
                      >
                        ❌
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
