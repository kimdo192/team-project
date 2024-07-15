import React, { useState } from 'react';
import styles from './Chat.module.css';
import { Link } from "react-router-dom";
import home from './image/home.png';
import person from './image/user.png';
import folder from './image/folder.png';
import profile from './image/profile.jpg';

export default function Chatpage() {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const Chat = (sender) => {
        if (inputValue.trim()) {
            setMessages([...messages, { text: inputValue, sender }]);
            setInputValue("");
        }
    };

    return (
        <div className={styles["background"]}>
            <div className={styles["side-bar"]}>
                <Link to="Mypage.jsx"><img className={styles["icon"]} src={home} alt="Home" /></Link>
                <Link to="Mypage.jsx"><img className={styles["icon"]} src={person} alt="Person" /></Link>
                <Link to="Mypage.jsx"><img className={styles["icon"]} src={folder} alt="Folder" /></Link>
            </div>
            <div className={styles["chat-box"]}>
                <div className={styles["person"]}>
                    <div className={styles["profile-item"]}>
                        <img className={styles["profile"]} src={profile} alt='Profile' />
                        <span>장서영</span>
                    </div>
                    <div className={styles["profile-item"]}>
                        <img className={styles["profile"]} src={profile} alt='Profile' />
                        <span>김도영</span>
                    </div>
                    <div className={styles["profile-item"]}>
                        <img className={styles["profile"]} src={profile} alt='Profile' />
                        <span>엘리자베스</span>
                    </div>
                    <div className={styles["profile-item"]}>
                        <img className={styles["profile"]} src={profile} alt='Profile' />
                        <span>플랩 프로젝트</span>
                    </div>
                    <div className={styles["profile-item"]}>
                        <img className={styles["profile"]} src={profile} alt='Profile' />
                        <span>협업 프로젝트 방</span>
                    </div>
                </div>
                <div className={styles["chat-panel"]}>
                    <div className={styles["chat-header"]}>
                        <img className={styles["chat-profile"]} src={profile} alt='Main Profile' />
                        <span>장서영</span>
                    </div>
                    <div className={styles["chat-area"]}>
                        {messages.map((msg, index) => (
                            <div key={index} className={`${styles["chat-message"]} ${msg.sender === 'me' ? styles["my"] : styles["other"]}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <div className={styles["input-box"]}>
                        <input 
                            type='text' 
                            className={styles["chat-input"]} 
                            value={inputValue} 
                            onChange={(e) => setInputValue(e.target.value)} 
                            id='chat' 
                        />
                        <button onClick={() => Chat('me')} className={styles["chat-label"]}>나</button>
                        <button onClick={() => Chat('other')} className={styles["chat-label"]}>상대</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
