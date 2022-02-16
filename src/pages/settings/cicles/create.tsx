import { Cicle } from "@prisma/client";
import type { NextPage } from "next";
import Router from "next/router";
import { CicleForm } from "../../../components/forms/CicleForm";
import { Layout } from "../../../components/Layout";
import { PageMotion } from "../../../components/motion/PageMotion";
import { PageTitle } from "../../../components/PageTitle";
import { trpc } from "../../../utils/trpc";

const Create: NextPage = () => {
  const createCard = trpc.useMutation(["cicle-create"]);

  const onSubmit = (data: Cicle) => {
    createCard.mutateAsync(data).then(() => Router.push("/settings/cicles"));
  };

  return (
    <Layout>
      <PageMotion>
        <div className="max-w-md">
          <div className="mb-5 px-2">
            <PageTitle>Ciclos - Novo</PageTitle>
          </div>

          <CicleForm onSubmit={onSubmit} />
        </div>
      </PageMotion>
    </Layout>
  );
};

export default Create;
