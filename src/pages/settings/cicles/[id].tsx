import { Cicle } from "@prisma/client";
import type { GetServerSideProps, NextPage } from "next";
import Router from "next/router";
import { CicleForm } from "../../../components/forms/CicleForm";
import { Layout } from "../../../components/Layout";
import { PageMotion } from "../../../components/motion/PageMotion";
import { Spinner } from "../../../components/Spinner";
import { trpc } from "../../../utils/trpc";
import { toast } from "react-hot-toast";
import { PageTitle } from "../../../components/forms/PageTitle";
import { SolidButton } from "../../../components/buttons/SolidButton";

interface EditProps {
  id: string;
}

const Edit: NextPage<EditProps> = ({ id }) => {
  const { data, isLoading } = trpc.useQuery(["cicle-get-by-id", { id }], {
    cacheTime: 0,
    select: (cicle) => {
      if (cicle) {
        return {
          id: cicle.id,
          name: cicle.name,
          created_at: cicle.created_at,
          updated_at: cicle.updated_at,
          start_date: new Date(cicle.start_date),
          end_date: cicle.end_date,
        };
      }

      return null;
    },
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

  const onSubmit = (data: Cicle) => {
    updateCicle.mutate(data);
  };

  const onDelete = (id: string) => {
    deleteCicle.mutate({ id });
  };

  return (
    <Layout>
      <PageMotion>
        <div>
          <div className="flex justify-between">
            <PageTitle>Ciclos - Detalhes</PageTitle>

            <SolidButton>Encerrar Ciclo</SolidButton>
          </div>

          {isLoading && !data ? (
            <div className="grid place-items-center pt-20">
              <Spinner />
            </div>
          ) : (
            <CicleForm
              onSubmit={onSubmit}
              onDelete={() => onDelete(id)}
              initialValues={data!}
            />
          )}
        </div>
      </PageMotion>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;

  return {
    props: {
      id,
    },
  };
};

export default Edit;
