import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import ActivityChart from './ActivityChart';
import RecentOrders from './RecentOrders';
import CustomerFeedback from './CustomerFeedback';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="stats">
          <div className="stat">
            <h3>Total Orders</h3>
            <p>75</p>
          </div>
          <div className="stat">
            <h3>Total Delivered</h3>
            <p>70</p>
          </div>
          <div className="stat">
            <h3>Total Cancelled</h3>
            <p>5</p>
          </div>
          <div className="stat">
            <h3>Total Revenue</h3>
            <p>$12k</p>
          </div>
          <div className="stat">
            <h3>Net Profit</h3>
            <p>$6759.25</p>
          </div>
        </div>
        <div className="charts">
          <div className="activity-chart">
            <ActivityChart />
          </div>
          <div className="other-charts">
            <div className="goals">
              <h3>Goals</h3>
              {/* Add more content as needed */}
            </div>
            <div className="popular-dishes">
              <h3>Popular Dishes</h3>
              {/* Add more content as needed */}
            </div>
            <div className="menus">
              <h3>Menus</h3>
              {/* Add more content as needed */}
            </div>
          </div>
        </div>
        <div className="recent-orders">
          <RecentOrders />
        </div>
        <div className="customer-feedback">
          <CustomerFeedback />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
