import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the 1x1 Scheduler</h1>
      <p>Schedule your session with a mentor based on your area of interest.</p>
      <a href="/schedule">Get Started</a>
    </div>
  );
}

export default Home;
