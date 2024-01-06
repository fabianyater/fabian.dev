import Header from '@/app/components/Header'
import styles from './page.module.css'
import picture from '../assets/fabian.jpg'
import Image from "next/image";
import {projects, socialLinks, workExperiences} from "@/app/utils";
import Pill from "@/app/components/Pill";
import Section from "@/app/components/Section";
import {CodeIcon, SuiteCaseIcon} from "@/assets/icons";
import Timeline from "@/app/components/Timeline";
import Card from "@/app/components/Card";

export default function Home() {
  return (
    <>
      <div
        className={styles.bg}>
      </div>
      <Header/>
      <main className={styles.main}>
        <section id="sobremi" className={styles.aboutSection}>
          <header>
            <Image className={styles.image} src={picture} alt="Foto de Fabian Yate"/>
            <h1 className={styles.name}>Hola, soy Fabian Yate</h1>
          </header>
          <p className={styles.description}>
            <span>Desarrollador Full-Stack</span> con +2 años de experiencia. Habilidades en <span>HTML, CSS, JavaScript y
            React</span> para el
            front-end, y <span>Java con Spring Boot</span> para el back-end.
            Conocimientos en bases de datos y API
            RESTful, enfocado
            en crear soluciones efectivas para aplicaciones web dinámicas.
          </p>
          <div className={styles.socialLinksContainer}>
            {
              socialLinks.map((socialLink, index) => (
                <Pill key={index} title={socialLink.name} url={socialLink.url}>
                  <socialLink.Icon/>
                </Pill>
              ))
            }
          </div>
        </section>

        <Section id="experiencia" title="Experiencia Laboral" icon={<SuiteCaseIcon/>}>
          <Timeline items={workExperiences}/>
        </Section>

        <Section id="proyectos" title="Proyectos" icon={<CodeIcon/>}>
          <div className={styles.bemto}>
            {
              projects.map((project, index) => (
                <Card project={project}/>
              ))
            }
          </div>
          <a className={styles.link} href="https://github.com/fabianyater?tab=repositories" target="_blank"
             style={{width: '120px', margin: '0 auto', marginTop: '40px'}}>Ver más</a>
        </Section>

      </main>
    </>
  )
}
