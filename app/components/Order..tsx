'use client'
import React from 'react'
import Image from 'next/image'
import image1 from "@/public/farm-bg.jpg";

function Order() {
    const products = [
        { id: 1, name: "Item 1", paid: "Paid", qty: 2 ,status:"Delivered" },
        { id: 2, name: "Item 2", paid: "Paid", qty: 1, status:"Delivered"}
    
    ];
      return <div className="max-w-3xl mx-auto mt-20">
    
        <h1 className="text-3xl text-center font-semibold text-rose-600 mb-6">Cart</h1>
    
        <table className="w-full border-collapse">
            <thead >
    
                <tr className="border-b text-black  border-gray-200">
    
                    <th className=" px-4 py-3">Product</th>
                    <th className=" px-4 py-3">Qty</th>
                    <th className=" px-4 py-3">Paid</th>
                    <th className=" px-4 py-3">Status</th>
    
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
    
                                    <td className="py-2 px-4">{product.qty}</td>
                                    <td className="py-2 px-4">{product.paid}</td>
                                    <td className="py-2 px-4">{product.status}</td>
                        </tr>
                    ))
                }
            </tbody>
    
        </table>
    
      </div>;
}

export default Order