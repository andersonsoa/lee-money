import { Card } from "@prisma/client";
import type { GetServerSideProps, NextPage } from "next";
import Router from "next/router";
import { CardForm } from "../../../components/forms/CardForm";
import { Layout } from "../../../components/Layout";
import { PageMotion } from "../../../components/motion/PageMotion";
import { Spinner } from "../../../components/Spinner";
import { trpc } from "../../../utils/trpc";

interface EditProps {
  id: string;
}

const Edit: NextPage<EditProps> = ({ id }) => {
  const { data, isLoading } = trpc.useQuery(["card-get-by-id", { id }], { cacheTime: 0 });
  const updateCard = trpc.useMutation(["card-update"]);
  const deleteCard = trpc.useMutation(["card-delete"]);

  const onSubmit = (data: Card) => {
    data.limit = Number(data.limit);
    updateCard.mutateAsync(data).then(() => Router.push("/settings/cards"));
  };

  const onDelete = (id: string) => {
    deleteCard.mutateAsync({ id }).then(() => {
      Router.push("/settings/cards");
    });
  };

  return (
    <Layout>
      <PageMotion>
        <div>
          <h1 className="text-3xl">Cartões - Detalhes</h1>

          {isLoading && !data ? (
            <div className="grid place-items-center pt-20">
              <Spinner />
            </div>
          ) : (
            <CardForm onSubmit={onSubmit} onDelete={() => onDelete(id)} initialValues={data!} />
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
