'use client'
import { createClient } from "next-sanity";

// Configure the Sanity client
export const client = createClient({
    projectId: "yp7c97qd",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false,
  });


// Fetch Meat Products
export async function getMeatProducts() {
  const query = `*[_type == "user" && category->title == "Meat"]{
    title,
    price,
    description,
    titleImage
  }`;
  return await client.fetch(query);
}

// Fetch Vegitables Products
export async function getVegitablesProducts() {
  const query = `*[_type == "user" && category->title == "Vegetables"]{
    title,
    price,
    description,
    titleImage
  }`;
  return await client.fetch(query);
}

// Fetch Seafood Products
export async function getSeafoodProducts() {
  const query = `*[_type == "user" && category->title == "Seafood"]{
    title,
    price,
    description,
    titleImage
  }`;
  return await client.fetch(query);
}

// Fetch Fruit Products
export async function getFruitProducts() {
  const query = `*[_type == "user" && category->title == "Fruit"]{
    title,
    price,
    description,
    titleImage
  }`;
  return await client.fetch(query);
}
