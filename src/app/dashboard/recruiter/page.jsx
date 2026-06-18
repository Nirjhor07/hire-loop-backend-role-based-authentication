"use client";
import StatsDashboard from "@/app/Componenets/Dashboard/StatsDashboard";
import { useSession } from "@/lib/auth-client";
import React from "react";

const RecruiterPage = () => {
  const { data: session, ispending } = useSession();
  console.log(session, ispending);
  const user = session?.user;
  if (ispending) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-lg text-gray-500">Loading...</p>
      </div>
    );
  }
  return (
    <div className="flex-1">
      <h1 className="text-2xl font-bold  p-2">
        Welcome <span className="text-blue-500">{user?.name}</span> to the
        Recruiter Dashboard
      </h1>
      {/* reusable componenet */}
      <div>
        <StatsDashboard />
      </div>
    </div>
  );
};

export default RecruiterPage;
