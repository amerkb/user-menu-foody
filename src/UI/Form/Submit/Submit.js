import React from "react";

const Submit = ({ value = "Submit", onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        type="submit"
        className="bg-green-500 text-center hover:bg-green-700 duration-200  text-white font-bold outline-none min-w-[80px]  px-4 py-2 text-[16px] rounded-[0.25rem] border-[1px] border-transparent"
      >
        {value}
      </button>
    </div>
  );
};

export default Submit;
