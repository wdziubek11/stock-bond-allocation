import Button from '@material-ui/core/Button';
import { useRemoveInvestmentFromPortfolio } from '../../../data/mutations/useRemoveInvestmentFromPortfolio';

interface DeleteInvestmentProps {
  investmentId: number;
}

export const DeleteInvestment = ({ investmentId }: DeleteInvestmentProps) => {
  const { removeInvestmentFromPortfolio } = useRemoveInvestmentFromPortfolio({
    investmentId,
  });

  return (
    <div className="remove-button center">
      <Button
        color="secondary"
        variant="contained"
        onClick={removeInvestmentFromPortfolio}
      >
        x
      </Button>
    </div>
  );
};
