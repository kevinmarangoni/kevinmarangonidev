import React from "react";
import styled from "styled-components";
import Head from 'next/head'

const Index = () => {
  return (
    <>
    <Head>
        <title>Curriculo pt-BR</title>
    </Head>
    <Page>
      <Content>
        <Up>
            Kevin Pereira Marangoni
        </Up>
        <Down>
            <Left>coisas</Left>
            <Right>mais coisas</Right>
        </Down>
      </Content>
    </Page>
    </>
  );
};

export default Index;

const Page = styled.div`
  *{
    color: #000;
    font-family: Arial, sans-serif;
  }
    height: 100vh;
    margin: 20px;
    width: 100%;
  max-width: 210mm;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`;

const Content = styled.div`
  padding: 20px;
  *{
    border: 1px dashed red;
  }

`;

const Up = styled.div`

`

const Down = styled.div`
  display: flex;
`

const Left = styled.div`
    border-right: 1px solid #000;
    width: 400px;
`;

const Right = styled.div`
`;
