import React from 'react';
import styled from 'styled-components';
import CurrencyButton from '../atoms/CurrencyButton';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

function CurrencySelection({ currencies, onCurrencyClick }) {
    return (
        <Container>
            {currencies.map((currency, index) => (
                <CurrencyButton
                    key={index}
                    src={currency.image}
                    onClick={() => onCurrencyClick(currency.title)}
                />
            ))}
        </Container>
    );
}

export default CurrencySelection;
