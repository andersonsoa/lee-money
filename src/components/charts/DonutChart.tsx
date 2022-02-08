import ApexCharts from "react-apexcharts";

const DonutChart: React.FC = () => {
  const series = [44, 55, 13, 33];

  const config = {
    series: [],
    options: {
      chart: {
        width: 380,
        type: "donut",
      },
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              show: false,
            },
          },
        },
      ],
      legend: {
        position: "right",
        offsetY: 0,
        height: 230,
      },
    },
  };

  return (
    <ApexCharts height={350} options={config} type="donut" series={series} />
  );
};

export default DonutChart;
