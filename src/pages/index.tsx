import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import WalletProgress from "../components/walletProgress"
import Arrow from "../assets/arrow.svg"

import { Button } from "../components/UI/index"

const WelcomePageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100vw;
  min-height: 100vh;
  color: ${({theme}) => theme.colors.text};
  @media ${({theme}) => theme.mediaQueries.laptopL} {
    max-height: 1200px;
  }
`

const HeroImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  z-index: -10;

  @media ${({theme}) => theme.mediaQueries.laptopL} {
    transform: translateX(25%);
  }

  @media ${({theme}) => theme.mediaQueries.largest} {
    transform: translateX(10%);
  }
`

const WelcomeMessage = styled.h4`
  text-transform: uppercase;
  @media ${({theme}) => theme.mediaQueries.largest} {
    margin-bottom: 1rem;
    font-size: 1.6rem;
  }
`

const HeroText = styled.h1`
  font-size: 2.5rem;
  margin-top: 0;
  margin-bottom: 1.6rem;
  line-height: 72pt;

  @media ${({theme}) => theme.mediaQueries.tablet} {

  }

  @media ${({theme}) => theme.mediaQueries.laptopL} {
    font-size: 5.5rem;
    max-width: 70%;
    margin-bottom: 2rem;
  }
`

const Section = styled.section`
  margin: 0 auto;
  padding: 4rem 2rem;
  width: 100%;
  max-width: 800px;
  z-index: 10;

  @media ${({theme}) => theme.mediaQueries.tablet} {
    max-width: 720px;
  }

  @media ${({theme}) => theme.mediaQueries.laptop} {
    max-width: 960px;
  }

  @media ${({theme}) => theme.mediaQueries.laptopL} {
    max-width: 1320px;
    padding: 7rem 2rem;
  }

  @media ${({theme}) => theme.mediaQueries.largest} {
    max-width: 1400px;
    padding: 7rem 2rem;
  }
`

const Paragraph = styled.section`
  line-height: 26pt;
  margin-bottom: 1.6rem;

  @media ${({theme}) => theme.mediaQueries.laptopL} {
    max-width: 42%;
    font-size: 1.2rem;
  }

  @media ${({theme}) => theme.mediaQueries.largest} {
    max-width: 50%;
    font-size: 1.5rem;
    margin-bottom: 2.5rem;
  }
`

const WalletProgressContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120px;

  @media ${({theme}) => theme.mediaQueries.largest} {
    height: 150px;
  }
`

interface Props {}

interface Wallet {
  firstName: string
  walletTarget: number
  walletValue: number
}

export default function Home({}: Props) {
  const [walletData, setWalletData] = useState<Wallet>({
    firstName: "Heather",
    walletTarget: 500,
    walletValue: 400,
  })

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    // fetch("http://buildingbrands.co/react-test/wallet.json")
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error("Network response was not ok")
    //     }
    //     return response.json()
    //   })
    //   .then(json => {
    //     setWalletData(json)
    //   })
    //   .catch(error => {
    //     console.error(
    //       "There has been a problem with your fetch operation:",
    //       error
    //     )
    //   })
  }

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
            Activate now <Arrow width={12} height={18} style={{margin: '0 0 -1px 4px'}} />
          </Button>
        </Section>
        <WalletProgressContainer>
          <WalletProgress current={walletData.walletValue} target={walletData.walletTarget} />
        </WalletProgressContainer>
      </WelcomePageContainer>
    </Layout>
  )
}
