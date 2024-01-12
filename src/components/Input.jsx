/* eslint-disable react/prop-types */
import React from 'react';

function Input({ type, id, name, label, placeholder, autoFocus, value, onChange }) {
  return (
    <label className="text-gray-500 block mt-3">
      {label}
      <input
        autoFocus={autoFocus}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="rounded px-4 py-3 w-full mt-1 bg-white text-gray-900 border border-gray-200 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

export default Input