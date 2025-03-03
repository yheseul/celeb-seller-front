import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
      {Array.from(Array(4)).map((_, i) => (
        <>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </>
      ))}
    </div>
  );
};

export default ProductList;
