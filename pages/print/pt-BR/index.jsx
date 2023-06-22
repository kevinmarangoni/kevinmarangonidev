import React from "react";
import styled from "styled-components";
import Head from "next/head";

import { ptBR as data } from "/pages/components/data.js";

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
              <Links>
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
              <Soft>
                    <h1>Softskills</h1>
                    {data.softskills.length > 0 ? (
                      data.softskills.map((item, index) => {
                        return (
                          <div key={index}>
                            <h2>
                              {item.name}
                            </h2>
                          </div>
                        );
                      })
                    ) : (
                      <p></p>
                    )}
                  </Soft>
            </Left>
            <Right>
              <div>
                <h1>Educação</h1>
                {data.education.length > 0 ? (
                  data.education.map((item, index) => {
                    return (
                      <div key={index}>
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
              </div>
              <div>
                <h1>Experiência Profissional</h1>
                {data.work.length > 0 ? (
                  data.work.map((item, index) => {
                    return (
                      <div key={index}>
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
              </div>
              <Skills>
                  <Hard>
                    <h1>Stacks</h1>
                    {data.stacks.length > 0 ? (
                      data.stacks.map((item, index) => {
                        return (
                          <div>
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
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;

const Content = styled.div`
  padding: 20px;
  * {
    border: 1px dashed red;
  }
`;

const Up = styled.div`

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
`;

const Left = styled.div`
  border-right: 1px solid #000;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Right = styled.div`
  
  h1 {
    font-size: 18px;
  }
`;

const Links = styled.div``;

const Info = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`;

const Skills = styled.div`
  display: flex;
`;

const Hard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  height: fit-content;
  div{
    width: 23%;
  }
  `;

const Soft = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  height: fit-content;
  div{
    width: 45%;
    height: 40px;
  }
`;
