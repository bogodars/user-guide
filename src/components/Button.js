import styled from 'styled-components';

const styles = `
    border-radius: 3px;
    color: white;
    border: 1px solid #00C58C;
    outline: none;
    padding: 12px 30px;
    margin-left: .25em;
    margin-right: .25em;
    cursor: pointer;
    &:hover {
        background-color: #00C58C;
    }
`;

const stylesBet = `
    border-radius: 3px;
    color: white;
    border: 1px solid #00C58C;
    outline: none;
    padding: 8px 33px;
    cursor: pointer;
     transition: 0.5s ease;

    }
`;

const Button = styled.button`
  ${styles};
`;

const StyledButton = styled(Button)`
  background-color: ${({ active }) => (active ? '#00C58C' : '#1a5858')};
`;

const ButtonBet = styled.button`
  ${stylesBet}
`;
const StyledButtonBet = styled(ButtonBet)`
  background-color: ${({ high }) => (high ? '#00C58C' : 'transparent')};
  color: ${({ high }) => (high ? '#fff' : '#FF2D4D')};
  border-color: ${({ high }) => (high ? '#00C58C' : '#FF2D4D')};
`;
export { StyledButton as Button, StyledButtonBet as ButtonBet };
