import { useCallback, useMemo } from 'react';
import { InvestmentTypeAllocation, InvestmentType } from '../data/types.d';
import styled from 'styled-components';

interface InvestmentTypeAllocationWidgetProps {
  investmentTypeAllocation: Array<InvestmentTypeAllocation>;
  variant?: 'large' | 'small';
}

export const InvestmentTypeAllocationWidget = ({
  investmentTypeAllocation,
  variant,
}: InvestmentTypeAllocationWidgetProps) => {
  const hasOneType = useMemo(() => investmentTypeAllocation.length === 1, [
    investmentTypeAllocation,
  ]);

  const hasTwoTypes = useMemo(() => investmentTypeAllocation.length === 2, [
    investmentTypeAllocation,
  ]);

  const getColor = useCallback(
    (type) =>
      type === InvestmentType.equity ? 'dodgerblue' : 'mediumseagreen',
    []
  );

  return (
    <StyledContainer className="center">
      <StyledInnerContainer>
        {hasTwoTypes ? (
          <StyledText
            variant={variant}
            color={getColor(investmentTypeAllocation[0].type)}
          >
            {investmentTypeAllocation[0].percentage}
          </StyledText>
        ) : (
          <StyledText />
        )}
        <StyledIndicatorContainer variant={variant}>
          {investmentTypeAllocation.map((allocation) => (
            <StyledIndicator
              key={allocation.type}
              width={`${allocation.percentage}%`}
              color={getColor(allocation.type)}
            >
              {hasOneType && <span>{allocation.percentage}</span>}
            </StyledIndicator>
          ))}
        </StyledIndicatorContainer>
        {hasTwoTypes ? (
          <StyledText
            variant={variant}
            color={getColor(investmentTypeAllocation[1].type)}
          >
            {investmentTypeAllocation[1].percentage}
          </StyledText>
        ) : (
          <StyledText />
        )}
      </StyledInnerContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StyledInnerContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

interface StyledIndicatorContainerProps {
  variant?: InvestmentTypeAllocationWidgetProps['variant'];
}

const StyledIndicatorContainer = styled.div<StyledIndicatorContainerProps>`
  width: ${({ variant }) => (variant === 'large' ? '40rem' : '4rem')};
  height: ${({ variant }) => (variant === 'large' ? '4rem' : '1.25rem')};
  display: flex;
  flex-direction: row;
  background: lightgray;
`;

interface StyledIndicatorProps {
  width: string;
}

const StyledIndicator = styled.div<StyledIndicatorProps>`
  width: ${({ width }) => `${width}`};
  height: 100%;
  background-color: ${({ color }) => color};
  overflow: hidden;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
`;

interface StyledTextProps {
  variant?: InvestmentTypeAllocationWidgetProps['variant'];
  color?: string;
}

const StyledText = styled.span<StyledTextProps>`
  font-size: ${({ variant }) => (variant === 'large' ? '1.5rem' : '0.8rem')};
  width: ${({ variant }) => (variant === 'large' ? '3rem' : '1.5rem')};
  text-align: center;
  color: ${({ color }) => color};
  font-weight: bold;
`;
