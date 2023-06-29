import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import lattes from "/pages/components/assets/img/t/Lattes.png";

import html from "/pages/components/assets/img/t/html.png";
import css from "/pages/components/assets/img/t/css.png";
import js from "/pages/components/assets/img/t/js.png";
import next from "/pages/components/assets/img/t/next2.png";
import react from "/pages/components/assets/img/t/React2.png";
import node from "/pages/components/assets/img/t/node.png";
import ts from "/pages/components/assets/img/t/ts.png";
import sc from "/pages/components/assets/img/t/styled.png";
import docker from "/pages/components/assets/img/t/docker.png";
import actions from "/pages/components/assets/img/t/actions.png";
import motion from "/pages/components/assets/img/t/framer-motion.png";
import mui from "/pages/components/assets/img/t/mui.png";
import rest from "/pages/components/assets/img/t/rest.png";
import velo from "/pages/components/assets/img/t/velo.png";
import mongodb from "/pages/components/assets/img/t/mongodb.svg";

import ormaLogo from "/pages/components/assets/img/t/orma logo.svg";
import gssLogo from "/pages/components/assets/img/t/gss.svg";

import etec from "/pages/components/assets/img/t/etec.png";
import unimonte from "/pages/components/assets/img/t/unimonte.png";
import unifesp from "/pages/components/assets/img/t/unifesp.png";

