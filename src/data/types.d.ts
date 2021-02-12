export enum InvestmentType {
  equity = 'equity',
  bond = 'bond',
}

export interface InvestmentTypeAllocation {
  type: InvestmentType;
  percentage: number;
}

export interface Investment {
  id: number;
  name: string;
  allocation: Array<InvestmentTypeAllocation>;
  assetClass: string;
}

export interface InvestmentAllocation {
  investment: Investment;
  percentage: number;
}

export interface Portfolio {
  name: string;
  allocation: Array<InvestmentAllocation>;
  value: number;
}
