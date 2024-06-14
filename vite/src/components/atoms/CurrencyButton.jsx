import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background: url(${props => props.src}) no-repeat center/cover;
    border: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    cursor: pointer;
    margin: 5px;
    &:hover {
        transform: scale(1.1);
    }
`;

function CurrencyButton({ src, onClick }) {
    return <Button src={src} onClick={onClick} />;
}

export default CurrencyButton;
