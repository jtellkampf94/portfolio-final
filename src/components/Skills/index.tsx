import { BsPatchCheckFill } from "react-icons/bs";
import "./index.scss";

const Skills: React.FC = () => {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Frontend Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small>Experienced</small>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill />
              <h4>CSS</h4>
              <small>Experienced</small>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill />
              <h4>Javascript</h4>
              <small>Experienced</small>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill />
              <h4>Typescript</h4>
              <small>Experienced</small>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill />
              <h4>SASS</h4>
              <small>Experienced</small>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill />
              <h4>React</h4>
              <small>Experienced</small>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill />
              <h4>NextJS</h4>
              <small>Experienced</small>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill />
              <h4>Redux</h4>
              <small>Experienced</small>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill />
              <h4>Apollo Client</h4>
              <small>Experienced</small>
            </article>
          </div>
        </div>

        <div className="skills__backend">
          <h3>Backend Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <BsPatchCheckFill />
              <h4>NodeJS</h4>
              <small>Experienced</small>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill />
              <h4>ExpressJS</h4>
              <small>Experienced</small>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill />
              <h4>GraphQL</h4>
              <small>Experienced</small>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill />
              <h4>Apollo Server</h4>
              <small>Experienced</small>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill />
              <h4>MongoDB</h4>
              <small>Experienced</small>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill />
              <h4>Mongoose</h4>
              <small>Experienced</small>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill />
              <h4>SQL</h4>
              <small>Experienced</small>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill />
              <h4>PostgreSQL</h4>
              <small>Experienced</small>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill />
              <h4>Typeorm</h4>
              <small>Experienced</small>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill />
              <h4>Redis</h4>
              <small>Experienced</small>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill />
              <h4>AWS S3</h4>
              <small>Experienced</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
