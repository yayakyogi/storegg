import { ChangeEventHandler, ReactNode, useState } from "react";

interface InputSelectProps {
  label: string;
  name: string;
  value: string;
  children: ReactNode;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

const InputSelect = ({
  label,
  name,
  value,
  children,
  onChange,
}: InputSelectProps) => {
  return (
    <>
      <label htmlFor="input-select" className="font-medium text-lg mb-2 block">
        {label}
      </label>
      <div className="relative">
        <select
          name={name}
          onChange={onChange}
          value={value}
          className="px-6 py-2.5 lg:py-3 shadow bg-white rounded-full w-full placeholder:text-sm lg:placeholder:text-base border border-grey focus:outline-none appearance-none"
        >
          {children}
        </select>
        <div className="w-3 h-3 border-r border-b border-black absolute top-3.5 z-10 right-8 rotate-45"></div>
      </div>
    </>
  );
};

export default InputSelect;
