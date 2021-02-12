import styled from 'styled-components';

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  & > div {
    margin: 1.5rem 1rem;
    flex: 1;
    justify-content: flex-start;

    &.center {
      justify-content: center;
      text-align: center;
    }
  }
`;

export const StyledHeaderRow = styled(StyledRow)`
  font-weight: bold;
  border-bottom: 1px solid black;
`;
