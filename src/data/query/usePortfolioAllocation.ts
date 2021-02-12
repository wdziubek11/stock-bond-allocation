import { useMemo } from 'react';
import { InvestmentType } from '../types';
import { usePortfolio } from './usePortfolio';

type InvestmentKeyType = {
  [name in InvestmentType]: number;
};

export const usePortfolioAllocation = () => {
  const { data: portfolio } = usePortfolio();

  const portfolioAllocation = useMemo(() => {
    const overallAllocationMap = portfolio.allocation.reduce((acc, item) => {
      const investmentAllocationMap = item.investment.allocation.reduce(
        (investmentAllocationMap, investmentAllocation) => {
          investmentAllocationMap[investmentAllocation.type] =
            investmentAllocation.percentage;
          return investmentAllocationMap;
        },
        {} as InvestmentKeyType
      );

      for (let key in investmentAllocationMap) {
        const entityType = key as InvestmentType;
        const weightedValue =
          (investmentAllocationMap[entityType] * item.percentage) / 100;
        acc[entityType] =
          typeof acc[entityType] !== 'undefined'
            ? acc[entityType] + weightedValue
            : weightedValue;
      }
      return acc;
    }, {} as InvestmentKeyType);

    return Object.keys(overallAllocationMap).map((type) => ({
      type: type as InvestmentType,
      percentage: Math.round(
        overallAllocationMap[type as InvestmentType]
      ) as number,
    }));
  }, [portfolio.allocation]);

  return { data: portfolioAllocation };
};
