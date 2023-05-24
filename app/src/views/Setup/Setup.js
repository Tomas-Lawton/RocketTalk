import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Setup.css";
import Authentication from "../../components/Auth/Authentication"

const UserSetup = () => {

    const [currentView, setView] = useState(0)

    // Chosen Language is already set up

    // Where are you currently at in your language journey?
    // Beginner, Intermediate, Advanced

    // What do you want to learn about first? or What would you like to use a language for?

    // How would you like RocketTalk to give you feedback?


    const handleUserSelection = () => {
        setView(currentView + 1)
        // save it and move to next view
    }

    // add a cool rocket animation.


    const data = [
        {
            question: 'Where are you on your language journey?',
            options: [
                {
                    icon: 'fa-solid fa-bug',
                    level: 'Beginner',
                    description: ' Learners start by acquiring essential vocabulary, basic grammar structures, and fundamental language skills such as listening, speaking, reading, and writing. '
                }, {
                    icon: 'fa-solid fa-user-astronaut',
                    level: 'Intermediate',
                    description: 'At the intermediate level, language learners have a grasp of the basics and can engage in more complex language tasks. Intermediate learning aims to expand vocabulary, deepen understanding of grammar concepts, and improve fluency. '
                }, {
                    icon: 'fa-solid fa-globe',
                    level: 'Advanced',
                    description: 'Advanced language learning focuses on refining language skills to a high level of proficiency. Learners at the advanced level work on mastering complex grammar structures, expanding their vocabulary, and refining their pronunciation and intonation.'
                }]
        },
        {
            question: 'Why do you want to learn a new language?',
            options: [
                {
                    icon: '',
                    level: 'Communication and Travel',
                    description: 'Being able to speak the local language enhances the travel experience, facilitates interactions with locals, and enables a deeper cultural immersion. This purpose often focuses on developing conversational skills, basic vocabulary, and essential phrases related to travel and everyday situations.'
                }, {
                    icon: '',
                    level: 'Education and Career Advancement',
                    description: 'Learning a language can open up educational and career opportunities. In an increasingly globalized world, knowledge of a second language is valued by educational institutions and employers. It can enhance job prospects, increase employability, and enable international collaboration and networking. '
                }, {
                    icon: '',
                    level: 'Personal Growth and Cultural Appreciation',
                    description: 'Many individuals are passionate about languages and enjoy the process of acquiring new linguistic skills. It allows them to engage with different cultures, literature, films, music, and art in their original language. '
                }]
        },
        {
            question: 'How would you like RocketTalk to help with your language journey?',
            options: [
                {
                    icon: '',
                    level: 'Personalized Learning Paths',
                    description: 'RocketTalk can provide personalized learning paths tailored to individual language learners. By assessing learners proficiency levels, goals, and interests, RocketTalk can offer customized language courses and resources that cater to their specific needs.'
                }, {
                    icon: '',
                    level: 'Interactive Conversational Practice',
                    description: 'RocketTalk can offer interactive conversational practice through AI-powered language chatbots or virtual language partners. These tools can engage learners in realistic conversations, provide instant feedback, and simulate real-life language situations.'
                }, {
                    icon: '',
                    level: 'Cultural Immersion Opportunities',
                    description: 'RocketTalk can provide cultural immersion opportunities to enhance language learning. This can include access to authentic cultural materials such as movies, TV shows, music, and literature in the target language. '
                }]
        }

    ]

    return (
        currentView === 3 ?
            <Authentication isLogin={false} />
            :
            <div className="selection-view">
                <h1 className="accent text-4xl">{data[currentView].question}</h1>
                <div className="selections-container">
                    {data[currentView].options.map((item, i) => (
                        <div className="selection-box m-8 p-6" onClick={handleUserSelection}>
                            <div className="py-4 px-1">
                                <div className="icon-box mb-6 flex items-center">
                                    {/* <img src="./img/logo_icon.svg" alt="logo" className="block mx-auto" /> */}
                                    <i className={"block mx-auto text-8xl " + item.icon}></i>
                                </div>
                                <div className="text-center px-4">
                                    <h3 className="heading text-2xl mb-2 leading-normal text-white">{item.level}</h3>
                                    <p className="text-base text-gray-500 dark:text-gray-400 opacity-90">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    );
}

// To DO update idk
const Setup = ( {toLogin} ) => toLogin ? <Authentication isLogin={true} /> : <UserSetup />

export default Setup;
