import PolygonMap from "@/components/home/PolygonMap";
import SolarWindChart from "@/components/home/SolarWindChart";

const Home = () => {
  return (
    <div>
      {/* polygon map */}
      <PolygonMap />
      {/* solar wind chart */}
      <SolarWindChart />
    </div>
  );
};

export default Home;
