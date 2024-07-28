import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #dfe3e8;
  border-radius: 5px;
  font-size: 16px;
`;

function CurrencySelect({ options, value, onChange }) {
  return (
    <StyledSelect value={value} onChange={onChange}>
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
}

export default CurrencySelect;
