export default function Header() {
  return (
    <div className="h-[100px] flex justify-between items-center py-4 px-4 bg- text-dark ">
      <h1 className="text-4xl font-semibold ">Verdiana Kumala</h1>
      <div className="flex justify-between items-center uppercase">
        <nav>
          <ul className="flex justify-between items-center gap-4  text-slate-400  ">
            <li className="hover:underline hover:underline-offset-8 hover:cursor-pointer">
              <a href="#aboutme"> About Me</a>
            </li>
            <li className="hover:underline hover:underline-offset-8  hover:cursor-pointer">
              <a href="#techstack"> Tech Stacks</a>
            </li>
            <li className="hover:underline hover:underline-offset-8  hover:cursor-pointer">
              <a href="#expedu"> RESUME</a>
            </li>

            <button className="bg-secondary  py-2 px-4 ms-4 rounded-md border">
              Contact US
            </button>
          </ul>
        </nav>
      </div>
    </div>
  );
}
