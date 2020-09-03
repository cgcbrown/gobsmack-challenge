import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import {graphql} from "gatsby"
import WalletProgress from "../components/walletProgress"
import Arrow from "../assets/arrow.svg"

import { Button, Section } from "../components/UI/index"

const WelcomePageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100vw;
  min-height: 100vh;
  color: ${({theme}) => theme.colors.text};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${({theme}) => theme.mediaQueries.laptop} {
    max-height: 1200px;
  }
`

const HeroImage = styled.img`
  display: none;

  @media ${({theme}) => theme.mediaQueries.tablet} {
    display: block;
    transform: translateX(-30%);
    position: absolute;
    top: 0;
    left: 50%;
    height: 100%;
    z-index: -10;
  }

  @media ${({theme}) => theme.mediaQueries.laptop} {
    transform: translateX(-25%);
  }

  @media ${({theme}) => theme.mediaQueries.largest} {
    transform: translateX(-15%);
  }
`

const WelcomeMessage = styled.h4`
  text-transform: uppercase;
  margin-bottom: 1rem;

  @media ${({theme}) => theme.mediaQueries.tablet} {
    font-size: 1.2rem;
  }

  @media ${({theme}) => theme.mediaQueries.laptopL} {
    font-size: 1.5rem;
  }
`

const HeroText = styled.h1`
  font-size: 2.5rem;
  margin-top: 0;
  margin-bottom: 1rem;
  max-width: 100%;

  @media ${({theme}) => theme.mediaQueries.tablet} {
    font-size: 3rem;
    max-width: 60%;
  }

  @media ${({theme}) => theme.mediaQueries.laptop} {
    font-size: 3.5rem;
  }

  @media ${({theme}) => theme.mediaQueries.laptopL} {
    font-size: 4rem;
  }

  @media ${({theme}) => theme.mediaQueries.laptopXL} {
    font-size: 5rem;
    max-width: 70%;
    line-height: 72pt;
    margin-bottom: 2rem;
  }
`

const Paragraph = styled.section`
  line-height: 18pt;
  margin-bottom: 1.6rem;

  @media ${({theme}) => theme.mediaQueries.tablet} {
    max-width: 45%;
    font-size: 1.2rem;
  }

  @media ${({theme}) => theme.mediaQueries.laptopL} {
    line-height: 26pt;
    font-size: 1.5rem;
    margin-bottom: 2.5rem;
  }

  @media ${({theme}) => theme.mediaQueries.laptopXL} {
    margin-bottom: 3rem;
    max-width: 50%;
  }
`

const ArrowContainer = styled.section`
  margin: 0 0 -2px 8px;
  height: 0.8rem;
  width: 1rem;

  @media ${({theme}) => theme.mediaQueries.laptopL} {
    height: 1rem;
  }
`

const WalletProgressContainer = styled.div`
  height: 100px;
  padding-top: 4rem;

  @media ${({theme}) => theme.mediaQueries.tablet} {
    padding-top: 1rem;
  }

  @media ${({theme}) => theme.mediaQueries.laptopL} {
    height: 120px;
  }

  @media ${({theme}) => theme.mediaQueries.laptopXL} {
    height: 150px;
  }
`

interface Props {
  data: {
    userWallet: Wallet;
  }
}

interface Wallet {
  firstName: string
  walletTarget: number
  walletValue: number
}

export default function Home({data}: Props) {
  const [walletData, setWalletData] = useState<Wallet>({
    firstName: data.userWallet.firstName,
    walletTarget: data.userWallet.walletTarget,
    walletValue: data.userWallet.walletValue,
  })

  return (
    <Layout>
      <WelcomePageContainer>
        <HeroImage src="/images/header-image.png" />
        <Section>
          <WelcomeMessage>Welcome {walletData.firstName}</WelcomeMessage>
          <HeroText>More cash in your wallet from everyday shopping</HeroText>
          <Paragraph>
            Shop for things you’d buy anyway with over 3,000 brands – online and in
            store – and watch the cash stack up in your wallet.
          </Paragraph>
          <Button>
            Activate now
            <ArrowContainer>
              <Arrow width={'100%'} height={'100%'} />
            </ArrowContainer>
          </Button>
        </Section>
        <WalletProgressContainer>
          <WalletProgress current={walletData.walletValue} target={walletData.walletTarget} />
        </WalletProgressContainer>
      </WelcomePageContainer>
    </Layout>
  )
};

export const query = graphql`
  query MyQuery {
    userWallet {
      firstName
      walletTarget
      walletValue
    }
  }
`
