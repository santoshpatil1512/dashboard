import React from 'react';
import './StatsCard.css';

const StatsCard = ({ title, count, amount, percentage }) => {
    return (
        <div className="stats-card">
            <h3>{title}</h3>
            <p>{count}</p>
            <p>{amount}</p>
            <p>{percentage}</p>
        </div>
    );
};

export default StatsCard;
