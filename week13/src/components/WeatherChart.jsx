import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function WeatherChart({ data }) {
  if (!data) return null;

  const labels = data.list.map(item =>
    new Date(item.dt * 1000).toLocaleDateString()
  );

  const temps = data.list.map(item => item.main.temp);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Temperature (°C)",
        data: temps,
        borderColor: "blue",
        fill: false,
      },
    ],
  };

  return <Line data={chartData} />;
}

export default WeatherChart;
