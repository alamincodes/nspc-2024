import { ScrollArea } from "@radix-ui/react-scroll-area";

import { NavLink } from "react-router-dom";
import { handleDropdown } from "@/helper/helper";
import { IoChevronDownOutline } from "react-icons/io5";
import { menus } from "./menu-list";

const Sidebar = () => {
  return (
    <aside className="flex-col hidden h-screen bg-white border-r max-w-20 md:flex">
      <div>
        <h5 className="pl-4 text-2xl font-extrabold dark:text-white text-bg-d-primary">
          L
        </h5>
      </div>
      <ScrollArea className="flex-1 py-6">
        <ul>
          {menus?.map((menu) => (
            <li key={menu.title} className="mb-2 last:mb-0">
              {menu?.path ? (
                <NavLink
                  to={menu.path}
                  end
                  className={({ isActive }) =>
                    [
                      isActive
                        ? "border-y border-violet-500 text-violet-500 relative bg-violet-50  flex justify-center items-center"
                        : "",
                      "flex items-center gap-x-2 px-4 py-2.5 hover:bg-muted dark:hover:bg-dark-blue-2 w-full",
                    ].join(" ")
                  }
                >
                  <menu.icon className="w-8 h-8" />
                  {/* <span className="text-sm">{menu.title}</span> */}
                </NavLink>
              ) : (
                <>
                  <div
                    className="flex justify-between items-center gap-2 px-4 py-2.5 hover:bg-muted dark:hover:bg-dark-blue-2 w-full cursor-pointer "
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
                </>
              )}
            </li>
          ))}
        </ul>
      </ScrollArea>
    </aside>
  );
};

export default Sidebar;
