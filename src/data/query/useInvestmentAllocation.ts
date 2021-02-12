import { useMemo } from 'react';
import { usePortfolio } from './usePortfolio';

interface useInvestmentAllocationParams {
  investmentId: number;
}

export const useInvestmentAllocation = ({
  investmentId,
}: useInvestmentAllocationParams) => {
  const { data: portfolio } = usePortfolio();

  const investmentAllocation = useMemo(
    () =>
      portfolio?.allocation.find((item) => item.investment.id === investmentId),
    [portfolio, investmentId]
  );

  return { data: investmentAllocation };
};
