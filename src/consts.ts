import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Mário Coxe",
  EMAIL: "mariocoxedev@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 1,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION:
    "Sou um programador full stack com experiência em Angular, React, Next.js e Vue.js, desenvolvendo interfaces modernas, responsivas e dinâmicas. No backend, trabalho com AdonisJS, Express e Laravel, criando APIs escaláveis, seguras e bem estruturadas. Além do desenvolvimento web, tenho experiência no desenvolvimento de aplicações móveis utilizando React Native, criando aplicações eficientes e optimizadas para Android e iOS. Possuo também conhecimentos básicos em redes de computadores, incluindo endereçamento IP, protocolos de comunicação (TCP/IP, HTTP, HTTPS), configuração básica de routers e switches, DNS, DHCP e segurança de redes. Tenho noções sobre arquitetura cliente-servidor, balanceamento de carga e alojamento de aplicações web, assegurando que os meus projectos sejam bem optimizados e funcionem de forma eficiente em diferentes ambientes.",
};


export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Uma coleção de artigos sobre tópicos pelos quais sou apaixonado.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Onde trabalhei e o que fiz.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Uma coleção dos meus projetos, com links para repositórios e demonstrações.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/markhorn-dev"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/markhorn-dev",
  },
  { 
    NAME: "instagram",
    HREF: "https://www.instagram.com/mariocoxe0",
  }
];
