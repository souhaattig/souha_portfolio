import React, { useState, useEffect, useRef } from 'react';
import { skills } from '../data';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressProvider from './ProgressProvider';

const Skills = () => {
  const [animate, setAnimate] = useState(false);
  const skillsRef = useRef(null);

  const handleIntersect = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setAnimate(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.5, 
    });

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <> 
      {skills.map(({ title, percentage }, index) => (
        <div className="progress__box" key={index} ref={skillsRef}>
          <div className="progress__circle">
            <ProgressProvider valueStart={0} valueEnd={percentage}>
              {(value) => (
                <CircularProgressbar
                  strokeWidth={7.5}
                  text={`${animate ? value : 0}%`}
                  value={animate ? value : 0}
                />
              )}
            </ProgressProvider>
          </div>
          <h3 className='skills__title'>{title}</h3> 
        </div>
      ))}
    </>
  )
}

export default Skills;
