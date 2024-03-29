'use client'

import { useTheme } from "@/app/context/ThemeProvider";
import { projects, skills, socialLinks, workExperiences } from "@/app/data";
import { CodeIcon, ContactIcon, SkillsIcon, SuiteCaseIcon } from "@/assets/icons";
import Image from "next/image";
import { useEffect } from "react";
import picture from '../assets/fabian.webp';
import styles from './page.module.css';
import Toggle from "@/app/components/Toggle";
import Header from "@/app/components/Header";
import Pill from "@/app/components/Pill";
import Section from "@/app/components/Section";
import Timeline from "@/app/components/Timeline";
import Card from "@/app/components/Card";
import Slider from "@/app/components/Slider";
import Form from "@/app/components/Form";

function Home() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      {
        theme === 'light' ? <div className={styles.lightBg}>
          <div></div>
        </div> : <div
          className={styles.darkBg}>
        </div>
      }
      <div className={styles.togglePosition}>
        <Toggle />
        <p className={styles.language}>EN</p>
      </div>

      <Header />
      <main className={styles.main}>
        <Section id="sobremi" marginTop="-80px">
          <section className={styles.aboutSection}>
            <header>
              <Image className={styles.image} src={picture} alt="Foto de Fabian Yate" loading="eager" />
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
                    <socialLink.Icon />
                  </Pill>
                ))
              }
            </div>
          </section>
        </Section>

        <Section id="experiencia" title="Experiencia Laboral" icon={<SuiteCaseIcon />}>
          <Timeline items={workExperiences} />
        </Section>

        <Section id="proyectos" title="Proyectos" icon={<CodeIcon />}>
          <div className={styles.bemto}>
            {
              projects.map((project, index) => (
                <Card key={index} project={project} />
              ))
            }
          </div>
        </Section>

        <Section id="habilidades" title="Habilidades" icon={<SkillsIcon />}>
          <div className={styles.skillsContainer}>
            <Slider data={[...skills.frontendSkills, ...skills.frontendSkills]} reverse={false} />
            <Slider data={[...skills.backendSkills, ...skills.backendSkills]} reverse />
            <div className={styles.rightShadow}></div>
            <div className={styles.leftShadow}></div>
          </div>
        </Section>

        <Section id="contacto" title="Contáctame" icon={<ContactIcon />}>
          <section className={styles.contact}>
            <div>
              <h3 className={styles.title}>Colaboremos para <span data-theme={theme}>crear</span> algo excepcional</h3>
              <p className={styles.message}>
                Si buscas un profesional dedicado y apasionado para concretar tus ideas, estoy disponible para discutir
                proyectos e innovaciones. Contáctame y juntos transformaremos tus visiones en realidades exitosas.
              </p>
            </div>
            <Form />
          </section>
        </Section>

      </main>
      <footer className={styles.footer}>
        <p>Fabian Yate Ramirez - Florencia, Colombia - 2023</p>
      </footer>
    </>
  )
}

export default Home