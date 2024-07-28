import React, { useState } from 'react';
import styled from 'styled-components';
import CurrencyInput from '../molecules/CurrencyInput';
import Button from '../atoms/Button';
import Swal from 'sweetalert2';
import Title from '../atoms/Title';
import TextLabel from '../atoms/TextLabel';
import CurrencySelect from '../atoms/CurrencySelect';

const apiKey = 'fca_live_sMkbTax7HjHL8qLNYE2V24wDDsD4rUmUAlqrvV4O';
const currencies = ['EUR', 'USD', 'CAD'];

const Container = styled.div`
  background-color: #f0f4f8;
  border: 1px solid #dfe3e8;
  border-radius: 10px;
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

function CurrencyConverter() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [error, setError] = useState(null);

  function handleConvert() {
    setError(null);

    fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}&currencies=${toCurrency}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Conversion request error');
        }
        return response.json();
      })
      .then(result => {
        const rate = result.data[toCurrency];
        const convertedAmount = (amount * rate).toFixed(2);
        showConversionAlert(amount, fromCurrency, convertedAmount, toCurrency);
      })
      .catch(error => {
        setError(error.message);
        showErrorAlert(error.message);
      });
  }

  function showConversionAlert(amount, fromCurrency, convertedAmount, toCurrency) {
    Swal.fire({
      title: 'Conversion Completed',
      html: `<p>${amount} ${fromCurrency} equals ${convertedAmount} ${toCurrency}</p>`,
      icon: 'success',
      timer: 4000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }

  function showErrorAlert(errorMessage) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: errorMessage,
    });
  }

  return (
    <Container>
      <Title text="Currency " />
      <Section>
        <CurrencyInput
          label="Amount"
          value={amount}
          onChangeValue={(e) => setAmount(e.target.value)}
          currency={fromCurrency}
          onChangeCurrency={(e) => setFromCurrency(e.target.value)}
          options={currencies}
        />
      </Section>
      <Section>
        <TextLabel text="Convert to:" />
        <CurrencySelect options={currencies} value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} />
      </Section>
      <Button onClick={handleConvert}>Convert</Button>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>Error: {error}</p>}
    </Container>
  );
}

export default CurrencyConverter;
