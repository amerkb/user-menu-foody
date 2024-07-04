import React from "react";
import { useSelector } from "react-redux";
import TableData from "../Table/TableData";
import TableHead from "../Table/TableHead";
import TableRow from "../Table/TableRow";

const Table = () => {
  const cart = useSelector((state) => state.Meal.cart);

  return (
    <div>
      <table className="w-full text-[14px] mb-10 ">
        <caption className="text-2xl font-bold text-[#333333] mb-12">
          {" "}
          SHOPPING CART
        </caption>
        <thead className="bg-green-500 text-white font-sans ">
          <tr>
            <TableHead title="image" />
            <TableHead title="Name" />
            <TableHead title="note" />
            <TableHead title="Quantity" />
            <TableHead title="Sub Total" />
          </tr>
        </thead>
        <tbody>
          {cart.map((cartDetail) => (
            <TableRow key={cartDetail.id}>
              <td className="py-3 px-2 max-w-[30px] max-sm:hidden  text-center md:hidden">
                <img src={cartDetail.img} />
              </td>
              <TableData title={cartDetail.name} />
              <TableData
                title={cartDetail.note === "" ? "Not Found" : cartDetail.note}
              />
              <TableData title={cartDetail.quantity} />
              <TableData title={cartDetail.quantity * cartDetail.price} />
            </TableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
