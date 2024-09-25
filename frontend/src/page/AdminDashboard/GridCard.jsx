import React from "react";
import { IoMdCart } from "react-icons/io";
import { FiUsers } from "react-icons/fi";
import { FaRegBuilding } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import Card from "../../components/Card";
import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart } from "@mui/x-charts/PieChart";

const staticData = {
  totalProducts: 300,
  totalUsers: 500,
  totalRevenue: 100000,
  totalCompanies: 50,
  salesData: {
    xAxis: [1, 2, 3, 4, 5],
    series: [2, 5.5, 2, 8.5, 1.5],
  },
  revenueByCompany: [
    { label: "Company A", value: 10 },
    { label: "Company B", value: 15 },
    { label: "Company C", value: 20 },
  ],
};

function GridCard() {
  return (
    <main className="flex-1 overflow-y-auto p-6 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6 dark:text-white">
          Dashboard Overview
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Card
            icon={<IoMdCart />}
            title="Total Products"
            value={staticData.totalProducts}
          />
          <Card
            icon={<FiUsers />}
            title="Total Users"
            value={staticData.totalUsers}
          />
          <Card
            icon={<FaDollarSign />}
            title="Total Revenue"
            value={`$${staticData.totalRevenue}`}
          />
          <Card
            icon={<FaRegBuilding />}
            title="Total Companies"
            value={staticData.totalCompanies}
          />
          
          {/* Monthly Sales Card */}
          <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow col-span-1 sm:col-span-2 lg:col-span-2">
            <h2 className="text-xl p-2 font-bold dark:text-white">
              Monthly Sales
            </h2>
            <div className="flex flex-col w-full" style={{ height: "250px" }}>
              <div
                className="flex w-full"
                style={{ position: "relative", height: "200px" }}
              >
                <div
                  className="font-bold  absolute top-1/2 transform -translate-y-1/2 text-gray-600 dark:text-gray-300"
                  style={{
                    marginLeft: "-25px",
                    marginTop: "10px",
                    transform: "translateY(-50%) rotate(-90deg)",
                  }}
                >
                  Sales (in $)
                </div>
                <div className="w-full  " style={{ height: "200px" }}>
                  <LineChart
                    xAxis={[{ data: staticData.salesData.xAxis }]} // X-axis data
                    series={[{ data: staticData.salesData.series }]} // Y-axis data points
                    width={500} // Adjusted width
                    height={230}
                  />
                </div>
              </div>
              <div className="font-bold mr-35 pt-2 text-gray-600 dark:text-gray-300 text-center">
                Month
              </div>
            </div>
          </div>
          
          {/* Revenue by Company Card */}
          <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow col-span-1 sm:col-span-2 lg:col-span-2">
            <h2 className="text-xl font-bold mb-2 dark:text-white">
              Revenue by Company
            </h2>
            <div className="w-full" style={{ height: "250px" }}>
              <PieChart
                series={[
                  {
                    data: staticData.revenueByCompany.map((company, index) => ({
                      id: index,
                      value: company.value,
                      label: company.label,
                    })),
                  },
                ]}
                width={400} // Adjusted width
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default GridCard;
