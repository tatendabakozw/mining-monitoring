import DashboardLayout from "@layouts/DashboardLayout";
import { useState } from "react";

type Props = {};

function DriverInfo({}: Props) {
  const [openedItem, setOpenedItem] = useState("");

  const page_item = [
    { name: "Dry preventative maintainance", _id: "dry_maintanance" },
    { name: "Oil preventative maintainance", _id: "oil_maintanance" },
    {
      name: "Overhead adjustment / engine maintainance",
      _id: "overhead_maintanance",
    },
    {
      name: "Initial operating period maintainance",
      _id: "initial_maintanance",
    },
  ];

  return (
    <DashboardLayout>
      <div className="flex p-8 max-w-7xl w-full mx-auto">
        <div className="flex flex-col w-full rounded-xl text-slate-700 font-medium">
          <div className="flex flex-col space-y-8 text-sm">
            {page_item.map((item) => (
              <div
                onClick={() => setOpenedItem(item._id)}
                key={item._id}
                className="p-4 rounded-lg bg-white cursor-pointer hover:bg-slate-50"
              >
                <p>{item.name}</p>
                {openedItem === item._id && (
                  <>
                    <div className="grid grid-cols-6 bg-slate-100 p-2 rounded-lg mt-4">
                      <div className="col-span-1">Date</div>
                      <div className="col-span-1">Milage</div>
                      <div className="col-span-1">Scheduled date</div>
                      <div className="col-span-1">Work perfomed</div>
                      <div className="col-span-1">Expected Milage</div>
                      <div className="col-span-1">Notes</div>
                    </div>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12].map((item) => (
                      <div key={item} className="grid grid-cols-6 p-2 rounded-lg mt-4 border border-slate-200">
                        <div className="col-span-1 border-r border-slate-200">{item}</div>
                        <div className="col-span-1 border-r border-slate-200"></div>
                        <div className="col-span-1 border-r border-slate-200"></div>
                        <div className="col-span-1 border-r border-slate-200"></div>
                        <div className="col-span-1 border-r border-slate-200"></div>
                        <div className="col-span-1 border-r border-slate-200"></div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default DriverInfo;
