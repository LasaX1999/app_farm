// pages/shop.tsx
'use client';

import Header from '@/app/components/Header';
import { useState, useEffect } from 'react';
import { client } from '@/sanity/client';
import Image from 'next/image';
import { MdAddShoppingCart } from 'react-icons/md';
import Link from 'next/link';
import { useCart } from '@/app/context/CartContext';
import toast from 'react-hot-toast';




// Fetch data from Sanity
async function fetchUsers() {
  const query = `*[_type == "user"]{
    _id,
    title,
    "imageUrl": titleImage.asset->url,
    price,
    description
  }`;
  const users = await client.fetch(query);
  return users;
}

export default function Shop() {
  const { addToCart } = useCart();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const initialData = await fetchUsers();
        setData(initialData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Subscribe to changes in the Sanity dataset
    const subscription = client
      .listen('*[_type == "user"]')
      .subscribe(() => {
        // When there's an update, re-fetch the data and update the state
        fetchData();
      });

    // Clean up the subscription when component unmounts
    return () => subscription.unsubscribe();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Header />
      <h1 className='text-3xl text-center pt-4'>Food Shop</h1>
      <div className='flex flex-wrap items-center justify-center'>
        {data.map((user) => (
          <div key={user._id} className='m-5 border border-gray-300 p-4 rounded-lg max-w-xs'>
            {user.imageUrl && (
              <div className='relative w-full h-48'>
                <Image
                  src={user.imageUrl}
                  alt={user.title}
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg duration-300 transition-all hover:scale-105'
                />
              </div>
            )}
            <div className='flex flex-col text-center justify-center items-center border-t-2 border-green-400 mt-2 pt-2'>
              <h2 className='text-xl font-semibold'>{user.title}</h2>
              <p className='text-lg font-medium'>{user.price}</p>
              <p className='text-sm text-gray-600 pb-4'>{user.description}</p>
            </div>
            <div className="btn flex justify-center items-center gap-4 ">
              <Link className="hover:bg-black hover:text-white transition-all duration-300   buy flex justify-center cursor-pointer items-center border shadow-lg bg-zinc-50  border-[#0000002c]  w-60 h-10 rounded-md" href={'/payment'} >Get Now</Link>
              <MdAddShoppingCart
                className='text-2xl hover:cursor-pointer hover:scale-110 transition-all duration-300   hover:text-green-500 hover:rotate-12'
                onClick={() => {
                  addToCart(user);
                  toast.success('Successfully added to cart!');
         
                }}
                
              />
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
