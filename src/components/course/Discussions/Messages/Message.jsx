import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp, faCircleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function Message(props) {
    const [showDate, setShowDate] = useState(false);
    function formatDate(dateString) {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
        const date = new Date(dateString);
    
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const month = months[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();
    
        return `${hours}:${minutes} ${month} ${day}, ${year}`;
    }
  return (
    <div className="w-full py-5 text-xl hover:bg-dark-theme hover:bg-opacity-10 transition duration-100 justify-between flex flex-row px-10" onMouseEnter={()=>setShowDate(true)} onMouseLeave={() => setShowDate(false)}>
        <div className="w-[95%] flex flex-row space-x-5">
      {props.message.author_pfp ? (
        <img
          className="w-[5rem] h-[5rem] rounded-full"
          src={props.message.author_pfp}
          alt="author_pfp"
        />
      ) : (
        <img
          className="w-[4.1rem] h-[4.1rem] rounded-full"
          src={require("../../../../assets/pfp.png")}
          alt="author_pfp"
        />
      )}
      <div className="flex flex-col space-y-1">
        <div className="text-xl text-dark-theme font-semibold">John Doe {showDate ? <span className="pl-2 text-neutral-400 font-normal">{formatDate(props.message.date_created)}</span>:<></>}</div>
        <div className="text-xl">
            {props.message.message}
        </div>
      </div>
      </div>
      <div className="w-[5%] h-full flex flex-col justify-center items-center space-y-2">
        <div className="text-3xl text-green-500 hover:cursor-pointer hover:scale-125 transition duration-[250ms]"><FontAwesomeIcon icon={faCircleUp}/></div>
        <div className="text-2xl font-semibold">{props.message.upvotes}</div>
        <div className="text-3xl text-red-500 hover:cursor-pointer hover:scale-125 transition duration-[250ms]"><FontAwesomeIcon icon={faCircleDown}/></div>
      </div>
    </div>
  );
}
