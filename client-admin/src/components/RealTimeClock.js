import React, { useEffect, useState } from 'react';
import '../css/RealTimeClock.css';

const RealTimeClock = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const source = new EventSource('/api/time');
    source.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setTime(data.time);
      } catch (err) {
        console.error('Failed to parse time', err);
      }
    };
    return () => {
      source.close();
    };
  }, []);

  return (
    <div className="mt-4 text-2xl font-mono">
      <span key={time} className="fade-in">{time}</span>
    </div>
  );
};

export default RealTimeClock;
