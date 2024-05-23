import { data } from "@utils/data";
import React, { useState } from "react";

const component_tabs = [
  { naame: "Expected", _id: "productive" },
  { naame: "Actual", _id: "un-productive" },
];

type Props = {};

const CycleTime = (props: Props) => {
  const [selected_tab, setSelectedTab] = useState("productive");
  return (
    <div className="flex flex-col col-span-2 bg-white p-4 rounded-xl">
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
      <p className="py-4 text-slate-900 font-semibold text-sm">
        Average Haulage Cycle Time
      </p>
      <div className="grid grid-cols-4 border-b border-slate-100 text-slate-900 font-semibold pb-2 mb-2">
        <div className="col-span-2">Activity</div>
        <div className="col-span-1">To Crusher</div>
        <div className="col-span-1">To Dump</div>
      </div>
      {selected_tab === "un-productive" ? (
        <>
          {data.lower_haulage_cycles.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-4 pb-2 text-slate-500 text-sm font-medium"
            >
              <div className="col-span-2">{item.activity}</div>
              <div className="col-span-1">{item.to_crusher}</div>
              <div className="col-span-1">{item.to_dump}</div>
            </div>
          ))}
          <div className="grid grid-cols-4 text-slate-900 font-medium">
            <div className="col-span-2">total cycle time</div>
            <div className="col-span-1">
              {data.lower_haulage_cycles.reduce(
                (n, { to_crusher }) => n + to_crusher,
                0
              )}
            </div>
            <div className="col-span-1">
              {data.lower_haulage_cycles.reduce(
                (n, { to_dump }) => n + to_dump,
                0
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          {data.haulage_cycles.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-4 pb-2 text-slate-500 text-sm font-medium"
            >
              <div className="col-span-2">{item.activity}</div>
              <div className="col-span-1">{item.to_crusher}</div>
              <div className="col-span-1">{item.to_dump}</div>
            </div>
          ))}
          <div className="grid grid-cols-4 text-slate-900 font-medium">
            <div className="col-span-2">total cycle time</div>
            <div className="col-span-1">
              {data.haulage_cycles.reduce(
                (n, { to_crusher }) => n + to_crusher,
                0
              )}
            </div>
            <div className="col-span-1">
              {data.haulage_cycles.reduce((n, { to_dump }) => n + to_dump, 0)}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CycleTime;
