import SideBar, { SideBarItem } from "@/common/components/layout/sidebar";
import Topbar from "@/common/components/layout/topbar";
import { Button } from "@/common/components/ui/button";

import { Bell, Moon, PieChart } from "lucide-react";

const AdminDashboard = () => {
  return (
    <div className=" min-h-screen">
      <Topbar>
        <Button size="icon" variant="ghost" className="opacity-60">
          <Bell size={18} />
        </Button>

        <Button size="icon" variant="ghost" className="opacity-60">
          <Moon size={18} />
        </Button>
      </Topbar>

      <div className="flex h-full">
        <SideBar>
          <SideBarItem
            label="Dasboard"
            isSelected
            icon={<PieChart size={18} />}
          />
          <SideBarItem label="Dasboard" icon={<PieChart size={18} />} />
          <SideBarItem label="Dasboard" icon={<PieChart size={18} />} />
        </SideBar>

        <div className=" w-full h-full flex ml-72 p-4">
          <div className="grid grid-cols-3 gap-4 w-full "></div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
