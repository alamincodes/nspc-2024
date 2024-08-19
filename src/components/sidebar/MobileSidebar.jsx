/* eslint-disable react/prop-types */
import { Fragment } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { ScrollArea } from "../ui/scroll-area";
import { NavLink } from "react-router-dom";
import { handleDropdown } from "@/helper/helper";
import { IoChevronDownOutline } from "react-icons/io5";
import { menus } from "./menu-list";

const MobileSidebar = ({ openModal, setOpenModal }) => {
  return (
    <Sheet open={openModal} onOpenChange={setOpenModal}>
      <SheetContent
        side={"left"}
        className="p-0 max-w-64 bg-muted dark:bg-bg-d-primary"
      >
        <SheetHeader className="flex items-start justify-start py-2 pl-4">
          <SheetTitle>Logo</SheetTitle>
        </SheetHeader>
        <ScrollArea className="flex-1 py-6">
          <ul>
            {menus?.map((menu) => (
              <li key={menu.title} className="mb-2 last:mb-0">
                {menu?.path ? (
                  <NavLink
                    to={menu.path}
                    end
                    onClick={() => setOpenModal(!openModal)}
                    className={({ isActive }) =>
                      [
                        isActive
                          ? "border-y text-primary relative border-r-4 border-r-primary"
                          : "",
                        "flex items-center gap-x-2 px-4 py-2.5  hover:bg-muted dark:hover:bg-dark-blue-2 w-full",
                      ].join(" ")
                    }
                  >
                    <menu.icon />
                    <span className="text-sm">{menu.title}</span>
                  </NavLink>
                ) : (
                  <Fragment>
                    <div
                      className="flex justify-between items-center gap-2 pl-4 py-2.5 hover:bg-muted dark:hover:bg-dark-blue-2 w-full cursor-pointer "
                      onClick={handleDropdown}
                      data-dropdown="inactive"
                      data-url="/dashboard/workspace"
                    >
                      <span className="flex items-center gap-x-2">
                        <menu.icon />
                        <span className="text-sm">{menu.title}</span>
                      </span>
                      <span
                        className="transition-transform"
                        style={{ transform: "rotate(-90deg)" }}
                      >
                        <IoChevronDownOutline />
                      </span>
                    </div>{" "}
                    <ul
                      className="transition-[height] overflow-hidden"
                      style={{ height: 0 }}
                    >
                      {menu?.submenus?.map((item, index) => (
                        <li key={index} className="my-3">
                          <NavLink
                            to={item.path}
                            onClick={() => setOpenModal(!openModal)}
                            className={({ isActive }) =>
                              [
                                isActive
                                  ? " text-primary"
                                  : " text-muted-foreground hover:text-foreground",
                                "block pl-10 pr-4 text-sm relative before:absolute before:h-[10px] before:w-[10px] before:rounded-full before:left-5 before:top-[50%] before:translate-y-[-50%] before:border before:border-muted-foreground transition-all",
                              ].join(" ")
                            }
                          >
                            {item.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </Fragment>
                )}
              </li>
            ))}
          </ul>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
