import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-size: 24px;
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

function Title({ text }) {
  return <StyledTitle>{text}</StyledTitle>;
}

export default Title;
