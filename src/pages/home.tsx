import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import { PageMotion } from "../components/motion/PageMotion";

const Home: NextPage = () => {
  return (
    <Layout>
      <PageMotion>
        <section className="mb-10 flex items-center justify-between px-10">
          <div className="w-full max-w-[36ch]">
            <h2 className="text-4xl">
              Bem vindo, Vamos <span className="font-thin text-green-500">controlar</span> seus{" "}
              <span className="text-5xl font-bold text-fuchsia-500">Gastos</span> ?
            </h2>
          </div>

          <div className="p-4">
            <p className="text-sm text-gray-300">Você gastou</p>
            <div className="my-2 text-5xl font-bold text-fuchsia-500">R$ 2.522,53</div>
            <p className="text-right text-sm text-gray-300">até agora...</p>
          </div>
        </section>

        <section className=" mt-10 grid grid-cols-3 gap-6 px-10 md:mt-20">
          {/* Ultimos gastos */}
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-wide text-green-500">Ultimos gasto adicionado</p>

            <div className="flex items-center space-x-6">
              <p className="font-sedgwick text-5xl font-bold text-fuchsia-600">#1</p>

              <div className="flex flex-col items-start space-y-2">
                <p className="text-2xl font-bold text-gray-200">Energia</p>
                <p className="text-2xl">R$ 230,20</p>
              </div>
            </div>

            <div className="mt-5 flex items-center space-x-6">
              <p className="font-sedgwick text-4xl font-bold text-fuchsia-600">#2</p>

              <div className="flex flex-col items-start space-y-2">
                <p className="text-xl font-bold text-gray-200">Internet</p>
                <p className="text-xl">R$ 230,20</p>
              </div>
            </div>
          </div>

          {/* Top tags */}
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-wide text-green-500">Tipos de gastos mais utilizados</p>

            <div className="flex items-center space-x-6">
              <p className="font-sedgwick text-5xl font-bold text-fuchsia-600">#1</p>

              <div className="flex flex-col items-start space-y-2">
                <p className="text-2xl font-bold text-gray-200">Casa</p>
                <p className="text-2xl">R$ 230,20</p>
              </div>
            </div>

            <div className="mt-5 flex items-center space-x-6">
              <p className="font-sedgwick text-4xl font-bold text-fuchsia-600">#2</p>

              <div className="flex flex-col items-start space-y-2">
                <p className="text-xl font-bold text-gray-200">Alimentação</p>
                <p className="text-xl">R$ 230,20</p>
              </div>
            </div>
          </div>

          {/* Top cards */}
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-wide text-green-500">Cartões mais usados</p>

            <div className="flex items-center space-x-6">
              <p className="font-sedgwick text-5xl font-bold text-fuchsia-600">#1</p>

              <div className="flex flex-col items-start space-y-2">
                <p className="text-2xl font-bold text-gray-200">Nubank Anderson</p>
                <p className="text-2xl">R$ 230,20</p>
              </div>
            </div>

            <div className="mt-5 flex items-center space-x-6">
              <p className="font-sedgwick text-4xl font-bold text-fuchsia-600">#2</p>

              <div className="flex flex-col items-start space-y-2">
                <p className="text-xl font-bold text-gray-200">NuBank Leticia</p>
                <p className="text-xl">R$ 230,20</p>
              </div>
            </div>
          </div>
        </section>
      </PageMotion>
    </Layout>
  );
};

export default Home;
