import React from "react";

const TableHead = ({ title }) => {
  return (
    <th
      className={`py-3 px-1  text-center  border-b-[1px]  ${
        title === "image" ? "max-sm:hidden" : ""
      } border-white`}
    >
      {title}
    </th>
  );
};

export default TableHead;
