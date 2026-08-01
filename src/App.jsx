// App.jsx – Root component; imports data and assembles all sections
import './index.css';

import {
  personal,
  about,
  education,
  skills,
  projects,
  interests,
  accomplishments,
  experience,
} from './data/portfolioData';

import Navbar          from './components/Navbar/Navbar';
import Hero            from './components/Hero/Hero';
import About           from './components/About/About';
import Education       from './components/Education/Education';
import Experience      from './components/Experience/Experience';
import Skills          from './components/Skills/Skills';
import Projects        from './components/Projects/Projects';
import Accomplishments from './components/Accomplishments/Accomplishments';
import Interests       from './components/Interests/Interests';
import Contact         from './components/Contact/Contact';
import Footer          from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Navbar name={personal.name} />
      <Hero personal={personal} />
      <About about={about} personal={personal} />
      <Experience experience={experience} />
      <Education education={education} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Accomplishments accomplishments={accomplishments} />
      <Interests interests={interests} />
      <Contact personal={personal} />
      <Footer name={personal.name} />
    </>
  );
}
