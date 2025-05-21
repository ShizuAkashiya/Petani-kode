import { Link } from "react-router-dom";
import heroImage from "../assets/hero.svg";


const Hero = () => {
  return (
    <header className="text-gray-100 bg-slate-800">
      <div className="container mx-auto px-4 lg:max-w-7xl py-24 text-center md:text-left flex flex-col md:flex-row relative">
        

        <div className="absolute right-0 bottom-0 md:w-96 lg:w-2/5">
          <img
            src={heroImage}
            alt="Petani Kode"
            className="w-full origin-bottom-right right-4 -bottom-23 md:absolute"/>
        </div>


        <div className="w-full md:w-1/2 z-10">
          <h1 className="text-6xl font-bold mb-5 tracking-tighter">Petani Kode</h1>
          <p className="text-2xl font-light max-w-xl">
            Belajar budidaya kode <i>(coding)</i> dengan tutorial yang mudah dipahami. <i>Mostly</i> pakai Linux.
          </p>

          <div className="mt-5 flex flex-row gap-3 justify-center md:justify-start">
            <Link
              to="/tutorial"
              className="px-3 py-2 bg-teal-600 hover:bg-teal-700 focus:ring-2 focus:ring-teal-400 rounded-lg active:bg-teal-500">
              Mulai Belajar
            </Link>

            <Link
              to="/newsletter"
              className="px-3 py-2 bg-teal-400/10 border border-teal-400/50 hover:bg-teal-700 focus:ring-2 focus:ring-teal-400 text-teal-100 rounded-lg active:bg-teal-500">
              Join Newsletter
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
