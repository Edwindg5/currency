import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #dfe3e8;
  border-radius: 5px;
  font-size: 16px;
`;

function NumberInput({ value, onChange, placeholder }) {
  return (
    <StyledInput
      type="number"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default NumberInput;
