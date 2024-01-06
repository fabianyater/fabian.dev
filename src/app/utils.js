import {
  CodeIcon, ContactIcon,
  CSSIcon,
  DockerIcon,
  GitHubIcon, GitIcon,
  HtmlIcon,
  JavaIcon,
  JavaScriptIcon,
  JwtIcon,
  LinkedInIcon,
  ReactIcon,
  ReactQueryIcon,
  SpringIcon,
  TailwindIcon
} from "@/assets/icons";

import PostgreSqlIcon from '@/assets/icons/postgresql.svg'
import IntellijIcon from '@/assets/icons/intellijidea.svg'


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
  },
  {
    name: 'fabianyr.dev@gmail.com',
    url: 'mailto:fabianyr.dev@gmail.com',
    Icon: ContactIcon
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
    title: 'Cámara',
    description: 'Cámara web versátil: grabación, captura automática, múltiples funciones.',
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
      }
    ],
    links: [
      {
        name: "Código",
        Icon: GitHubIcon,
        url: "https://github.com/fabianyater/webcam",
        title: 'Ver código'
      },
      {
        name: "Ver",
        Icon: CodeIcon,
        url: "https://homemade-webcamera.vercel.app/",
        title: 'Ver despliegue'
      },
    ],
    cardColor: "#989dcc"
  },
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
    cardColor: "#119673"
  },
  {
    title: 'Aplicación del clima',
    description: 'Aplicación del clima para la Hackaton de @midudev',
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
      }
    ],
    links: [
      {
        name: "Código",
        Icon: GitHubIcon,
        url: "https://github.com/fabianyater/hackaton-weather-app",
        title: 'Ver código'
      },
      {
        name: "Ver",
        Icon: CodeIcon,
        url: "https://fyrdev-weatherapp.netlify.app/",
        title: 'Ver despliegue'
      },
    ],
    cardColor: "#318bf3"
  },
  {
    title: 'Temporizador',
    description: 'Aplicación para crear recordatorios',
    tools: [
      {
        name: 'ReactJs',
        Icon: ReactIcon
      },
      {
        name: 'Tailwind',
        Icon: TailwindIcon
      },
      {
        name: 'HTML',
        Icon: HtmlIcon
      },
      {
        name: 'JavaScript',
        Icon: JavaScriptIcon
      }
    ],
    links: [
      {
        name: "Código",
        Icon: GitHubIcon,
        url: "https://github.com/fabianyater/countdown-app",
        title: 'Ver código'
      },
      {
        name: "Ver",
        Icon: CodeIcon,
        url: "https://countdown-app-five.vercel.app/",
        title: 'Ver despliegue'
      },
    ],
    cardColor: "#4f4fe5"
  },
  {
    title: 'Compresor de imágenes',
    description: 'Aplicación para reducir tamaño de imágenes',
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
      }
    ],
    links: [
      {
        name: "Código",
        Icon: GitHubIcon,
        url: "https://github.com/fabianyater/basic-image-compressor",
        title: 'Ver código'
      },
      {
        name: "Ver",
        Icon: CodeIcon,
        url: "https://reduceimage.netlify.app/",
        title: 'Ver despliegue'
      },
    ],
    cardColor: "#a7a5a5"
  },
  {
    title: 'My Wallet | Frontend',
    description: 'Administrar ingresos y gastos',
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
      {
        name: 'React Query',
        Icon: ReactQueryIcon
      }
    ],
    links: [
      {
        name: "Código",
        Icon: GitHubIcon,
        url: "https://github.com/fabianyater/wallet-web",
        title: 'Ver código'
      },
      {
        name: "Ver",
        Icon: CodeIcon,
        url: null,
        title: 'Ver despliegue'
      },
    ],
    cardColor: "#0BD08A"
  },
  {
    title: 'My Wallet | Backend',
    description: 'Administrar ingresos y gastos',
    tools: [
      {
        name: 'Java',
        Icon: JavaIcon
      },
      {
        name: 'Spring boot',
        Icon: SpringIcon
      },
      {
        name: 'Docker',
        Icon: DockerIcon
      },
      {
        name: 'Jwt',
        Icon: JwtIcon
      }
    ],
    links: [
      {
        name: "Código",
        Icon: GitHubIcon,
        url: "https://github.com/fabianyater/wallet-mono",
        title: 'Ver código'
      },
      {
        name: "Ver",
        Icon: CodeIcon,
        url: null,
        title: 'Ver despliegue'
      },
    ],
    cardColor: "#ab2461"
  },
]

export const skills = [
  {
    name: 'Java',
    Icon: JavaIcon
  },
  {
    name: 'Spring',
    Icon: SpringIcon
  },
  {
    name: 'Docker',
    Icon: DockerIcon
  },
  {
    name: 'Jwt',
    Icon: JwtIcon
  },
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
  {
    name: 'React Query',
    Icon: ReactQueryIcon
  },
  {
    name: 'Tailwind',
    Icon: TailwindIcon
  },
]