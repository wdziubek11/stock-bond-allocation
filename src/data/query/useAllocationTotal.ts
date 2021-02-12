import { useMemo } from 'react';
import { usePortfolio } from './usePortfolio';

export const useAllocationTotal = () => {
  const { data: portfolio } = usePortfolio();

  const total = useMemo(() => {
    return portfolio.allocation.reduce((acc, item) => acc + item.percentage, 0);
  }, [portfolio]);

  return { data: total };
};
