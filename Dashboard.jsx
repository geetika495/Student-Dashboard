import React from "react";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="cards">
        <div className="card">Total Courses: 6</div>
        <div className="card">Completed: 3</div>
        <div className="card">Pending Assignments: 2</div>
      </div>

      <div className="section">
        <h3>Notifications</h3>
        <ul>
          <li>New assignment uploaded in Math</li>
          <li>Your Science test marks are released</li>
        </ul>
      </div>

      <div className="section">
        <h3>Recent Activity</h3>
        <ul>
          <li>Completed English Assignment</li>
          <li>Viewed Physics Lecture</li>
        </ul>
      </div>
    </div>
  );
}
