import Image from "next/image";
import { IProduct } from "../types/product.types";
import formatTimeAgo from "@/commons/utils/formatTimeAgo";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { useState } from "react";
import axiosInstance from "@/api/axiosInstance";

const ProductCard = ({ imageUrl, name, price, createdAt, id }: IProduct) => {
  const [add, setAdd] = useState<boolean>(false);

  const addFavoriteItem = (productId: number, email: string) => {
    axiosInstance
      .post("/cart/insertAddFavoriteItem", {
        email: email,
        productId: productId,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  const fetchLoggedInUser = (productId?: number) => {
    if (!productId) return;

    axiosInstance
      .get("/getLoggedInUser")
      .then((response) => {
        if (response.data) {
          setAdd((prev) => !prev);
          addFavoriteItem(productId, response.data.email);
        } else {
          alert("로그인 후 이용해 주세요.");
        }
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  return (
    <div className="group">
      <div className="flexCol border border-gray-300 rounded-sm overflow-hidden cardHover">
        <div className="relative w-full aspect-square">
          <Image
            src={`/mock-images/${imageUrl}`}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-2">
          <div className="flex justify-between items-center">
            <div>{name}</div>
            {add ? (
              <HeartFilled onClick={() => fetchLoggedInUser(id)} />
            ) : (
              <HeartOutlined onClick={() => fetchLoggedInUser(id)} />
            )}
          </div>
          <div className="flex justify-between items-center">
            <div className="font-semibold">{price.toLocaleString()}원</div>
            <div className="text-gray-300 text-sm">
              {formatTimeAgo(createdAt)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
