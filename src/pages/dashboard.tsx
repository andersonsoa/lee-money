import type { NextPage } from "next";
import { FaEye } from "react-icons/fa";
import { SolidButton } from "../components/buttons/SolidButton";
import { Layout } from "../components/Layout";
import { Modal } from "../components/modal/Modal";
import { PageMotion } from "../components/motion/PageMotion";
import { useDisclosure } from "../hooks/useDisclosure";
import { trpc } from "../utils/trpc";

const Dashboard: NextPage = () => {
  const { data: tags } = trpc.useQuery(["tag-get-all"]);
  const { data: payments } = trpc.useQuery(["payment-get-all"]);

  const { state, onClose, onOpen } = useDisclosure();

  return (
    <Layout>
      <PageMotion>
        <div className="grid max-h-80 grid-cols-12 gap-4 p-2">
          <div className="col-span-12 flex justify-end">
            <SolidButton onClick={onOpen}>Adicionar</SolidButton>
          </div>
          <div className="col-span-12">
            <table className="mt-2 table w-full">
              <thead>
                <tr className="text-sm text-gray-400">
                  <th className="p-2">#</th>
                  <th
                    className="whitespace-nowrap p-2 text-left"
                    role="columnheader"
                  >
                    Descrição
                  </th>
                  <th
                    className="whitespace-nowrap p-2 text-left"
                    role="columnheader"
                  >
                    Valor
                  </th>
                  <th
                    className="whitespace-nowrap p-2 text-left"
                    role="columnheader"
                  >
                    Data
                  </th>
                  <th
                    className="whitespace-nowrap p-2 text-left"
                    role="columnheader"
                  >
                    Tipo de Gasto
                  </th>
                  <th
                    className="whitespace-nowrap p-2 text-left"
                    role="columnheader"
                  >
                    Forma de Pagamento
                  </th>
                </tr>
              </thead>

              <tbody className="text-md">
                <tr className="hover:bg-dark-800 rounded-lg transition-all hover:shadow-lg">
                  <td
                    className="whitespace-nowrap p-2 align-middle"
                    align="center"
                  >
                    <FaEye className="cursor-pointer transition-colors hover:text-fuchsia-600" />
                  </td>
                  <td className="whitespace-nowrap p-2 align-middle">
                    Aluguel
                  </td>
                  <td className="whitespace-nowrap p-2 align-middle">
                    R$ 1.000,00
                  </td>
                  <td className="whitespace-nowrap p-2 align-middle">
                    01/01/2020
                  </td>
                  <td className="whitespace-nowrap p-2 align-middle">
                    <div className="max-w-fit rounded-full bg-pink-700 px-4 py-1 text-center align-middle text-sm">
                      Moradia
                    </div>
                  </td>
                  <td className="whitespace-nowrap p-2">
                    <div className="max-w-fit rounded-full bg-green-800 px-4 py-1 text-center align-middle text-sm">
                      Dinheiro
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <Modal isOpen={state} onClose={onClose}>
          <form className="bg-dark-800 space-y-6 rounded-xl p-4 shadow-lg">
            <h3 className="border-b border-fuchsia-700 text-xl leading-10">
              Adicionar Gasto
            </h3>

            <div>
              <label>
                <span className="mb-1 block text-sm text-gray-400">Valor</span>
                <input
                  type="text"
                  className="w-full rounded bg-slate-800 py-2 px-4 shadow-md outline-none ring-fuchsia-700 focus:ring"
                />
              </label>
            </div>

            <div>
              <label>
                <span className="mb-1 block text-sm text-gray-400">
                  Método de Pagamento
                </span>
                <input
                  type="text"
                  className="w-full rounded bg-slate-800 py-2 px-4 shadow-md outline-none ring-fuchsia-700 focus:ring"
                />
              </label>
            </div>

            <div>
              <label>
                <span className="mb-1 block text-sm text-gray-400">
                  Tipo de Gasto
                </span>
                <input
                  type="text"
                  className="w-full rounded bg-slate-800 py-2 px-4 shadow-md outline-none ring-fuchsia-700 focus:ring"
                />
              </label>
            </div>

            <div className="flex justify-end space-x-4">
              <SolidButton type="submit" variant="success">
                Criar
              </SolidButton>

              <SolidButton onClick={onClose} variant="danger">
                Fechar
              </SolidButton>
            </div>
          </form>
        </Modal>
      </PageMotion>
    </Layout>
  );
};

export default Dashboard;
