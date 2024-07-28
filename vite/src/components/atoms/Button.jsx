import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #5e9188;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #253342;
  }
`;

function Button({ onClick, children }) {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default Button;
