import React from "react";

const JobOpeningsTable = ({ jobs }) => {
  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Sr. No.</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Title</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Publish Date</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Last Date</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Applicants Count</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Status</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr
              key={job.id}
              className={`border-t ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
            >
              <td className="px-4 py-3 text-sm text-gray-600">{index + 1}</td>
              <td className="px-4 py-3 text-sm text-gray-600">{job.title}</td>
              <td className="px-4 py-3 text-sm text-gray-600">{job.publishDate}</td>
              <td className="px-4 py-3 text-sm text-gray-600">{job.lastDate}</td>
              <td className="px-4 py-3 text-sm text-gray-600">{job.applicantsCount}</td>
              <td className="px-4 py-3 text-sm text-gray-600">{job.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobOpeningsTable;
