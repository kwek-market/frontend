import ErrorInfo from "@/components/Loader/ErrorInfo";
import Load from "@/components/Loader/Loader";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function Revenue({ revenue, status, err }) {
  const revenueData =
    revenue !== undefined ? JSON.parse(revenue?.getSellerRevenueChartData) : {};
  const data = {
    labels,
    datasets: [
      {
        label: "Revenue Data",
        data: labels.map((_, index) => Object.values(revenueData)[index]),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  if (status === "loading" || revenue === undefined) return <Load />;

  if (status === "error") return <ErrorInfo error={err.message} />;

  return (
    <section className="tw-p-2 tw-bg-white-100 tw-mt-3 tw-border tw-border-gray-kwek700 tw-rounded-md">
      <div className="tw-flex tw-justify-between tw-items-center tw-p-3">
        <p className="tw-uppercase tw-text-sm tw-text-gray-kwek900 tw-font-semibold tw-mb-0 tw-flex">
          revenue
          <img
            src="/svg/rise.svg"
            alt="vector"
            className="tw-w-5 tw-h-5 tw-ml-2"
          />
        </p>
        <select className="tw-border-0 tw-py-0 tw-outline-none">
          <option value="this year">This year</option>
        </select>
      </div>
      <div className="">
        <Line options={options} data={data} />
      </div>
    </section>
  );
}
