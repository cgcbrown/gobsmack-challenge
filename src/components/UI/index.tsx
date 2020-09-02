import styled from "styled-components"

export const Button = styled.button`
  background-color: ${({theme}) => theme.colors.primary};
  color: white;
  border-radius: 100px;
  border: none;
  padding: 1rem 4rem;
  font-size: 1rem;
`