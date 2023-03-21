import React, { Children } from "react";
import { useContext, createContext, useState } from "react";

const TabContext = createContext();

export default function TabProvider({ children }) {
  const [currentTab, setCurrentTab] = useState("home");

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
