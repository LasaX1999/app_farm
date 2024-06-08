'use client';

import Header from '@/app/components/Header';
import { useState, useEffect } from 'react';
import { client } from '@/sanity/client';
import Image from 'next/image';

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
      <div className='flex flex-wrap justify-center'>
        {data.map((user) => (
          <div key={user._id} className='m-5 border border-gray-300 p-4 rounded-lg max-w-xs'>
            {user.imageUrl && (
              <Image
                src={user.imageUrl}
                alt={user.title}
                width={300}
                height={300}
                className='w-full h-auto object-cover'
              />
            )}
            <div className='flex flex-col justify-center items-center border-t-2 border-green-400 mt-2 pt-2'>
              <h2 className='text-xl font-semibold'>{user.title}</h2>
              <p className='text-lg font-medium'>{user.price}</p>
              <p className='text-sm text-gray-600'>{user.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}