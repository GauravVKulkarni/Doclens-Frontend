import React, { useEffect, useState } from "react";
import jobOpenings from "../data/jobOpenings.json";
import JobOpeningsTable from "../components/jobOpeningsTable";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const RecruiterJobOpenings = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Fetched Jobs:", jobOpenings);
    setJobs(jobOpenings);
  }, []);
  
  return (
    <div className="container mx-auto p-6 mt-20">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">Job Openings</h1>
        <Button label="Create New Job" onClick={() => navigate("/job-creation")} />
      </div>

      <p className="mb-4 text-lg">Jobs data: {jobs.length > 0 ? jobs.length : "No jobs available"}</p>
      <JobOpeningsTable jobs={jobs} />
    </div>
  );
};

export default RecruiterJobOpenings;
