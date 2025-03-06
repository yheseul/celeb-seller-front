"use client";

import { useEffect, useState } from "react";
import { IProduct } from "../types/product.types";
import axiosInstance from "@/api/axiosInstance";

const useProductList = () => {
  const [products, setProducts] = useState<IProduct[] | []>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axiosInstance
      .get("/getAllProducts")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("데이터를 가져오는 데 문제가 발생했습니다.");
        setLoading(false);
        throw new Error(err);
      });
  }, []);

  return { products, loading, error };
};

export default useProductList;
