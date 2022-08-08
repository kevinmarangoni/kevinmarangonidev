import React from "react";
import styled from "styled-components";

import PersonIcon from "@mui/icons-material/Person";

const SoftSkills = () => {
  const softList = [
    {
      title: "Resilient",
      description:
        "“It doesn’t matter how many times you get knocked down. All that matters is you get up one more time than you were knocked down.”",
      quote: "Roy T. Bennett",
    },
    {
      title: "Ethical Professional",
      description:
        "“Educating the mind without educating the heart is no education at all.”",
      quote: "Aristotle",
    },
    {
      title: "Positive Attitude",
      description:
        "“Start each day with a positive thought and a grateful heart.”",
      quote: "Roy T. Bennett",
    },
    {
      title: "Teamwork",
      description: "“Alone we can do so little; together we can do so much”",
      quote: "Helen Keller",
    },
    {
      title: "Flexibility",
      description: "“The measure of intelligence is the ability to change.”",
      quote: "Albert Einstein",
    },
    {
      title: "Leadership Mindset",
      description:
        "“To handle yourself, use your head; to handle others, use your heart.”",
      quote: "Eleanor Roosevelt",
    },
    {
      title: "Creative",
      description:
        "“Instead of worrying about what you cannot control, shift your energy to what you can create.”",
      quote: "Roy T. Bennett",
    },
  ];

  return (
    <SoftskillsSuper>
      <SoftskillsTitleContainer>
        <PersonIcon /> Softskills
      </SoftskillsTitleContainer>
      <SoftskillsContent>
        {softList.map((item, index) => {
          return (
            <SoftskillCardContainer key={index + 1}>
              <CardTitle>
                {item.title}
              </CardTitle>
              <CardQuote>
                {item.description}<span> ― {item.quote}</span>
              </CardQuote>
            </SoftskillCardContainer>
          );
        })}
      </SoftskillsContent>
    </SoftskillsSuper>
  );
};

const SoftskillsSuper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  padding-top:50px;
  border: 1px solid rgba(255, 255, 255, 0.075);
  border-radius: 20px;

`;

const SoftskillsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`;

const SoftskillCardContainer = styled.div`

  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.075);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-around;
  width: 46%;
  margin: 10px;
  padding: 20px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.075);
  }
  @media (max-width: 1120px) {
    width: 100%;
    margin: 10px;
    margin-left: 0px;
    margin-right: 0px;
    padding: 20px;
  }
`;
const SoftskillsTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CardTitle = styled.div`
  font-size: 20px;
  margin-bottom: 15px;
  font-weight: 700;
`;
const CardQuote = styled.div`
  font-size: 12px;
  font-style: italic;

  & span {
    font-size: 12px;
    font-weight: 800;
  }
`;

export default SoftSkills;
