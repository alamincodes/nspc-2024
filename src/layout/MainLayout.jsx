import Header from "@/components/header/Header";
import MobileSidebar from "@/components/sidebar/MobileSidebar";
import Sidebar from "@/components/sidebar/Sidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="flex">
      <div className="hidden lg:block lg:w-64 lg:flex-none">
        <Sidebar />
      </div>
      <div className="block lg:hidden ">
        <MobileSidebar openModal={openModal} setOpenModal={setOpenModal} />
      </div>
      <div className="w-full h-screen">
        <div className="block md:hidden">
          <Header setOpenModal={setOpenModal} />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
