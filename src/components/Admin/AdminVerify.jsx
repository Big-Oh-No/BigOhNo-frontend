import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import VerificationRequests from "../../models/verification_requests";

export default function AdminVerify() {
  const [requests, setRequests] = useState([]);
  const navigate = useNavigate();
  const handleApprove = async (user_email, name) => {
    try {
      const data = JSON.parse(localStorage.getItem("AuthCookie"));
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND}/user/verify`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: data["email"],
            password: data["password"],
            user_email: user_email,
          }),
        }
      );

      if (response.status === 200) {
        init();
        showAlert(`${name} verified sucessfully!`);
      } else {
        const detail = await response.json();
        showAlert(detail["detail"]);
      }
    } catch (error) {
      showAlert("Unexpected error occurred");
    }
  };

  const showAlert = (message) => {
    alert(`${message}`);
  };
  useEffect(() => init, []);
  const init = async () => {
    const data = JSON.parse(localStorage.getItem("AuthCookie"));

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND}/user/verification_status`,
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
          const current_request = new VerificationRequests({
            firstName: response_json[i].first_name,
            lastName: response_json[i].last_name,
            email: response_json[i].email,
            role: response_json[i].role,
          });
          request_array.push(current_request);
        }
        setRequests(request_array);
      } else {
        localStorage.removeItem("AuthCookie");
        navigate("/");
        return;
      }
    } catch (error) {
      return;
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="text-5xl font-bold font-inter pt-10 w-full pl-10 pb-10 z-20">
        Pending Verification
      </div>
      <div className="pt-5 flex flex-col justify-center w-full p-10">
        <table className="border border-gray-400">
          <thead className="text-2xl text-white bg-dark-theme">
            <tr>
              <th className="border border-gray-400 px-4 py-2">First Name</th>
              <th className="border border-gray-400 px-4 py-2">Last Name</th>
              <th className="border border-gray-400 px-4 py-2">Email</th>
              <th className="border border-gray-400 px-4 py-2">Role</th>
              <th className="border border-gray-400 px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody className="text-xl">
            {requests.map((request) => {
              return (
                <tr className="hover:bg-light-theme">
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
                    {request.role}
                  </td>
                  <td className="border border-gray-400">
                    <div className=" w-full h-full justify-around py-3">
                      <div className="text-3xl">
                        <div
                          className="flex justify-center hover:cursor-pointer"
                          onClick={() => {handleApprove(request.email, `${request.firstName} ${request.lastName}`)}}
                        >
                          ✅
                        </div>
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
