import { useCallback } from 'react';
import { useStore } from '../StoreContext';

export const useAddInvestmentToPortfolio = () => {
  const { setStore, store } = useStore();

  const addInvestmentToPortfolio = useCallback(
    ({ investmentId }: { investmentId: number }) => {
      const newInvestment = store.investments.find(
        (investment) => investment.id === investmentId
      );

      if (newInvestment) {
        setStore({
          ...store,
          portfolio: {
            ...store.portfolio,
            allocation: [
              ...store.portfolio.allocation,
              {
                investment: newInvestment,
                percentage: 0,
              },
            ],
          },
        });
      }
    },
    [store, setStore]
  );

  return { addInvestmentToPortfolio };
};
