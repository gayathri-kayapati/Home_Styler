import { createContext, useEffect, useState } from "react";

export const CategoriesData = createContext();

export default function CategoriesDataProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const getCategoriesData = async () => {
    try {
      const response = await fetch("/api/categories");
      const data = await response.json();
      setCategories(data.categories);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getCategoriesData();
  }, []);

  return (
    <div>
      <CategoriesData.Provider value={{ categories }}>
        {children}
      </CategoriesData.Provider>
    </div>
  );
}
