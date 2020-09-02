import React from 'react';
import styled from "styled-components"
import Wallet from "../assets/wallet.svg";

const WalletTargetContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 100px;
  background-color: ${({theme}) => theme.colors.primary};
  color: white;
  text-align: center;
  height: 12rem;
  width: 12rem;
  font-size: 1rem;
`

const HighlightedNumber = styled.span`
  font-size: 3rem;
`

const Current = styled.p`
  margin: 0;
  color: white;
`

const Goal = styled.p`
  margin: 0;
  color: white;
`

interface Props {
  current: number,
  target: number
}

export default ({current, target}:Props) => {
  return (
    <WalletTargetContainer>
      <Wallet />
      <Current>
        <HighlightedNumber>£{current.toFixed(2).slice(0, -3)}</HighlightedNumber>
        {current.toFixed(2).slice(-3)}
      </Current>
      <Goal>Goal: £{target.toFixed(2)}</Goal>
    </WalletTargetContainer>
  )
}