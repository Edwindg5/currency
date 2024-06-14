import React from 'react';
import styled from 'styled-components';
import CurrencyImage from '../atoms/CurrencyImage';

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    background-color: #333;
    border-radius: 8px;
    margin-top: 1rem;
`;

const Title = styled.h3`
    color: #fff;
    margin-bottom: 1rem;
`;

const FavoritesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

function FavoritesList({ favorites, onCurrencyClick }) {
    return (
        <ListContainer>
            <Title>Favoritos</Title>
            <FavoritesContainer>
                {favorites.map((currency, index) => (
                    <CurrencyImage
                        key={index}
                        src={currency.image}
                        onClick={() => onCurrencyClick(currency.title)}
                    />
                ))}
            </FavoritesContainer>
        </ListContainer>
    );
}

export default FavoritesList;
