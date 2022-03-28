import React from 'react';
import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [mode, setMode] = useState('dark');

  function toggleTheme() {
    setMode(mode === 'light' ? 'dark' : 'light');
  }

  const appState = {
    toggleTheme,
    mode,
  };
  return <AppContext.Provider value={appState}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
