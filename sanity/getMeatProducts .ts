import { createClient } from "next-sanity";
export const client = createClient({
    projectId: "yp7c97qd",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false,
  });
export async function getMeatProducts() {
  const query = `*[_type == "user" && category->title == "Meat"]{
    title,
    price,
    description,
    titleImage
  }`;
  const products = await client.fetch(query);
  return products;
}

export async function getFruitProducts() {
  const query = `*[_type == "user" && category->title == "Fruit"]{
    title,
    price,
    description,
    titleImage
  }`;
  const products = await client.fetch(query);
  return products;
}
