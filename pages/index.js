import Image from "next/image";
import { useEffect, useState } from "react";

import styled from "styled-components";

import ContactMe from "./components/ContactMe";
import Education from "./components/Education";
// import Navbar from "./components/Navbar";
import Portifolio from "./components/Portifolio";
import Presentation from "./components/Presentation";
import SoftSkills from "./components/SoftSkills";
import Stacks from "./components/Stacks";
import WorkExperience from "./components/WorkExperience";


const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;


  @media (max-width: 1120px){

}
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  @media (max-width: 1120px){

}
`;
const PageSection = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  height: fit-content;
  padding: 20px;

  
  @media (max-width: 1120px){
    width: 100%;
}
`;

export default function Home() {
  return (
    <PageContainer>
      <ContentContainer>

        <PageSection>
          <Presentation />
        </PageSection>

        <PageSection>
          <Stacks />
        </PageSection>

{/* 
        <PageSection>
          <Portifolio />
        </PageSection> 
*/}

        <PageSection>
          <WorkExperience />
        </PageSection>

        <PageSection>
          <Education />
        </PageSection>

        <PageSection>
          <SoftSkills />
        </PageSection>

        {/* <PageSection>
          <ContactMe />
        </PageSection> */}

        Site under construction
        <br/>
        <br/>
        <br/>
      </ContentContainer>
    </PageContainer>
  );
}

