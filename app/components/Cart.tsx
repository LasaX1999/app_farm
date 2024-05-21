"use client";
import Image from "next/image";
import React from "react";

import image1 from "@/public/farm-bg.jpg";
import { FaTrash } from "react-icons/fa";

function Cart() {
  const products = [
    { id: 1, name: "Item 1", price: 1200, qty: 3 },
    { id: 2, name: "Item 2", price: 1300, qty: 1}

];
  return <div className="max-w-3xl mx-auto mt-20">

    <h1 className="text-3xl text-center font-semibold text-rose-600 mb-6">Cart</h1>

    <table className="w-full border-collapse">
        <thead >

            <tr className="border-b text-black  border-gray-200">

                <th className=" px-4 py-3">Product</th>
                <th className=" px-4 py-3">Price</th>
                <th className=" px-4 py-3">Qty</th>
                <th className=" px-4 py-3">Remove</th>

            </tr>

        </thead>

        <tbody>
            {
                products.map(product=>(
                    <tr className="hover:bg-gray-50 text-center border-b border-gray-300" key={product.id}>

                                <td className="py-2 px-4  flex items-center">
                                <Image src={image1} className="mr-2" width={40} height={30} alt={"product image"} />
                                    {product.name}
                                </td>

                                <td className="py-2 px-4">Rs.{product.price}</td>
                                <td className="py-2 px-4">{product.qty}</td>
                                <td className="py-2 px-4">
                                    <FaTrash className="mx-auto cursor-pointer"/>
                                </td>
                    </tr>
                ))
            }
        </tbody>

    </table>

  </div>;
}

export default Cart;
