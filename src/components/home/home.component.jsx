import React from 'react';
import { Link } from 'react-router-dom';

import './home.styles.css';

const Home = () => {

    const [roomName, setRoomName] = React.useState("");

    const handleRoomNameChange = (event) => {
        setRoomName(event.target.value);
    };

    return (
        <div className="home-container">
            <h3 className="room-title">Choose a chat room</h3>
            <input type="text"
                    placeholder="Room"
                    value={roomName}
                    onChange={handleRoomNameChange}
                    className="text-input-field" />
            <Link to={`/${roomName}`} className="enter-room-button">Join room</Link>
        </div>
    );
}

export default Home;
