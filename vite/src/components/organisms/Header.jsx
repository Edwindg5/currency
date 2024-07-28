import React from 'react';
import styled from 'styled-components';
import Title from '../atoms/Title';

const HeaderStyled = styled.header`
  width: 100%;
  height: 30vh;
  background-color: #5e9188;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Header() {
  return (
    <HeaderStyled>
      <Title text="Convercion de Moneda" />
    </HeaderStyled>
  );
}

export default Header;
