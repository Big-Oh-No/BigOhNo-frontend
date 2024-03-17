import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavButton(props) {
  return (
    <div
      className={`text-2xl text-black ${
        props.name === props.option
          ? "bg-dark-theme text-white hover:opacity-90"
          : "hover:bg-light-theme hover:text-opacity-75 hover:shadow-sm"
      } transition duration-300 flex justify-center items-center w-14 h-14 rounded-xl`}
      onClick={() => props.onClick()}
    >
      <FontAwesomeIcon icon={props.icon} />
    </div>
  );
}
