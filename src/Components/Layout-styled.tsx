// @ts-ignore
import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

export const Wrapper = styled.div`
    display: grid;
    margin: 0;
    padding: 0;
    grid-template-columns: 20% 1fr 20%;
    grid-template-rows: 40px 1fr 1fr 200px;
    height: 100vh;
    @media (max-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 40px 1fr 1fr 30px 100px;
    }
`