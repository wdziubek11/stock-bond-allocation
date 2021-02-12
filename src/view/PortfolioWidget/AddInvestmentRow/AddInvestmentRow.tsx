import { useCallback, useState, useEffect } from 'react';
import { StyledRow } from '../styledComponents';
import Button from '@material-ui/core/Button';
import { useUnassignedInvestments } from '../../../data/query/useUnassignedInvestments';
import Select from '@material-ui/core/Select';
import { useAddInvestmentToPortfolio } from '../../../data/mutations/useAddInvestmentToPortfolio';
import MenuItem from '@material-ui/core/MenuItem';

export const AddInvestmentRow = () => {
  const { data: unassignedInvestments } = useUnassignedInvestments();
  const { addInvestmentToPortfolio } = useAddInvestmentToPortfolio();
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(false);
  }, [unassignedInvestments]);

  const handleOnAddInvestmentClick = useCallback(() => {
    setActive(true);
  }, []);

  const handleOnChange = useCallback(
    (e) => {
      const { value } = e.target;
      addInvestmentToPortfolio({ investmentId: value });
    },
    [addInvestmentToPortfolio]
  );

  return unassignedInvestments.length ? (
    <StyledRow>
      {active ? (
        <Select defaultValue="" onChange={handleOnChange}>
          <MenuItem value="">Please select investment</MenuItem>
          {unassignedInvestments.map(({ id, name }) => (
            <MenuItem key={id} value={id}>
              {name}
            </MenuItem>
          ))}
        </Select>
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={handleOnAddInvestmentClick}
        >
          + Add Investment
        </Button>
      )}
      <div />
      <div />
      <div />
      <div />
    </StyledRow>
  ) : null;
};
