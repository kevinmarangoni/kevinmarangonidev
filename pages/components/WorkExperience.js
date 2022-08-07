import React from "react";
import Image from "next/image";

import styled from "styled-components";

import WorkIcon from "@mui/icons-material/Work";

import ormaLogo from "./assets/img/t/orma logo.svg";

const WorkSuper = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.075);
  padding-top: 70px;
  width: 100%;
  @media (max-width: 767px){
    width: 100%;
  }
`;

const WorkCompanyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 30px; 
`;

const WorkCompanyCard = styled.div`
  /* display: flex;
  flex-direction: column;
  width: 400px;
  height: fit-content;
  margin: 20px;
  border: 1px solid rgba(255, 255, 255, 0.075);
  border-radius: 20px;
  padding: 20px;
  margin-top: 0;
  &:hover {
    background-color: rgba(255, 255, 255, 0.075);
  } */
  display: flex;
  flex-direction: column;
  width: 40%;
  height: fit-content;
  border: 1px solid rgba(255, 255, 255, 0.075);
  &:hover {
    background-color: rgba(255, 255, 255, 0.075);
  }

  @media (max-width: 767px){
    width: 100%;
    margin:10px;
    
}


`;

const WorkCompanyCardLogo = styled.div`
  /* width: 100%;
  display: flex;
  justify-content: center; */
`;

const WorkCompanyCardP = styled.div`
  /* width: 100%;
  padding-bottom: 10px; */
`;

const WorkCompanyCardSpan = styled.span``;

// const WorkCompanyNow = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const WorkCompanyNowH1 = styled.h1`
//   text-align: center;
//   width: 60%;
//   padding: 10px;
//   background-color: rgba(0, 247, 255, 0.212);
//   border-radius: 10px 10px 0 0;
// `;

const WorkExpTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LogoWrapper = styled.div``;

const WorkExperience = () => {
  const workList = [
    {
      logo: ormaLogo,
      companyName: "Orma",
      howLong: "since feb. of 2022",
      description: "Technological Solutions for Sustainability",
      position: "Frontend Web Developer Jr.",
      act: "Develops ReactJs/NextJs applications for the company",
      website: "https://www.orma.eco",
      isCurrent: true,
    },
  ];

  return (
    <WorkSuper>
      <WorkExpTitle>
        <WorkIcon /> Work Experience </WorkExpTitle>
      <WorkCompanyContainer>
        {workList.map((item, index) => {
          return (
            <div key={index + 1}>
              <WorkCompanyCard>
                <WorkCompanyCardLogo>
                  <LogoWrapper>
                    <Image src={item.logo} alt={item.companyName + " logo"} />
                  </LogoWrapper>
                </WorkCompanyCardLogo>
                <WorkCompanyCardP style={{ fontWeight: "bolder" }}>
                  {item.companyName} - {item.howLong}
                </WorkCompanyCardP>
                <WorkCompanyCardSpan>{item.description}</WorkCompanyCardSpan>
                <br />
                <WorkCompanyCardP>
                  <WorkCompanyCardSpan style={{ fontWeight: "bolder" }}>
                    {item.position}
                  </WorkCompanyCardSpan>
                </WorkCompanyCardP>
                <WorkCompanyCardP>
                  <WorkCompanyCardSpan
                    style={{ fontWeight: "bolder" }}
                  ></WorkCompanyCardSpan>
                  {item.act}
                </WorkCompanyCardP>
                <WorkCompanyCardP>
                  <a href={"https://www.nusa.com.br"}>Website</a>
                </WorkCompanyCardP>
              </WorkCompanyCard>
            </div>
          );
        })}
      </WorkCompanyContainer>
    </WorkSuper>
  );
};

export default WorkExperience;
