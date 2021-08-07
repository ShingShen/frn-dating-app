import React from 'react';
import './Chats.css';
import Chat from './Chat';

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Saito Asuka"
                message="YaHo!"
                timestamp="10 seconds ago"
                profilePic="https://live.staticflickr.com/7610/16736630510_e9e55abe72_b.jpg"
            />

            <Chat
                name="Yoda Yuki"
                message="Hi!"
                timestamp="40 seconds ago"
                profilePic="https://upload.wikimedia.org/wikipedia/commons/f/f5/Yoda_Y%C5%ABki.jpg"
            />

            <Chat
                name="Nancy"
                message="How are you!"
                timestamp="27 seconds ago"
                profilePic="https://upload.wikimedia.org/wikipedia/commons/b/b3/170729_%EB%AA%A8%EB%AA%A8%EB%9E%9C%EB%93%9C_%EB%82%B8%EC%8B%9C_%EC%A7%84%EC%A3%BC_%EC%84%9C%EA%B2%BD%EB%B0%A9%EC%86%A1_%EB%8D%94%EC%87%BC_%EC%A0%90%ED%94%84%EC%BD%98%EC%84%9C%ED%8A%B8_01.jpg"
            />
        </div>
    );
}

export default Chats;
