import React from "react"
import styled from "styled-components"
import WalletTarget from "./walletTarget"

const WalletTargetContainer = styled.div`
  height: fit-content;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
`

const ProgressBar = styled.div<{progress: number, barWidth: number}>`
  position: relative;
  height: 100%;
  background-color: #D5D6D8;
  display: flex;
  justify-content: center;
  border-bottom: 0;
  box-sizing: border-box;
  border-radius: 50%/100% 100% 0 0;
  transform: scale(1.05);
  overflow: hidden;

  &:after {
    content: "";
    z-index: 1;
    position: absolute;
    top: ${({barWidth}) => barWidth}px;
    height: 100%;
    background-color: white;
    right: 0;
    left: 0;
    border-bottom: 0;
    box-sizing: border-box;
    border-radius: 50%/100% 100% 0 0;
  }

  &:before {
    content: "";
    z-index: 1;
    background-color: ${({theme}) => theme.colors.green};
    height: 100%;
    width: ${({progress}) => progress}%;
    position: absolute;
    left: 0;
  }
`

const WalletProgress = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -5;
  height: 100%;
` 

interface Props {
  current: number,
  target: number
}

export default ({current, target}:Props) => {
  const progressPercentage = (current / target) * 100;

  return (
    <WalletProgress>
      <WalletTargetContainer>
        <WalletTarget current={current} target={target} />
      </WalletTargetContainer>
      <ProgressBar progress={progressPercentage} barWidth={15} />
    </WalletProgress>
  )
}