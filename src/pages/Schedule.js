import React from 'react';
import MentorList from '../components/MentorList';
import Scheduler from '../components/Scheduler';
import '../styles/Schedule.css';
import MentorSessions from '../components/MentorSessions';

function Schedule() {
  
  return (
    <div className="schedule-container">
      <div className="mentor-list-container">
        <MentorList />
      </div>
      <div className="scheduler-container">
        <Scheduler />
      </div>
      <div className="mentor-sessions-container">
        <MentorSessions />
      </div>
    </div>
  );
}

export default Schedule;
