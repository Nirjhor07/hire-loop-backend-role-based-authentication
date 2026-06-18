import { getjobsByRecruiter } from "@/lib/api/getJobs";

const JobsPage = async () => {
    const company_id = "LM999"; // Replace with actual company ID
    const status = "active"; // Replace with actual status if needed
    const jobs = await getjobsByRecruiter(company_id, status);
    console.log(jobs); // Log the fetched jobs for debugging
    return (
        <div>
            <h1 className="text-2xl font-bold p-4">Jobs Page</h1>
        </div>
    );
};

export default JobsPage;