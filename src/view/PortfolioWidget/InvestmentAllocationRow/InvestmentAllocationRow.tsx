import styled from 'styled-components';

import { InvestmentAllocation } from '../../../data/types';
import { StyledRow } from '../styledComponents';

import { InvestmentTypeAllocationWidget } from '../../../components/InvestmentTypeAllocationWidget';
import { AllocationSlider } from './AllocationSlider';
import { DeleteInvestment } from './DeleteInvestment';

interface InvestmentRowProps {
  investmentAllocation: InvestmentAllocation;
}

export const InvestmentAllocationRow = ({
  investmentAllocation,
}: InvestmentRowProps) => {
  const {
    investment: { id, name, assetClass, allocation: investmentTypeAllocation },
  } = investmentAllocation;

  return (
    <StyledInvestmentRow>
      <div>{name}</div>
      <InvestmentTypeAllocationWidget
        investmentTypeAllocation={investmentTypeAllocation}
      />
      <div>{assetClass}</div>
      <AllocationSlider investmentAllocation={investmentAllocation} />
      <DeleteInvestment investmentId={id} />
    </StyledInvestmentRow>
  );
};

const StyledInvestmentRow = styled(StyledRow)`
  padding-top: 1rem;
  & > .remove-button {
    opacity: 0;
    transition: opacity 0.2s ease;
  }
  :hover {
    .remove-button {
      opacity: 1;
    }
  }
`;
