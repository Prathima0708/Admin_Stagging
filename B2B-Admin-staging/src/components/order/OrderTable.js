import React from "react";
import { Link } from "react-router-dom";
import * as dayjs from "dayjs";
import { TableCell, TableBody, TableRow } from "@windmill/react-ui";

import Status from "../table/Status";
import { FiEye } from "react-icons/fi";
import Tooltip from "../tooltip/Tooltip";
import SelectStatus from "../form/SelectStatus";
import { v4 } from "uuid";

const OrderTable = ({ orders }) => {
  return (
    <>
      <TableBody>
        {orders?.map((order) => (
          <TableRow key={v4()}>
            <TableCell>
              <span className="font-semibold uppercase text-xs">{v4().substring(20, 24)}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm">{dayjs(order.createdAt).format("MMM D, YYYY")}</span>
            </TableCell>

            <TableCell>
              <span className="text-sm">{order.address.substring(0, 25)}</span>
            </TableCell>
            <TableCell>
              {" "}
              <span className="text-sm">{order.contact}</span>{" "}
            </TableCell>
            <TableCell>
              <span className="text-sm font-semibold">{order.paymentMethod}</span>
            </TableCell>
            <TableCell>
              {" "}
              <span className="text-sm font-semibold">${Math.round(order.total)}.00</span>{" "}
            </TableCell>
            <TableCell className="text-center text-xs">
              <Status status={order.status} />
            </TableCell>
            <TableCell className="text-center">
              <SelectStatus id={v4()} />
            </TableCell>
            <TableCell className="text-right flex justify-end">
              <div className="p-2 cursor-pointer text-gray-400 hover:text-green-600">
                {" "}
                <Link to={`/order/${v4()}`}>
                  <Tooltip id="view" Icon={FiEye} title="View Invoice" bgColor="#34D399" />
                </Link>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default OrderTable;
