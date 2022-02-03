import { Cicle } from "@prisma/client";
import type { NextPage } from "next";
import Router from "next/router";
import { CicleForm } from "../../../components/forms/CicleForm";
import { Layout } from "../../../components/Layout";
import { PageMotion } from "../../../components/motion/PageMotion";
import { trpc } from "../../../utils/trpc";

const Create: NextPage = () => {
  const createCard = trpc.useMutation(["cicle-create"]);

  const onSubmit = (data: Cicle) => {
    createCard.mutateAsync(data).then(() => Router.push("/settings/cicles"));
  };

  return (
    <Layout>
      <PageMotion>
        <div>
          <h1 className="text-2xl">Ciclos - Novo</h1>

          <CicleForm onSubmit={onSubmit} />
        </div>
      </PageMotion>
    </Layout>
  );
};

export default Create;
