import {
  CodeIcon,
  CSSIcon, DockerIcon,
  GitHubIcon,
  HtmlIcon, JavaIcon, JavaScriptIcon,
  LinkedInIcon,
  NextJsIcon,
  ReactIcon, SpringIcon,
  TailwindIcon
} from "@/assets/icons";

export const links = [
  {
    id: 1,
    url: "#sobremi",
    title: "Sobre mí"
  },
  {
    id: 2,
    url: "#experiencia",
    title: "Experiencia"
  },
  {
    id: 3,
    url: "#proyectos",
    title: "Proyectos"
  },
  {
    id: 4,
    url: "#habilidades",
    title: "Habilidades"
  },
  {
    id: 5,
    url: "#contacto",
    title: "Contacto"
  },
]

export const socialLinks = [
  {
    name: 'Github',
    url: 'https://www.github.com/fabianyater',
    Icon: GitHubIcon
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/fabianyr',
    Icon: LinkedInIcon
  }
]

export const workExperiences = [
  {
    date: 'Julio 2023 - Actualidad',
    title: 'Descanso profesional',
    description: 'During my tenure at Sophos Solutions, I collaborated with Backbase, one of Sophos\'s international\n' +
      ' partners. My primary assignment involved WSECU (Washington State Employees Credit Union),\n' +
      ' providing me with a practical introduction to the nancial services sector and a chance to contribute to\n' +
      ' the partnership\'s goals.'
  },
  {
    date: 'Enero 2022 - Julio 2023',
    title: 'Engineer Trainee II - Sophos Solutions',
    description: 'During my tenure at Sophos Solutions, I collaborated with Backbase, one of Sophos\'s international\n' +
      ' partners. My primary assignment involved WSECU (Washington State Employees Credit Union),\n' +
      ' providing me with a practical introduction to the nancial services sector and a chance to contribute to\n' +
      ' the partnership\'s goals.'
  }
]

export const projects = [
  {
    title: "Linktree Clone",
    description: "Un clon del popular sitio web linktree.",
    tools: [
      {
        name: 'ReactJs',
        Icon: ReactIcon
      },
      {
        name: 'CSS',
        Icon: CSSIcon
      },
      {
        name: 'HTML',
        Icon: HtmlIcon
      },
      {
        name: 'JavaScript',
        Icon: JavaScriptIcon
      },
    ],
    links: [
      {
        name: "Código",
        Icon: GitHubIcon,
        url: "https://github.com/fabianyater/clon-linktree",
        title: 'Ver código'
      },
      {
        name: "Ver",
        Icon: CodeIcon,
        url: "https://personallinks.netlify.app/",
        title: 'Ver despliegue'
      },
    ],
    cardColor: "#d5d116"
  },
]