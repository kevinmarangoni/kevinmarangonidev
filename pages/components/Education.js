import React from "react";
import styled from "styled-components";

import SchoolIcon from "@mui/icons-material/School";

import Image from "next/image";

import etec from "./assets/img/t/etec.png";
import unimonte from "./assets/img/t/unimonte.png";
import unifesp from "./assets/img/t/unifesp.png";

const Education = () => {
  const eduList = [
    {
      instName: "Etec Dra. Ruth Cardoso",
      inDate: "01/2011",
      outDate: "12/2013",
      type: "High School",
      title: "Graduated",
      logo: etec,
    },
    {
      instName: "Etec Dra. Ruth Cardoso",
      inDate: "06/2012",
      outDate: "12/2013",
      type: "Technical School",
      title: "Computer Technician",
      logo: etec,
    },
    {
      instName: "São Judas University",
      inDate: "01/2015",
      outDate: "12/2018",
      type: "Biomedicine College",
      title: "Bachelor of Science",
      logo: unimonte,
    },
    {
      instName: "São Paulo Federal University",
      inDate: "01/2019",
      outDate: "09/2021",
      type: "Postgraduation College",
      title: "Master in Health Science’s",
      logo: unifesp,
    },
  ];

  return (
    <EducationSuper>
      <EducationTitleContainer>
        <SchoolIcon /> Education
      </EducationTitleContainer>
      <EducationContent>
        {eduList.map((item, index) => {
          return (
            <EducationContainer key={index + 1} backgroundColor={"#fff"}>
              <EducationLogo>
                <LogoWrapper>
                  <Image src={item.logo} alt={"logotipo " + item.instName} />
                </LogoWrapper>
              </EducationLogo>
              <EducationTitle>
                <h2>{item.instName}</h2>
              </EducationTitle>
              <EducationCourse>
                <p>{item.type}</p>
              </EducationCourse>
              <EducationDescription>
                <EducationTimeSpan>
                 <h2>{item.inDate} to {item.outDate}</h2>
                </EducationTimeSpan>
                <EducationGraduateTitle>
                  <p>{item.title}</p>
                </EducationGraduateTitle>
              </EducationDescription>
            </EducationContainer>
          );
        })}
      </EducationContent>
    </EducationSuper>
  );
};

const EducationSuper = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.075);
  padding-top: 50px;
  width: 100%;
  border-radius: 20px;
  @media (max-width: 1120px) {
    width: 100%;
  }
`;

const EducationContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 30px;
  padding: 20px;
`;

const EducationTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;

const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 44%;
  min-height: 300px;

  height: fit-content;
  min-height: 250px;
  margin: 20px;
  
  border: 1px solid rgba(255, 255, 255, 0.075);
  border-radius: 20px;
  padding: 20px;
  transition: all ease-in-out 0.2s;
  margin-top: 0;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.075);
  }
  @media (max-width: 1120px) {
    width: 100%;
    margin: 10px;
  }
`;

const EducationLogo = styled.div`
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const LogoWrapper = styled.div``;

const EducationTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
& h2 {
  /* text-align: center; */
  }
`;
const EducationDescription = styled.div``;

const EducationTimeSpan = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
& h2{
  /* text-align: center; */
  margin-bottom: 10px;
}
`;

const EducationCourse = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
& p {
  /* text-align: center; */
}
`;

const EducationGraduateTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
& p {
  /* text-align: center; */
}

`;

export default Education;
