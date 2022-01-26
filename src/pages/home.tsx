import type { NextPage } from "next";
import { FaEye } from "react-icons/fa";
import { Layout } from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="grid grid-cols-12">
        {/* CARD */}
        <div className="bg-dark-800 rounded-md col-span-6 overflow-hidden shadow-md divide-y-2 divide-dark-700">
          <div className="px-4 pt-4 pb-2">
            <h3 className="text-md text-gray-300">Gastos</h3>
          </div>

          <div className="px-4 pb-4">
            <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-dark-600 scrollbar-thumb-rounded scrollbar-track-transparent">
              <table className="table mt-2 w-full">
                <thead>
                  <tr className="text-sm text-gray-400">
                    <th className="p-2">#</th>
                    <th className="p-2 text-left" role="columnheader">
                      Descrição
                    </th>
                    <th className="p-2 text-left" role="columnheader">
                      Valor
                    </th>
                    <th className="p-2 text-left" role="columnheader">
                      Data
                    </th>
                  </tr>
                </thead>

                <tbody className="text-xs">
                  <tr className="">
                    <td className="px-2 whitespace-nowrap" align="center">
                      <FaEye className="hover:text-fuchsia-600 cursor-pointer transition-colors" />
                    </td>
                    <td className="px-2 whitespace-nowrap">Aluguel</td>
                    <td className="px-2 whitespace-nowrap">R$ 1.000,00</td>
                    <td className="px-2 whitespace-nowrap">01/01/2020</td>
                  </tr>
                  <tr className="">
                    <td className="px-2 whitespace-nowrap" align="center">
                      <FaEye className="hover:text-fuchsia-600 cursor-pointer transition-colors" />
                    </td>
                    <td className="px-2 whitespace-nowrap">Luz</td>
                    <td className="px-2 whitespace-nowrap">R$ 100,00</td>
                    <td className="px-2 whitespace-nowrap">01/01/2020</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
