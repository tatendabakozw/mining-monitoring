import DashboardLayout from "@layouts/DashboardLayout";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Map from "react-map-gl";

ChartJS.register(ArcElement, Tooltip, Legend);

const haulage_profiles = [
  { distance: 112, kph: 16.0, description: "Pit floor near shovel" },
  { distance: 550, kph: 17.0, description: "Pit floor" },
  { distance: 841, kph: 25.0, description: "Pit ramp" },
  { distance: 500, kph: 12.0, description: "Surface" },
  { distance: 122, kph: 25.0, description: "All crusher area" },
];

const haulage_cycles = [
  { activity: "Spot time load", to_crusher: 1.92, to_dump: 2.0 },
  { activity: "Loaaad time", to_crusher: 2.23, to_dump: 2.3 },
  { activity: "Full Haul", to_crusher: 8.04, to_dump: 7.9 },
  { activity: "Spot time dump", to_crusher: 0.81, to_dump: 0.9 },
  { activity: "Spot time load", to_crusher: 1.97, to_dump: 2.0 },
  { activity: "Spot time load", to_crusher: 3.82, to_dump: 5.5 },
];

export const data = {
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
      label: "# of Votes",
      data: [15, 19],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
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
            <div className="flex flex-col bg-white p-4 rounded-xl">
              <div className="grid grid-cols-4 border-b border-slate-100 text-slate-900 font-semibold pb-2 mb-2">
                <div className="col-span-1">Distance (m)</div>
                <div className="col-span-1">Kph limit</div>
                <div className="col-span-1">Description</div>
              </div>
              {haulage_profiles.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4 pb-2 text-slate-500 text-sm font-medium"
                >
                  <div className="col-span-1">{item.distance}</div>
                  <div className="col-span-1">{item.kph}</div>
                  <div className="col-span-1">{item.description}</div>
                </div>
              ))}
            </div>
            <div className="bg-white p-4 rounded-xl">
              <p className="text-sm font-semibold text-slate-900 pb-4">
                Current Truck Location
              </p>
              <Map
                mapboxAccessToken="pk.eyJ1IjoidGF0ZW5kYXp3IiwiYSI6ImNsbTdpZGt2NTAweGsza3MyODd5Z20za2UifQ.naBorxMyGM2ewbWQROY4OA"
                initialViewState={{
                  longitude: -122.4,
                  latitude: 37.8,
                  zoom: 14,
                }}
                style={{ width: 600, height: 400, borderRadius: 10 }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
              />
            </div>
          </div>
          {/* pie charts */}
          <div className="flex flex-col">
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-4">
                <p className="text-sm font-medium text-center pb-8">
                  Truck Fleet
                </p>
                <Doughnut data={data} />
              </div>
              <div className="bg-white rounded-xl p-4">
                <p className="text-sm font-medium text-center pb-8">
                  Truck One shovel 1 ore
                </p>
                <Doughnut data={data1} />
              </div>
              <div className="flex flex-col col-span-2 bg-white p-4 rounded-xl">
                <p className="pb-4 text-slate-900 font-semibold text-sm">Average Haulage Cycle Time</p>
                <div className="grid grid-cols-4 border-b border-slate-100 text-slate-900 font-semibold pb-2 mb-2">
                  <div className="col-span-2">Activity</div>
                  <div className="col-span-1">To Crusher</div>
                  <div className="col-span-1">To Dump</div>
                </div>
                {haulage_cycles.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-4 pb-2 text-slate-500 text-sm font-medium"
                  >
                    <div className="col-span-2">{item.activity}</div>
                    <div className="col-span-1">{item.to_crusher}</div>
                    <div className="col-span-1">{item.to_dump}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TruckInfo;