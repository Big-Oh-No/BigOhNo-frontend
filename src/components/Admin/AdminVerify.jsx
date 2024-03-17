export default function AdminVerify() {
    return (
      <div>
        <h2 className="text-dark-theme font-inter font-semibold text-4xl mt-8 ml-5">Pending Verification</h2>
        <table className="border-collapse border border-gray-400 mt-4 ml-5">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">Student Name</th>
              <th className="border border-gray-400 px-4 py-2">Verification Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 px-4 py-2">John Appleseed</td>
              <td className="border border-gray-400 px-4 py-2">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  