import { createContext, useContext, useState } from 'react';

import { Portfolio, Investment } from './types.d';
import { sampleData } from './sampleData';

interface StoreInterface {
  portfolio: Portfolio;
  investments: Array<Investment>;
}

interface StoreContext {
  store: StoreInterface;
  setStore: React.Dispatch<React.SetStateAction<StoreInterface>>;
}

const Store = createContext<StoreContext>({
  store: sampleData,
  setStore: () =>
    console.warn('You need to enclose your application with StoreProvider'),
});

interface StoreProviderProps {
  children: React.ReactNode;
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const [store, setStore] = useState<StoreInterface>(sampleData);

  const value = {
    store,
    setStore,
  };

  return <Store.Provider value={value}>{children}</Store.Provider>;
};

export const useStore = () => useContext(Store);
