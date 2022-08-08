import React from 'react'
import Image from 'next/image'

import styled from 'styled-components'


import html from "./assets/img/t/html.png";
import css from "./assets/img/t/css.png";
import js from "./assets/img/t/js.png";
import next from "./assets/img/t/next2.png";
import react from "./assets/img/t/React2.png";
import node from "./assets/img/t/logo-node-js-1024.png";
import ts from "./assets/img/t/ts.png";
import sc from "./assets/img/t/styled.png";

const stacksList = [
    { logo: html, name: "HTML5" },
    { logo: css, name: "CSS3" },
    { logo: js, name: "Javascript" },
    { logo: ts, name: "Typescript" },
    { logo: next, name: "NextJS" },
    { logo: react, name: "ReactJS" },
    { logo: node, name: "NodeJS" },
    { logo: sc, name: "Styled Components" },
  ];

const Stacks = () => {
  return (
    <PresentationLogos>
        {stacksList.map((item, index) => {
            return (
                <PresentationLogo key={index + 1}>
                    <Image src={item.logo} alt={"html logo"} />
                </PresentationLogo>
            );
        })}
    </PresentationLogos>
  )
}

const PresentationLogos = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: center;

  @media (max-width: 1120px) {
  }
`;

const PresentationLogo = styled.div`
  padding: 10px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    padding: 8px;

    @media (max-width: 1120px) {
    }
  }
`;

export default Stacks