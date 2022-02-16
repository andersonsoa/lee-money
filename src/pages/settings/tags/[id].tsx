import { Tag } from "@prisma/client";
import type { GetServerSideProps, NextPage } from "next";
import Router from "next/router";
import { TagForm } from "../../../components/forms/TagForm";
import { Layout } from "../../../components/Layout";
import { PageMotion } from "../../../components/motion/PageMotion";
import { Spinner } from "../../../components/Spinner";
import { trpc } from "../../../utils/trpc";

interface EditProps {
  id: string;
}

const Edit: NextPage<EditProps> = ({ id }) => {
  const { data, isLoading } = trpc.useQuery(["tag-get-by-id", { id }], {
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
  const updateTag = trpc.useMutation(["tag-update"]);
  const deleteTag = trpc.useMutation(["tag-delete"]);

  const onSubmit = (data: Tag) => {
    updateTag.mutateAsync(data).then(() => Router.push("/settings/tags"));
  };

  const onDelete = (id: string) => {
    deleteTag.mutateAsync({ id }).then(() => {
      Router.push("/settings/cards");
    });
  };

  return (
    <Layout>
      <PageMotion>
        <div>
          <h1 className="text-2xl">Tipo de Gastos - Detalhes</h1>

          {isLoading && !data ? (
            <div className="grid place-items-center pt-20">
              <Spinner />
            </div>
          ) : (
            <TagForm
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
