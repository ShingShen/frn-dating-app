import React, { useState } from 'react';
import Avatar from "@material-ui/core/Avatar";
import './ChatScreen.css';

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Saito Asuka',
            image: 'https://live.staticflickr.com/7610/16736630510_e9e55abe72_b.jpg',
            message: 'YaHo!',
        },

        {
            name: 'Saito Asuka',
            image: 'https://live.staticflickr.com/7610/16736630510_e9e55abe72_b.jpg',
            message: 'I am so cute! Right?',
        },

        {
            message: 'Yeah...',
        },
    ]);

    const handleSend = (e) => {
        e.preventDefault();

        setMessages([...messages, { message: input }]);
        setInput("");
    };

    return (
        <div className="chatScreen">
            <p className="chatScreen_timestamp">YOU MATCHED WITH SAITO ASUKA ON 07/07/20</p>
            {messages.map((message) => 
                message.name ? (
                    <div className="chatScreen_message">
                        <Avatar
                            className="chatScreen_image"
                            alt={message.name}
                            src={message.image}
                        />
                        <p className="chatScreen_text">{message.message}</p>
                    </div>
                ) : (
                    <div className="chatScreen_message">
                        <p className="chatScreen_textUser">{message.message}</p>
                    </div>
                )
            )}
            
                <form className="chatScreen_input">
                    <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="chatScreen_inputField"
                    placeholder="Type a message..." type="text" />
                    <button onClick={handleSend} type="submit" className="chatScreen_inputButton">SEND</button>
                </form>
        </div>
    );
}

export default ChatScreen;
