import React from 'react';
import styled from 'styled-components';

const SectionStyled = styled.section`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 2rem 0;
`;

const DivStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const ResultCard = styled.div`
    background-color: #fff;
    color: #333;
    padding: 1rem;
    margin: 0.5rem;
    border-radius: 8px;
`;

function ConversionResultsSection({ conversions }) {
    return (
        <DivStyled>
            <SectionStyled>
                {conversions.map((result, index) => (
                    <ResultCard key={index}>
                        {result}
                    </ResultCard>
                ))}
            </SectionStyled>
        </DivStyled>
    );
}

export default ConversionResultsSection;
