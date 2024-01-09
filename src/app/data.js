import {
  CodeIcon, ContactIcon,
  CSSIcon,
  DockerIcon,
  DocumentIcon,
  GitHubIcon,
  HtmlIcon,
  JavaIcon,
  JavaScriptIcon,
  JwtIcon,
  LinkedInIcon,
  PostgreSQLIcon,
  PostmanIcon,
  ReactIcon,
  ReactQueryIcon,
  SpringIcon,
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
  },
  {
    name: 'fabianyr.dev@gmail.com',
    url: 'mailto:fabianyr.dev@gmail.com',
    Icon: ContactIcon
  },
  {
    name: 'CV',
    url: 'https://fabian_150299.hackerresume.io/f550cd0a-ad54-4eb6-9122-3fc528525f49',
    Icon: DocumentIcon
  },
]

export const workExperiences = [
  {
    date: 'Julio 2023 - Diciembre 2023 (5 meses)',
    title: 'Proyecto Personal y Desarrollo Profesional Independiente',
    description: 'Durante este periodo de descanso profesional, he enfocado mi tiempo en el desarrollo personal y en la' +
      ' ejecución de diversos proyectos independientes. Durante este tiempo, he dedicado esfuerzos significativos a ' +
      'trabajar en mí mismo y en iniciativas personales. Esto incluye la realización de proyectos autónomos, ' +
      'el fortalecimiento de habilidades técnicas y la exploración de nuevas oportunidades en el ámbito profesional. ' +
      '\n Aunque no estuve vinculado formalmente a ninguna compañ+ia, este período me brindó la oportunidad de cultivar ' +
      'habilidades y conocimientos valiosos a través de experiencias autodirigidas.',
    tasks: []
  },
  {
    date: 'Enero 2022 - Julio 2023 (1 año y 7 meses)',
    title: 'Engineer Trainee II - Sophos Solutions',
    description: 'Durante mi estancia en Sophos Solutions, colaboré con Backbase, uno de los socios internacionales ' +
      'de Sophos. Mi principal tarea fue con WSECU (Washington State Employees Credit Union), lo que me proporcionó ' +
      'una introducción práctica al sector de los servicios financieros y la oportunidad de contribuir a los objetivos ' +
      'de la asociación.',
    tasks: [
      {
        item: 'Migración: Contribuí a actualizar la tecnología de WSECU mediante la migración de código antiguo a una ' +
          'nueva aplicación, lo que ayudó a mejorar la eficiencia y escalabilidad del sistema.'
      },
      {
        item: 'Pruebas: Participé en el desarrollo y la realización de pruebas unitarias y de integración, que ayudaron' +
          ' a reducir errores y problemas de compatibilidad en nuestro software.'
      },
      {
        item: 'Desarrollo de funciones: Desempeñé un papel en el desarrollo e implementación de nuevas características ' +
          'para la aplicación WSECU, mejorando la experiencia del usuario y ampliando las funcionalidades del sistema.'
      }
    ]
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
  /*{
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
  },*/
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
    cardColor: "#8787fa"
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
        title: 'Vista previa pronto...'
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
        title: ''
      },
    ],
    cardColor: "#17bfce"
  },
]

export const frontendSkills = [
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

export const backendSkills = [
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
    name: 'PostgresSQL',
    Icon: PostgreSQLIcon
  },
  {
    name: 'Postman',
    Icon: PostmanIcon
  }
]