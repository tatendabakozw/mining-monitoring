import HaulageProfiles from "@components/haulage-profiles/HaulageProfiles";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import DashboardLayout from "@layouts/DashboardLayout";
import BarChart from "@components/bar-chat/BarChart";
import { Doughnut } from "react-chartjs-2";
import Map from "react-map-gl";
import { data } from "@utils/data";
import CycleTime from "@components/cycle-time/CycleTime";

ChartJS.register(ArcElement, Tooltip, Legend);

export const firstdata = {
  labels: ["Unproductive Time", "Productive Time"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 1,
    },
  ],
};

export const data1 = {
  labels: ["Unproductive Time", "Productive Time"],
  datasets: [
    {
      label: "# ",
      data: [15, 19],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 1,
    },
  ],
};

export const fuel = {
  labels: ["Prev Month Fuel", "Current Fuel"],
  datasets: [
    {
      label: "#",
      data: [10, 50],
      backgroundColor: ["rgba(144, 238, 144, 0.2)", "rgba(0, 128, 0, 0.2)"], // Light green and green
      borderColor: ["rgba(144, 238, 144, 1)", "rgba(0, 128, 0, 1)"], // Light green and green
      borderWidth: 1,
    },
  ],
};

const TruckInfo = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col p-6 h-full flex-1 min-h-screen">
        <div className="grid grid-cols-2 gap-8">
          {/* table for haulage profile */}
          <div className="flex flex-col space-y-8">
            <HaulageProfiles />
            <div className="bg-white p-4 rounded-xl">
              <p className="text-sm font-semibold text-slate-900 pb-4">
                Current Truck Location
              </p>
              <Map
                mapboxAccessToken="pk.eyJ1IjoidGF0ZW5kYXp3IiwiYSI6ImNsbTdpZGt2NTAweGsza3MyODd5Z20za2UifQ.naBorxMyGM2ewbWQROY4OA"
                initialViewState={{
                  longitude: 31.3102512,
                  latitude: -17.2989482,
                  zoom: 10,
                }}
                style={{ width: "100%", height: "50vh", borderRadius: 10 }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
              />
            </div>
          </div>
          {/* pie charts */}
          <div className="flex flex-col">
            <div className="grid grid-cols-2 gap-8">
              <div className="col-span-1 bg-white rounded-xl p-4">
                <p className="text-sm font-medium text-center pb-8">
                  Truck Fleet
                </p>
                <Doughnut data={firstdata} />
              </div>
              <div className="col-span-1 bg-white rounded-xl p-4">
                <p className="text-sm font-medium text-center pb-8">
                  fuel Consumption
                </p>
                <Doughnut data={fuel} />
              </div>

              {/* <div className="bg-white rounded-xl p-4">
                <p className="text-sm font-medium text-center pb-8">
                  Truck One shovel 1 ore
                </p>
                <Doughnut data={data1} />
              </div> */}
              <CycleTime />
              <div className="col-span-2  bg-white p-4 rounded-xl flex flex-col">
                <BarChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TruckInfo;
