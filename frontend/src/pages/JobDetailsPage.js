import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JobDetailsPage = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJobDetails = async () => {
            try {
                const response = await fetch(`https://your-api-url/jobs/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch job details');
                }
                const data = await response.json();
                setJob(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchJobDetails();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {job ? (
                <div>
                    <h2>{job.role} at {job.company}</h2>
                    <p>Status: {job.status}</p>
                    <p>Date of Application: {new Date(job.date).toLocaleDateString()}</p>
                    <p>Link: <a href={job.link} target="_blank" rel="noopener noreferrer">{job.link}</a></p>
                </div>
            ) : (
                <div>No job details found.</div>
            )}
        </div>
    );
};

export default JobDetailsPage;