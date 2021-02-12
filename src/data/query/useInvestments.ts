import { useStore } from '../StoreContext';

export const useInvestments = () => {
  const { store } = useStore();

  return { data: store.investments };
};
