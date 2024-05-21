'use client'
import Image from "next/image";
import Header from "./components/Header";
import Card from "./components/Card";

export default function Home() {
  return (
    <main>
      <Header />

      <div className="flex flex-col items-center justify-center mt-10 space-y-4">
        <h1 className="text-4xl text-orange-600">Shop Local Products</h1>

        <p className="text-center text-gray-600 text-xl">
          Your farm produts supply to consumer doordash for easy way web
          paltform
        </p>
      </div>

      <div className="p-8 flex ">
       
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        <Card />
        <Card />
        <Card />
       
          
        </div>
      </div>
    </main>
  );
}
