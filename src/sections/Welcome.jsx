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
            <p className="text-2xl  py-2">
              My name is Verdiana. I'm passionate software developer and chasing
              career in the web development
            </p>
            <p className="text-2xl  py-2">Based in Berlin</p>

            <button className="bg-secondary  py-2 px-4  rounded-md border mt-5">
              <a href="https://github.com/vkumala">
                Check out my GitHub <ion-icon name="logo-github"></ion-icon>
              </a>
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
