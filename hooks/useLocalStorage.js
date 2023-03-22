import { useEffect, useRef, useState } from "react";

export default function useLocalStorage(key, fallbackValue) {
  const initialRender = useRef(true);
  const [value, setValue] = useState(fallbackValue);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem(key))) {
      const stored = localStorage.getItem(key);
      setValue(stored ? JSON.parse(stored) : "home");
    }
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
