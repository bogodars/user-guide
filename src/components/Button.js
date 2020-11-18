import styled from 'styled-components';

const stylesDefault = `
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

const stylesButtonHelper = `
padding: 10px 18px;
border-radius: 4px;
color:  #1E243A;
border: none;
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
text-transform: uppercase;
`;

const ButtonHelper = styled.button`
  ${stylesButtonHelper};
`;

const Button = styled.button`
  ${stylesDefault};
`;

const StyledButtonHelper = styled(ButtonHelper)`
  background-color: ${({ prev }) => (prev ? '#CBD1E6' : '#FED248')};
`;

const StyledButton = styled(Button)`
  background-color: ${({ active }) => (active ? '#00C58C' : '#1a5858')};
`;

const ButtonBet = styled.button`
  ${stylesBet};
`;

const StyledButtonBet = styled(ButtonBet)`
  background-color: ${({ high }) => (high ? '#00C58C' : 'transparent')};
  color: ${({ high }) => (high ? '#fff' : '#FF2D4D')};
  border-color: ${({ high }) => (high ? '#00C58C' : '#FF2D4D')};
`;

export { StyledButton as Button };
export { StyledButtonBet as ButtonBet };
export { StyledButtonHelper as ButtonHelper };
