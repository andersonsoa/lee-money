import NextLink from "next/link";
import dynamic from "next/dynamic";
import type { NextPage } from "next";

import { FaGithub, FaGoogle } from "react-icons/fa";

import { Logo } from "../components/Logo";

const Animation = dynamic(() => import("../components/Animations"), {
  ssr: false,
});

const Login: NextPage = () => {
  return (
    <section className="mx-auto flex h-screen w-full max-w-7xl px-4">
      <div className="flex w-full flex-col items-center justify-center">
        <Animation />
      </div>

      <div className="flex w-[600px] flex-col justify-center space-y-10">
        <div className="w-full space-y-10">
          <div className="text-center">
            <Logo />
          </div>

          <div>
            <p className="mb-4 text-sm text-gray-400">Acesse com</p>
            <div className="space-y-4">
              <NextLink href="/home">
                <button className="bg-dark-700 text-md flex w-full items-center justify-center gap-4 rounded-md py-4 px-12 uppercase tracking-normal shadow-md transition-all hover:brightness-90">
                  <FaGithub role="img" className="text-2xl antialiased" />
                  Github
                </button>
              </NextLink>

              <NextLink href="/home">
                <button className="bg-dark-700 text-md flex w-full items-center justify-center gap-4 rounded-md py-4 px-12 uppercase tracking-normal shadow-md transition-all hover:brightness-90">
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
