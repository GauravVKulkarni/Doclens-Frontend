import React, { useEffect, useState } from "react";
import jobOpenings from "../data/jobOpenings.json";
import JobOpeningsTable from "../components/jobOpeningsTable";

const RecruiterJobOpenings = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    console.log("Fetched Jobs:", jobOpenings);
    setJobs(jobOpenings);
  }, []);
  
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">Job Openings</h1>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          Create New Job
        </button>
      </div>

      <p className="mb-4 text-lg">Jobs data: {jobs.length > 0 ? jobs.length : "No jobs available"}</p>
      <JobOpeningsTable jobs={jobs} />
    </div>
  );
};

export default RecruiterJobOpenings;
