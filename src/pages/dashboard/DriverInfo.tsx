import DashboardLayout from "@layouts/DashboardLayout";
import React from "react";

type Props = {};

function DriverInfo({}: Props) {
  return (
    <DashboardLayout>
      <div className="flex p-8 max-w-7xl w-full mx-auto">
        <div className="flex flex-col w-full bg-white p-4 rounded-xl text-slate-700 font-medium">
          <div className="grid grid-cols-4 space-x-4 text-sm">
            <p>Dry preventative maintainance</p>
            <p>Oil preventative maintainance</p>
            <p>Overhead adjustment / engine maintainance</p>
            <p>Initial operating period maintainance</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default DriverInfo;
