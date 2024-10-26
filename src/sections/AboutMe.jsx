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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          voluptatem reprehenderit minima! Possimus, ducimus. Accusamus commodi
          autem consequuntur tenetur et?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
          consequuntur, tempora veniam qui molestiae beatae odio quam nemo et a
          tempore perferendis culpa! Reiciendis quidem laudantium ipsum nisi
          temporibus doloremque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, illo.
        </p>{" "}
      </div>
    </div>
  );
}
