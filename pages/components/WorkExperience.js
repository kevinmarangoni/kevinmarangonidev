import React from "react";
import Image from "next/image";

import styled from "styled-components";

import WorkIcon from "@mui/icons-material/Work";

import ormaLogo from "./assets/img/t/orma logo.svg";

const WorkSuper = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.075);
  width: 100%;
  padding-top: 50px;
  border-radius: 20px;
  @media (max-width: 1120px) {
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
  margin-top: 20px;
  padding: 20px
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
  margin: 20px;
  padding: 20px;

  border: 1px solid rgba(255, 255, 255, 0.075);
  border-radius: 20px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.075);
  }

  @media (max-width: 1120px) {
    width: 100%;
    margin: 10px;
  }
`;

const WorkCompanyCardLogo = styled.div`
  /* width: 100%;
  display: flex;
  justify-content: center; */
`;

const WorkCompanyCardP = styled.div`
  width: 100%;
  padding-bottom: 10px;
`;

const WorkCompanyCardSpan = styled.span`
font-size: 15px;

`;

const WorkExpTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LogoWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 15px;
`;

const WorkExperience = () => {
  const workList = [
    {
      logo: ormaLogo,
      companyName: "Orma Carbon",
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
        <WorkIcon /> Work Experience{" "}
      </WorkExpTitle>
      <WorkCompanyContainer>
        {workList.map((item, index) => {
          return (
              <WorkCompanyCard key={index + 1}>
                <WorkCompanyCardLogo>
                  <LogoWrapper>
                    <Image src={item.logo} width={100} height={50} alt={item.companyName + " logo"} />
                  </LogoWrapper>
                </WorkCompanyCardLogo>
                <WorkCompanyCardP>
                  <h2>{item.companyName} - {item.howLong}</h2>
                </WorkCompanyCardP>
                <WorkCompanyCardSpan>{item.description}</WorkCompanyCardSpan>
                <br />
                <WorkCompanyCardP>
                  <WorkCompanyCardSpan>
                    <h2>{item.position}</h2>
                  </WorkCompanyCardSpan>
                </WorkCompanyCardP>
                <WorkCompanyCardP>
                  <WorkCompanyCardSpan>{item.act}</WorkCompanyCardSpan>
                </WorkCompanyCardP>
                <WorkCompanyCardP>
                  <a href={item.website}>Website</a>
                </WorkCompanyCardP>
              </WorkCompanyCard>
          );
        })}
      </WorkCompanyContainer>
    </WorkSuper>
  );
};

export default WorkExperience;
