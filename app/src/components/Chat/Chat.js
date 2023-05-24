import { useState, useRef, useEffect } from 'react';
import Message from '../ChatMessage/Message';
import './Chat.css';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [audio, setAudio] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);

  const feed = useRef()

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleToggleRecording = () => {
    // Code to start recording audio
    setIsRecording(!isRecording);
  };

  const handleListenAudio = () => {
    // Code to play the recorded audio
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      const newMessage = {
        text: message,
        audio: audio,
        timestamp: new Date().toLocaleTimeString(),
      };

      setChatMessages([...chatMessages, newMessage]);
      setMessage('');
      setAudio(null);
    }
  };

  const handleKeyDown = event => {
    if (event.keyCode === 13) {
      handleSendMessage();
    }
  }

  useEffect(() => {
    if (feed.current) {
      feed.current.scrollTop = feed.current.scrollHeight;
    }
  }, [chatMessages]);
  

  return (
    <div className="chat-container">

      <div className="message-list" ref={feed}>
        {chatMessages.map((msg, index) => (
          <Message
            key={index}
            text={msg.text}
            audio={msg.audio}
            onListen={handleListenAudio}
            isUser={(index % 2 !== 0)}
            userName={"Tomas"}
          />
        ))}
      </div>

      <div className="chat-controls">
          <div className="input-section">
            <input
              type="text"
              value={message}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="message-input"
              onKeyDown={handleKeyDown}
            />
            <i className={"fa-brands fa-rocketchat send-button"} onClick={handleSendMessage}></i>
          </div>

          <i className={`fa-solid fa-microphone record-button ${isRecording ? 'recording' : ''}`}
            onClick={handleToggleRecording}></i>

        </div>
    </div>
  );
};

export default Chat;
