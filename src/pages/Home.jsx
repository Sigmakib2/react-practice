import React, { useState } from 'react';
import "./Home.css"

export default function Home() {
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
                        <button onClick={handleCopyToClipboard} className="copyip" ><span id="myText">IP: play.dynamiccraft.xyz</span></button>
                        {showPopup && (
                            <div className="popup">
                                <p onClick={closePopup}>IP copied to clipboard <b onClick={closePopup}>🔥</b></p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </div>
    )
}
