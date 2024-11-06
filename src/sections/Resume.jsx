import { EXPERIENCES, EDUCATIONS } from "../cv.js";
import EducationItem from "../components/EducationItem.jsx";
import ExperienceItem from "../components/ExperienceItem.jsx";
import SectionTitle from "../components/SectionTitle";
import python from "../assets/logo/python.png";
import js from "../assets/logo/js.png";
import html from "../assets/logo/html5.png";
import css from "../assets/logo/css3.png";
import angular from "../assets/logo/angular.png";
import vue from "../assets/logo/vue.png";
import react from "../assets/logo/react.png";
import TechLogo from "../components/TechLogo.jsx";
import ionic from "../assets/logo/ionic.png";
import vuetify from "../assets/logo/vuetify.png";
import bootstrap from "../assets/logo/bootstrap.png";
import node from "../assets/logo/node.svg";
import flask from "../assets/logo/flask.png";
import mongodb from "../assets/logo/mongodb.png";
import influxdb from "../assets/logo/influxdb.png";
import azure from "../assets/logo/azure.png";
import devops from "../assets/logo/devops.png";
import git from "../assets/logo/git.png";
import grafana from "../assets/logo/grafana.svg";
import nodered from "../assets/logo/nodered.png";
import office from "../assets/logo/office.png";

export default function Resume() {
  return (
    <div className=" py-10">
      <div className="max-w-screen-xl mx-auto px-10 ">
        <div id="techstack">
          <SectionTitle>Tech Stacks</SectionTitle>
          <div>Frontend</div>
          <div className="grid grid-cols-8 gap-4">
            <TechLogo src={html} title="HTML5" />
            <TechLogo src={css} title="CSS3" />
            <TechLogo src={js} title="JavaScript" />
            <TechLogo src={angular} title="Angular" />
            <TechLogo src={vue} title="Vue" />
            <TechLogo src={react} title="React" />
          </div>
          <div>CSS-Frameworks</div>
          <div className="grid grid-cols-8 gap-4">
            <TechLogo src={ionic} title="Ionic" />
            <TechLogo src={bootstrap} title="Bootstrap" />
            <TechLogo src={vuetify} title="Vuetify" />
          </div>
          <div>Backend</div>
          <div className="grid grid-cols-8 gap-4">
            <TechLogo src={node} title="Node.js" />
            <TechLogo src={flask} title="Flask" />
          </div>{" "}
          <div>Programming language</div>
          <div className="grid grid-cols-8 gap-4">
            <TechLogo src={python} title="Python" />
          </div>
          <div>Database</div>
          <div className="grid grid-cols-8 gap-4">
            <TechLogo src={mongodb} title="MongoDB" />
            <TechLogo src={influxdb} title="InfluxDB" />
          </div>
          <div>Other</div>
          <div className="grid grid-cols-8 gap-4">
            <TechLogo src={git} title="Git" />
            <TechLogo src={azure} title="Azure" />
            <TechLogo src={devops} title="DevOps" />
            <TechLogo src={grafana} title="Grafana" />
            <TechLogo src={nodered} title="Nodered" />
            <TechLogo src={office} title="Microsoft Office" />
          </div>
        </div>
        <div id="expedu">
          <SectionTitle>Work Experiences</SectionTitle>
          {EXPERIENCES.map((exp, id) => (
            <ExperienceItem experience={exp} key={id} />
          ))}{" "}
          <SectionTitle>Education</SectionTitle>
          {EDUCATIONS.map((edu, id) => (
            <EducationItem education={edu} key={id} />
          ))}
        </div>

        <div className="text-center pt-10">
          <a
            className="py-4 px-20  bg-primary border-2 inline-block rounded-xl"
            href="Lebenslauf.pdf"
            target="_blank"
          >
            See my full resume in German
          </a>
        </div>
      </div>
    </div>
  );
}
