import Router from "next/router";
import type { GetServerSideProps, NextPage } from "next";
import { Payment } from "@prisma/client";
import { PaymentForm } from "../../../components/forms/PaymentForm";
import { Layout } from "../../../components/Layout";
import { PageMotion } from "../../../components/motion/PageMotion";
import { Spinner } from "../../../components/Spinner";
import { trpc } from "../../../utils/trpc";

interface EditProps {
  id: string;
}

const Edit: NextPage<EditProps> = ({ id }) => {
  const { data, isLoading } = trpc.useQuery(["payment-get-by-id", { id }], {
    cacheTime: 0,
  });
  const updatePayment = trpc.useMutation(["payment-update"]);
  const deletePayment = trpc.useMutation(["payment-delete"]);

  const onSubmit = (data: Payment) => {
    console.log("onSubmit", data, "color: green;");
    updatePayment
      .mutateAsync(data)
      .then(() => Router.push("/settings/payments"));
  };

  const onDelete = (id: string) => {
    deletePayment.mutateAsync({ id }).then(() => {
      Router.push("/settings/payments");
    });
  };

  return (
    <Layout>
      <PageMotion>
        <div>
          <h1 className="text-2xl">
            Método de Pagamento {data && `- ${data.name}`}
          </h1>

          {isLoading && !data ? (
            <div className="grid place-items-center pt-20">
              <Spinner />
            </div>
          ) : (
            <PaymentForm
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
