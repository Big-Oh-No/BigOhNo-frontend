import React, { useState } from "react";
import NavButton from "./NavButton";

/**
 * Component to render a navigation bar with options
 * @param {Object} props - Component props
 * @param {string} props.default - Default selected option
 * @param {Array} props.options - Array of options to display in the navigation bar
 * @param {function} props.onChange - Function to handle option change
 */
export default function NavBar(props) {
  const [option, setOption] = useState(props.default);

  return (
    <div
      className="flex flex-row items-center justify-around rounded-3xl px-5 space-x-10 bg-white h-full"
      style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.14)" }}
    >
      {/* Map through options to render NavButton component */}
      {props.options.map((current_option) => {
        return (
          <NavButton
            key={current_option[0]} // Adding a unique key prop
            name={current_option[0]}
            icon={current_option[1]}
            option={option}
            onClick={() => {
              setOption(current_option[0]);
              props.onChange(current_option[0]);
            }}
          />
        );
      })}
    </div>
  );
}
