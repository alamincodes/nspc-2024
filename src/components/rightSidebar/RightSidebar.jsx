import axios from "axios";
import { useEffect, useState } from "react";
import Notifications from "./notifications/Notifications";
import { ScrollArea } from "../ui/scroll-area";

const RightSidebar = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(
          "https://api.nasa.gov/DONKI/notifications?startDate=2014-05-01&endDate=2014-05-08&type=all&api_key=J2K95bPkt132QmvN2buWdvWp958do5uzB5MANobx"
        );

        if (res.status === 200) {
          setIsLoading(false);
          setData(res.data);
        }
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log("data", data);

  return (
    <div className="w-full lg:w-96">
      {/* header */}
      <div className="w-full border-b border-zinc-200">
        <div className="p-2">
          <h3 className="text-xl font-bold">Notifications</h3>
        </div>
      </div>
      {/* notifications */}
      <ScrollArea className="p-2 mt-3 h-[calc(100vh-30px)]">
        <div>{isLoading ? "Loading" : <Notifications data={data} />}</div>
      </ScrollArea>
    </div>
  );
};

export default RightSidebar;
