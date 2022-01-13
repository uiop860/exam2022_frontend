import styled, { createGlobalStyle } from "styled-components";

export const BodyFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const GlobalStyle = createGlobalStyle`

:root {
  --fs-900: 9.375rem;
  --fs-800: 6.25rem;
  --fs-700: 3.5rem;
  --fs-600: 2rem;
  --fs-500: 1.75rem;
  --fs-400: 1.125rem;
  --fs-300: 1rem;
  --fs-200: 0.875rem;
  --primary-color: 0, 0%, 11%;
  --secondary-color: 196, 61%, 58%;
  --background-color: 0, 0%, 90%;
}
* {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    height: 100%; 
}
body {
  
  h1 {
    font-size: var(--fs-500);
    margin: 0;
    height: fit-content;
  }
  h3 {
    margin: 0;
    font-size: var(--fs-300);
    height: fit-content;
  }
  h4 {
    margin: 0;
    font-size: var(--fs-400);
    height: fit-content;
  }
  
  @media (min-width: 720px) {
    h1 {
      margin: 0;
      padding:0;
      font-size: var(--fs-700);
      height: fit-content;
    }
    h3 {
      margin: 0;
      padding: 0;
      font-size: var(--fs-500);
      height: fit-content;
    }
  }
  
  
  a {
  text-decoration: none;
  color:hsl(var(--secondary-color));
  padding: 0;
    
  }
  .active {
    color: hsl(var(--secondary-color));
  
  }
  ::-webkit-scrollbar {
    display: none;
  }
}`;
