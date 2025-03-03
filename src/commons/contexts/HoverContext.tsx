"use client";
import { createContext, useContext, useState } from "react";
import { HoverContextType } from "../types/context.types";

const HoverContext = createContext<HoverContextType | null>(null);

export const HoverProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <HoverContext.Provider
      value={{ isHovering, handleMouseOver, handleMouseOut }}
    >
      {children}
    </HoverContext.Provider>
  );
};

export const useHoverContext = (): HoverContextType => {
  const context = useContext(HoverContext);

  if (!context) {
    throw new Error("Error");
  }

  return context;
};
