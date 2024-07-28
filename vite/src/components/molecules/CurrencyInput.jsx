import React from 'react';
import styled from 'styled-components';
import TextLabel from '../atoms/TextLabel';
import NumberInput from '../atoms/NumberInput';
import CurrencySelect from '../atoms/CurrencySelect';

const Container = styled.div`
  margin-bottom: 20px;
`;

function CurrencyInput({ label, value, onChangeValue, currency, onChangeCurrency, options }) {
  return (
    <Container>
      <TextLabel text={label} />
      <NumberInput value={value} onChange={onChangeValue} placeholder="Enter amount" />
      <CurrencySelect options={options} value={currency} onChange={onChangeCurrency} />
    </Container>
  );
}

export default CurrencyInput;
