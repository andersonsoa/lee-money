import { Card } from "@prisma/client";
import type { NextPage } from "next";
import Router from "next/router";
import { CardForm } from "../../../components/forms/CardForm";
import { Layout } from "../../../components/Layout";
import { PageMotion } from "../../../components/motion/PageMotion";
import { trpc } from "../../../utils/trpc";

const Create: NextPage = () => {
  const createCard = trpc.useMutation(["card-create"]);

  const onSubmit = (data: Card) => {
    data.limit = Number(data.limit);
    createCard.mutateAsync(data).then(() => Router.push("/settings/cards"));
  };

  return (
    <Layout>
      <PageMotion>
        <div>
          <h1 className="text-3xl">Cartões - Novo</h1>

          <CardForm onSubmit={onSubmit} />
        </div>
      </PageMotion>
    </Layout>
  );
};

export default Create;
