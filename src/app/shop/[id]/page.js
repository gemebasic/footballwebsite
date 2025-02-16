import React from "react";
import ProductDetail from "../components/product";

async function ProjectDetails({ params }) {
  const products = [
    {
      id: 1,
      name: "Home Jersey 2024",
      price: 49.99,
      image: "/jersey-home.jpg",
      sale: false,
    },
    {
      id: 2,
      name: "Away Jersey 2024",
      price: 49.99,
      image: "/jersey-away.jpg",
      sale: true,
      originalPrice: 59.99,
    },
    {
      id: 3,
      name: "Training Kit",
      price: 39.99,
      image: "/training-kit.jpg",
      sale: false,
    },
    {
      id: 4,
      name: "Scarf",
      price: 19.99,
      image: "/scarf.jpg",
      sale: true,
      originalPrice: 24.99,
    },
    {
      id: 5,
      name: "Stadium Jacket",
      price: 79.99,
      image: "/jacket.jpg",
      sale: false,
    },
    {
      id: 6,
      name: "Cap",
      price: 14.99,
      image: "/cap.jpg",
      sale: false,
    },
    {
      id: 7,
      name: "Water Bottle",
      price: 12.99,
      image: "/bottle.jpg",
      sale: true,
      originalPrice: 15.99,
    },
    {
      id: 8,
      name: "Keychain",
      price: 4.99,
      image: "/keychain.jpg",
      sale: false,
    },
  ];
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));
  console.log(product);

  return (
    <div>
      <ProductDetail product={product} />
    </div>
  );
}

export default ProjectDetails;
