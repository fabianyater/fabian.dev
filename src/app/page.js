'use client'

import { useTheme } from "@/app/context/ThemeProvider";
import { projects, skills, socialLinks, workExperiences } from "@/app/data";
import { CodeIcon, ContactIcon, SkillsIcon, SuiteCaseIcon } from "@/assets/icons";
import Card from "@/components/Card";
import Header from "@/components/Header";
import Input from "@/components/Input";
import Pill from "@/components/Pill";
import Section from "@/components/Section";
import Slider from "@/components/Slider";
import Timeline from "@/components/Timeline";
import Toggle from "@/components/Toggle";
import Image from "next/image";
import { useEffect } from "react";
import picture from '../assets/fabian.webp';
import styles from './page.module.css';

function Home() {
  const {theme} = useTheme();

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
        <section id="sobremi" className={styles.aboutSection}>
          <header>
            <Image className={styles.image} src={picture} alt="Foto de Fabian Yate" loading="eager"/>
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

        <Section id="experiencia" title="Experiencia Laboral" icon={<SuiteCaseIcon />}>
          <Timeline items={workExperiences}/>
        </Section>

        <Section id="proyectos" title="Proyectos" icon={<CodeIcon />}>
          <div className={styles.bemto}>
            {
              projects.map((project, index) => (
                <Card key={index} project={project}/>
              ))
            }
          </div>
          <a className={styles.link} href="https://github.com/fabianyater?tab=repositories" target="_blank"
             style={{width: '120px', margin: '0 auto', marginTop: '40px'}}>Ver más</a>
        </Section>

        <Section id="habilidades" title="Habilidades" icon={<SkillsIcon />}>
          <div className={styles.skillsContainer}>
            <Slider data={[...skills.frontendSkills, ...skills.frontendSkills]} reverse={false}/>
            <Slider data={[...skills.backendSkills, ...skills.backendSkills]} reverse/>
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
            <form className={styles.form}>
              <Input type="text" name="fullname" placeholder="Nombre completo"/>
              <Input type="email" name="email" placeholder="Correo"/>
              <textarea rows={8} name="message" placeholder="Descripción"/>
              <button type="submit" title="En desarrollo..." disabled>En desarrollo...</button>
            </form>
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