import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
`;

function TextLabel({ text }) {
  return (
    <StyledLabel>{text}</StyledLabel>
  );
}

export default TextLabel;
