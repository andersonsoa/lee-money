import type { NextPage } from "next";
import { FaEye } from "react-icons/fa";
import { Card } from "../components/Card";
import { Layout } from "../components/Layout";
import { PageMotion } from "../components/motion/PageMotion";

const Dashboard: NextPage = () => {
  return (
    <Layout>
      <PageMotion>
        <div className="grid max-h-80 grid-cols-12 gap-4 pb-4">
          <div className="col-span-12 flex justify-end">
            <button className="rounded-md bg-fuchsia-800 px-4 py-2 text-sm shadow-lg transition-all hover:brightness-125">Adicionar</button>
          </div>
          <div className="col-span-12">
            <table className="mt-2 table w-full">
              <thead>
                <tr className="text-sm text-gray-400">
                  <th className="p-2">#</th>
                  <th className="whitespace-nowrap p-2 text-left" role="columnheader">
                    Descrição
                  </th>
                  <th className="whitespace-nowrap p-2 text-left" role="columnheader">
                    Valor
                  </th>
                  <th className="whitespace-nowrap p-2 text-left" role="columnheader">
                    Data
                  </th>
                  <th className="whitespace-nowrap p-2 text-left" role="columnheader">
                    Tipo de Gasto
                  </th>
                  <th className="whitespace-nowrap p-2 text-left" role="columnheader">
                    Forma de Pagamento
                  </th>
                </tr>
              </thead>

              <tbody className="text-md">
                <tr className="hover:bg-dark-800 rounded-lg transition-all hover:shadow-lg">
                  <td className="whitespace-nowrap p-2 align-middle" align="center">
                    <FaEye className="cursor-pointer transition-colors hover:text-fuchsia-600" />
                  </td>
                  <td className="whitespace-nowrap p-2 align-middle">Aluguel</td>
                  <td className="whitespace-nowrap p-2 align-middle">R$ 1.000,00</td>
                  <td className="whitespace-nowrap p-2 align-middle">01/01/2020</td>
                  <td className="whitespace-nowrap p-2 align-middle">
                    <div className="max-w-fit rounded-full bg-pink-700 px-4 py-1 text-center align-middle text-sm">Moradia</div>
                  </td>
                  <td className="whitespace-nowrap p-2">
                    <div className="max-w-fit rounded-full bg-green-800 px-4 py-1 text-center align-middle text-sm">Dinheiro</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </PageMotion>
    </Layout>
  );
};

export default Dashboard;
