import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MentorList.css'

function MentorList() {
  const [mentors, setMentors] = useState([]);
  const [selectedInterest, setSelectedInterest] = useState('');

  useEffect(() => {
    if (selectedInterest) {
      axios.get(`https://onex1mentor-backend.onrender.com/api/mentors?area_of_interest=${selectedInterest}`)
        .then(response => setMentors(response.data));
    }
  }, [selectedInterest]);

  return (
    <div className="mentor-list">
      <select onChange={e => setSelectedInterest(e.target.value)}>
        <option value="">Select an Area of Interest</option>
        <option value="Technology">Technology</option>
        <option value="Business">Business</option>
        <option value="Design">Design</option>
      </select>
      <ul>
        {mentors.map(mentor => (
          <li key={mentor.id}>{mentor.id}-{mentor.name} - {mentor.area_of_interest}</li>
        ))}
      </ul>
    </div>
  );
}

export default MentorList;
