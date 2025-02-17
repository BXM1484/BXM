import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Refined Soyabean Oil - Solo",
    price: 100,
    image: "https://i.imgur.com/ofvBReo.jpg",
    stock: "In Stock",
  },
  {
    id: 2,
    name: "Refined Soyabean Oil - Combo",
    price: 195,
    image: "https://i.imgur.com/qiqFJeO.jpg",
    stock: "In Stock",
  }
];

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="p-4 min-h-screen text-black">
      <h1 className="text-3xl font-bold text-center mb-6">Bilasi Ram Mohanlal Jagetiya</h1>
      {!selectedProduct ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="p-4 bg-white shadow-lg rounded-lg text-black">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
              <div>
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-lg font-bold text-green-600">₹{product.price}</p>
                <p className="text-sm text-gray-600">{product.stock}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-10 p-4 bg-white shadow-lg rounded-lg text-black">
          <h2 className="text-2xl font-bold">Checkout</h2>
        </div>
      )}
    </div>
  );
}
