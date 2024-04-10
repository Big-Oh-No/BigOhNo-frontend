import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

/**
 * Sidebar component to navigate between different pages
 * @param {Object} props - Component props
 * @param {Object} props.data - Data for the sidebar
 * @param {Function} props.changeHandler - Function to handle page change
 * @returns {JSX.Element} Sidebar component
 */
export default function SideBar(props) {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  /**
   * Function to toggle the visibility of the sidebar
   */
  const toggleSidebar = () => {
    setSidebarVisible(true);
  };

  /**
   * Function to hide the sidebar
   */
  const hideSidebar = () => {
    setSidebarVisible(false);
  };

  const [current, setCurrent] = useState("syllabus");
  const navigate = useNavigate();

  /**
   * Function to handle page change
   * @param {string} page - Page to navigate to
   */
  const onChangePage = (page) => {
    setCurrent(page);
    props.changeHandler(page);
  };

  return (
    <div className="flex items-center w-full h-full">
      {/* Sidebar toggle button */}
      <div
        onMouseEnter={toggleSidebar}
        className={`absolute w-14 h-20 rounded-r-full bg-dark-theme text-white flex flex-col justify-center items-center text-3xl pr-2 ${
          !sidebarVisible ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>

      {/* Sidebar content */}
      <div className="h-full w-full flex flex-col justify-center">
        <div
          onMouseLeave={hideSidebar}
          className={`h-full w-full bg-dark-theme flex flex-col items-center py-10 space-y-2 rounded-br-[50px] rounded-tr-[50px] ${
            sidebarVisible ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
          style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.14)" }}
        >
          {/* Course details */}
          <div className="text-white font-bold text-5xl font-inter">
            {props.data.meta.dept} {props.data.meta.code}
          </div>
          <div className="h-10"></div>

          {/* Navigation links */}
          {["dashboard", "syllabus", "assignments", "discussions", "logout"].map((page) => (
            <div
              key={page}
              className={`w-[70%] h-14 ${
                current === page
                  ? "text-white bg-black"
                  : "bg-white text-black hover:text-white hover:bg-black"
              } rounded-2xl flex items-center justify-center text-xl hover:scale-105 transition duration-300 hover:cursor-pointer shadow`}
              onClick={() => {
                if (page === "logout") {
                  localStorage.removeItem("AuthCookie");
                  navigate("/");
                } else {
                  onChangePage(page);
                }
              }}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)} {/* Capitalize first letter of page name */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
