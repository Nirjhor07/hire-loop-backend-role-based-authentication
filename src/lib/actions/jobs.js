"use server";

import { redirect } from "next/navigation";

export const createCompanyNewJobRecriter = async (values) => {
  // Implementation for creating new job
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
  if (res.ok) {
    redirect("/dashboard/recruiter/jobs");
  }

  return res.json();
};

