import { useCallback } from 'react';
import { useStore } from '../StoreContext';

export const useRemoveInvestmentFromPortfolio = ({
  investmentId,
}: {
  investmentId: number;
}) => {
  const { setStore, store } = useStore();

  const removeInvestmentFromPortfolio = useCallback(() => {
    setStore({
      ...store,
      portfolio: {
        ...store.portfolio,
        allocation: store.portfolio.allocation.filter(
          (item) => item.investment.id !== investmentId
        ),
      },
    });
  }, [store, setStore, investmentId]);

  return { removeInvestmentFromPortfolio };
};
