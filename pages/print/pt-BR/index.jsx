import React from "react";
import styled from "styled-components";
import Head from "next/head";

import { ptBR as data } from "/public/data.js";

const Index = () => {

  const makePoints = (max, skill) => {
    let string = ""
    
    for (let i = 0; i < max; i++) {
      if (i < skill) {
        string = string + "●"
      } else {
        string = string + "○"
      }
    }
  
    return string
  };

  return (
    <>
      <Head>
        <title>Curriculo {data.personal.name}</title>
      </Head>
      <Page>
        <Content>
          <Up>
            <h1>{data.personal.name}</h1>
            <h2>
              {data.personal.position} nível {data.personal.level}
            </h2>
            <h3> Pretensão Salárial:{data.personal.salary}</h3>
          </Up>
          <Down>
            <Left>
              <Contact>
              <h1>Contatos</h1>
              <div>
                <h2>Celular</h2>
                <p>{data.personal.contact.phone}</p>
              </div>
              <div>
                <h2>Whatsapp</h2>
                <p>{data.personal.contact.whatsapp}</p>
              </div>
              <div>
                <h2>Email</h2>
                <p>{data.personal.contact.email}</p>
              </div>
              </Contact>
              <Language>
              <h1>Línguas</h1>
                    {data.personal.language.length > 0 ? (
                      data.personal.language.map((item, index) => {
                        return (
                          <div key={index}>
                            <h2>
                              {item.name}
                            </h2>
                            <p>{ makePoints(5, item.skill) }</p>
                          </div>
                        );
                      })
                    ) : (
                      <p></p>
                    )}
              </Language>
              <Links>
              <h1>Links</h1>
                <div>
                  <h2>Github</h2>
                  <a href={data.personal.links.github}>{data.personal.links.github}</a>
                </div>
                <div>
                  <h2>Linkedin</h2>
                  <a href={data.personal.links.linkedin}>{data.personal.links.linkedin}</a>
                </div>
                <div>
                  <h2>Lattes</h2>
                  <a href={data.personal.links.lattes}>{data.personal.links.lattes}</a>
                </div>
                <div>
                  <h2>Instagram</h2>
                  <a href={data.personal.links.instagram}>{data.personal.links.instagram}</a>
                </div>
              </Links>
              <Info>
              <h1>Resumo</h1>
                <div>
                  <h2>Sobre mim</h2>
                  <p>{data.personal.info.about}</p>
                </div>
                <div>
                  <h2>Procuro por</h2>
                  <p>{data.personal.info.looking}</p>
                </div>
                <div>
                  <h2>Objetivos</h2>
                  <p>{data.personal.info.want}</p>
                </div>
              </Info>
            </Left>
            <Right>
              <Education>
                <h1>Educação</h1>
                {data.education.length > 0 ? (
                  data.education.map((item, index) => {
                    return (
                      <div key={index} style={{marginBottom: "10px"}}>
                        <h2>{item.instName}</h2>
                        <p>{item.type}</p>
                        <p>{item.title}</p>
                        <p>{item.outDate}</p>
                      </div>
                    );
                  })
                ) : (
                  <p>Sem educação</p>
                )}
              </Education>
              <Work>
                <h1>Experiência Profissional</h1>
                {data.work.length > 0 ? (
                  data.work.map((item, index) => {
                    return (
                      <div key={index} style={{marginBottom: "10px"}}>
                        <h2>
                          {item.companyName} - {item.description}
                        </h2>
                        <p>{item.howLong}</p>
                        <p>{item.position}</p>
                        <p>{item.act}</p>
                      </div>
                    );
                  })
                ) : (
                  <p>Em busca da primeira oportunidade</p>
                )}
              </Work>
              <Skills>
                <h1>Habilidades</h1>
                  <Hard>
                    <h1>Stacks</h1>
                    {data.stacks.length > 0 ? (
                      data.stacks.map((item, index) => {
                        return (
                          <div key={index}>
                            <h2>
                              {item.name}
                            </h2>
                            <p>{ makePoints(5, item.skill) }</p>
                          </div>
                        );
                      })
                    ) : (
                      <p></p>
                    )}
                  </Hard>
                  <Soft>
                    <h1>Softskills</h1>
                    {data.softskills.length > 0 ? (
                      data.softskills.map((item, index) => {
                        return (
                            <p key={index}>
                              {item.name}
                            </p>
                        );
                      })
                    ) : (
                      <p></p>
                    )}
                  </Soft>
              </Skills>
            </Right>
          </Down>
        </Content>
      </Page>
    </>
  );
};

export default Index;

const Page = styled.div`
  * {
    color: #000;
    font-family: Arial, sans-serif;
    font-size: 13px;
  }
  min-height: 100vh;
  margin: 20px;
  width: 100%;
  max-width: 210mm;
  margin: 0 auto;
  background-color: #fff;
  //box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  text-align: left;
`;

const Content = styled.div`
  padding: 5px;
  * {
    //border: 1px dashed red;
    text-align: left;
    justify-content: flex-start;
    align-items: flex-start;
    h1{
    font-size: 17px;
    }
  }
`;

const Up = styled.div`
display: flex;
flex-direction:column;
gap: 5px;
padding: 10px;

h1{
  font-size: 40px;
}
h2{
  font-size: 25px;
}
h3{
  font-size: 18px;
}
`;

const Down = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Left = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 10px;
  border-left: 1px solid #d3d3d3;
  h1 {
    margin-bottom: 5px;
    font-size: 17px;
  }
`;

const Education = styled.div`
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 5px;
`

const Work = styled.div`
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 5px;
`

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 5px;
  div{

  }
`

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 5px;
  div{

  }
`;

const Info = styled.div`
display: flex;
flex-direction: column;

gap: 10px;
border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 5px;
*{
  display: flex;
  flex-direction: column;
  gap: 5px;
}
`;

const Skills = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 5px;
  gap: 10px;
  h1{
    margin-bottom: 0;
  }
`;

const Hard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  height: fit-content;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 5px;
  h1{
    font-size: 15px;
  }
  div{
    width: 20%;
  }

  `;

const Soft = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  height: fit-content;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 5px;
  h1{
    font-size: 15px;
  }
  p{
    width: fit-content;
  }
`;

const Language = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  height: fit-content;
  padding-bottom: 10px;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 5px;
  div{
    width: 30%;
  }

  `;
