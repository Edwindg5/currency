import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
    font-size: 1rem;
    color: #fff;
`;

function ConverterParagraph({ children }) {
    return <Paragraph>{children}</Paragraph>;
}

export default ConverterParagraph;
