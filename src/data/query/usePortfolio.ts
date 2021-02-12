import { useStore } from '../StoreContext';

export const usePortfolio = () => {
  const { store } = useStore();

  return { data: store.portfolio };
};
