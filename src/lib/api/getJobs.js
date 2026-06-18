export const getjobsByRecruiter = async (company_id, status) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/jobs?companyId=${company_id}&status=${status}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch jobs");
  }

  return res.json();
};
