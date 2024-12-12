import React, { useState, useEffect } from "react";
import JobOpeningsTable from "../../components/jobOpeningsTable";
import jobOpenings from "../../data/jobOpenings.json";
import { useNavigate } from "react-router-dom";
import Banner from "../../components/Banner";
import Button from "../../components/Button";

const LandingPage = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  // Use useEffect to set the state when the component mounts
  useEffect(() => {
    setJobs(jobOpenings);
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="min-h-screen mt-20">
    <Banner class text={'Job Openings'} />
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
      </div>
      <p className="mb-4 text-lg">
        Available Jobs : {jobs.length > 0 ? jobs.length : "No jobs available"}
      </p>
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
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">View Details</th>
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
              <td className="px-4 py-3 text-sm text-gray-600"><Button label={'View'} onClick={() => navigate('/JobPage')}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
  );
};

export default LandingPage;