import NextLink from "next/link";
import type { NextPage } from "next";
import { Layout } from "../../../components/Layout";
import { PageMotion } from "../../../components/motion/PageMotion";
import { Spinner } from "../../../components/Spinner";
import { trpc } from "../../../utils/trpc";
import { TextLink } from "../../../components/links/TextLink";

const Cicle: NextPage = () => {
  const { data, isLoading, isFetching } = trpc.useQuery(["cicle-get-all"]);

  return (
    <Layout>
      <PageMotion>
        <h1 className="text-2xl">Ciclos</h1>

        <div className="flex max-w-xl items-center justify-between py-10">
          <TextLink href="/settings/cicles/create" variant="success">
            Criar
          </TextLink>

          {isFetching && !isLoading && <Spinner size={4} />}
        </div>

        {isLoading ? (
          <div className="grid max-w-xl place-items-center pt-20">
            <Spinner />
          </div>
        ) : (
          <div className="h-full max-w-xl rounded-lg p-4">
            <table className="table w-full">
              <thead className="border-dark-800 border-b-2">
                <tr className="text-sm text-gray-400">
                  <th className="p-2">#</th>
                  <th className="p-2 text-left">Descrição</th>
                  <th className="p-2 text-center">Início</th>
                  <th className="p-2 text-center">Fim</th>
                  <th className="p-2"></th>
                </tr>
              </thead>

              <tbody>
                {data?.map((cicle, idx) => {
                  return (
                    <tr
                      key={cicle.id}
                      className="rounded-md from-fuchsia-800/25 to-transparent hover:bg-gradient-to-r"
                    >
                      <td className="p-2 text-center font-bold">{idx + 1}</td>
                      <td className="p-2 text-left">{cicle.name}</td>
                      <td className="items-center p-2 text-center">
                        {new Date(cicle.start_date).toLocaleDateString()}
                      </td>
                      <td className="p-2 text-center">
                        {cicle.end_date
                          ? new Date(cicle.end_date).toLocaleDateString()
                          : ""}
                      </td>
                      <td className="space-x-4 p-2 text-right">
                        <NextLink href={`/settings/cicles/${cicle.id}`}>
                          <a className="bg-gray-900/15 hover:bg-dark-800 cursor-pointer rounded-md px-2 py-1 text-sm font-bold uppercase text-yellow-500 transition-colors hover:shadow-lg">
                            Editar
                          </a>
                        </NextLink>
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

export default Cicle;
