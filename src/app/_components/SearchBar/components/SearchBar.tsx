"use client";

import { CloseCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { useState } from "react";

const SearchBar = () => {
  const [isSearchWord, setIsSearchWord] = useState("");

  return (
    <div className="relative w-80 md:w-96 order-2 lg:order-1">
      <input
        type="text"
        placeholder="상품명, 지역명, @상점명 입력"
        className="border-main border rounded-md p-2 w-full outline-none"
        value={isSearchWord}
        onChange={(event) => setIsSearchWord(event?.target.value)}
      />
      {isSearchWord && (
        <CloseCircleOutlined
          className="text-main absolute top-3 right-7"
          onClick={() => setIsSearchWord("")}
        />
      )}
      <SearchOutlined className="text-main absolute top-3 right-2" />
    </div>
  );
};

export default SearchBar;
