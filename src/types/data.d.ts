export interface Links {
    github: string;
    linkedin: string;
    lattes: string;
    instagram: string;
  }
  
export interface Language {
    name: string;
    skill: number;
  }
  
export interface Contact {
    phone: string;
    whatsapp: string;
    email: string;
  }
  
export interface Info {
    about: string;
    looking: string;
    want: string;
  }
  
export interface Work {
    logo: string;
    companyName: string;
    howLong: string;
    description: string;
    position: string;
    act: string;
    website: string;
    isCurrent: boolean;
  }
  
export interface Education {
    instName: string;
    inDate: string;
    outDate: string;
    type: string;
    title: string;
    logo: string;
  }
  
export interface Stack {
    logo: string;
    name: string;
    skill: number;
  }
  
export interface SoftSkill {
    name: string;
    skill: string;
  }
  
export interface Portfolio {
    project: string;
    description: string;
    link: string;
    stacks: string[];
    imgs: string[];
  }
  
export interface Personal {
      name: string;
      position: string;
      level: string;
      salary: string;
      links: Links;
      language: Language[];
      contact: Contact;
      info: Info;
  }

export interface Data {
    personal: Personal;
    work: Work[];
    education: Education[];
    stacks: Stack[];
    softskills: SoftSkill[];
    portfolio: Portfolio[];
}