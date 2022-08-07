import React from "react";
import styled from "styled-components";

import PersonIcon from '@mui/icons-material/Person';

const SoftSkills = () => {
  const softList = [
    {
      title: "Resilient",
      description: "“It doesn’t matter how many times you get knocked down. All that matters is you get up one more time than you were knocked down.”",
      quote: "Roy T. Bennett",
    },
    {
      title: "Ethical Professional",
      description:"“Educating the mind without educating the heart is no education at all.”",
      quote: "Aristotle",
    },
    { 
      title: "Positive Attitude",
      description: "Start each day with a positive thought and a grateful heart.", 
      quote: "Roy T. Bennett" 
    },
    { 
      title: "Teamwork", 
      description: "“Alone we can do so little; together we can do so much”", 
      quote: "Helen Keller" 
    },
    { 
      title: "Flexibility", 
      description: "“The measure of intelligence is the ability to change.”", 
      quote: "Albert Einstein" 
    }, 
    { 
      title: "Leadership Mindset", 
      description: "“To handle yourself, use your head; to handle others, use your heart.”", 
      quote: "Eleanor Roosevelt" 
    },
    {
      title: "Creative",
      description:"“Instead of worrying about what you cannot control, shift your energy to what you can create.”",
      quote: "Roy T. Bennett",
    },
  ];

  return (
    <SoftskillsSuper>
      <SoftskillsTitleContainer>
       <PersonIcon /> Softskills
      </SoftskillsTitleContainer>
      <SoftskillsContent>
      {
        softList.map((item, index)=>{
          return (
            <SoftskillCardContainer key={index+1}>
              <CardTitle>
                {item.title}
              </CardTitle>
              <CardQuote>
                {item.description} ― {item.quote}
              </CardQuote>
            </SoftskillCardContainer>
          )
        })
      }
      </SoftskillsContent>

    </SoftskillsSuper>
  );
};

const SoftskillsSuper = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.075);
  padding-top: 70px;
  width:100vw;
  flex-wrap: wrap;
`
const SoftskillCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width:300px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.075);
  padding-top: 70px;
  margin: 30px;
  &:hover{
    background-color: rgba(255, 255, 255, 0.075);
    }
    @media (max-width: 767px){
    width: 100%;
    margin:10px;
    padding: 20px;
}

`
const SoftskillsTitleContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`

const SoftskillsContent = styled.div`
display: flex;
flex-wrap: wrap;
`


const CardTitle = styled.div`

`
const CardQuote = styled.div`

`




export default SoftSkills;
