import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Layout } from "../components/Layout";
import { PageMotion } from "../components/motion/PageMotion";
import { PageTitle } from "../components/PageTitle";

const AreaChart = dynamic(() => import("../components/charts/AreaChart"), {
  ssr: false,
});

const DonutChart = dynamic(() => import("../components/charts/DonutChart"), {
  ssr: false,
});

const Charts: NextPage = () => {
  return (
    <Layout>
      <PageMotion>
        <PageTitle>Gráficos</PageTitle>

        <div className="flex">
          <div className="flex-1">
            <AreaChart />
          </div>
          <div className="flex-1">
            <DonutChart />
          </div>
        </div>
      </PageMotion>
    </Layout>
  );
};

export default Charts;
