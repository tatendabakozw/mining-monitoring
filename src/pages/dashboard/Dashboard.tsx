import DashboardLayout from "@layouts/DashboardLayout";
import React from "react";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <DashboardLayout>
      <div className="flex p-4">Dashboard</div>
    </DashboardLayout>
  );
};

export default Dashboard;
