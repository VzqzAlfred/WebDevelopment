import React from 'react';
import styled, {css, keyframes, ThemeProvider, createGlobalStyle} from 'styled-components';

export default function StyledComponents(){

     let mainColor = "#db7093",
          mainAlphaColor80 = "#db709380";

     const setTransitionTime = (time) => `all ${time} ease-in-out`;

     const fadeIn = keyframes`
          0%{
               opacity: 0;
          }
          100%{
               opacity: 1;
          }
     `;

     const MyH3 = styled.h3`
          padding: 2rem;
          text-align: center;
          color: ${({color}) => color};
          color: ${({color}) => color || "#000"}; 
          background-color: ${mainColor};
          transition: ${setTransitionTime("1s")};
          animation: ${fadeIn} 6s ease-out;


          ${({isButton}) => isButton && css`
               margin: auto;
               max-width: 50%;
               border-radius: 0%.25rem;
               cursor: pointer;
          `}

          &:hover{
               background-color: ${mainAlphaColor80};
          }
     `;

     const light = {
          color: "#222",
          bgColor: "#DDD"
     }

     const dark = {
          color: "#DDD",
          bgColor: "#222"
     }

     const Box = styled.div`
          padding: 1rem;
          margin: 1rem;
          color: ${({theme}) => theme.color};
          background-color: ${({theme}) => theme.bgColor};
     `;

     const BoxRounded = styled(Box)`
          border-radius: 1rem;
     `;

     const GlobalStyle = createGlobalStyle`
          h1{
               padding: 2rem;
               background-color: #fff;
               color: #61dafb;
               text-transform: uppercase;
          }
     `;

     return(
          <>
          <GlobalStyle />

               <MyH3>Hi, I'm a h3 styled with styled-components</MyH3>

               <MyH3 color="#61dafb">Hi, I'm a h3 styled with styled-components</MyH3>

               <MyH3 isButton>I'm a h3 styled as button</MyH3>

               <ThemeProvider theme={light}>
                    <Box>I'm a box light</Box>
                    <BoxRounded>I'm a box rounded light</BoxRounded>
               </ThemeProvider>

               <ThemeProvider theme={dark}>
                    <Box>I'm a box dark</Box>
                    <BoxRounded>I'm a box rounded dark</BoxRounded>
               </ThemeProvider>
          </>
     );
}