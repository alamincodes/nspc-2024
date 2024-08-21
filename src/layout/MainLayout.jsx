import Header from "@/components/header/Header";
import RightSidebar from "@/components/rightSidebar/RightSidebar";
import MobileSidebar from "@/components/sidebar/MobileSidebar";
import Sidebar from "@/components/sidebar/Sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="flex">
      {/*  ========== left sidebar ======= */}
      <div className="hidden lg:block lg:w-16 lg:flex-none">
        <Sidebar />
      </div>
      <div className="block lg:hidden ">
        <MobileSidebar openModal={openModal} setOpenModal={setOpenModal} />
      </div>
      {/* ======== outlet ======== */}
      <>
        <div className="block md:hidden">
          <Header setOpenModal={setOpenModal} />
        </div>

        <ScrollArea className="flex-1 h-screen">
          <section className="w-full">
            <Outlet />
          </section>
        </ScrollArea>
      </>
      {/*============ right sidebar ===========*/}
      <div className="hidden bg-white border-l lg:block lg:flex-none">
        <RightSidebar />
      </div>
    </div>
  );
};

export default MainLayout;
