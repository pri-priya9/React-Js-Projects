import React, { useState, useEffect } from 'react';

 
function SimpleClock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.title = time;
  });

  return (
    <div>
      <h1>SimpleClock⏳</h1>
      <h2>Current Time: {time}</h2>
    </div>
  );
}

export default SimpleClock;

