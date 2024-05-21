"use client";
import React from "react";
import Image from "next/image";
import image1 from "@/public/farm-bg.jpg";

function Details() {
  return (
    <div className="max-w-7xl mx-auto mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="shadow-md relative rounded-md h-96 overflow-hidden aspect-ratio-1">
          <Image src={image1} className=" object-cover" alt={"pics"} />
        </div>

        <div className="flex flex-col p-6 justify-between">
            <h1 className="text-3xl font-semibold">Vegitable </h1>
            <p className="text-lg mt-4 text-gray-400">This Item No 1</p>
            <div>
                <span className="text-2xl text-orange-700">Rs.1300</span>
            </div>

            <div className="mt-6 flex flex-col ">
                <label htmlFor="">Qty</label>
                <input type="text" defaultValue={1} className=" w-20 px-4 border border-gray-300 rounded-md" />

            </div>

            <div className="mt-6">
                <button className="w-20 bg-sky-400 py-2 rounded-md">Add Cart</button>

            </div>

        </div>
      </div>
    </div>
  );
}

export default Details;
