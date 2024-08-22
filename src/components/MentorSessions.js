import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MentorSessions.css'

function MentorSessions() {
  const [sessions, setSessions] = useState([]);
  const [id, setId] = useState('');

  useEffect(() => {
    axios.get(`https://onex1mentor-backend.onrender.com/api/mentor/${id}/sessions`)
      .then(response => setSessions(response.data))
      .catch(error => console.error('Error fetching sessions:', error));

  }, [id]);

  return (
    <div className="mentor-sessions">
      <h2>Scheduled Sessions</h2>
      <input 
          type='number' 
          value={id} 
          onChange={(e) => setId(e.target.value)} 
          placeholder="Enter Mentor ID"
          className="mentor-id-input"
        />
      <ul className='list'>
        {sessions.length > 0 ? (
          sessions.map(session => (
            <li key={session.id} >
              <strong>Time Slot:</strong> {session.duration} minutes <br />
              <strong>Duration:</strong> {session.payment_amount}
            </li>
          ))
        ) : (
          <li>No sessions scheduled.</li>
        )}
      </ul>
    </div>
  );
}

export default MentorSessions;
