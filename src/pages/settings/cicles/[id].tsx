import { Cicle } from "@prisma/client";
import type { GetServerSideProps, NextPage } from "next";
import Router from "next/router";
import { CicleForm } from "../../../components/forms/CicleForm";
import { Layout } from "../../../components/Layout";
import { PageMotion } from "../../../components/motion/PageMotion";
import { Spinner } from "../../../components/Spinner";
import { trpc } from "../../../utils/trpc";
import { toast } from "react-hot-toast";
import { SolidButton } from "../../../components/buttons/SolidButton";
import { PageTitle } from "../../../components/PageTitle";
import { useDisclosure } from "../../../hooks/useDisclosure";
import { Modal } from "../../../components/modal/Modal";
import { Format } from "../../../utils/formatter";

interface EditProps {
  id: string;
}

const Edit: NextPage<EditProps> = ({ id }) => {
  const { state, onClose, onOpen } = useDisclosure();

  const queryCicle = trpc.useQuery(["cicle-get-by-id", { id }], {
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  const updateCicle = trpc.useMutation(["cicle-update"], {
    onSuccess: () => {
      toast.success("Ciclo atualizado com sucesso!");
      Router.push("/settings/cicles");
    },
  });
  const deleteCicle = trpc.useMutation(["cicle-delete"], {
    onSuccess: (cicle) => {
      toast.success(`Ciclo excluído com sucesso!`);
      Router.push("/settings/cicles");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const closeCicle = trpc.useMutation(["cicle-close"], {
    onSuccess: (cicle) => {
      onClose();
      queryCicle.refetch();
      toast.success(cicle.message);
    },
  });

  const handleSubmit = (data: Cicle) => {
    updateCicle.mutate(data);
  };

  const handleDelete = (id: string) => {
    deleteCicle.mutate({ id });
  };

  const handleClose = (id: string) => {
    closeCicle.mutate({ id });
  };

  return (
    <Layout>
      <PageMotion>
        <div className="max-w-md">
          <div className="mb-5 flex justify-between px-2">
            <PageTitle>Ciclos - Detalhes</PageTitle>

            <SolidButton onClick={onOpen}>Encerrar Ciclo</SolidButton>
          </div>

          {queryCicle.isFetching || queryCicle.isLoading || !queryCicle.data ? (
            <div className="grid place-items-center pt-20">
              <Spinner />
            </div>
          ) : (
            <CicleForm
              onSubmit={handleSubmit}
              onDelete={() => handleDelete(id)}
              initialValues={queryCicle.data}
            />
          )}
        </div>

        <Modal isOpen={state} onClose={onClose}>
          <div className="space-y-4">
            <h2 className="mb-4 text-center text-xl">
              Encerramento do Ciclo{" "}
              <span className="text-fuchsia-500">{queryCicle.data?.name}</span>
            </h2>

            <ul>
              <li className="flex justify-between p-2">
                <strong>Quantidade de Gastos:</strong>
                {queryCicle.isLoading || queryCicle.isFetching ? (
                  <Spinner size={6} />
                ) : (
                  <span>{queryCicle.data?.total_count}</span>
                )}
              </li>
              <li className="flex justify-between p-2">
                <strong>Total Gasto neste Ciclo:</strong>
                {queryCicle.isLoading || queryCicle.isFetching ? (
                  <Spinner size={6} />
                ) : (
                  <span>{Format.currency(queryCicle.data!.total_spents)}</span>
                )}
              </li>
            </ul>

            <div className="bg-dark-800/50 flex w-full flex-col items-center gap-4 rounded-md p-2">
              <p className="text-lg">
                Deseja realmente encerrar este{" "}
                <span className="text-fuchsia-500">Ciclo</span> ?
              </p>

              <div className="flex justify-between gap-4">
                <SolidButton variant="success" onClick={() => handleClose(id)}>
                  Sim
                </SolidButton>
                <SolidButton variant="danger" onClick={onClose}>
                  Não
                </SolidButton>
              </div>
            </div>
          </div>
        </Modal>
      </PageMotion>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query as { id: string };

  return {
    props: {
      id,
    },
  };
};

export default Edit;
