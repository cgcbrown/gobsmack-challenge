import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import WalletTarget from "../components/walletTarget"
import Arrow from "../assets/arrow.svg"

import { Button } from "../components/UI/index"

const WelcomePageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
`

const HeroImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  z-index: -10;

  @media ${({theme}) => theme.mediaQueries.laptopL} {
    transform: translateX(25%);
  }
`

const WelcomeMessage = styled.h4`
  text-transform: uppercase;
`

const HeroText = styled.h1`
  font-size: 2.5rem;
  margin-top: 0;

  @media ${({theme}) => theme.mediaQueries.tablet} {
    font-size: 4rem;
    max-width: 55%;
  }
`

const Section = styled.section`
  margin: 0 auto;
  padding: 4rem 2rem;
  width: 100%;
  max-width: 800px;

  @media ${({theme}) => theme.mediaQueries.tablet} {
    max-width: 720px;
  }

  @media ${({theme}) => theme.mediaQueries.laptop} {
    max-width: 960px;
  }

  @media ${({theme}) => theme.mediaQueries.laptopL} {
    max-width: 1320px;
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
    walletTarget: 300,
    walletValue: 100.1,
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
          <p>
            Shop for things you’d buy anyway with over 3,000 brands – online and in
            store – and watch the cash stack up in your wallet.
          </p>
          <Button>
            Activate now <Arrow />
          </Button>
        </Section>
        <WalletTarget current={walletData.walletValue} target={walletData.walletTarget} />
      </WelcomePageContainer>
    </Layout>
  )
}
