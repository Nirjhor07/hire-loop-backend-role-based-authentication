"use client";
import React from "react";
import StatCard from "./StatCard"; // Adjust path based on your folder structure
import {
  Briefcase,
  Persons,
  CircleCheck,
  CircleXmark,
} from "@gravity-ui/icons";

const StatsDashboard = () => {
  const statsData = [
    {
      title: "Total Jobs Posted",
      value: "124",
      icon: Briefcase,
      iconColor: "text-blue-500",
    },
    {
      title: "Total Applicants",
      value: "3,240",
      icon: Persons,
      iconColor: "text-purple-500",
    },
    {
      title: "Active Jobs",
      value: "42",
      icon: CircleCheck,
      iconColor: "text-success",
    },
    {
      title: "Jobs Closed",
      value: "82",
      icon: CircleXmark,
      iconColor: "text-danger",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 max-w-7xl mx-auto w-full">
      {statsData.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          iconColor={stat.iconColor}
        />
      ))}
    </div>
  );
};

export default StatsDashboard;
