import WelcomeImg from "../assets/welcome.jpg";

export default function Welcome() {
  return (
    <div className="py-10 bg-primary ">
      <div className="max-w-screen-xl mx-auto px-10 ">
        <div className=" flex justify-center items-center gap-10 ">
          <div className=" w-2/3 text-dark">
            <p className="text-2xl">Hello there! &#x1F64B;</p>
            <h1 className="text-4xl py-3 font-semibold">
              Welcome to my website!
            </h1>
            <h2 className="text-2xl  py-2">
              My name is Verdiana. I'm passionate software developer and chasing
              career in the web development
            </h2>
            <button className="bg-secondary  py-2 px-4   rounded-md border my-4">
              See my work &rarr;
            </button>
          </div>
          <img
            className=" w-1/3 border-8 border-light"
            src={WelcomeImg}
            alt="welcome"
          />
        </div>
      </div>
    </div>
  );
}
