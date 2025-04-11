import React, { useEffect, useState } from 'react';
import JobItem from './JobItem';

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        const fetchJobs = async () => {
            const response = await fetch('/api/jobs');
            const data = await response.json();
            setJobs(data);
        };

        fetchJobs();
    }, []);

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const filteredJobs = filter === 'All' ? jobs : jobs.filter(job => job.status === filter);

    return (
        <div>
            <h2>Job Applications</h2>
            <select onChange={handleFilterChange} value={filter}>
                <option value="All">All</option>
                <option value="Applied">Applied</option>
                <option value="Interview">Interview</option>
                <option value="Offer">Offer</option>
                <option value="Rejected">Rejected</option>
            </select>
            <ul>
                {filteredJobs.map(job => (
                    <JobItem key={job._id} job={job} />
                ))}
            </ul>
        </div>
    );
};

export default JobList;