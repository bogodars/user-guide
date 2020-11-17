import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import { ButtonHelper } from '../../components/Button';

function Close({ className, onClick, ariaLabel }) {
  return (
    <ButtonHelper
      className={className}
      onClick={onClick}
      aria-label={ariaLabel}>
      Skip
    </ButtonHelper>
  );
}

const StyledClose = styled(Close)`
  position: absolute;
  left: 10px;
  bottom: 14px;
  padding: 10px 18px;
  border-radius: 4px;
  color: #cbd1e6;
  background-color: #53576c;
  border: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
`;

const ButtonHelper = styled.button`
  ${StyledClose};
`;

Close.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string,
};

export default StyledClose;
