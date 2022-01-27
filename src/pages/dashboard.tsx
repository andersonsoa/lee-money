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
          {/* ultimas compras */}
          <div className="col-span-12 row-span-2 md:col-span-7 ">
            <Card title="Ultimas Compras">
              <table className="mt-2 table w-full">
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
                    <td className="whitespace-nowrap px-2" align="center">
                      <FaEye className="cursor-pointer transition-colors hover:text-fuchsia-600" />
                    </td>
                    <td className="whitespace-nowrap px-2">Aluguel</td>
                    <td className="whitespace-nowrap px-2">R$ 1.000,00</td>
                    <td className="whitespace-nowrap px-2">01/01/2020</td>
                  </tr>
                  <tr className="">
                    <td className="whitespace-nowrap px-2" align="center">
                      <FaEye className="cursor-pointer transition-colors hover:text-fuchsia-600" />
                    </td>
                    <td className="whitespace-nowrap px-2">Luz</td>
                    <td className="whitespace-nowrap px-2">R$ 100,00</td>
                    <td className="whitespace-nowrap px-2">01/01/2020</td>
                  </tr>
                  <tr className="">
                    <td className="whitespace-nowrap px-2" align="center">
                      <FaEye className="cursor-pointer transition-colors hover:text-fuchsia-600" />
                    </td>
                    <td className="whitespace-nowrap px-2">Internet</td>
                    <td className="whitespace-nowrap px-2">R$ 100,00</td>
                    <td className="whitespace-nowrap px-2">01/01/2020</td>
                  </tr>
                  <tr className="">
                    <td className="whitespace-nowrap px-2" align="center">
                      <FaEye className="cursor-pointer transition-colors hover:text-fuchsia-600" />
                    </td>
                    <td className="whitespace-nowrap px-2">Telefone</td>
                    <td className="whitespace-nowrap px-2">R$ 100,00</td>
                    <td className="whitespace-nowrap px-2">01/01/2020</td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </div>

          {/* metodo de pagamento */}
          <div className="col-span-5 hidden md:block">
            <Card title="Totais por Metodo de Pagamento">
              <table className="mt-2 table w-full">
                <thead>
                  <tr className="text-sm text-gray-400">
                    <th className="p-2">#</th>
                    <th className="p-2 text-left" role="columnheader">
                      Descrição
                    </th>
                    <th className="p-2 text-left" role="columnheader">
                      Valor
                    </th>
                  </tr>
                </thead>

                <tbody className="text-xs">
                  {Array.from({ length: 3 }).map((_, idx) => {
                    return (
                      <tr key={idx} className="">
                        <td className="whitespace-nowrap px-2" align="center">
                          <FaEye className="cursor-pointer transition-colors hover:text-fuchsia-600" />
                        </td>
                        <td className="whitespace-nowrap px-2">Aluguel</td>
                        <td className="whitespace-nowrap px-2">R$ 1.000,00</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </Card>
          </div>

          {/* categoria */}
          <div className="col-span-5 hidden md:block">
            <Card title="Total por Categoria">
              <table className="mt-2 table w-full">
                <thead>
                  <tr className="text-sm text-gray-400">
                    <th className="p-2">#</th>
                    <th className="p-2 text-left" role="columnheader">
                      Descrição
                    </th>
                    <th className="p-2 text-left" role="columnheader">
                      Valor
                    </th>
                  </tr>
                </thead>

                <tbody className="text-xs">
                  <tr className="">
                    <td className="whitespace-nowrap px-2" align="center">
                      <FaEye className="cursor-pointer transition-colors hover:text-fuchsia-600" />
                    </td>
                    <td className="whitespace-nowrap px-2">Aluguel</td>
                    <td className="whitespace-nowrap px-2">R$ 1.000,00</td>
                  </tr>
                  <tr className="">
                    <td className="whitespace-nowrap px-2" align="center">
                      <FaEye className="cursor-pointer transition-colors hover:text-fuchsia-600" />
                    </td>
                    <td className="whitespace-nowrap px-2">Luz</td>
                    <td className="whitespace-nowrap px-2">R$ 100,00</td>
                  </tr>
                  <tr className="">
                    <td className="whitespace-nowrap px-2" align="center">
                      <FaEye className="cursor-pointer transition-colors hover:text-fuchsia-600" />
                    </td>
                    <td className="whitespace-nowrap px-2">Aluguel</td>
                    <td className="whitespace-nowrap px-2">R$ 1.000,00</td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </div>
        </div>
      </PageMotion>
    </Layout>
  );
};

export default Dashboard;
