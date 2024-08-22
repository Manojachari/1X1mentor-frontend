import React, { useState } from 'react';
import '../styles/Scheduler.css';
import axios from 'axios';

function Scheduler() {
  const [mentorId, setMentorId] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [duration, setDuration] = useState(30);
  const [paymentAmount, setPaymentAmount] = useState(2000);

  const handleDurationChange = (e) => {
    const duration = parseInt(e.target.value);
    setDuration(duration);
    setPaymentAmount(duration === 30 ? 2000 : duration === 45 ? 3000 : 4000);
  };


  const handleSchedule =async () => {
    alert(`You will be redirected to pay ${paymentAmount}`);
    const data = {
      mentor_id: mentorId,
      time_slot: timeSlot,
      duration: duration,
      payment_amount: paymentAmount
    };
  
   await axios.post('https://onex1mentor-backend.onrender.com/api/schedule', data).then(response => {
      window.location.href = '/payment';
    });
  };

  return (
    <div className="scheduler">
      <input type="text" placeholder="Mentor ID" onChange={e => setMentorId(e.target.value)} />
      <input type="time" onChange={e => setTimeSlot(e.target.value)} />
      <select onChange={handleDurationChange}>
        <option value={30}>30 mins</option>
        <option value={45}>45 mins</option>
        <option value={60}>60 mins</option>
      </select>
      <button onClick={handleSchedule}>Schedule Session</button>
    </div>
  );
}

export default Scheduler;

