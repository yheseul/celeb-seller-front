"use client";

import ProductCard from "./ProductCard";
import useProductList from "../hooks/useProductList";

const ProductList = () => {
  const products = useProductList();

  return (
    <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product, _) => (
        <ProductCard
          imageUrl={product.imageUrl}
          name={product.name}
          price={product.price}
          key={product.id}
        />
      ))}
    </div>
  );
};

export default ProductList;
