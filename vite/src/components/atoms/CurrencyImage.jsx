import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 5px;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }
`;

function CurrencyImage({ src, onClick }) {
    return <Image src={src} onClick={onClick} />;
}

export default CurrencyImage;
