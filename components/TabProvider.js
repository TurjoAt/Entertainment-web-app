import React, { useState } from "react";
import { useContext, createContext } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useRouter } from "next/router";

const TabContext = createContext();
const LOCAL_STORAGE_KEY = "currentTabStorage";

export default function TabProvider({ children }) {
  // const fallbackValue = "loading";
  // const [currentTab, setCurrentTab] = useLocalStorage(
  //   LOCAL_STORAGE_KEY,
  //   fallbackValue
  // );
  // let stored;
  // if (typeof window !== "undefined") {
  //   // Perform localStorage action
  //   stored = localStorage.getItem(LOCAL_STORAGE_KEY);
  // }
  // console.log(stored);
  // // const stored !== "undefined" ? JSON.parse(stored) : fallbackValue
  // const [currentTab, setCurrentTab] = useState(() =>
  //   typeof stored === "undefined" ? fallbackValue : JSON.parse(stored)
  // );
  const router = useRouter();
  console.log(router.pathname);
  const [currentTab, setCurrentTab] = useState("home");

  // useEffect(() => {
  //   const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
  //   setCurrentTab(() =>
  //     typeof stored !== "undefined" ? JSON.parse(stored) : fallbackValue
  //   );
  // }, [fallbackValue]);

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(currentTab));
  // }, [currentTab]);

  return (
    <TabContext.Provider
      value={{
        currentTab,
        handleCurrentTab: (value) => setCurrentTab(value),
      }}
    >
      {children}
    </TabContext.Provider>
  );
}

export const useApp = () => useContext(TabContext);
