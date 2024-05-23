'use client'
import Image from "next/image";
import Header from "./components/Header";
import Card from "./components/Card";
import ImageSlider from './components/Image-Silder'
import { FaApple, FaShop } from "react-icons/fa6";
import { FaProcedures } from "react-icons/fa";
import { GiFruitTree } from "react-icons/gi";
import { CiDeliveryTruck } from "react-icons/ci";

export default function Home() {
  return (
    <main>
      <Header />

      <div className="flex flex-col items-center justify-center mt-2 mb-2 ">
        <h1 className="text-4xl text-orange-600">Shop Local Products</h1>

        <p className="text-center text-gray-600 text-xl">
          Your farm produts supply to consumer doordash for easy way web
          paltform
        </p>
      </div>

    <ImageSlider/>


    <div className="mt-8 mb-8 flex flex-col justify-center items-center gap-4 text-3xl">
      
      <h1 className="lg:text-8xl text-4xl mb-8 "> Selling with us - 3 easy steps </h1>

      <div className="flex gap-20  p-4 ">
      <div className="flex flex-col gap-4 justify-center items-center">
        <FaShop className="text-[100px]"/>
        <h1 className=" underline-offset-4 underline text-[#F27052]">1. Open Your Shop</h1>
        <p className="font-thin text-2xl">Add your shop name <br /> a description and some <br />
         contact details.</p>
      </div>

      <div className="flex flex-col gap-4 justify-center items-center">
        <GiFruitTree className="text-[100px]"/>
        <h1 className=" underline-offset-4 underline text-[#F27052]">2. Add Your Products</h1>
        <p className=" font-thin text-2xl">Create products, set stock <br /> levels and open an order <br /> cycle
        </p>
      </div>


      <div className="flex flex-col gap-4 justify-center items-center">
        <CiDeliveryTruck className="text-[110px]"/>
        <h1 className=" underline-offset-4 underline text-[#F27052] ">3. Plan Your Deliveries</h1>
        <p className=" font-thin  text-2xl ">Set up payment methods <br />  and add your collection and <br /> delivery options.</p>
      </div>
      </div>

    </div>

      {/* <div className="p-8 flex ">
       
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        <Card />
        <Card />
        <Card />
       
          
        </div>
      </div> */}
    </main>
  );
}
