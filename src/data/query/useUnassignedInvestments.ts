import { useMemo } from 'react';
import { useInvestments } from './useInvestments';
import { usePortfolio } from './usePortfolio';

export const useUnassignedInvestments = () => {
  const { data: portfolio } = usePortfolio();
  const { data: investments } = useInvestments();

  const usedInvestmentIds = useMemo(
    () => portfolio.allocation.map((item) => item.investment.id),
    [portfolio.allocation]
  );

  const unassignedInvestments = useMemo(
    () =>
      investments.filter(
        (investment) => !usedInvestmentIds.includes(investment.id)
      ),
    [investments, usedInvestmentIds]
  );

  return { data: unassignedInvestments };
};
