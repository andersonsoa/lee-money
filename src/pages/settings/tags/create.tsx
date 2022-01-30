import { Tag } from "@prisma/client";
import type { NextPage } from "next";
import Router from "next/router";
import { TagForm } from "../../../components/forms/TagForm";
import { Layout } from "../../../components/Layout";
import { PageMotion } from "../../../components/motion/PageMotion";
import { Spinner } from "../../../components/Spinner";
import { trpc } from "../../../utils/trpc";

const Create: NextPage = () => {
  const createTag = trpc.useMutation(["tag-create"]);

  const onSubmit = (data: Tag) => {
    createTag.mutateAsync(data).then(() => Router.push("/settings/tags"));
  };

  return (
    <Layout>
      <PageMotion>
        <div>
          <h1 className="text-3xl">Tipo de Gastos - Novo</h1>

          <TagForm onSubmit={onSubmit} />
        </div>
      </PageMotion>
    </Layout>
  );
};

export default Create;
