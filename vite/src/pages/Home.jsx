import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CurrencySelection from '../components/molecules/CurrencySelection';
import ConversionResultsSection from '../components/molecules/ConversionResultsSection';
import FavoritesList from '../components/molecules/FavoriteList';
import CurrencyConverterHeader from '../components/atoms/CurrencyConverterHeader';
import styled from 'styled-components';

const MainContainer = styled.div`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
`;

function Home() {
    const [currencies, setCurrencies] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [conversions, setConversions] = useState([]);
    const [selectedCurrency, setSelectedCurrency] = useState(null);

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await axios.get('https://v6.exchangerate-api.com/v6/b1fcf452c960994d45fe103b/latest/USD');
                const conversionRates = response.data.conversion_rates;
                const currencyList = Object.keys(conversionRates).map(currency => ({
                    title: currency,
                    image: `https://mx.images.search.yahoo.com/images/view;_ylt=AwrFeDCuUGtmbIEdoYTF8Qt.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzY2NmMyNTgxOGY1OWQzNjMzMjUxNWQ0MGU4OTQzYzAyBGdwb3MDMzIEaXQDYmluZw--?back=https%3A%2F%2Fmx.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dmonedas%26type%3DE210MX714G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D32&w=890&h=440&imgurl=www.peru.travel%2FContenido%2FUploads%2F20-centimos_637775085323398163.jpg&rurl=https%3A%2F%2Fwww.peru.travel%2Fes%2Fmasperu%2Fconoce-la-historia-de-las-monedas-del-peru&size=79.0KB&p=monedas&oid=666c25818f59d36332515d40e8943c02&fr2=piv-web&fr=mcafee&tt=Conoce+la+historia+de+las+monedas+del+Per%C3%BA&b=0&ni=21&no=32&ts=&tab=organic&sigr=oLWFa2EsHIiZ&sigb=I8.Dznx.ARK_&sigi=xNiCqEZ96iUa&sigt=SCDksAmQoVr6&.crumb=U89jL6adFP8&fr=mcafee&fr2=piv-web&type=E210MX714G0${currency.toLowerCase()}.png`
                }));
                setCurrencies(currencyList);
            } catch (error) {
                console.error('Error fetching conversion rates:', error);
            }
        };

        fetchRates();
    }, []);

    const handleCurrencyClick = async (currency) => {
        setSelectedCurrency(currency);
        try {
            const response = await axios.get(`https://v6.exchangerate-api.com/v6/b1fcf452c960994d45fe103b/pair/USD/${currency}`);
            const rate = response.data.conversion_rate;
            setConversions(prevConversions => [...prevConversions, `1 USD = ${rate} ${currency}`]);
        } catch (error) {
            console.error('Error fetching conversion rate:', error);
        }
    };

    const toggleFavorite = (currency) => {
        const newFavorites = favorites.includes(currency)
            ? favorites.filter(fav => fav !== currency)
            : [...favorites, currency];
        setFavorites(newFavorites);
    };

    return (
        <MainContainer>
            <CurrencyConverterHeader />
            <CurrencySelection currencies={currencies} onCurrencyClick={handleCurrencyClick} />
            <FavoritesList favorites={favorites} onCurrencyClick={handleCurrencyClick} />
            <ConversionResultsSection conversions={conversions} />
        </MainContainer>
    );
}

export default Home;
