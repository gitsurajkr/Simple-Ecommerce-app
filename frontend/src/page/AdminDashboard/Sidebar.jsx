import React, { useState, useEffect } from "react";
import { LuPackage2 } from "react-icons/lu";
import { FiHome, FiUsers } from "react-icons/fi";
import { IoMdMenu, IoMdSearch } from "react-icons/io";
import { MdOutlineShoppingCart, MdOutlineWbSunny } from "react-icons/md";
import { IoCubeOutline } from "react-icons/io5";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { FaRegBuilding, FaRegMoon, FaRegBell } from "react-icons/fa";
import { RiStarSLine } from "react-icons/ri";
import GridCard from "./GridCard";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const buttonClass = (tab) =>
    `flex items-center p-3 rounded-lg transition-colors duration-200 ${
      activeTab === tab
        ? isDarkMode
          ? "bg-gray-700 text-white"
          : "bg-gray-200 text-gray-900"
        : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    }`;

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:static md:translate-x-0`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-700">
          <div className="text-md mr-2 text-primary dark:text-white">
            <LuPackage2 size={30} />
          </div>
          <span className="text-2xl font-semibold dark:text-white">
            Admin Dashboard
          </span>
          <button className="md:hidden" onClick={toggleSidebar}>
            <IoMdMenu className="text-gray-900 dark:text-white" />
          </button>
        </div>
        <nav className="p-4 space-y-4">
          {[
            "dashboard",
            "products",
            "inventory",
            "order",
            "company",
            "users",
            "reviews",
          ].map((tab) => (
            <button
              key={tab}
              className={buttonClass(tab)}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "dashboard" && <FiHome size={25} />}
              {tab === "products" && <MdOutlineShoppingCart size={25} />}
              {tab === "inventory" && <IoCubeOutline size={25} />}
              {tab === "order" && <HiOutlineDocumentText size={25} />}
              {tab === "company" && <FaRegBuilding size={25} />}
              {tab === "users" && <FiUsers size={25} />}
              {tab === "reviews" && <RiStarSLine size={25} />}
              <span className="ml-3">
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center justify-between pr-7 h-16 px-6 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <button className="md:hidden" onClick={toggleSidebar}>
            <IoMdMenu className="text-gray-900 dark:text-white" />
          </button>
          <form
            className="flex-1 ml-4 md:ml-0"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative">
              <IoMdSearch className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500 dark:text-gray-400" />
              <input
                type="search"
                placeholder="Search..."
                className="pl-10 py-2 md:w-80 bg-gray-100 dark:bg-gray-700 border-transparent text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
          </form>
          <div className="flex items-center gap-4">
            <button onClick={toggleDarkMode}>
              {isDarkMode ? (
                <MdOutlineWbSunny className="w-5 h-5 text-gray-900 dark:text-white" />
              ) : (
                <FaRegMoon className="w-5 h-5 text-gray-900 dark:text-white" />
              )}
            </button>
            <button>
              <FaRegBell className="w-5 h-5 text-gray-900 dark:text-white" />
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button>
                  <img
                    src="https://avatars.githubusercontent.com/u/63985074?v=4"
                    alt="profile"
                    className="rounded-full"
                    height="32"
                    width="32"
                    style={{
                      aspectRatio: 1,
                      objectFit: "cover",
                    }}
                  />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                sideOffset={5}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg -translate-x-2"
              >
                <DropdownMenuItem className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                  <button className="text-gray-900 dark:text-white">
                    Profile
                  </button>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                  <button className="text-gray-900 dark:text-white">
                    My Account
                  </button>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                  <button className="text-gray-900 dark:text-white">
                    Settings
                  </button>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                  <button className="text-gray-900 dark:text-white">
                    Logout
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <GridCard />
      </div>
      
    </div>
  );
};

export default Sidebar;
