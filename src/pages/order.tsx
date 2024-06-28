import React, { useEffect, useState } from "react";
import { fetchOrder } from "../../utils/get/getOrder";
import Ellipsis from "@/components/Ellipsis/Ellipsis";

interface OrderItem {
  blockChain: string;
  cryptoSymbol: string;
  fiatCurrency: string;
  takerAddress: string;
  time: string; // Assuming time is stored as a string, adjust type if it's a Date object or Timestamp
  method: string;
  txType: string;
  uid: number;
  paymentMethod: string[]; // Assuming paymentMethod is an array of strings
  message: string;
  terms: string;
}

const Order: React.FC = () => {
  const [orders, setOrders] = useState<OrderItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fetchOrder("createOrder");
        setOrders(fetchedData);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[#d4ebfc] max-lg:pt-16 pt-32 w-screen h-full min-h-screen">
      <div className="mx-auto w-full xl:w-[72vw] h-full min-h-fit max-h-[50vw] overflow-auto selectscroll">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Block chain
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Crypto Symbol
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Fiat Currency
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Taker Address
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Time
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Tx Type
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Payment Method
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Message
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Terms
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                method
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((item, index: any) => (
              <tr key={index} className="bg-white">
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.blockChain}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.cryptoSymbol}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.fiatCurrency}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  <Ellipsis num={item.takerAddress} />
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {new Date(item.time).toLocaleString()}
                </td>

                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.txType}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.paymentMethod ? item.paymentMethod.join(", ") : ""}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.message
                    ? `${item.message.slice(0, 8)}${
                        item.message.length > 8 ? "..." : ""
                      }`
                    : "No message"}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.terms
                    ? `${item.terms.slice(0, 8)}${
                        item.terms.length > 8 ? "..." : ""
                      }`
                    : "No terms"}
                </td>

                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.method === "sale" && item.method}
                  {item.method === "buy" && item.method}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;