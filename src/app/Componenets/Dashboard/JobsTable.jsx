"use client";

import { Table } from "@heroui/react";

export default function JobsTable({ jobs }) {
  const handleUpdate = (jobId) => {
    console.log(`Update clicked for job ID: ${jobId}`);
    // Add your update logic or state routing here
  };

  const handleDelete = (jobId) => {
    console.log(`Delete clicked for job ID: ${jobId}`);
    // Add your delete logic (e.g., API call) here
  };

  return (
    <Table>
      <Table.ScrollContainer>
        <Table.Content
          aria-label="Recruiter Jobs List"
          className="min-w-[600px]"
        >
          <Table.Header>
            <Table.Column isRowHeader>Company Name</Table.Column>
            <Table.Column>Industry</Table.Column>
            <Table.Column>Company Id</Table.Column>
            <Table.Column>Status</Table.Column>
            <Table.Column align="end">Actions</Table.Column>
          </Table.Header>

          <Table.Body>
            {jobs && jobs.length > 0 ? (
              jobs.map((job) => (
                <Table.Row key={job._id}>
                  <Table.Cell className="font-medium">
                    {job.companyName || "N/A"}
                  </Table.Cell>
                  <Table.Cell>{job.industry || "N/A"}</Table.Cell>
                    <Table.Cell>{job.companyId || "N/A"}</Table.Cell>
                  <Table.Cell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        job.status === "active"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {job.status}
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <div className="flex items-center justify-center gap-2">
                      <button
                        className="px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded transition"
                        onClick={() => handleUpdate(job._id)}
                      >
                        Update
                      </button>
                      <button
                        className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded transition"
                        onClick={() => handleDelete(job._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))
            ) : (
              <Table.Row>
                <Table.Cell
                  colSpan={5}
                  className="text-center py-4 text-gray-500"
                >
                  No jobs found.
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
}
