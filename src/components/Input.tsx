import React from 'react';

function Input({
    label = '',
    className = '',
    type = 'text',
    placeholder = '',
    value = '',
    id = '',
    name = '',
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {}
}: {
    label: string;
    className: string;
    type: string;
    placeholder: string;
    value?: string | number;
    id: string;
    name: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}) {
  return (
    <div>
      <label htmlFor={`${id}`}>{label}</label>
      <input 
        type={type}
        placeholder={placeholder}
        value={value}
        className={className}
        id={id}
        name={name}
        onChange={handleChange}
        min={1}
      />
    </div>
  );
}

export default Input;
