import React, { useState } from 'react';

const AddJobForm = ({ onAddJob }) => {
    const [company, setCompany] = useState('');
    const [role, setRole] = useState('');
    const [status, setStatus] = useState('Applied');
    const [date, setDate] = useState('');
    const [link, setLink] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newJob = { company, role, status, date, link };
        onAddJob(newJob);
        setCompany('');
        setRole('');
        setStatus('Applied');
        setDate('');
        setLink('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Company:</label>
                <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Role:</label>
                <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Status:</label>
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="Applied">Applied</option>
                    <option value="Interview">Interview</option>
                    <option value="Offer">Offer</option>
                    <option value="Rejected">Rejected</option>
                </select>
            </div>
            <div>
                <label>Date of Application:</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Link:</label>
                <input
                    type="url"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                />
            </div>
            <button type="submit">Add Job</button>
        </form>
    );
};

export default AddJobForm;