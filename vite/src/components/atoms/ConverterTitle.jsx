import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
    font-size: 2rem;
    color: #fff;
`;

function ConverterTitle({ children }) {
    return <Title>{children}</Title>;
}

export default ConverterTitle;
