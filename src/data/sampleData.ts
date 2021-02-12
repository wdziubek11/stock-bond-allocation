import { InvestmentType } from './types.d';

const investments = [
  {
    id: 1,
    name: 'Fidelity International Index',
    assetClass: 'International Funds',
    allocation: [
      { type: InvestmentType.equity, percentage: 99 },
      { type: InvestmentType.bond, percentage: 1 },
    ],
  },
  {
    id: 2,
    name: 'Fidelity Small Cap Index',
    assetClass: 'Small Cap Funds',
    allocation: [
      { type: InvestmentType.equity, percentage: 99 },
      { type: InvestmentType.bond, percentage: 1 },
    ],
  },
  {
    id: 3,
    name: 'Fidelity Mid Cap Index',
    assetClass: 'Mid Cap Funds',
    allocation: [{ type: InvestmentType.equity, percentage: 100 }],
  },
  {
    id: 4,
    name: 'Fidelity 500 Index',
    assetClass: 'Large Cap Funds',
    allocation: [{ type: InvestmentType.equity, percentage: 100 }],
  },
  {
    id: 5,
    name: 'Fidelity US Bond Index',
    assetClass: 'International Funds',
    allocation: [
      { type: InvestmentType.equity, percentage: 1 },
      { type: InvestmentType.bond, percentage: 99 },
    ],
  },
];

export const sampleData = {
  investments: investments,
  portfolio: {
    name: 'My Portfolio',
    value: 10000,
    allocation: [
      {
        investment: investments[0],
        percentage: 15,
      },
      {
        investment: investments[1],
        percentage: 24,
      },
      {
        investment: investments[2],
        percentage: 21,
      },
      {
        investment: investments[3],
        percentage: 30,
      },
      {
        investment: investments[4],
        percentage: 10,
      },
    ],
  },
};
