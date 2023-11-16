import React, { useState } from "react";

type Props = {};

const haulage_profiles = [
  { distance: 112, kph: 16.0, description: "Pit floor near shovel" },
  { distance: 550, kph: 17.0, description: "Pit floor" },
  { distance: 841, kph: 25.0, description: "Pit ramp" },
  { distance: 500, kph: 12.0, description: "Ramp" },
  { distance: 122, kph: 25.0, description: "All crusher area" },
];
const un_productive_haulage_profiles = [
  { distance: 112, kph: 20.0, description: "Pit floor near shovel" },
  { distance: 550, kph: 20.0, description: "Pit floor" },
  { distance: 841, kph: 30.0, description: "Pit ramp" },
  { distance: 500, kph: 15.0, description: "Ramp" },
  { distance: 122, kph: 25.0, description: "All crusher area" },
];

const component_tabs = [
  { naame: "Productive", _id: "productive" },
  { naame: "Unproductive", _id: "un-productive" },
];

const HaulageProfiles = (props: Props) => {
  const [selected_tab, setSelectedTab] = useState("productive");

  return (
    <div className="flex flex-col bg-white p-4 rounded-xl space-y-4">
      <div className="grid grid-cols-2 bg-slate-100 rounded-lg items-center p-1 gap-4">
        {component_tabs?.map((item) => (
          <div
            onClick={() => setSelectedTab(item._id)}
            key={item._id}
            className={`${
              selected_tab === item._id ? "bg-white " : "bg-slaate-100 "
            } p-2 rounded-lg text-center col-span-1 cursor-pointer`}
          >
            {item.naame}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 border-b border-slate-100 text-slate-900 font-semibold pb-2 mb-2">
        <div className="col-span-1">Distance (m)</div>
        <div className="col-span-1">Kph limit</div>
        <div className="col-span-1">Description</div>
      </div>
      {selected_tab === "productive" ? (
        <>
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
        </>
      ) : (
        <>
          {un_productive_haulage_profiles.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-4 pb-2 text-slate-500 text-sm font-medium"
            >
              <div className="col-span-1">{item.distance}</div>
              <div className="col-span-1">{item.kph}</div>
              <div className="col-span-1">{item.description}</div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default HaulageProfiles;
