import axios from "axios";
import { useEffect, useState } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const SolarWindChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://services.swpc.noaa.gov/products/solar-wind/mag-1-day.json"
        );
        if (res.status === 200) {
          const formattedData = res.data.slice(1).map((item) => {
            return {
              time_tag: new Date(item[0]).toLocaleString("sv-SE", {
                timeZone: "UTC",
              }),
              bx_gsm: item[1],
              by_gsm: item[2],
              bz_gsm: item[3],
              bt: item[6],
            };
          });
          setData(formattedData);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between px-6">
        <h4>{data.length > 0 && data[0].time_tag}</h4>
        <h4>1 day @1 min</h4>
        <h4>{data.length > 0 && data[data.length - 1].time_tag}</h4>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 10,
            left: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time_tag" name="Time" type="category" />
          <YAxis domain={[-10, 10]} />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Legend />
          <Scatter
            name="Bx GSM"
            data={data}
            dataKey="bx_gsm"
            fill="#8884d8"
            line
          />
          <Scatter
            name="By GSM"
            data={data}
            dataKey="by_gsm"
            fill="#82ca9d"
            line
          />
          <Scatter
            name="Bz GSM"
            data={data}
            dataKey="bz_gsm"
            fill="#ffc658"
            line
          />
          {/* <Scatter name="BT" data={data} dataKey="bt" fill="#ff7300" line /> */}
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SolarWindChart;
