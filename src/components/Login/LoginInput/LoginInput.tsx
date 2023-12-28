import React, { ReactNode } from "react";
import "./login-input.css";

const LoginInput = ({
  text,
  input,
}: {
  text: string;
  input: ReactNode | ReactNode[];
}) => {
  return (
    <>
      <div className="container-login-input">
        {input}
        <span>{text}</span>
      </div>
    </>
  );
};

export default LoginInput;
