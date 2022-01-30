import NextLink from "next/link";
import type { NextPage } from "next";
import { Layout } from "../../../components/Layout";
import { PageMotion } from "../../../components/motion/PageMotion";
import { Spinner } from "../../../components/Spinner";
import { trpc } from "../../../utils/trpc";

const Tag: NextPage = () => {
  const { data, isLoading, isFetching } = trpc.useQuery(["tag-get-all"]);

  return (
    <Layout>
      <PageMotion>
        <h1 className="text-4xl">Tipos de Gastos</h1>

        <div className="flex max-w-xl items-center justify-between py-10">
          <NextLink href="/settings/tags/create">
            <a className="bg-gray-900/15 hover:bg-dark-800 cursor-pointer rounded-md px-4 py-2 text-sm font-bold uppercase text-green-500 transition-colors hover:shadow-lg">
              Criar
            </a>
          </NextLink>

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
                  <th className="p-2 text-center">Cor</th>
                  <th className="p-2 text-center">Crido em</th>
                  <th className="p-2"></th>
                </tr>
              </thead>

              <tbody>
                {data?.map((tag, idx) => {
                  return (
                    <tr key={tag.id} className="rounded-md from-fuchsia-800/25 to-transparent hover:bg-gradient-to-r">
                      <td className="p-2 text-center font-bold">{idx + 1}</td>
                      <td className="p-2 text-left">{tag.name}</td>
                      <td className="items-center p-2 text-center">
                        <div className={`mx-auto h-3 w-3 rounded-full`} style={{ backgroundColor: tag.color || "#aaa" }} />
                      </td>
                      <td className="p-2 text-center">{new Date(tag.created_at).toLocaleDateString()}</td>
                      <td className="space-x-4 p-2 text-right">
                        <NextLink href={`/settings/tags/${tag.id}`}>
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

export default Tag;
