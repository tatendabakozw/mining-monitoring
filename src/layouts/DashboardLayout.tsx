import DashboardNavbar from "@components/navigation/DashboardNavbar";
import DashboardSidebar from "@components/navigation/DashboardSidebar";
import { useState, ReactElement } from "react";

interface Props {
  children: any;
}

const DashboardLayout = (props: Props): ReactElement => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  return (
    <main className="flex h-screen w-full flex-col">
      <div className="flex w-full flex-1 overflow-hidden bg-gray-100">
        <div className="flex w-1/5">
          <DashboardSidebar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
        </div>
        <div className="flex w-full flex-1 flex-col">
          <div className="flex w-full flex-col">
            <DashboardNavbar setSidebarOpen={setSidebarOpen} />
          </div>
          <div className="flex flex-col mx-auto w-full overflow-y-auto">
            {props.children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
