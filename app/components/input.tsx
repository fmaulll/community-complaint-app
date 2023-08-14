"use client";
import React, { FC, useRef, useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

interface Props {
  type: string;
  icon: React.ReactNode | null;
}

const Input: FC<Props> = ({ type, icon }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [show, setShow] = useState<boolean>(false);

  const handleShowPassword = () => {
    setShow(!show);
  };
  
  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current?.focus();
    }
  };

  return (
    <div
      onClick={handleFocus}
      className="border rounded-lg flex justify-between cursor-text px-2"
    >
      {icon ? <div>{icon}</div> : null}
      <input
        ref={inputRef}
        className="outline-none"
        type={type === "password" && show ? "text" : type}
      />
      {type === "password" ? (
        <div className="rounded-full p-2 cursor-pointer hover:bg-[#e8e8e8] duration-200" onClick={handleShowPassword}>
          {show ? <AiOutlineEyeInvisible size={30} /> : <AiOutlineEye size={30} />}
        </div>
      ) : null}
    </div>
  );
};

export default Input;
