import React, { useState } from 'react';
import "./Hero.css"
import DiscordStatus from '../Discord/DiscordStatus';

export default function Hero() {
    const [showPopup, setShowPopup] = useState(false);

    const handleCopyToClipboard = () => {
        const urlToCopy = 'play.dynamiccraft.xyz'; // Replace with your desired URL
        navigator.clipboard.writeText(urlToCopy)
            .then(() => {
                console.log('URL copied to clipboard:', urlToCopy);
                setShowPopup(true);
            })
            .catch((error) => {
                console.error('Error copying to clipboard:', error);
                // Handle errors or show an error message
            });
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div>
            <div className="card">
                <div className="card-content">
                    <img draggable="false" className="h-img" src="/images/dynamiccraft-logo.png" alt="Your Image" />
                    <div>
                        <h2 className="hero-title">Welcome to DynamicCraft Bangladesh</h2>
                        <p className="description">A Friendly Bangladeshi Minecraft Server for Everyone!</p>
                        <DiscordStatus/>
                        <button onClick={handleCopyToClipboard} className="copyip" ><span id="myText">IP: play.dynamiccraft.xyz</span></button>
                       
                        {showPopup && (
                            <div className="popup">
                                <div style={{ display: 'flex', alignItems: 'center' }} onClick={closePopup}>
                                    <img src='/assets/msg.svg' style={{ marginRight: '8px' }} />
                                    <p><b>IP copied</b> to clipboard 🔥 <small>click to close!</small></p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
