import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.jpg';

const HeaderStyled = styled.header`
    width: 100%;
    padding: 40px 100px;
    background-color: #6d727c;
    color: #121617;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    img {
        height: 50px;
    }

    h1 {
        font-size: 2rem;
        margin: 0;
    }
`;

function CurrencyConverterHeader() {
    return (
        <HeaderStyled>
            <img src={logo} alt="Currency Converter Logo" />
            <h1>Currency Converter</h1>
        </HeaderStyled>
    );
}

export default CurrencyConverterHeader;
