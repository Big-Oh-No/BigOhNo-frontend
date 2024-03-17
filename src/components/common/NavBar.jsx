import React from "react";
import { useState } from "react";
import NavButton from "./NavButton";

export default function NavBar(props) {
  const [option, setOption] = useState(props.default);

  return (
    <div
      className="flex flex-row items-center justify-around rounded-3xl px-5 space-x-10 bg-white h-full"
      style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.14)" }}
    >
      {props.options.map((current_option) => {
        return (
          <NavButton
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
