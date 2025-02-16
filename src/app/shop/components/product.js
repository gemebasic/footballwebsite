"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

const ProductDetail = ({ product }) => {
  const router = useRouter();
  // const params = useParams();
  // const { id } = params;
  // const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="text-center py-20 text-2xl">Product not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative w-full h-96">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="rounded-lg shadow-md object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {product.name}
          </h1>
          <p className="text-xl text-gray-700 mb-4">
            {product.sale ? (
              <>
                <span className="text-red-600 font-bold text-2xl">
                  Birr {product.price}
                </span>
                <span className="ml-2 text-gray-400 line-through">
                  Birr {product.originalPrice}
                </span>
              </>
            ) : (
              <span className="text-gray-900 font-bold text-2xl">
                Birr {product.price}
              </span>
            )}
          </p>
          <button className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
