import { useCallback } from 'react';
import { useStore } from '../StoreContext';
import { usePortfolio } from '../query/usePortfolio';
import { useAllocationTotal } from '../query/useAllocationTotal';
import { InvestmentAllocation } from '../types';

interface useAdjustAllocationParams {
  investmentId: number;
}

export const useAdjustAllocation = ({
  investmentId,
}: useAdjustAllocationParams) => {
  const { data: portfolio } = usePortfolio();
  const { setStore, store } = useStore();
  const { data: total } = useAllocationTotal();

  const isValidSelection = useCallback(
    (newValue: number, investmentAllocation: InvestmentAllocation) =>
      total - investmentAllocation.percentage + newValue <= 100,
    [total]
  );

  const adjustAllocation = useCallback(
    ({ newAllocationValue }) => {
      const index = portfolio.allocation.findIndex(
        (item) => item.investment.id === investmentId
      );
      const investmentAllocation = portfolio.allocation[index];

      // make sure it's a valid selection or revert to maximum value.
      const adjustedAllocationValue = isValidSelection(
        newAllocationValue,
        investmentAllocation
      )
        ? newAllocationValue
        : 100 - (total - investmentAllocation.percentage);

      const allocationCopy = [...portfolio.allocation];
      allocationCopy[index] = {
        ...allocationCopy[index],
        percentage: adjustedAllocationValue,
      };

      setStore({
        ...store,
        portfolio: {
          ...portfolio,
          allocation: allocationCopy,
        },
      });
    },
    [investmentId, setStore, store, portfolio, isValidSelection, total]
  );

  return { adjustAllocation };
};
