"use client";

import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="flexCol border border-gray-300 rounded-sm">
      <Image src="/imgs/product.png" alt="#" width={350} height={350} />
      <div className="p-2">
        <div>춘식이</div>
        <div className="flex justify-between items-center">
          <div className="font-semibold">33,000원</div>
          <div className="text-gray-300 text-sm">1일 전</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
