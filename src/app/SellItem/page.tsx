"use client";

import { ChangeEvent, useState } from "react";
import HorizontalDivider from "../_components/HorizontalDivider";
import ImageUpload from "../_components/SellItem/components/ImageUpload";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import { CATEGORY_MENU } from "@/commons/constants/layout.constants";
import Button from "../_components/Button/components/Button";
import axiosInstance from "@/api/axiosInstance";

const SellItem = () => {
  const [titleLength, setTitleLength] = useState(0);
  const [descriptionLength, setDescriptionLength] = useState(0);
  const [category, setCategory] = useState(false);
  const categoryMenu = Object.values(CATEGORY_MENU);
  const [formData, setFormData] = useState({
    name: "",
    imageUrl: "시나모롤.jpg",
    price: "",
    createdAt: "1709613113793",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    console.log(formData);
  };

  const handleCharacterLimit = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.target.id === "title") {
      if (event.target.value.length <= 40)
        setTitleLength(event.target.value.length);
    } else {
      if (event.target.value.length <= 2000)
        setDescriptionLength(event.target.value.length);
    }
  };

  const handelInsertProduct = () => {
    axiosInstance
      .post("/insertProduct", {
        name: formData.name,
        imageUrl: formData.imageUrl,
        price: formData.price,
        createdAt: formData.createdAt,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  return (
    <div className="flexCol gap-4 pb-4">
      <div className="flex justify-center text-xl font-normal text-main">
        판매 상품 등록
      </div>
      <div className="flexCol sm:flex-row">
        <p className="min-w-24 sm:min-w-32 pb-1 sm:py-2">제목</p>
        <div className="flex sm:w-1/2 min-w-80">
          <input
            id="name"
            type="text"
            placeholder="상품 제목을 입력해 주세요."
            className="border-gray-300 border p-2 w-full outline-none"
            maxLength={40}
            // 타이핑마다 호출됨 에바임
            onChange={(event) => {
              handleCharacterLimit(event);
              handleInputChange(event);
            }}
          />
          <p className="flexRowCenter w-10 ml-2 text-gray-400 font-thin text-sm">
            {titleLength}/40
          </p>
        </div>
      </div>
      <HorizontalDivider />
      <div className="flexCol sm:flex-row">
        <p className="min-w-24 sm:min-w-32 pb-1 sm:py-2">상품이미지</p>
        <div className="flex gap-2">
          <ImageUpload />
          <ImageUpload />
          <ImageUpload />
        </div>
      </div>
      <HorizontalDivider />
      <div className="flexRowCenter relative h-[42px]">
        <p className="min-w-24 sm:min-w-32">카테고리</p>
        <div className="flexCol relative">
          <button
            className={`flex justify-between gap-2 border ${
              category
                ? "border-b-white border-t-gray-300 border-x-gray-300"
                : " border-gray-300"
            } p-2 w-40`}
            onClick={() => setCategory((prev) => !prev)}
          >
            <p>카테고리 선택</p>
            {category ? <CaretUpOutlined /> : <CaretDownOutlined />}
          </button>
          {category && (
            <ul className="absolute top-full right-0 z-10 w-40 border-b border-x border-gray-300 bg-white h-64 overflow-y-auto no-scrollbar">
              {categoryMenu.map((menu, index) => (
                <li className="categoryItem cursor-pointer" key={index}>
                  {menu}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <HorizontalDivider />
      <div className="flex">
        <p className="min-w-24 sm:min-w-32 pb-1 sm:py-2">거래지역</p>
        <div className="flexCol gap-2 w-60 sm:min-w-72">
          <div className="flex gap-2">
            <Button id="basic">내 위치</Button>
            <Button id="basic">최근 지역</Button>
            <Button id="basic">주소 검색</Button>
          </div>
          <input
            type="text"
            className="border-gray-300 border p-2 w-full outline-none bg-gray-100"
            placeholder="주소를 검색해 주세요."
            disabled
          />
        </div>
      </div>
      <HorizontalDivider />
      <div className="flexRowCenter">
        <p className="min-w-24 sm:min-w-32">상태</p>
        <div className="flex min-w-48 gap-10">
          <label className="flex gap-2">
            <input type="radio" id="used" />
            중고상품
          </label>
          <label className="flex gap-2">
            <input type="radio" id="unused" />
            새상품
          </label>
        </div>
      </div>
      <HorizontalDivider />
      <div className="flexRowCenter">
        <p className="min-w-24 sm:min-w-32">교환</p>
        <div className="flex min-w-52 gap-10">
          <label className="flex gap-2">
            <input type="radio" id="unExchange" />
            교환불가
          </label>
          <label className="flex gap-2">
            <input type="radio" id="exchange" />
            교환가능
          </label>
        </div>
      </div>
      <HorizontalDivider />
      <div className="flex">
        <p className="min-w-24 sm:min-w-32 pb-1 sm:py-2">가격</p>
        <div className="flexCol min-w-52 gap-2">
          <div className="flex">
            <input
              id="price"
              type="number"
              placeholder="숫자만 입력해 주세요."
              className="border-gray-300 border p-2 w-full outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              onChange={handleInputChange}
            />
            <p className="flexRowCenter px-3">원</p>
          </div>
          <div className="flex gap-10">
            <label className="flex gap-2">
              <input type="radio" id="unExchange" />
              배송비 포함
            </label>
            <label className="flex gap-2">
              <input type="radio" id="exchange" />
              가격협의 가능
            </label>
          </div>
        </div>
      </div>
      <HorizontalDivider />
      <div className="flexCol sm:flex-row">
        <p className="min-w-24 sm:min-w-32 pb-1 sm:py-2">설명</p>
        <div className="flexCol sm:w-1/2 min-w-80 gap-1">
          <textarea
            id="description"
            placeholder="상품 설명을 입력해 주세요."
            className="outline-none border border-gray-300 p-2 h-40 resize-none overflow-y-auto no-scrollbar"
            onChange={handleCharacterLimit}
            maxLength={2000}
          ></textarea>
          <p className="flex justify-end text-gray-400 font-thin text-sm">
            {descriptionLength}/2000
          </p>
        </div>
      </div>
      <HorizontalDivider />
      <div className="flex">
        <p className="min-w-24 sm:min-w-32 py-2">수량</p>
        <div className="flex min-w-52">
          <input
            type="number"
            placeholder="숫자만 입력해 주세요."
            className="border-gray-300 border p-2 w-full outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
          <p className="flexRowCenter px-3">개</p>
        </div>
      </div>
      <div className="flex justify-center pt-4">
        <div className="flex gap-2 w-56">
          <Button id="basic">취소하기</Button>
          <Button id="default" onClick={handelInsertProduct}>
            등록하기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SellItem;
