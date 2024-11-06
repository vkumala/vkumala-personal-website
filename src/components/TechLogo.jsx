import python from "../assets/logo/python.png";

export default function TechLogo({ src, title }) {
  return (
    <div className="relative flex flex-col items-center justify-center bg-secondary text-center rounded-md p-4 h-48">
      <img className="w-full h-auto" src={src} alt={title} />
      <span className="absolute bottom-1">{title} </span>
    </div>
  );
}
