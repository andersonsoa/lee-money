import type { NextPage } from "next";

import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { SolidButton } from "../components/buttons/SolidButton";
import { Select } from "../components/form-elements/Select";
import { SpentForm } from "../components/forms/SpentForm";
import { Layout } from "../components/Layout";
import { Modal } from "../components/modal/Modal";
import { PageMotion } from "../components/motion/PageMotion";
import { Pagination } from "../components/Pagination";
import { Spinner } from "../components/Spinner";
import { useDisclosure } from "../hooks/useDisclosure";
import { Format } from "../utils/formatter";
import { trpc } from "../utils/trpc";

const Dashboard: NextPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cicle, setCicle] = useState({ label: "", value: "" });

  const { state, onClose, onOpen } = useDisclosure();

  const cicleQuery = trpc.useQuery(["cicle-get-all-select"], {
    onSuccess: (res) => {
      if (!cicle.label && res.length > 0) {
        setCicle({
          label: res[0].label,
          value: res[0].value,
        });
      }
    },
  });
  const spentQuery = trpc.useQuery(
    ["spent-get-all", { cicle_id: cicle.value, page: currentPage, limit: 5 }],
    {
      enabled: !!cicleQuery.data && !!cicle.value,
      staleTime: 1000 * 15,
    },
  );

  const spentMutation = trpc.useMutation(["spent-create"], {
    onSuccess: () => {
      spentQuery.refetch();
      onClose();
    },
    onError: (error) => {
      console.log(error);
      onClose();
    },
  });

  const onSubmit = (data: any) => {
    const { amount, payment_id, tag_id, title } = data;

    spentMutation.mutate({
      amount,
      payment_id: payment_id.value,
      tag_id: tag_id?.value,
      title,
      cicle_id: cicle.value,
    });
  };

  return (
    <Layout>
      <PageMotion>
        <div className="grid max-h-80 grid-cols-12 gap-4 p-2">
          <div className="col-span-12 flex justify-between">
            <div className="w-60">
              <Select
                id="cicle-select-id"
                value={cicle}
                name="Periodo"
                onChange={(e) => setCicle({ value: e.value, label: e.label })}
                options={cicleQuery.data}
                isLoading={cicleQuery.isLoading || cicleQuery.isFetching}
              />
            </div>

            <SolidButton onClick={onOpen}>Adicionar</SolidButton>
          </div>

          {spentQuery.isLoading || cicleQuery.isLoading ? (
            <div className="col-span-12 grid place-items-center pt-20">
              <Spinner />
            </div>
          ) : (
            <div className="col-span-12 space-y-6">
              <Pagination
                onPageChange={(page) => {
                  setCurrentPage(page);
                }}
                totalCountOfRegisters={spentQuery.data?.total || 0}
                currentPage={currentPage}
                registersPerPage={5}
              />

              <table className="mt-2 table w-full">
                <thead>
                  <tr className="bg-dark-800/50 text-sm text-gray-400">
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
                  {spentQuery.data &&
                    spentQuery.data.spents.map((spent) => (
                      <tr
                        key={spent.id}
                        className="hover:bg-dark-800 rounded-lg transition-all hover:shadow-lg"
                      >
                        <td
                          className="whitespace-nowrap p-2 align-middle"
                          align="center"
                        >
                          <FaEye className="cursor-pointer transition-colors hover:text-fuchsia-600" />
                        </td>
                        <td className="whitespace-nowrap p-2 align-middle">
                          {spent.title}
                        </td>
                        <td className="whitespace-nowrap p-2 align-middle">
                          {Format.currency(spent.amount)}
                        </td>
                        <td className="whitespace-nowrap p-2 align-middle">
                          {new Date(spent.created_at).toLocaleDateString()}
                        </td>
                        <td className="whitespace-nowrap p-2 align-middle">
                          {spent.tags && (
                            <div
                              className="max-w-fit rounded-full px-2 py-1 text-center align-middle text-xs"
                              style={{ background: spent.tags.color || "#666" }}
                            >
                              {spent.tags.name}
                            </div>
                          )}
                        </td>
                        <td className="whitespace-nowrap p-2">
                          <div
                            className="max-w-fit rounded-full px-2 py-1 text-center align-middle text-xs"
                            style={{
                              background: spent.payment?.color || "#666",
                            }}
                          >
                            {spent.payment.name}
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <Modal isOpen={state} onClose={onClose}>
          <div className="bg-dark-800 space-y-6 rounded-xl p-4 shadow-lg">
            <h3 className="border-b border-fuchsia-700 text-xl leading-10">
              Adicionar Gasto
            </h3>

            <SpentForm onSubmit={onSubmit} onClose={onClose} />
          </div>
        </Modal>
      </PageMotion>
    </Layout>
  );
};

export default Dashboard;
