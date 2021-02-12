import { GlobalStyles } from './GlobalStyles';
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
import { StoreProvider } from './data/StoreContext';
import { PortfolioWidget } from './view/PortfolioWidget';
import { PortfolioOverview } from './view/PortfolioOverview';
import styled from 'styled-components';

function App() {
  return (
    <>
      <GlobalStyles />
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <StyledContainer className="App">
            <StoreProvider>
              <PortfolioOverview />
              <PortfolioWidget />
            </StoreProvider>
          </StyledContainer>
        </ThemeProvider>
      </StylesProvider>
    </>
  );
}

export default App;

const StyledContainer = styled.div`
  padding: 2rem;
  width: 75%;
  margin: auto;
`;
