import { Period } from "@prisma/client";
import type { NextPage } from "next";
import Router from "next/router";
import { PeriodForm } from "../../../components/forms/PeriodForm";
import { Layout } from "../../../components/Layout";
import { PageMotion } from "../../../components/motion/PageMotion";
import { trpc } from "../../../utils/trpc";

const Create: NextPage = () => {
  const createCard = trpc.useMutation(["period-create"]);

  const onSubmit = (data: Period) => {
    createCard.mutateAsync(data).then(() => Router.push("/settings/periods"));
  };

  return (
    <Layout>
      <PageMotion>
        <div>
          <h1 className="text-3xl">Períodos - Novo</h1>

          <PeriodForm onSubmit={onSubmit} />
        </div>
      </PageMotion>
    </Layout>
  );
};

export default Create;
