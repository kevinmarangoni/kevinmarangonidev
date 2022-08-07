import Image from "next/image";
import { useEffect, useState } from "react";

import styled from "styled-components";

import ContactMe from "./components/ContactMe";
import Education from "./components/Education";
// import Navbar from "./components/Navbar";
import Portifolio from "./components/Portifolio";
import Presentation from "./components/Presentation";
import SoftSkills from "./components/SoftSkills";
// import Stacks from "./components/Stacks";
import WorkExperience from "./components/WorkExperience";


const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;


  @media (max-width: 767px){

}
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  @media (max-width: 767px){

}
`;
const PageSection = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  height: fit-content;
  padding: 20px;

  
  @media (max-width: 767px){
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
          <Portifolio />
        </PageSection>

        <PageSection>
          <WorkExperience />
        </PageSection>

        <PageSection>
          <Education />
        </PageSection>

        <PageSection>
          <SoftSkills />
        </PageSection>

        <PageSection>
          <ContactMe />
        </PageSection>

      </ContentContainer>
    </PageContainer>
  );
}

// const [windowSize, setWindowDimensions] = useState({
//   width: undefined,
//   height: undefined,
// })
// const [isResized, setResized] = useState(false)

// const handleResize = () => {
//   setWindowDimensions({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   })
// }
// useEffect(() => {
//   handleResize()
//   window.addEventListener("resize", handleResize)
//   console.log(windowSize, isResized)
//   window.removeEventListener('resize', handleResize)

// }, [isResized])
