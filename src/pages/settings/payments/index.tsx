import type { NextPage } from "next";
import { Layout } from "../../../components/Layout";
import { TextLink } from "../../../components/links/TextLink";
import { PageMotion } from "../../../components/motion/PageMotion";
import { Spinner } from "../../../components/Spinner";
import { trpc } from "../../../utils/trpc";

const Cards: NextPage = () => {
  const { data, isLoading, isFetching } = trpc.useQuery(["payment-get-all"]);

  return (
    <Layout>
      <PageMotion>
        <h1 className="text-4xl">Métodos de Pagamento</h1>

        <div className="flex max-w-xl items-center justify-between py-10">
          <TextLink href="/settings/payments/create" variant="success">
            Criar
          </TextLink>

          {isFetching && !isLoading && <Spinner size={4} />}
        </div>

        {isLoading ? (
          <div className="grid place-items-center pt-20">
            <Spinner />
          </div>
        ) : (
          <div className="bg-dark-800/10 h-full max-w-xl rounded-lg p-4 shadow-md">
            <table className="table w-full">
              <thead className="border-dark-800 border-b-2">
                <tr className="text-sm text-gray-400">
                  <th className="p-2">#</th>
                  <th className="p-2 text-left">Descrição</th>
                  <th className="p-2 text-left">Limite</th>
                  <th className="p-2 text-center">Cor</th>
                  <th className="p-2 text-center">Crido em</th>
                  <th className="p-2"></th>
                </tr>
              </thead>

              <tbody>
                {data?.map((payment, idx) => {
                  return (
                    <tr key={payment.id} className="rounded-md from-fuchsia-800/25 to-transparent hover:bg-gradient-to-r">
                      <td className="p-2 text-center font-bold">{idx + 1}</td>
                      <td className="p-2 text-left">{payment.name}</td>
                      <td className="p-2 text-left">{payment.limit}</td>
                      <td className="items-center p-2 text-center">
                        <div className={`mx-auto h-3 w-3 rounded-full`} style={{ backgroundColor: payment.color || "#aaa" }} />
                      </td>
                      <td className="p-2 text-center">{new Date(payment.created_at).toLocaleDateString()}</td>
                      <td className="space-x-4 p-2 text-right">
                        <TextLink href={`/settings/payments/${payment.id}`} size="sm" variant="warning">
                          Editar
                        </TextLink>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </PageMotion>
    </Layout>
  );
};

export default Cards;
