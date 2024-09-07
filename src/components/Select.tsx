"use client";

import React from "react";

function Select({
  label = '',
  name = '',
  options = [],
  value = '',
  className = '',
  handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {}
}: {
  label: string;
  name: string;
  options: string[];
  value: string | number;
  className: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; // Include handleChange in props
}) {
   
  return (
    <>
      <label>
        {label}
        <select
          name={name}
          value={value}
          onChange={handleChange}
          className={`text-black ${className}`}
        >
            {
                options.map((item, index) => (
                    <option value={item.toLowerCase()} key={index}>{item}</option>
                ))
            }
        </select>
      </label>
    </>
  );
}

export default Select;
