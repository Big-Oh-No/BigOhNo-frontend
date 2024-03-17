import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function AdminNavBar() {
  return (
    <div className="flex flex-row items-center justify-around rounded-3xl w-[20%] bg-light-theme h-full shadow-xl">
      <div className="text-2xl text-blue-950 opacity-75  hover:opacity-100  hover:bg-white transition duration-200 flex justify-center items-center p-3 rounded-xl">
        <FontAwesomeIcon icon={faHouse} />
      </div>
      <div className="text-2xl text-blue-950 opacity-75  hover:opacity-100 transition duration-200 flex justify-center items-center p-3 rounded-xl">
        <FontAwesomeIcon icon={faHouse} />
      </div>
      <div className="text-2xl text-blue-950 opacity-75  hover:opacity-100 transition duration-200 flex justify-center items-center p-3 rounded-xl">
        <FontAwesomeIcon icon={faHouse} />
      </div>
      <div className="text-2xl text-blue-950 opacity-75  hover:opacity-100 transition duration-200 flex justify-center items-center p-3 rounded-xl">
        <FontAwesomeIcon icon={faHouse} />
      </div>
      <div className="text-2xl text-blue-950 opacity-75  hover:opacity-100 transition duration-200 flex justify-center items-center p-3 rounded-xl">
        <FontAwesomeIcon icon={faHouse} />
      </div>
    </div>
  );
}
