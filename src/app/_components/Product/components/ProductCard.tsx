"use client";

import Image from "next/image";
import { ProductCardProps } from "../types/product.types";

const ProductCard = ({ imageUrl, name, price }: ProductCardProps) => {
  return (
    <div className="flexCol border border-gray-300 rounded-sm overflow-hidden">
      <div className="relative w-full aspect-square">
        <Image
          src={`/mock-images/${imageUrl}`}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-2">
        <div>{name}</div>
        <div className="flex justify-between items-center">
          <div className="font-semibold">{price}원</div>
          <div className="text-gray-300 text-sm">1일 전</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