export const enUS = {
  personal: {
    name: "Kevin Pereira Marangoni",
    position: "Javascript Fullstack Web Developer",
    level: "Mid",
    salary: "$3,500 to $6,000",
    links: {
      github: "https://github.com/kevinmarangoni",
      linkedin: "https://www.linkedin.com/in/kevin-marangoni-1a3a17127/",
      lattes: "http://lattes.cnpq.br/5620060448568039",
      instagram: "https://www.instagram.com/kevinmarangoni/",
    },
    language: [
      { name: "Portuguese", skill: 5 },
      { name: "English", skill: 4 },
      { name: "Spanish", skill: 2 },
    ],
    contact: {
      phone: "+55 13 98135-7393",
      whatsapp: "+55 13 98135-7393",
      email: "kevin-marangoni_@hotmail.com",
    },
    info: {
      about:
        "I have a Bachelor's degree in Biomedicine and a Master's degree in Health Sciences. I've always been fascinated by biology and have a passion for computers and programming.",
      looking:
        "I'm seeking opportunities to collaborate on projects and with companies that I believe are concerned with the growth of society, that value people as individuals, and respect their differences and abilities.",
      want: "I want to contribute my knowledge of Fullstack Tools, Frameworks, and many other tools to meet the company's needs. I would love to work with multidisciplinary teams to always learn from different perspectives from each colleague.",
    },
  },
  work: [
    {
      logo: ormaLogo,
      companyName: "Orma Carbon",
      howLong: "Feb 2022 to Oct 2022",
      description: "Technological Solutions for Sustainability",
      position: "Junior Frontend Web Developer",
      act: "Develop ReactJs/NextJs applications for the company",
      website: "https://www.orma.eco",
      isCurrent: false,
    },
    {
      logo: gssLogo,
      companyName: "GSS Carbono e Sustentabilidade",
      howLong: "Oct 2022 to Apr 2023",
      description: "Technological Solutions for Sustainability",
      position: "Junior Fullstack Web Developer",
      act: "Develop ReactJs/NextJs and Node.Js applications for the company",
      website: "https://www.gss.eco",
      isCurrent: false,
    },
  ],
  education: [
    {
      instName: "Etec Dra. Ruth Cardoso",
      inDate: "01/2011",
      outDate: "12/2013",
      type: "High School",
      title: "Completed",
      logo: etec,
    },
    {
      instName: "Etec Dra. Ruth Cardoso",
      inDate: "06/2012",
      outDate: "12/2013",
      type: "Technical Education",
      title: "Computer Technician",
      logo: etec,
    },
    {
      instName: "Universidade São Judas",
      inDate: "01/2015",
      outDate: "12/2018",
      type: "Biomedicine College",
      title: "Bachelor's Degree in Biomedical Sciences",
      logo: unimonte,
    },
    {
      instName: "Universidade Federal de São Paulo",
      inDate: "01/2019",
      outDate: "09/2021",
      type: "Postgraduate",
      title: "Master's Degree in Health Sciences",
      logo: unifesp,
    },
  ],
  stacks: [
    { logo: html, name: "HTML5", skill: 4 },
    { logo: css, name: "CSS3", skill: 3 },
    { logo: js, name: "Javascript", skill: 4 },
    { logo: ts, name: "Typescript", skill: 3 },
    { logo: next, name: "NextJS", skill: 4 },
    { logo: react, name: "ReactJS", skill: 4 },
    { logo: node, name: "NodeJS", skill: 3 },
    { logo: mongodb, name: "MongoDB", skill: 3 },
    { logo: sc, name: "Styled Components", skill: 3 },
    { logo: docker, name: "Docker", skill: 3 },
    { logo: actions, name: "Actions", skill: 3 },
    { logo: motion, name: "Framer Motion", skill: 3 },
    { logo: mui, name: "Material UI", skill: 3 },
    { logo: rest, name: "REST API", skill: 4 },
    { logo: velo, name: "Wix Velo", skill: 3 },
    { logo: "", name: "MySQL", skill: 3 },
  ],
  softskills: [
    { name: "Empathy", skill: "" },
    { name: "Effective Communication", skill: "" },
    { name: "Collaboration", skill: "" },
    { name: "Critical Thinking", skill: "" },
    { name: "Problem Solving", skill: "" },
    { name: "Adaptability", skill: "" },
    { name: "Self-discipline", skill: "" },
  ],
  portfolio: [
    {
      project: "Movimento Repenso",
      description:
        "A platform that allows small businesses to conduct their annual carbon emissions inventory based on internationally recognized methodologies and guidelines, such as the Greenhouse Gas Protocol. The platform can provide a structured questionnaire to collect information about the company's activities, such as energy consumption, transportation, waste, and other relevant sources. The platform includes a login system, payment system, user and admin dashboards, as well as a CMS for managing blog content.",
      link: "https://www.repenso.eco",
      stacks: [
        "HTML5",
        "CSS3",
        "Javascript",
        "NextJS",
        "ReactJS",
        "GoLang",
        "Styled Components",
        "REST API",
        "MySQL",
      ],
      imgs: [],
    },
    {
      project: "Smartie Carbon",
      description:
        "Platform built by Orma Carbon for Solví to promote the sale and purchase of carbon credits, with a calculator for automobile emissions and daily life emissions. The platform includes a login system.",
      link: "https://www.smartiecarbon.com.br",
      stacks: [
        "HTML5",
        "CSS3",
        "Javascript",
        "NextJS",
        "ReactJS",
        "NodeJS",
        "Styled Components",
        "REST API",
        "MySQL",
      ],
      imgs: [],
    },
    {
      project: "GSS + Inter Emissions Calculator",
      description:
        "Application developed for Banco Inter that was accessed directly from their app and allowed users to calculate their personal emissions and offset them by purchasing carbon credits. The application includes a user login system, payment system, user and admin dashboards.",
      link: "https://www.gsscarbon.com/calculadora/banco-inter",
      stacks: [
        "HTML5",
        "CSS3",
        "Javascript",
        "NextJS",
        "ReactJS",
        "NodeJS",
        "Styled Components",
        "REST API",
        "MongoDB",
      ],
      imgs: [],
    },
    {
      project:
        "GP Auto Emissions Calculator - a partnership between GP São Paulo + Smartie Carbon",
      description:
        "Application that allowed spectators of GP São Paulo to measure and offset the carbon emissions from their cars. The system includes a login system and generates PDF certificates that are sent to the user's email.",
      link: "https://www.smartiecarbon.com.br/gpsaopaulo",
      stacks: [
        "HTML5",
        "CSS3",
        "Javascript",
        "NextJS",
        "ReactJS",
        "NodeJS",
        "Styled Components",
        "REST API",
        "MongoDB",
      ],
      imgs: [],
    },
    {
      project: "Orma Carbon Website",
      description:
        "Maintenance and updates of the company's institutional website.",
      link: "",
      stacks: [
        "HTML5",
        "CSS3",
        "Javascript",
        "NextJS",
        "ReactJS",
        "Styled Components",
      ],
      imgs: [],
    },
    {
      project: "GSS Website",
      description:
        "Maintenance and updates of the company's institutional website.",
      link: "",
      stacks: [
        "HTML5",
        "CSS3",
        "Javascript",
        "NextJS",
        "ReactJS",
        "Styled Components",
      ],
      imgs: [],
    },
    {
      project: "VBIO Website",
      description:
        "Maintenance and updates of the company's institutional website.",
      link: "",
      stacks: [
        "HTML5",
        "CSS3",
        "Javascript",
        "NextJS",
        "ReactJS",
        "NodeJS",
        "Styled Components",
        "REST API",
        "MongoDB",
      ],
      imgs: [],
    },
  ],
};

