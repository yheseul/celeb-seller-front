"use client";

import ProductCard from "./ProductCard";
import useProductList from "../hooks/useProductList";
import { SkeletonCard } from "./Skeleton";

const ProductList = () => {
  const { products, loading, error } = useProductList();

  if (loading) {
    return (
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {new Array(8).fill(0).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }

  console.log(error);

  return (
    <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          imageUrl={product.imageUrl}
          name={product.name}
          price={product.price}
          key={product.id}
          createdAt={product.createdAt}
        />
      ))}
    </div>
  );
};

export default ProductList;
