import React from "react";
import Image from "next/image";

import lattes from "./assets/img/t/Lattes.png";
import sign from "./assets/img/t/my_signature_cocosign.png";

import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

//http://lattes.cnpq.br/5620060448568039

import styled from "styled-components";

import me from "./assets/img/me.png";

const Presentation = () => {
  return (
    <PresentationSuper>
      <PresentationContent>
      <PresentationImage>
            <ImageWrapper>
              <Image src={me} height={250} width={190} alt={"my own photo"} />
            </ImageWrapper>
          </PresentationImage>
        <PresentationContainer>
          <PresentationText>
            <PresentationTextHello>
              <PresentationTextHelloH2>{"Hello, I'm"}</PresentationTextHelloH2>
              <PresentationTextSign>
                <Image src={sign} alt={"my signed name"} />
                <PresentationTextSocial>
                  <PresentationTextSocialSpan>
                    <a href={"https://github.com/kevinmarangoni"}>
                      <GitHubIcon width={30} height={30} alt={"github logo"} />
                    </a>
                  </PresentationTextSocialSpan>
                  <PresentationTextSocialSpan>
                    <a
                      href={
                        "https://www.linkedin.com/in/kevin-marangoni-1a3a17127/"
                      }
                    >
                      <LinkedInIcon
                        width={30}
                        height={30}
                        alt={"linkedin logo"}
                      />
                    </a>
                  </PresentationTextSocialSpan>
                  <PresentationTextSocialSpan>
                    <a href={"http://lattes.cnpq.br/5620060448568039"}>
                      <Image
                        src={lattes}
                        width={30}
                        height={30}
                        alt={"linkedin logo"}
                      />
                    </a>
                  </PresentationTextSocialSpan>
                  <PresentationTextSocialSpan>
                    <a href={"https://www.instagram.com/kevinmarangoni/"}>
                      <InstagramIcon
                        width={30}
                        height={30}
                        alt={"linkedin logo"}
                      />
                    </a>
                  </PresentationTextSocialSpan>
                </PresentationTextSocial>
              </PresentationTextSign>
              <PresentationTextSignP>
                Frontend Web Developer
              </PresentationTextSignP>
            </PresentationTextHello>
          </PresentationText>
        </PresentationContainer>
      </PresentationContent>
      <AboutContainer>
        <AboutMe>
          <h2>About me</h2>
          <p>
            I have a Bachelor of Science in Biomedicine from USJT and a Master
            of Science inof health from the Federal University of São Paulo,
            fascinated by biology and in deep love for computers and
            programming.
          </p>
        </AboutMe>
        <AboutMe>
          <h2>Im looking for...</h2>
          <p>
            {" "}
            ...opportunities to collaborate with projects and companies that I
            believe are concerned with the growth of society, that see people as
            people and respect individual differences and capabilities.{" "}
          </p>
        </AboutMe>
        <AboutMe>
          <h2>I want to...</h2>
          <p>
            {" "}
            ...collaborate with my knowledge of Fullstack Tools, Frameworks and
            many other tools to attend the company’s needs. I would like to work
            with a multidisciplinary teams, so I can always learn from different
            point of view of every coworker.
          </p>
        </AboutMe>
      </AboutContainer>
    </PresentationSuper>
  );
};

const PresentationSuper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1120px) {
  }
`;

const PresentationContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.075);
  border-radius: 20px;
  height: fit-content;
  margin-bottom: 30px;
  @media (max-width: 1120px) {
    flex-direction: column;
    align-items:center;
    justify-content: center;
  }
`;

const PresentationContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1120px) {
    flex-direction: column;
    align-items:center;
    justify-content: center;
  }
`;

const PresentationImage = styled.div`
  margin-right: 20px;
  margin-left: 20px;
  width: fit-content;
  @media (max-width: 1120px) {
  }
`;

const ImageWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.075);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  justify-content: center;

  height: 250px;
  width: 250px;
  border-radius: 300px;

  @media (max-width: 1120px) {

  }
`;

const PresentationText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 1120px) {
  }
`;

const PresentationTextHello = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1120px) {
  }
`;

const PresentationTextHelloH2 = styled.h2`
  font-size: 30px;
  font-weight: 200;
  padding-bottom: 10px;

  @media (max-width: 1120px) {
  }
`;

const PresentationTextSign = styled.span`
  height: 90px;
  width: fit-content;
  display: flex;
  flex-direction: column;

  @media (max-width: 1120px) {
    align-items:center;
    justify-content: center;
  }
`;

const PresentationTextSocial = styled.span`
  height: 30px;
  display: flex;

  @media (max-width: 1120px) {
    align-items:center;
    justify-content: center;
  }
`;

const PresentationTextSocialSpan = styled.span`
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  cursor: pointer;

  @media (max-width: 1120px) {
  }
`;

const PresentationTextSignP = styled.p`
  font-size: 45px;
  font-weight: 200;

  @media (max-width: 1120px) {
  }
`;

const AboutContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.075);

  @media (max-width: 1120px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
  }
`;

const AboutMe = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.075);
  border-radius: 20px;
  margin: 10px;
  padding: 20px;

  & h2 {
    margin-bottom: 20px;
  }

  & p {
    font-weight: 200;
  }

  @media (max-width: 1120px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.075);
  }
`;

export default Presentation;
