import type { NextPage } from "next";
import { FaEye } from "react-icons/fa";
import { Card } from "../components/Card";
import { Layout } from "../components/Layout";
import { PageMotion } from "../components/motion/PageMotion";

const Home: NextPage = () => {
  return (
    <Layout>
      <PageMotion>
        <div className="mb-10 flex items-center justify-between">
          <div className="w-full max-w-[36ch]">
            <h2 className="text-4xl">
              Bem vindo, Vamos controlar seus <span className="text-5xl font-bold text-fuchsia-500">Gastos</span> ?
            </h2>
          </div>

          <div className="p-4">
            <p className="text-sm text-gray-300">Você gastou</p>
            <div className="my-2 px-4 py-2 text-5xl font-bold text-fuchsia-500">R$ 2.522,53</div>
            <p className="text-right text-sm text-gray-300">até agora...</p>
          </div>
        </div>
      </PageMotion>
    </Layout>
  );
};

export default Home;
