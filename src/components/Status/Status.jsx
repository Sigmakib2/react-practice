import React, { useState, useEffect } from 'react';
import './Status.css'; // Import your CSS file

const Status = () => {
  const [serverData, setServerData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://mcapi.us/server/status?ip=play.dynamiccraft.xyz');
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        console.error('Error fetching server status:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='card'>
      {serverData ? (
        <div className='server-status-container'>
          <span className='status'>DynamicCraft is <b>{serverData.online ? 'Online' : 'Offline'}</b> Now!</span>
          <span className='status'>Season 10 Running</span>
          <span className='status'>Currently playing <b>{serverData.players.now}/{serverData.players.max}</b></span>
          <span className='status'>Can Join: <b>{serverData.players.max - serverData.players.now}</b></span>
        </div>
      ) : (
        <p className='status'>Loading server data...</p>
      )}
    </div>
  );
};

export default Status;
