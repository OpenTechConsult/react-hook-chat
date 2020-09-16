import React from 'react';
import { Link } from 'react-router-dom';

import './home.styles.css';

const Home = () => {

    const [roomName, setRoomName] = React.useState("");

    const handleRoomNameChange = (event) => {
        setRoomName(event.target.value);
    };

    return (
        <div>
            <h3>Choose a chat room</h3>
            <input type="text"
                    placeholder="Room"
                    value={roomName}
                    onChange={handleRoomNameChange} />
            <Link to={`/${roomName}`}>Join room</Link>
        </div>
    );
}

export default Home;
