import SectionTitle from "../components/SectionTitle";
import PortraitImg from "../assets/portrait.jpg";

export default function AboutMe() {
  return (
    <div id="#aboutme" className=" py-10  bg-light text-dark  ">
      <div className="max-w-screen-xl mx-auto px-10 ">
        <div className="flex justify-center gap-10 items-center ">
          <img className="w-[300px]" src={PortraitImg} alt="asdasd" />
          <div>
            <SectionTitle>About Me</SectionTitle>
            <p className="mb-2">
              I'm a (wannabe) full-stack developer with a passion for creating
              user-friendly, beautiful, and impactful websites and apps. I bring
              a well-rounded understanding of both backend and frontend
              development to my work. I have an engineering background in
              Computational Engineering Science and hands-on experience as a
              software developer. I’m particularly interested in designing and
              building intuitive, efficient user interfaces that make a real
              difference to users.
            </p>
            <p className="mb-2">
              I’m always looking for opportunities to dive into challenging
              projects and expand my skills. Working in a dynamic,
              project-driven environment is where I thrive, and I enjoy
              collaborating with teams that push the boundaries of web
              development.
            </p>
            <p>
              I originally come metropole Jakarta, Indonesia, and have been
              living in Berlin for the past 13 years. This multicultural
              background has given me a unique perspective and adaptability,
              which I bring into my work and daily life. When I'm not coding,
              you can find me in the kitchen cooking delicious and spicy food,
              on the couch strumming my ukulele, or at work table diving into a
              sewing project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
