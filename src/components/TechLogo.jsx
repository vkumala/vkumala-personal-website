import python from "../assets/logo/python.png";

export default function TechLogo({ src, title }) {
  return (
    <div className="flex flex-col items-center justify-center bg-secondary text-center rounded-md p-4 h-30">
      <img className="w-20" src={src} alt={title} />
      <span>{title} </span>
    </div>
  );
}
