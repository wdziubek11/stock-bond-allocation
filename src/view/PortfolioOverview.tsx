import { usePortfolio } from '../data/query/usePortfolio';
import styled from 'styled-components';
import { usePortfolioAllocation } from '../data/query/usePortfolioAllocation';
import { InvestmentTypeAllocationWidget } from '../components/InvestmentTypeAllocationWidget';

export const PortfolioOverview = () => {
  const { data: portfolio } = usePortfolio();
  const { data: investmentTypeAllocation } = usePortfolioAllocation();

  return (
    <>
      <h2>{portfolio.name}</h2>
      <StyledContainer>
        <StyledEquity>Equities</StyledEquity>
        <InvestmentTypeAllocationWidget
          variant="large"
          investmentTypeAllocation={investmentTypeAllocation}
        />
        <StyledBondLabel>Bonds</StyledBondLabel>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  height: 3rem;
  max-width: 50rem;
  margin: 2rem auto;
`;

const StyleText = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

const StyledEquity = styled(StyleText)`
  color: dodgerblue;
`;

const StyledBondLabel = styled(StyleText)`
  color: mediumseagreen;
`;
