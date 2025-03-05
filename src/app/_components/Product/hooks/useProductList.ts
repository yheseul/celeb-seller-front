"use client";

import { useEffect, useState } from "react";
import { IProduct } from "../types/product.types";

const useProductList = () => {
  const [products, setProducts] = useState<IProduct[] | []>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/getAllProducts`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return products;
};

export default useProductList;
