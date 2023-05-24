import Chat from "../components/Chat/Chat.js"
import './Session.css';
import { Switch } from 'antd';
import { useState } from "react";

const LeftPanel = ({ handleBack }) => {
    const onSwitch = checked => {
        console.log(`switch to ${checked}`);
    };

    return (
        <div className="left-panel">
            <div className="panel-header mt-4 mb-4">
                <div>
                    <h2 className="text-neutral-900 font-medium text-3xl accent">Welcome, Tomas!</h2>
                    <p className="text-gray-400 text-opacity-90 text-base font-medium mt-2">Here you can start a conversation, interact with the chatbot, and learn a new language.</p>
                </div>
            </div>

            <div className="panel-content">
                <div className="panel-content">
                    <img src="./img/SelectedOption/frame0.svg" alt="selected language" className="selected-lang" />
                    <h2 className="text-grey-900 text-3xl">Spanish</h2>
                </div>
                <div className="container-language-options-column">
                    {[...Array(4)].map((e, i) => <img src={`./img/LangOptions/frame${i}.png`} key={i} className="language-option mt-4" alt={`Option Language ${i}`} />)}
                </div>
            </div>

            <div className="panel-footer">
                <div className="flex flex-col lg:flex-row items-center justify-center btn w-full">
                    <button className="btn bg-[#EC9A00]">Add Language <i className="fa-solid fa-plus"></i></button>
                </div>

                <div className="email-subscriber">
                    <div>
                        <h2 className="text-gray-400 text-opacity-90 text-base font-medium accent">Email Notification</h2>
                        <h3 className="text-gray-400 text-opacity-90 text-base font-medium">Weekly progress report</h3>
                    </div>
                    <Switch onChange={onSwitch} />
                </div>
            </div>
        </div>
    );
};

export default function SessionPage() {

    const handleBeginSession = (e) => {
        setSessionView("chat")
    }

    const [sessionView, setSessionView] = useState("dashboard")


    return (
        <div className="session-container">
            <LeftPanel />
            {sessionView === "chat" ?
                <Chat /> :
                <div className="flex flex-col lg:flex-row items-center justify-center mt-8 p-6 w-full">
                    <button className="btn bg-[#EC9A00]" onClick={handleBeginSession}>Begin Lesson</button>
                </div>
            }


        </div>
    )
}