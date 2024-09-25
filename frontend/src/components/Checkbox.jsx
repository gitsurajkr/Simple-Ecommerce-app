// components/Checkbox.js
import React from 'react';

function Checkbox({ id, label, checked, onChange }) {
  return (
    <div className="flex items-center mb-4">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
        style={{
            accentColor: 'black'
        }}
      />
      <label
        htmlFor={id}
        className="ms-2 text-sm font-sm "
      >
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
