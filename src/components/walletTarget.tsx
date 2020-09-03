import React from 'react';
import styled from "styled-components"
import Wallet from "../assets/wallet.svg";

const WalletTargetContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 100px;
  background: ${({theme}) => theme.colors.primaryGradient};
  color: white;
  text-align: center;
  height: 11rem;
  width: 11rem;
  transform: scale(0.8);

  @media ${({theme}) => theme.mediaQueries.laptopL} {
    transform: scale(1);
  }

  @media ${({theme}) => theme.mediaQueries.largest} {
    transform: scale(1.2);
  }
`

const Current = styled.p`
  font-size: 40px;
  color: white;
  transform: translateY(10px);
  margin: 0;
`

const Decimals = styled.p`
  font-size: 20px;
  color: white;
  margin: 0;
  font-weight: 200;
`

const CurrentContainer = styled.div`
  display: inline-flex;
  align-items: flex-end;
  margin-bottom: 0.5rem;
`

const Goal = styled.p`
  margin: 0;
  font-size: 18px;
  color: white;
  font-weight: bold;
`

interface Props {
  current: number,
  target: number
}

export default ({current, target}:Props) => {
  return (
    <WalletTargetContainer>
      <Wallet width={50} height={40}  />
      <CurrentContainer>
        <Current>£{current.toFixed(2).slice(0, -3)}</Current>
        <Decimals>{current.toFixed(2).slice(-3)}</Decimals>
      </CurrentContainer>
      <Goal>Goal: £{target}</Goal>
    </WalletTargetContainer>
  )
}