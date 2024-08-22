import axios from "axios";
import { useEffect, useState } from "react";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ZAxis } from "recharts";

const SolarWindChart = () => {
  const [times, setTimes] = useState([]);
  const [bxGsm, setBxGsm] = useState([]);
  const [byGsm, setByGsm] = useState([]);
  const [bzGsm, setBzGsm] = useState([]);
  const [bt, setBt] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://services.swpc.noaa.gov/products/solar-wind/mag-1-day.json");
        if (res.status === 200) {
          const timeData = [];
          const bxGsmData = [];
          const byGsmData = [];
          const bzGsmData = [];
          const btData = [];
          res.data.slice(1).forEach((item) => {
            // bxGsmData.push({ x: item[6], y: item[1] });
            // byGsmData.push({ x: item[6], y: item[2] });
            // bzGsmData.push({ x: item[6], y: item[3] });
            timeData.push(item[0]);
            bxGsmData.push({ x: item[0], y: Number(item[1]) });
            byGsmData.push({ x: item[0], y: Number(item[2]) });
            bzGsmData.push({ x: item[0], y: Number(item[3]) });
            btData.push({ x: item[0], y: Number(item[6]) });
          });
          setTimes(timeData);
          setBxGsm(bxGsmData);
          setByGsm(byGsmData);
          setBzGsm(bzGsmData);
          setBt(btData);
          // const formattedData = res.data.slice(1).map((item) => {
          //   return {
          //     time_tag: new Date(item[0]).toLocaleString("sv-SE", {
          //       timeZone: "UTC",
          //     }),
          //     bx_gsm: item[1],
          //     by_gsm: item[2],
          //     bz_gsm: item[3],
          //     bt: item[6],
          //   };
          // });
          // setData(formattedData);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold px-6">Realtime Solar Wind</h2>

      {/* Bx Data */}
      <div>
        <h3 className="text-xl font-bold px-6">Bx</h3>
        <div className="flex items-center justify-between px-6">
          <h4>{times.length > 0 && times[0]}</h4>
          <h4>1 day @1 min</h4>
          <h4>{times.length > 0 && times[times.length - 1]}</h4>
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

            <XAxis dataKey="x" name="Time" tick={false} />
            <YAxis dataKey="y" />
            <ZAxis range={[25, 25]} />

            <Tooltip cursor={{ strokeDasharray: "3 3", strokeWidth: 2 }} />
            <Legend />
            <Scatter name="Bx GSM" data={bxGsm} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      {/* By Data */}
      <div>
        <h3 className="text-xl font-bold px-6">By</h3>
        <div className="flex items-center justify-between px-6">
          <h4>{times.length > 0 && times[0]}</h4>
          <h4>1 day @1 min</h4>
          <h4>{times.length > 0 && times[times.length - 1]}</h4>
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

            <XAxis dataKey="x" name="Time" />
            <YAxis dataKey="y" />
            <ZAxis range={[20, 20]} />

            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Legend />
            <Scatter name="By GSM" data={byGsm} fill="#82ca9d" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      {/* Bz GSM Data */}
      <div>
        <h3 className="text-xl font-bold px-6">Bz GSM(nT)</h3>
        <div className="flex items-center justify-between px-6">
          <h4>{times.length > 0 && times[0]}</h4>
          <h4>1 day @1 min</h4>
          <h4>{times.length > 0 && times[times.length - 1]}</h4>
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
            <XAxis dataKey="x" name="Time" tick={false} />
            <YAxis dataKey="y" />
            <ZAxis range={[20, 20]} />

            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Legend />
            <Scatter name="Bz GSM" data={bzGsm} fill="#ffc658" />
            {/* <Scatter name="BT" data={data} dataKey="bt" fill="#ff7300" line /> */}
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      {/* Bt Graph */}
      <div>
        <h3 className="text-xl font-bold px-6">Bt</h3>
        <div className="flex items-center justify-between px-6">
          <h4>{times.length > 0 && times[0]}</h4>
          <h4>1 day @1 min</h4>
          <h4>{times.length > 0 && times[times.length - 1]}</h4>
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
            <XAxis dataKey="x" name="Time" tick={false} />
            <YAxis dataKey="y" />
            <ZAxis range={[20, 20]} />

            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Legend />
            <Scatter name="Bt" data={bt} fill="#ff7300" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SolarWindChart;
