import styled from "styled-components"

export const Button = styled.button`
  background-color: ${({theme}) => theme.colors.primary};
  color: white;
  border-radius: 100px;
  border: none;
  padding: 1rem 5rem;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.1rem;

  @media ${({theme}) => theme.mediaQueries.largest} {
    font-size: 1.5rem;
    padding: 1.5rem 7.5rem;
  }
`