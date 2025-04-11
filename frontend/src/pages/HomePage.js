import React from 'react';
import AddJobForm from '../components/AddJobForm';
import JobList from '../components/JobList';

const HomePage = () => {
    return (
        <div>
            <h1>Student Job Tracker</h1>
            <AddJobForm />
            <JobList />
        </div>
    );
};

export default HomePage;