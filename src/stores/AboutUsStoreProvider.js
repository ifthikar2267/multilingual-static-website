"use client";

import * as React from "react";
import { createAboutUsStore } from "@/stores/aboutUsStore";

const AboutUsStoreContext = React.createContext(null);

export function AboutUsStoreProvider({ initialData, children }) {
  const storeRef = React.useRef(null);

  if (!storeRef.current) {
    storeRef.current = createAboutUsStore(initialData);
  }

  return (
    <AboutUsStoreContext.Provider value={storeRef.current}>
      {children}
    </AboutUsStoreContext.Provider>
  );
}

export function useAboutUsStore() {
  const store = React.useContext(AboutUsStoreContext);
  if (!store) {
    throw new Error("useAboutUsStore must be used within AboutUsStoreProvider");
  }
  return store;
}

