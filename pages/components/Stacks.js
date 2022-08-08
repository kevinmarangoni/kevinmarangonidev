import React from 'react'
import Image from 'next/image'

import styled from 'styled-components'
import CodeIcon from '@mui/icons-material/Code';


import html from "./assets/img/t/html.png";
import css from "./assets/img/t/css.png";
import js from "./assets/img/t/js.png";
import next from "./assets/img/t/next2.png";
import react from "./assets/img/t/React2.png";
import node from "./assets/img/t/node.png";
import ts from "./assets/img/t/ts.png";
import sc from "./assets/img/t/styled.png";
import docker from "./assets/img/t/docker.png";
import actions from "./assets/img/t/actions.png";
import motion from "./assets/img/t/framer-motion.png";
import mui from "./assets/img/t/mui.png"
import rest from "./assets/img/t/rest.png"
import velo from "./assets/img/t/velo.png"

const stacksList = [
    { logo: html, name: "HTML5" },
    { logo: css, name: "CSS3" },
    { logo: js, name: "Javascript" },
    { logo: ts, name: "Typescript" },
    { logo: next, name: "NextJS" },
    { logo: react, name: "ReactJS" },
    { logo: node, name: "NodeJS" },
    { logo: sc, name: "Styled Components" },
    { logo: docker, name: "Docker" },
    { logo: actions, name: "Actions" },
    { logo: motion, name: "Framer Motion" },
    { logo: mui, name: "Material UI" },
    { logo: rest, name: "REST API" },
    { logo: velo, name: "Wix Velo" },
  ];

const Stacks = () => {
  return (
    <StacksSuper>
        <StacksTitleContainer>
            <StacksTitle>
                <CodeIcon /> Stacks
            </StacksTitle>
        </StacksTitleContainer>
        <StacksContent>
            <StacksLogos>
            {stacksList.map((item, index) => {
            return (
                <StacksLogo key={index + 1}>
                    <Wrapper><Image src={item.logo} alt={"html logo"} /></Wrapper>
                    <p>{item.name}</p>
                </StacksLogo>
             );
             })}
            </StacksLogos>
        </StacksContent>
    </StacksSuper>
    
  )
}

const StacksSuper = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.075);
  padding-top: 50px;
  width: 100%;
  @media (max-width: 1120px) {
    width: 100%;
  }
  border-radius: 20px;
`;

const StacksContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 30px;
`;

const StacksTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StacksTitle = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const StacksLogos = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  margin-top: 10px;
  justify-content: center;

  @media (max-width: 1120px) {
  }
`;

const StacksLogo = styled.div`
border: 1px solid rgba(255, 255, 255, 0.075);
  padding: 10px;
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin: 10px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.075)
  }
  @media (max-width: 1120px) {
    width: 40%;
    }
    & p {
    margin-top: 5px;
}
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
`

export default Stacks