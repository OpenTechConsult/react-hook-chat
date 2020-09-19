import React from 'react';

import './chatroom.styles.css';

const Chatroom = (props) => {

    console.log(props);

    return (
        <div className="chat-room-container">
            <h1 className="room-name">Room:</h1>
            <div className="messages-container">
                <ol className="messages-list">
                    <li className="message-item my-message">Aliquip ullamco fugiat sunt nostrud velit deserunt mollit do amet. Consequat occaecat ad occaecat ut mollit ex aliqua anim. Minim et non mollit Lorem mollit nisi pariatur anim ullamco ea occaecat reprehenderit. Excepteur velit Lorem ipsum enim est nostrud consectetur eu ad ea. Cupidatat sunt Lorem sunt labore magna ut anim cupidatat eu adipisicing amet aute officia. Officia adipisicing elit veniam consequat ex nisi deserunt laboris enim qui Lorem sit.</li>
                    <li className="message-item my-message">nostrud consectetur eu ad ea. Cupidatat sunt Lorem sunt labore magna ut anim cupidatat eu adipisicing amet aute officia. Officia adipisicing elit veniam consequat ex nisi deserunt laboris enim qui Lorem sit.</li>
                    <li className="message-item received-message">nostrud consectetur eu ad ea. Cupidatat sunt Lorem sunt labore magna ut anim cupidatat eu adipisicing amet aute officia. Officia adipisicing elit veniam consequat ex nisi deserunt laboris enim qui Lorem sit.labore. Proident magna reprehenderit ad amet amet. </li>
                </ol>

            </div>
            <textarea 
                    placeholder="Write message..."
                    className="new-message-input-field"></textarea>
            <button className="send-message-button">Send</button>
        </div>
    )
}
export default Chatroom;
