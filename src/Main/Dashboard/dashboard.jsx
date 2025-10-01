import React from 'react';
import BookingSummary from './booking-summary.jsx';
import RevenueStats from './revenue-stats.jsx';

function Dashboard() {
    return (
        <h2>
            <BookingSummary></BookingSummary>
            <RevenueStats></RevenueStats>

        </h2>
    );
}

export default Dashboard;