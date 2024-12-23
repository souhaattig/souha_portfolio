import React, { useEffect, useRef, useState } from "react";
import Info from "../../Components/Info";
import { FaDownload } from "react-icons/fa";
import CV from "../../assets/blue.png";
import cvSouha from "../../assets/CVSouha.pdf" ;
import Stats from "../../Components/Stats";
import "./About.css";
import Skills from "../../Components/Skills";
import { resume } from "../../data";
import ResumeItem from "../../Components/ResumeItem";
import HTMLReactParser from 'html-react-parser'

const About = () => {
  const [animate, setAnimate] = useState(false);
  const resumeContainerRef = useRef(null);

  const handleIntersect = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setAnimate(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.5, // Adjust this threshold as needed
    });

    if (resumeContainerRef.current) {
      observer.observe(resumeContainerRef.current);
    }

    return () => {
      if (resumeContainerRef.current) {
        observer.unobserve(resumeContainerRef.current);
      }
    };
  }, []);

  return (
    <main className="section container">
      <section className="about">
      <h2 className="section__title">
          About <span>Me</span>
        </h2>
        <div className="about__container grid">
          <div className="about__info">
            <h3 className="section__subtitle">Personal Infos</h3>
            <ul className="info__list grid">
              <Info />
            </ul>
            <a href={cvSouha} target="_blank" className="button">
              {" "}
              Download CV
              <span className="button__icon">
                <FaDownload />
              </span>
            </a>
          </div>
          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>

      <div className="separator"></div>

      <section className="skills">
      <h3 className="section__subtitle subtitle__center">My Skills</h3>
        <div className="skills__container grid">
          <Skills />
        </div>
      </section>

      <div className="separator"></div>

      <section className="resume" ref={resumeContainerRef}>
        <h3 className="section__subtitle subtitle__center">
          Experience & Education
        </h3>
        <div className="resume__container grid">
          <div className={`resume__data ${animate ? "animate" : ""}`}>
            {resume.map((val) => {
              if (val.category === "experience") {
                return <ResumeItem key={val.id} {...val} />;
              }
            })}
          </div>

          <div className={`resume__data ${animate ? "animate" : ""}`}>
            {resume.map((val) => {
              if (val.category === "education") {
                return <ResumeItem key={val.id} {...val} />;
              }
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
