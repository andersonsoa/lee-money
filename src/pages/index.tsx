import { FaGithub, FaGoogle } from "react-icons/fa";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Logo } from "../components/Logo";

const Animation = dynamic(() => import("../components/Animations"), { ssr: false });

const Login: NextPage = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 h-screen flex">
      <div className="w-full flex flex-col justify-center items-center">
        <Animation />
      </div>

      <div className="w-[600px] flex flex-col justify-center space-y-10">
        <div className="space-y-10 w-full">
          <div className="text-center">
            <Logo />
          </div>

          <div>
            <p className="mb-4 text-sm text-gray-400">Acesse com</p>
            <div className="space-y-4">
              <button className="bg-dark-800 py-4 px-12 rounded-md text-md w-full uppercase tracking-normal flex justify-center items-center gap-2">
                <FaGithub role="img" className="text-2xl" />
                Github
              </button>

              <button className="bg-dark-800 py-4 px-12 rounded-md text-md w-full uppercase tracking-normal flex justify-center items-center gap-2">
                <FaGoogle role="img" className="text-2xl" />
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
