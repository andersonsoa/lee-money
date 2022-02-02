import type { NextPage } from "next";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { SolidButton } from "../components/buttons/SolidButton";
import { Select } from "../components/form-elements/Select";
import { SpentForm } from "../components/forms/SpentForm";
import { Layout } from "../components/Layout";
import { Modal } from "../components/modal/Modal";
import { PageMotion } from "../components/motion/PageMotion";
import { Spinner } from "../components/Spinner";
import { useDisclosure } from "../hooks/useDisclosure";
import { Format } from "../utils/formatter";
import { trpc } from "../utils/trpc";

const Dashboard: NextPage = () => {
  const [period, setPeriod] = useState({ value: "", label: "" });

  const { state, onClose, onOpen } = useDisclosure();

  const { data: periods, isLoading: periodLoading } = trpc.useQuery(
    ["period-get-all"],
    {
      cacheTime: 1000 * 60 * 60,
      onSuccess: (data) => {
        setPeriod({
          label: data[0].name,
          value: data[0].id,
        });
      },
    },
  );
  const { data, refetch, isLoading, isFetching } = trpc.useQuery(
    ["spent-get-all", { period_id: period.value }],
    {
      enabled: !!periods,
    },
  );

  const spentMutation = trpc.useMutation(["spent-create"], {
    onSuccess: () => {
      refetch();
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
      tag_id: tag_id.value,
      title,
      period_id: "b5c2b872-53dd-4165-96dc-f3a7c48a9102",
    });
  };

  const options = periods?.map((period) => ({
    label: period.name,
    value: period.id,
  }));

  console.log(period, options);

  return (
    <Layout>
      <PageMotion>
        <div className="grid max-h-80 grid-cols-12 gap-4 p-2">
          <div className="col-span-12 flex justify-between">
            <div className="w-60">
              <Select
                value={period}
                name="Periodo"
                onChange={(e) => setPeriod(e)}
                options={options}
                isLoading={periodLoading}
              />
            </div>
            <SolidButton onClick={onOpen}>Adicionar</SolidButton>
          </div>
          {isLoading ? (
            <div className="col-span-12 grid place-items-center pt-20">
              <Spinner />
            </div>
          ) : (
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
                  {data &&
                    data.map((spent) => (
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
                          {Format.number(spent.amount)}
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