export const ptBR = {
  personal: {
    name: "Kevin Pereira Marangoni",
    position: "Desenvolvedor Javascript Web Fullstack",
    level: "Pleno",
    salary: "R$ 3500 a R$ 6000",
    links: {
      github: "https://github.com/kevinmarangoni",
      linkedin: "https://www.linkedin.com/in/kevin-marangoni-1a3a17127/",
      lattes: "http://lattes.cnpq.br/5620060448568039",
      instagram: "https://www.instagram.com/kevinmarangoni/",
    },
    language: [
      { name: "Português", skill: 5 },
      { name: "Inglês", skill: 4 },
      { name: "Espanhol", skill: 2 },
    ],
    contact: {
      phone: "+55 13 98135-7393",
      whatsapp: "+55 13 98135-7393",
      email: "kevin-marangoni_@hotmail.com",
    },
    info: {
      about:
        "Tenho Bacharelado em Biomedicina e Mestrado em Ciências da Saúde, sempre fascinado pela biologia e apaixonado por computadores e programação.",
      looking:
        "Oportunidades para colaborar em projetos e empresas que acredito estarem preocupados com o crescimento da sociedade, que vejam as pessoas como pessoas e respeitem as diferenças e habilidades individuais.",
      want: "Colaborar com meu conhecimento de Ferramentas Fullstack, Frameworks e muitas outras ferramentas para atender às necessidades da empresa. Gostaria de trabalhar com equipes multidisciplinares para poder aprender sempre com diferentes pontos de vista de cada colega de trabalho.",
    },
  },
  work: [
    {
      logo: ormaLogo,
      companyName: "Orma Carbon",
      howLong: "de fev. 2022 a out. 2022",
      description: "Soluções Tecnológicas para Sustentabilidade",
      position: "Desenvolvedor Web Frontend Jr.",
      act: "Desenvolve aplicações ReactJs/NextJs para a empresa",
      website: "https://www.orma.eco",
      isCurrent: false,
    },
    {
      logo: gssLogo,
      companyName: "GSS Carbono e Sustentabilidade",
      howLong: "de out. 2022 a abr. 2023",
      description: "Soluções Tecnológicas para Sustentabilidade",
      position: "Desenvolvedor Web Fullstack Jr.",
      act: "Desenvolve aplicações ReactJs/NextJs e Node.Js para a empresa",
      website: "https://www.gss.eco",
      isCurrent: false,
    },
  ],
  education: [
    {
      instName: "Etec Dra. Ruth Cardoso",
      inDate: "01/2011",
      outDate: "12/2013",
      type: "Ensino Médio",
      title: "Concluído",
      logo: etec,
    },
    {
      instName: "Etec Dra. Ruth Cardoso",
      inDate: "06/2012",
      outDate: "12/2013",
      type: "Ensino Técnico",
      title: "Técnico em Informática",
      logo: etec,
    },
    {
      instName: "Universidade São Judas",
      inDate: "01/2015",
      outDate: "12/2018",
      type: "Faculdade de Biomedicina",
      title: "Bacharelado em Ciências Biomédicas",
      logo: unimonte,
    },
    {
      instName: "Universidade Federal de São Paulo",
      inDate: "01/2019",
      outDate: "09/2021",
      type: "Pós-Graduação",
      title: "Mestrado em Ciências da Saúde",
      logo: unifesp,
    },
  ],
  stacks: [
    { logo: html, name: "HTML5", skill: 4 },
    { logo: css, name: "CSS3", skill: 3 },
    { logo: js, name: "Javascript", skill: 4 },
    { logo: ts, name: "Typescript", skill: 3 },
    { logo: next, name: "NextJS", skill: 4 },
    { logo: react, name: "ReactJS", skill: 4 },
    { logo: node, name: "NodeJS", skill: 3 },
    { logo: mongodb, name: "MongoDB", skill: 3 },
    { logo: sc, name: "Styled Components", skill: 3 },
    { logo: docker, name: "Docker", skill: 3 },
    { logo: actions, name: "Actions", skill: 3 },
    { logo: motion, name: "Framer Motion", skill: 3 },
    { logo: mui, name: "Material UI", skill: 3 },
    { logo: rest, name: "REST API", skill: 4 },
    { logo: velo, name: "Wix Velo", skill: 3 },
    { logo: "", name: "MySQL", skill: 3 },
  ],
  softskills: [
    { name: "Empatia", skill: "" },
    { name: "Comunicação efetiva", skill: "" },
    { name: "Colaboração", skill: "" },
    { name: "Pensamento crítico", skill: "" },
    { name: "Resolução de problemas", skill: "" },
    { name: "Adaptabilidade", skill: "" },
    { name: "Autodisciplina", skill: "" },
  ],
  portfolio: [
    {
      project: "Movimento Repenso",
      description:
        "Uma plataforma que permite que pequenas empresas realizem seu inventário anual de emissões de carbono com base em metodologias e diretrizes internacionalmente reconhecidas, como o Protocolo de Gases de Efeito Estufa. A plataforma pode fornecer um questionário estruturado para coletar informações sobre as atividades da empresa, como consumo de energia, transporte, resíduos e outras fontes relevantes. A plataforma conta com sistema de login, sistema de pagamentos e dashboard de usuários e admin, assim como CMS para gerenciamento de conteúdos do blog.",
      link: "https://www.repenso.eco",
      stacks: [
        "HTML5",
        "CSS3",
        "Javascript",
        "NextJS",
        "ReactJS",
        "GoLang",
        "Styled Components",
        "REST API",
        "MySQL",
      ],
      imgs: [],
    },
    {
      project: "Smartie Carbon",
      description:
        "Plataforma construida pela Orma Carbon para Solví a fim de promover a venda e compra de créditos de carbono, possui uma calculadora de emissões de automóveis e outra para emissões do dia-a-dia. A plataforma conta com sistema de login",
      link: "https://www.smartiecarbon.com.br",
      stacks: [
        "HTML5",
        "CSS3",
        "Javascript",
        "NextJS",
        "ReactJS",
        "NodeJS",
        "Styled Components",
        "REST API",
        "MySQL",
      ],
      imgs: [],
    },
    {
      project: "Calculadora de Emissões GSS + Inter",
      description:
        "Aplicação desenvolvida para o banco Inter que era acessada diretamente do aplicativo do mesmo e permitia a calcular as emissões pessoais e compensar comprando créditos de carbono. A aplicação conta com sistema de login de usuário, sistema de pagamentos, dashboard de usuário e de admin",
      link: "https://www.gsscarbon.com/calculadora/banco-inter",
      stacks: [
        "HTML5",
        "CSS3",
        "Javascript",
        "NextJS",
        "ReactJS",
        "NodeJS",
        "Styled Components",
        "REST API",
        "MongoDB",
      ],
      imgs: [],
    },
    {
      project:
        "Calculadora de Emissões de Automóveis GP Auto - uma parceria entre GP São Paulo + Smartie Carbon",
      description:
        "Aplicação que serviu para que espectadores do GP São Paulo pudessem medir e compensar as emissões de carbono de seus carros. O sistema contou com sistema de login e geração dos certificados em PDF e envio do mesmo para o email do usuário.",
      link: "https://www.smartiecarbon.com.br/gpsaopaulo",
      stacks: [
        "HTML5",
        "CSS3",
        "Javascript",
        "NextJS",
        "ReactJS",
        "NodeJS",
        "Styled Components",
        "REST API",
        "MongoDB",
      ],
      imgs: [],
    },
    {
      project: "Site da Orma Carbon",
      description: "Manutenção e atualização do site intitucional da empresa",
      link: "",
      stacks: [
        "HTML5",
        "CSS3",
        "Javascript",
        "NextJS",
        "ReactJS",
        "Styled Components",
      ],
      imgs: [],
    },
    {
      project: "Site da GSS",
      description: "Manutenção e atualização do site intitucional da empresa",
      link: "",
      stacks: [
        "HTML5",
        "CSS3",
        "Javascript",
        "NextJS",
        "ReactJS",
        "Styled Components",
      ],
      imgs: [],
    },
    {
      project: "Site da VBIO",
      description: "Manutenção e atualização do site intitucional da empresa",
      link: "",
      stacks: [
        "HTML5",
        "CSS3",
        "Javascript",
        "NextJS",
        "ReactJS",
        "NodeJS",
        "Styled Components",
        "REST API",
        "MongoDB",
      ],
      imgs: [],
    },
  ],
};

// {
//   project: "",
//   description: "",
//   link: "",
//   stacks: [],
//   imgs: []
// },
