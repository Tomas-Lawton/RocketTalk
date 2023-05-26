import { useState, useRef, useEffect } from 'react';
import Message from '../Message/Message';
import './Chat.css';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [audio, setAudio] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);

  const [isPaused, setIsPaused] = useState(false);
  const [utterance, setUtterance] = useState(null);
  const [voice, setVoice] = useState(null);
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(1);
  const [volume, setVolume] = useState(1);


  const feed = useRef()

  const handleInputChange = (event) => setMessage(event.target.value);

  const handleToggleRecording = () => setIsRecording(!isRecording);

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






  const defaultMessage = `Welcome to the session. Today I will guide you through learning about the topic of ordering food. Vamos!\n\nBienvenidos a la sesión. Hoy os guiaré en el aprendizaje sobre el tema de pedir comida. ¡Vamos!`;




  const handleListenAudio = (msg) => {
    const voices = window.speechSynthesis.getVoices();
    const utterance = new SpeechSynthesisUtterance(msg);

    // 
    utterance.addEventListener('end', () => {
      speechSynthesis.cancel();
      // remove style
    });

    if (isPaused) {
      speechSynthesis.resume();
    } else {
      // utterance.voice = voices[0];
      utterance.voice = voice;
      utterance.pitch = pitch;
      utterance.rate = rate;
      utterance.volume = volume;
      speechSynthesis.speak(utterance);
    }

    setIsPaused(false);
  };

  // const handlePause = () => {
  //   const synth = window.speechSynthesis;
  //   setIsPaused(true);
  //   synth.pause();
  // };

  // const handleStop = () => {
  //   const synth = window.speechSynthesis;
  //   setIsPaused(false);
  //   synth.cancel();
  // };

  // const handleVoiceChange = (event) => {
  //   const voices = window.speechSynthesis.getVoices();
  //   setVoice(voices.find((v) => v.name === event.target.value));
  // };

  // const handlePitchChange = (event) => {
  //   setPitch(parseFloat(event.target.value));
  // };

  // const handleRateChange = (event) => {
  //   setRate(parseFloat(event.target.value));
  // };

  // const handleVolumeChange = (event) => {
  //   setVolume(parseFloat(event.target.value));
  // };






  return (
    <div className="chat-container">

      <div className="message-list" ref={feed}>
        <Message
          key={"default-message"}
          text={defaultMessage}
          audio={null}
          onListen={() => handleListenAudio(defaultMessage)}
          isUser={false}
        />
        {chatMessages.map((msg, index) => (
          <Message
            key={index}
            text={msg.text}
            audio={msg.audio}
            onListen={() => handleListenAudio(msg.text)}
            isUser={(index % 2 === 0)}
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
