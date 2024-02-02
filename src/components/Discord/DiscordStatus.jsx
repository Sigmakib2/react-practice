import React, { useState, useEffect } from 'react';

const DiscordStatus = () => {
    const [guildInfo, setGuildInfo] = useState(null);

    useEffect(() => {
        const fetchGuildInfo = async () => {
            try {
                const response = await fetch('https://discord.com/api/v10/invites/Dyncd6eMEy?with_counts=true&with_expiration=true');
                const data = await response.json();
                setGuildInfo(data);
            } catch (error) {
                console.error('Error fetching guild info:', error);
            }
        };

        fetchGuildInfo();
    }, []);
    const handleJoinDiscord = () => {
        // Replace 'YOUR_DISCORD_INVITE_LINK' with the actual Discord invite link
        window.location.href = 'https://discord.com/invite/Dyncd6eMEy';
    };
    return (
        <div className='status' style={{ display: 'flex', alignItems: 'center' }}>
            {guildInfo && (
                <span style={{ display: 'flex', alignItems: 'center' }}>
                    <img draggable="false" src="/assets/discord.svg" alt="" style={{ marginRight: '10px' }} />
                    Now active {guildInfo.approximate_presence_count} of {guildInfo.approximate_member_count} members
                </span>
            )}
            <button className='status' style={{ marginLeft: '10px', cursor: 'pointer' }} onClick={handleJoinDiscord}><b>Join Discord</b></button>
        </div>
    );
};

export default DiscordStatus;