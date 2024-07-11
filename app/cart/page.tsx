'use client';
import { useCart } from '@/app/context/CartContext';
import Header from '@/app/components/Header';
import Image from 'next/image';
import { MdDelete } from 'react-icons/md';

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <Header />
      <h1 className='text-3xl text-center pt-4'>Your Cart</h1>
      <div className='flex flex-wrap items-center justify-center'>
        {cart.length === 0 ? (
          <p className='text-xl'>Your cart is empty.</p>
        ) : (
          cart.map((product) => (
            <div key={product._id} className='m-5 border border-gray-300 p-4 rounded-lg max-w-xs'>
              {product.imageUrl && (
                <div className='relative w-full h-48'>
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    layout='fill'
                    objectFit='cover'
                    className='rounded-lg'
                  />
                </div>
              )}
              <div className='flex flex-col text-center justify-center items-center border-t-2 border-green-400 mt-2 pt-2'>
                <h2 className='text-xl font-semibold'>{product.title}</h2>
                <p className='text-lg font-medium'>{product.price}</p>
                <p className='text-sm text-gray-600'>{product.description}</p>
                <button
                  className='mt-2 bg-red-500 text-white py-1 px-3 rounded flex items-center'
                  onClick={() => removeFromCart(product._id)}
                >
                  <MdDelete className='mr-1' /> Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
