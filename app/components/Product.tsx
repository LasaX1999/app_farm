import { useEffect, useState } from "react";
import { getProductsByCategory } from "@/sanity/get"; // Import the fetch function
import Image from "next/image";

export default function ProductsPage({ categoryId }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const productsData = await getProductsByCategory(categoryId);
      setProducts(productsData);
    }

    fetchProducts();
  }, [categoryId]);

  return (
    <div>
      <h1>Products in Category</h1>
      <ul>
        {products.map((product) => (
          <li key={product.title}>
            <h2>{product.title}</h2>
            <Image
                  src={user.imageUrl}
                  alt={user.title}
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg duration-300 transition-all hover:scale-105'
                />
            <p>Price: {product.price}</p>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
