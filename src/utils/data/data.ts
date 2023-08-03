import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import lattes from "@images/Lattes.png";

import html from "@images/html.png";
import css from "@images/css.png";
import js from "@images/js.png";
import next from "@images/next2.png";
import react from "@images/React2.png";
import node from "@images/node.png";
import ts from "@images/ts.png";
import sc from "@images/styled.png";
import docker from "@images/docker.png";
import actions from "@images/actions.png";
import motion from "@images/framer-motion.png";
import mui from "@images/mui.png";
import rest from "@images/rest.png";
import velo from "@images/velo.png";
import mongodb from "@images/mongodb.svg";
import mysql from "@images/mysql.png";

import ormaLogo from "@images/orma logo.svg";
import gssLogo from "@images/gss.svg";

import etec from "@images/etec.png";
import unimonte from "@images/unimonte.png";
import unifesp from "@images/unifesp.png";

export const ptBR = {
  personal: {
    name: "Kevin Pereira Marangoni",
    position: "Desenvolvedor Javascript Web Fullstack",
    level: "Pleno",
    salary: "R$ 4500 a R$ 6500",
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
        "Sou um profissional realizado, com Bacharelado em Biomedicina e Mestrado em Ciências da Saúde. Minha trajetória sempre foi impulsionada por uma profunda fascinação pela biologia, combinada com uma genuína paixão por computadores e programação. Ao longo de minhas experiências acadêmicas e profissionais, aprimorei minhas habilidades em ambos os campos, tornando-me um recurso versátil e valioso para qualquer organização.",
      looking:
        "Estou ativamente buscando oportunidades para contribuir com minha expertise em projetos e empresas que compartilham do meu compromisso com o crescimento da sociedade e a valorização da diversidade. Acredito firmemente em tratar as pessoas como indivíduos únicos, acolhendo a diversidade e promovendo um ambiente de trabalho inclusivo. Se me for concedida a oportunidade, almejo fazer parte de uma equipe que valorize as perspectivas de cada membro, impulsionando a inovação e a mudança positiva.",
      want: "Com um amplo conhecimento em ferramentas Fullstack, frameworks e diversas outras tecnologias, estou ansioso para empregar minhas habilidades para atender às necessidades da sua empresa. Tenho o desejo de colaborar com equipes multidisciplinares, reconhecendo o imenso valor em aprender com a diversidade de experiências e conhecimentos de cada colega. Trabalhando juntos, podemos alcançar resultados notáveis e evoluir constantemente neste cenário digital em constante transformação.",
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
    { logo: mysql, name: "MySQL", skill: 3 },
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
      description: "Uma plataforma que permite que pequenas empresas realizem seu inventário anual de emissões de carbono, seguindo metodologias e diretrizes internacionalmente reconhecidas, como o Protocolo de Gases de Efeito Estufa. A plataforma oferece um questionário estruturado para coletar informações sobre as atividades da empresa, como consumo de energia, transporte, resíduos e outras fontes relevantes. Ela conta com sistema de login, sistema de pagamentos, dashboard de usuários e admin, além de um CMS para gerenciamento de conteúdos do blog.",
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
      imgs: [
        "@images/portfolio/repenso/Screenshot_1.png",
        "@images/portfolio/repenso/Screenshot_2.png",
        "@images/portfolio/repenso/Screenshot_3.png",
        "@images/portfolio/repenso/Screenshot_4.png",
        "@images/portfolio/repenso/Screenshot_5.png",
        "@images/portfolio/repenso/Screenshot_6.png",
        "@images/portfolio/repenso/Screenshot_7.png",
        "@images/portfolio/repenso/Screenshot_8.png",
        "@images/portfolio/repenso/Screenshot_9.png",
        "@images/portfolio/repenso/Screenshot_10.png",
        "@images/portfolio/repenso/Screenshot_11.png",
        "@images/portfolio/repenso/Screenshot_12.png",
        "@images/portfolio/repenso/Screenshot_13.png",
        "@images/portfolio/repenso/Screenshot_14.png",
        "@images/portfolio/repenso/Screenshot_15.png",
      ],
    },
    {
      project: "Smartie Carbon",
      description: "Plataforma construída pela Orma Carbon para a Solví, visando promover a venda e compra de créditos de carbono, com calculadoras para emissões de automóveis e do dia-a-dia. A plataforma conta com sistema de login para garantir a privacidade dos usuários.",
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
      imgs: [
        "@images/portfolio/smartie Carbon/Screenshot_1.png",
        "@images/portfolio/smartie Carbon/Screenshot_2.png",
        "@images/portfolio/smartie Carbon/Screenshot_3.png",
        "@images/portfolio/smartie Carbon/Screenshot_4.png",
        "@images/portfolio/smartie Carbon/Screenshot_5.png",
      ],
    },
    {
      project: "Calculadora de Emissões GSS + Inter",
      description:"Aplicação desenvolvida para o banco Inter e acessada diretamente pelo aplicativo, permitindo aos usuários calcular suas emissões pessoais e compensá-las comprando créditos de carbono. A aplicação possui sistema de login de usuário, sistema de pagamentos e dashboards tanto para usuários quanto para administradores.",
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
      imgs: [
        "@images/portfolio/banco-inter/Screenshot_1.png",
        "@images/portfolio/banco-inter/Screenshot_2.png",
        "@images/portfolio/banco-inter/Screenshot_3.png",
        "@images/portfolio/banco-inter/Screenshot_4.png",
        "@images/portfolio/banco-inter/Screenshot_5.png",
        "@images/portfolio/banco-inter/Screenshot_6.png",
        "@images/portfolio/banco-inter/Screenshot_7.png",
        "@images/portfolio/banco-inter/Screenshot_8.png",
      ],
    },
    {
      project: "Calculadora de Emissões Automotivas - Parceria GP São Paulo + Smartie Carbon",
      description: "Aplicação que permitiu aos espectadores do GP São Paulo medir e compensar as emissões de carbono de seus carros. O sistema inclui sistema de login e geração de certificados em PDF, enviados automaticamente para o email do usuário.",
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
      imgs: [
        "@images/portfolio/auto gp/Screenshot_1.png",
        "@images/portfolio/auto gp/Screenshot_2.png",
        "@images/portfolio/auto gp/Screenshot_3.png",
        "@images/portfolio/auto gp/Screenshot_4.png",
      ],
    },
    {
      project: "Site da Orma Carbon",
      description: "Manutenção e atualização do site institucional da empresa, apresentando os valores e serviços oferecidos pela Orma Carbon.",
      link: "https://www.orma.eco",
      stacks: [
        "HTML5",
        "CSS3",
        "Javascript",
        "NextJS",
        "ReactJS",
        "Styled Components",
      ],
      imgs: [
        "@images/portfolio/orma/Screenshot_1.png",
        "@images/portfolio/orma/Screenshot_2.png",
        "@images/portfolio/orma/Screenshot_3.png",
        "@images/portfolio/orma/Screenshot_4.png",
        "@images/portfolio/orma/Screenshot_5.png",
        "@images/portfolio/orma/Screenshot_6.png",
      ],
    },
    {
      project: "Site da GSS",
      description: "Manutenção e atualização do site institucional da empresa, destacando seus projetos e contribuições para a sustentabilidade.",
      link: "https://www.gss.eco",
      stacks: [
        "HTML5",
        "CSS3",
        "Javascript",
        "NextJS",
        "ReactJS",
        "Styled Components",
      ],
      imgs: [
        "@images/portfolio/gss/Screenshot_1.png",
        "@images/portfolio/gss/Screenshot_2.png",
      ],
    },
    {
      project: "Site da VBIO",
      description: "Manutenção e atualização do site institucional da empresa, fornecendo informações sobre suas atividades e compromisso com a preservação do meio ambiente.",
      link: "https://www.vbio.eco",
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
      imgs: [
        "@images/portfolio/vbio/Screenshot_1.png",
        "@images/portfolio/vbio/Screenshot_2.png",
        "@images/portfolio/vbio/Screenshot_3.png",
        "@images/portfolio/vbio/Screenshot_4.png",
      ],
    },
  ],
};
