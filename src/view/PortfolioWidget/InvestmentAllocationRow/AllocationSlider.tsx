import { useState, useEffect } from 'react';
import Slider from '@material-ui/core/Slider';
import styled from 'styled-components';
import { InvestmentAllocation } from '../../../data/types';

import { useAdjustAllocation } from '../../../data/mutations/useAdjustAllocation';
import { useCallback } from 'react';
import { useAllocationTotal } from '../../../data/query/useAllocationTotal';

interface AllocationSliderProps {
  investmentAllocation: InvestmentAllocation;
}

export const AllocationSlider = ({
  investmentAllocation,
}: AllocationSliderProps) => {
  const { data: total } = useAllocationTotal();
  const { adjustAllocation } = useAdjustAllocation({
    investmentId: investmentAllocation.investment.id,
  });

  const [value, setValue] = useState(investmentAllocation.percentage);

  useEffect(() => {
    setValue(investmentAllocation.percentage);
  }, [investmentAllocation.percentage]);

  const handleOnChange = useCallback(
    (_e, newValue) => {
      adjustAllocation({
        newAllocationValue: newValue,
      });
    },
    [adjustAllocation]
  );

  return (
    <StyledContainer>
      <Slider
        color={total < 100 ? 'secondary' : 'primary'}
        value={value}
        valueLabelDisplay="on"
        onChange={handleOnChange}
      />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 5rem;
`;
