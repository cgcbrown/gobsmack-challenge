import styled, { keyframes } from "styled-components"

export const ShadowPulse = keyframes`
  0% {
    box-shadow: 0 0 0 0px rgb(215, 20, 64, 0.5);
  }
  100% {
    box-shadow: 0 0 0 20px rgb(215, 20, 64, 0);
  }
`

export const Button = styled.button`
  background-color: ${({theme}) => theme.colors.primary};
  color: white;
  border-radius: 100px;
  border: none;
  width: 100%;
  font-size: 1rem;
  padding: 1rem 0;
  font-weight: 400;
  letter-spacing: 0.05rem;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: center;
  cursor: pointer;

  @media ${({theme}) => theme.mediaQueries.tablet} {
    padding: 1rem 5rem;
    width: auto;
  }

  @media ${({theme}) => theme.mediaQueries.laptopL} {
    font-size: 1.3rem;
    padding: 1.2rem 7rem;
  }

  @media ${({theme}) => theme.mediaQueries.laptopXL} {
    font-size: 1.4rem;
    padding: 1.4rem 7.5rem;
  }

  &:hover {
    animation: 1200ms ${ShadowPulse} infinite;
  }
`

export const Section = styled.section`
  margin: 0 auto;
  padding: 3rem 2rem;
  width: 100%;
  box-sizing: border-box;

  @media ${({theme}) => theme.mediaQueries.laptop} {
    max-width: 1024px;
  }

  @media ${({theme}) => theme.mediaQueries.laptopL} {
    max-width: 1320px;
    padding: 5rem 2rem;
  }

  @media ${({theme}) => theme.mediaQueries.laptopXL} {
    max-width: 1400px;
  }
`