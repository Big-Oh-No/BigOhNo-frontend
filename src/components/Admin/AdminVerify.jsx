import { useState } from "react";

export default function AdminVerify() {
  const [status, setStatus] = useState("Pending")
  const handleSubmit = () => {
    setStatus("Approved")
  }
    return (
    <div>
      <h2 className="text-dark-theme font-inter font-semibold text-4xl mt-8 ml-5">
        Pending Verification
      </h2>
      <table className="border-collapse border border-gray-400 mt-10 ml-10">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">Student Name</th>
            <th className="border border-gray-400 px-4 py-2">
              Verification Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 px-4 py-2">John Appleseed</td>
            <td className="border border-gray-400 px-4 py-2">
              <div className={`flex flex-row justify-center items-center rounded-md hover:cursor-pointer h-9 text-white ${status === "Pending" ? "bg-black"  : "bg-green-600"}`} onClick={handleSubmit}>{status}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
