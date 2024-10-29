import SectionTitle from "../components/SectionTitle";
import PortraitImg from "../assets/portrait.jpg";

export default function AboutMe() {
  return (
    <div
      id="#aboutme"
      className="flex justify-center gap-[100px] items-center py-10 bg-light text-dark "
    >
      <img className="w-[300px]" src={PortraitImg} alt="asdasd" />
      <div className="w-1/4">
        <SectionTitle>About Me</SectionTitle>
        <p>
          I'm a full-stack developer with a passion for creating user-friendly,
          impactful websites. With a background in Computational Engineering
          Science and hands-on experience as a software developer, I bring a
          well-rounded understanding of both backend and frontend development to
          my work. I’m particularly interested in designing and building
          intuitive, efficient user interfaces that make a real difference to
          users.
        </p>
        <p>
          I’m always looking for opportunities to dive into challenging projects
          and expand my skills. Working in a dynamic, project-driven environment
          is where I thrive, and I enjoy collaborating with teams that push the
          boundaries of web development.
        </p>
        <p>
          When I'm not coding, you can find me strumming a tune on my ukulele or
          diving into a sewing project.
        </p>
      </div>
    </div>
  );
}
