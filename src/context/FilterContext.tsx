"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Dispatch, SetStateAction } from "react";

type Size = "XS" | "S" | "M" | "L" | "XL" | "XXL";

interface FilterContextType {
  selectedCategory: string | null;
  setSelectedCategory: (val: string | null) => void;

  selectedSubCategory: string | null;
  setSelectedSubCategory: (val: string | null) => void;

  selectedPrices: string[];
  setSelectedPrices: Dispatch<SetStateAction<string[]>>;

  selectedSizes: string[];
  setSelectedSizes: Dispatch<SetStateAction<string[]>>;
}

const FilterContext = createContext<FilterContextType | null>(null);

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) throw new Error("useFilter must be used inside FilterProvider");
  return context;
};

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  return (
    <FilterContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        selectedSubCategory,
        setSelectedSubCategory,
        selectedPrices,
        setSelectedPrices,
        selectedSizes,
        setSelectedSizes,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};