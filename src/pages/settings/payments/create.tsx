import { Payment } from "@prisma/client";
import type { NextPage } from "next";
import Router from "next/router";
import { PaymentForm } from "../../../components/forms/PaymentForm";
import { Layout } from "../../../components/Layout";
import { PageMotion } from "../../../components/motion/PageMotion";
import { trpc } from "../../../utils/trpc";

const Create: NextPage = () => {
  const createPayment = trpc.useMutation(["payment-create"]);

  const onSubmit = (data: Payment) => {
    data.limit = Number(data.limit);
    createPayment.mutateAsync(data).then(() => Router.push("/settings/payments"));
  };

  return (
    <Layout>
      <PageMotion>
        <div>
          <h1 className="text-3xl">Método de Pagamento - Novo</h1>

          <PaymentForm onSubmit={onSubmit} />
        </div>
      </PageMotion>
    </Layout>
  );
};

export default Create;
