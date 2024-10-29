import { EXPERIENCES, EDUCATIONS } from "../assets/cv.js";
import EducationItem from "../components/EducationItem.jsx";
import ExperienceItem from "../components/ExperienceItem.jsx";
import SectionTitle from "../components/SectionTitle";
import angularLogo from "../assets/angular_logo.png";
import reactLogo from "../assets/react_logo.png";
import vueLogo from "../assets/Vue.png";

export default function Resume() {
  return (
    <>
      <div id="techstack" className=" max-w-screen-lg mx-auto my-10">
        <SectionTitle>My Tech Stacks</SectionTitle>
        <div>Programming language</div>
        <div className="grid grid-cols-12 gap-4">
          <img src={angularLogo} alt="angular_logo" />
          <img src={reactLogo} alt="angular_logo" />
          <img src={vueLogo} alt="angular_logo" />
        </div>
        <div>Frontend</div>
        <div className="grid grid-cols-12 gap-4">
          <img src={angularLogo} alt="angular_logo" />
          <img src={reactLogo} alt="angular_logo" />
          <img src={vueLogo} alt="angular_logo" />
        </div>
        <div>Backend</div>
        <div className="grid grid-cols-12 gap-4">
          <img src={angularLogo} alt="angular_logo" />
          <img src={reactLogo} alt="angular_logo" />
          <img src={vueLogo} alt="angular_logo" />
        </div>
        <div>Database</div>
        <div className="grid grid-cols-12 gap-4">
          <img src={angularLogo} alt="angular_logo" />
          <img src={reactLogo} alt="angular_logo" />
          <img src={vueLogo} alt="angular_logo" />
        </div>
        <div>Other</div>
        <div className="grid grid-cols-12 gap-4">
          <img src={angularLogo} alt="angular_logo" />
          <img src={reactLogo} alt="angular_logo" />
          <img src={vueLogo} alt="angular_logo" />
        </div>
      </div>
      <div id="expedu" className="max-w-screen-lg mx-auto my-10">
        <SectionTitle>Experience</SectionTitle>
        {EXPERIENCES.map((exp, id) => (
          <ExperienceItem experience={exp} key={id} />
        ))}
      </div>
      <div className="max-w-screen-lg mx-auto my-10">
        <SectionTitle>Education</SectionTitle>

        {EDUCATIONS.map((edu, id) => (
          <EducationItem education={edu} key={id} />
        ))}
      </div>

      <div className="text-center">
        <a
          className="py-4 px-20  bg-primary border-2 inline-block rounded-xl"
          href="Lebenslauf.pdf"
          target="_blank"
        >
          See my resume in German
        </a>
      </div>
    </>
  );
}
