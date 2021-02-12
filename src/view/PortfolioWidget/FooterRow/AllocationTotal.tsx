import styled from 'styled-components';
import { useAllocationTotal } from '../../../data/query/useAllocationTotal';

export const AllocationTotal = () => {
  const { data: total } = useAllocationTotal();

  return (
    <div>
      <h3>{`Total: ${total} `}</h3>
      <StyledErrorText>
        {total < 100 ? '(needs to add up to 100)' : ''}
      </StyledErrorText>
    </div>
  );
};

const StyledErrorText = styled.div`
  color: red;
`;
