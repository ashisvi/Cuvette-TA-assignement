import React from 'react';

const JobItem = ({ job, onUpdateStatus, onDelete }) => {
    const handleStatusChange = (event) => {
        onUpdateStatus(job._id, event.target.value);
    };

    const handleDelete = () => {
        onDelete(job._id);
    };

    return (
        <div className="job-item">
            <h3>{job.role} at {job.company}</h3>
            <p>Status: {job.status}</p>
            <p>Date of Application: {new Date(job.date).toLocaleDateString()}</p>
            <a href={job.link} target="_blank" rel="noopener noreferrer">View Job</a>
            <select value={job.status} onChange={handleStatusChange}>
                <option value="Applied">Applied</option>
                <option value="Interview">Interview</option>
                <option value="Offer">Offer</option>
                <option value="Rejected">Rejected</option>
            </select>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default JobItem;