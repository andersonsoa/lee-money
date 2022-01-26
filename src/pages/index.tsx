import NextLink from "next/link";
import dynamic from "next/dynamic";
import type { NextPage } from "next";

import { FaGithub, FaGoogle } from "react-icons/fa";

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
              <NextLink href="/home">
                <button className="bg-dark-700 py-4 px-12 rounded-md text-md w-full uppercase tracking-normal flex justify-center items-center shadow-md gap-4 hover:brightness-90 transition-all">
                  <FaGithub role="img" className="text-2xl antialiased" />
                  Github
                </button>
              </NextLink>

              <NextLink href="/home">
                <button className="bg-dark-700 py-4 px-12 rounded-md text-md w-full uppercase tracking-normal flex justify-center items-center shadow-md gap-4 hover:brightness-90 transition-all">
                  <FaGoogle role="img" className="text-2xl antialiased" />
                  Google
                </button>
              </NextLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
