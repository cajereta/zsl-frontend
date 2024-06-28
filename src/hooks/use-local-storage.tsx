import { useEffect, useState } from "react";
import { TableData } from "../lib/utils";

const useLocalStorage: (
  key: string
) => [TableData[], (data: TableData) => void] = (key: string) => {
  const [storage, _setStorage] = useState([]);
  useEffect(() => {
    const handleStorage = () => {
      _setStorage(JSON.parse(localStorage.getItem(key) || "[]"));
    };

    // Call handleStorage immediately to fetch initial data
    handleStorage();

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);
  const setStorage = (data: TableData) => {
    const storage = JSON.parse(localStorage.getItem(key) || "[]");

    const itemToAdd = data;

    if (itemToAdd) {
      storage.unshift(itemToAdd);
    }

    localStorage.setItem(key, JSON.stringify(storage));
    window.dispatchEvent(new Event("storage"));
  };

  return [storage, setStorage];
};

export default useLocalStorage;
