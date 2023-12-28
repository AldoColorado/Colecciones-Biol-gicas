import React, { ReactNode } from "react";
import "./custom-input.css";

const CustomInput = ({
  text,
  input,
  icon,
}: {
  text: string;
  input: ReactNode | ReactNode[];
  icon: ReactNode | ReactNode[];
}) => {
  return (
    <div className="custom-input">
      <div>{icon}</div>
      <div className="input">
        {input}
        <span>{text}</span>
      </div>
    </div>
  );
};

export default CustomInput;
