"use client";
import Image from "next/image";
import Link from "next/link";

const Shop = () => {
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

  return (
    <div className="mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Official Club Store
        </h2>
        <p className="text-lg text-gray-600">
          Support your team with official merchandise
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <Link href={`/shop/${product.id}`} className="block">
              <div className="relative aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="hover:opacity-90 transition-opacity"
                />
                {product.sale && (
                  <div className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    SALE
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <div>
                    {product.sale ? (
                      <>
                        <span className="text-red-600 font-bold text-xl">
                          Birr {product.price}
                        </span>
                        <span className="ml-2 text-gray-400 line-through">
                          ${product.originalPrice}
                        </span>
                      </>
                    ) : (
                      <span className="text-gray-900 font-bold text-xl">
                        Birr {product.price}
                      </span>
                    )}
                  </div>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/shop"
          className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors"
        >
          View All Products
        </Link>
      </div>
    </div>
  );
};

export default Shop;
