"use client";
import React, { FC, Fragment, useRef, useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

interface Props {
  label: string;
  type: string;
  icon: React.ReactNode | null;
}

const Input: FC<Props> = ({ label, type, icon }) => {
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
    <div>
      {label ? <label className="font-bold text-lg" htmlFor={label}>{label}</label> : null}
      <div
        onClick={handleFocus}
        className={`border rounded-lg flex justify-between cursor-text ${label ? "mt-2" : ""}`}
      >
        {icon ? <div>{icon}</div> : null}
        <input
          id={label}
          ref={inputRef}
          className={`outline-none w-full px-2 ${icon || type === "password"  ? "" : "h-[46px]"}`}
          type={type === "password" && show ? "text" : type}
        />
        {type === "password" ? (
          <div
            className="rounded-full p-2 cursor-pointer hover:bg-[#e8e8e8] duration-200"
            onClick={handleShowPassword}
          >
            {show ? (
              <AiOutlineEyeInvisible size={30} />
            ) : (
              <AiOutlineEye size={30} />
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Input;
