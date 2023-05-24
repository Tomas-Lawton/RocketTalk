import React from 'react';
import './Message.css';

const Message = ({ text, audio, isUser, onListen, userName }) => {

  return (
    <div className={`message-container ${isUser ? 'user-message' : 'agent-message'}`} onClick={onListen}>
      {isUser ?
        (
          <div className="user-info">
            <div className="user-name">{userName}</div>
            <div className="user-icon">
              <i className="fa-solid fa-circle-user"></i>
            </div>
          </div>
        ) :
          (
            <div className="agent-icon">
              <img src="./img/logo_icon.svg" alt="logo" className="block" />
            </div>
          )}
      <div className="message-content">
        <div className="message-header">
          {isUser ? (
            <></>
          ) : (
            <div className="agent-info">
              <div className="agent-name accent">Agent</div>
            </div>
          )}
        </div>
        <p className="message-text">{text}</p>
        {audio && (
          // change to playback icon
          <button className="message-audio-button">
            Listen to Audio
          </button>
        )}
      </div>
    </div>
  );
};

export default Message;