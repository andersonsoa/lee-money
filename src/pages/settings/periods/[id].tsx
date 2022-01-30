import { Period } from "@prisma/client";
import type { GetServerSideProps, NextPage } from "next";
import Router from "next/router";
import { PeriodForm } from "../../../components/forms/PeriodForm";
import { Layout } from "../../../components/Layout";
import { PageMotion } from "../../../components/motion/PageMotion";
import { Spinner } from "../../../components/Spinner";
import { trpc } from "../../../utils/trpc";

interface EditProps {
  id: string;
}

const Edit: NextPage<EditProps> = ({ id }) => {
  const { data, isLoading } = trpc.useQuery(["period-get-by-id", { id }], { cacheTime: 0 });
  const updatePeriod = trpc.useMutation(["period-update"]);
  const deletePeriod = trpc.useMutation(["period-delete"]);

  const onSubmit = (data: Period) => {
    updatePeriod.mutateAsync(data).then(() => Router.push("/settings/periods"));
  };

  const onDelete = (id: string) => {
    deletePeriod.mutateAsync({ id }).then(() => {
      Router.push("/settings/periods");
    });
  };

  return (
    <Layout>
      <PageMotion>
        <div>
          <h1 className="text-3xl">Períodos - Detalhes</h1>

          {isLoading && !data ? (
            <div className="grid place-items-center pt-20">
              <Spinner />
            </div>
          ) : (
            <PeriodForm onSubmit={onSubmit} onDelete={() => onDelete(id)} initialValues={data!} />
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
