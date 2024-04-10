import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Component to render a navigation button
 * @param {Object} props - Component props
 * @param {string} props.name - Name of the button
 * @param {string} props.option - Currently selected option
 * @param {function} props.onClick - Function to handle button click
 * @param {object} props.icon - Icon for the button
 */
export default function NavButton(props) {
  return (
    <div
      name={`${props.name}-button`}
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
