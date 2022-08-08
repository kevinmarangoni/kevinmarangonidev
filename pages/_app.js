import {createGlobalStyle} from "styled-components"
import React from 'react'
import Head from 'next/head'
import '../styles/global.css'

const GlobalStyle = createGlobalStyle`


* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 20px;
  font-family: 'Montserrat Alternates', sans-serif;
  color: #ffff;
  transition: all ease-in-out 0.2s;
  /* border: 1px dashed #fff; */
  width: 100%;
  @media (max-width: 1120px){
      text-align: center;
      align-items:center;
      justify-content: center;
    }
}

html, body {
/*   
  display: flex;
  justify-content:center;
  align-items: center;
  min-height: 100vh;
  min-width: 70%;
  max-height: fit-content;
  justify-content: center;
  align-items: center;

  background-color: hsla(240, 39%, 20%, 1);
  background-image:
    radial-gradient(at 99% 1%, hsla(281, 95%, 19%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 16%, hsla(281, 60%, 39%, 0.4) 0px, transparent 50%);

    @media (max-width: 1120px){
      
}
 */

  display: flex;
  height: fit-content;
  
  width: 100vw;

  background-color: hsla(240, 39%, 20%, 1);
  background-image:
  radial-gradient(at 99% 1%, hsla(281, 95%, 19%, 1) 0px, transparent 50%),
  radial-gradient(at 0% 16%, hsla(281, 60%, 39%, 0.4) 0px, transparent 50%);

  @media (max-width: 1120px){
      
    }
}
`

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Head>
      <title>Kevin Marangoni</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
  
  )
}

export default MyApp
