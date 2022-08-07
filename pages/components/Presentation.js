import React from "react";
import Image from "next/image";

import html from "./assets/img/t/html.png";
import css from "./assets/img/t/css.png";
import js from "./assets/img/t/js.png";
import next from "./assets/img/t/next2.png";
import react from "./assets/img/t/React2.png";
import node from "./assets/img/t/logo-node-js-1024.png";
import sign from "./assets/img/t/my_signature_cocosign.png";
import git from "./assets/img/t/git.png";
import linkedin from "./assets/img/t/lknd.png";
import ts from "./assets/img/t/ts.png";
import sc from "./assets/img/t/styled.png";

import styled from 'styled-components'

import me from "./assets/img/me.png";


const stacks = [
  {logo: html, name: "HTML5"},
  {logo: css, name: "CSS3"},
  {logo: js, name: "Javascript"},
  {logo: ts, name: "Typescript"},
  {logo: next, name: "NextJS"},
  {logo: react, name: "ReactJS"},
  {logo: node, name: "NodeJS"},
  {logo: sc, name: "Styled Components"},
]



const Presentation = () => {
  return (
    <PresentationSuper>
      <PresentationContent>
        <PresentationContainer>
        <PresentationImage>
          <ImageWrapper><Image src={me}  height={300} width={230}  alt={"my own photo"} /></ImageWrapper>
        </PresentationImage>
        <PresentationText>
          <PresentationTextHello>
            <PresentationTextHelloH2>
              <i>{"Hello, I'm"}</i>
            </PresentationTextHelloH2>
            <PresentationTextSign>
              <Image src={sign} alt={"my signed name"} />
              <PresentationTextSocial>
                <PresentationTextSocialSpan>
                  <a href={"https://github.com/kevinmarangoni"}><Image src={git} width={30} height={30} alt={"github logo"} /></a>
                </PresentationTextSocialSpan>
                <PresentationTextSocialSpan>
                  <a href={"https://www.linkedin.com/in/kevin-marangoni-1a3a17127/"}><Image src={linkedin} width={30} height={30} alt={"linkedin logo"} /></a>
                </PresentationTextSocialSpan>
              </PresentationTextSocial>
            </PresentationTextSign>
              <PresentationTextSignP>
                Frontend Web Developer
              </PresentationTextSignP>
          </PresentationTextHello>
          <PresentationLogos>
          {
              stacks.map((item, index)=>{
                return (
                    <PresentationLogo key={index+1}>
                      <Image src={item.logo} alt={"html logo"} />
                    </PresentationLogo>
                )
              })
            }
          </PresentationLogos>
        </PresentationText>
        </PresentationContainer>
      </PresentationContent>
      <AboutContainer>
        oi
      </AboutContainer>
    </PresentationSuper>
  );
};

const PresentationSuper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px){

}
`

const PresentationContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.075);
  border-radius: 20px 30px 30px 20px;
  height: fit-content;

  @media (max-width: 767px){
    flex-direction: column;
  }
`


const PresentationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 767px){
    flex-direction: column;

}

`

const PresentationImage = styled.div`
  margin-right: 20px;
  width: fit-content;
  @media (max-width: 767px){

}

`

const ImageWrapper = styled.div`
height: 300px;
width: 300px;
background-color: rgba(255, 255, 255, 0.075);
border-radius: 300px;
overflow: hidden;
display: flex;
justify-content: center;
`

const PresentationText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 767px){

}
`

const PresentationTextHello = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 767px){

}
`

const PresentationTextHelloH2 = styled.h2`
  font-size: 30px;
  font-weight: 200;
  padding-bottom: 10px;

  @media (max-width: 767px){

}
`

const PresentationTextSign = styled.span`
  height: 50px;
  display: flex;
  align-items: center;

  @media (max-width: 767px){

}
`

const PresentationTextSocial = styled.span`
  height: 30px;
  display: flex;
  margin-left: 20px;

  @media (max-width: 767px){

}
`

const PresentationTextSocialSpan = styled.span`
  margin: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (max-width: 767px){

}
`

const PresentationLogos = styled.div`
  display: flex;
  margin-top: 10px;

  @media (max-width: 767px){

}
`

const PresentationLogo = styled.div`
  padding: 10px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
   padding: 8px;

   @media (max-width: 767px){

}
}
`

const PresentationTextSignP = styled.p`
  font-size: 50px;
  font-weight: 200;

  @media (max-width: 767px){

}
`

const AboutContainer = styled.div`


@media (max-width: 767px){

}
`

export default Presentation;
