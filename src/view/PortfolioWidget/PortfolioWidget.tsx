import { usePortfolio } from '../../data/query/usePortfolio';
import styled from 'styled-components';

import { InvestmentAllocationRow } from './InvestmentAllocationRow';
import { StyledHeaderRow } from './styledComponents';
import { FooterRow } from './FooterRow';
import { AddInvestmentRow } from './AddInvestmentRow';

export const PortfolioWidget = () => {
  const { data: portfolio } = usePortfolio();

  return portfolio ? (
    <StyledContainer>
      <StyledHeaderRow>
        <div>INVESTMENT</div>
        <div className="center">MIX</div>
        <div>ASSET CLASS</div>
        <div className="center">ALLOCATION</div>
        <div />
      </StyledHeaderRow>
      {portfolio.allocation.map((investmentAllocation) => {
        return (
          <InvestmentAllocationRow
            key={investmentAllocation.investment.id}
            investmentAllocation={investmentAllocation}
          />
        );
      })}
      <AddInvestmentRow />
      <FooterRow />
    </StyledContainer>
  ) : null;
};

const StyledContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
