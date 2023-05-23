import './Message.css';

const Message = ({ text, audio, isUser, userName }) => {
  const handleListenAudio = () => {
    // Code to play the recorded audio
  };

  return (
    <div className={`message-container ${isUser ? 'user-message' : 'agent-message'}`}>
      <div className="message-content">
        <div className="message-header">
          {isUser ? (
            <div className="user-info">
              <div className="user-icon">
                {/* SVG icon for the user */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  {/* Add your SVG icon code here */}
                </svg>
              </div>
              <div className="user-name">{userName}</div>
            </div>
          ) : (
            <div className="agent-info">
              <div className="agent-icon">
                {/* SVG icon for the agent */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  {/* Add your SVG icon code here */}
                </svg>
              </div>
              <div className="agent-name">Agent</div>
            </div>
          )}
        </div>
        <p className="message-text">{text}</p>
        {audio && (
          <button className="message-audio-button" onClick={handleListenAudio}>
            Listen to Audio
          </button>
        )}
      </div>
    </div>
  );
};

export default Message;
