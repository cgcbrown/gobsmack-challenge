import styled from "styled-components"

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
`