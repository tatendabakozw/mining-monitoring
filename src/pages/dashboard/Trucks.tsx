import { ChartBarIcon, TrashIcon } from "@heroicons/react/24/outline";
import DashboardLayout from "@layouts/DashboardLayout";
import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Trucks = (props: Props) => {
  const trucks = [
    {
      driver: "Tatenda Bako",
      bus: "43RETSD",
      status: "in-route",
      _id: "aadsf233",
    },
    {
      driver: "Maxwell Muvhi",
      bus: "FERERSS",
      status: "stationary",
      _id: "ad4SSdsf",
    },
    {
      driver: "Tadiwa Muswe",
      bus: "DSD3AAS",
      status: "in-route",
      _id: "cvsasd2",
    },
    {
      driver: "Mike Minda",
      bus: "6DFSDDF",
      status: "in-route",
      _id: "vadsf230",
    },
  ];
  return (
    <DashboardLayout>
      <div className="flex flex-col p-6 space-y-4">
        <p className="text-5xl text-slate-900 font-bold">Trucks List</p>
        <div className="grid grid-cols-6 py-2 text-sm font-medium border-t items-center border-slate-200 border-b text-slate-500">
          <div className="col-span-1">Truck</div>
          <div className="col-span-2">Driver</div>
          <div className="col-span-1">Status</div>
          <div className="col-span-1">Action</div>
        </div>
        {trucks.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-6 py-2 text-sm font-medium items-center text-slate-500"
          >
            <div className="col-span-1">{item.bus}</div>
            <div className="col-span-2 flex flex-row items-center space-x-4">
              {/* @ts-ingore */}
              {/* <Avatar size={"xs"} name="tatenda bako" /> */}
              <p className="text-slate-500 font-medium text-sm">
                {item.driver}
              </p>
            </div>
            <div className="col-span-1 flex">
              <p className="bg-green-100 rounded px-2 py-1 text-green-900 text-xs">
                In Route
              </p>
            </div>
            <div className="col-span-1">
              <div className="flex flex-row space-x-4">
                <TrashIcon height={16} width={16} />
                <Link to="/dashboard/truck-info">
                  <ChartBarIcon height={16} width={16} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Trucks;
