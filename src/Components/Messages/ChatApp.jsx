"use client";
import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { Tabs } from 'antd';
import { RiSendPlaneLine } from 'react-icons/ri';
import { FaMicrophone } from 'react-icons/fa';
import { MdOutlineAttachFile } from 'react-icons/md';
import { settingsData } from "@/store/reducer/settingsSlice";

const { TabPane } = Tabs;

const ChatApp = () => {
    const DummyImgData = useSelector(settingsData);
    const PlaceHolderImg = DummyImgData?.img_placeholder;

    const tabData = [
        {
            key: '1',
            imageName: PlaceHolderImg,
            name: 'Test 1',
            prop: 'Test 1',
            time: 'Time 1',
        },
        {
            key: '2',
            imageName: PlaceHolderImg,
            name: 'Test 2',
            prop: 'Test 2',
            time: 'Time 2',
        },
        {
            key: '3',
            imageName: PlaceHolderImg,
            name: 'Test 3',
            prop: 'Test 3',
            time: 'Time 3',
        },
        // Add more tab data as needed
    ];

    const initialState = tabData.reduce((acc, tab) => {
        acc[tab.key] = {
            messageInput: '',
            showVoiceButton: true,
            selectedFile: null,
            recording: false,
            mediaRecorder: null,
            audioChunks: [],
            messages: [],
        };
        return acc;
    }, {});

    const [tabStates, setTabStates] = useState(initialState);
    const [isRecording, setIsRecording] = useState(false);
    const chatDisplayRef = useRef(null);

    const handleInputChange = (tabKey, value) => {
        setTabStates((prevState) => ({
            ...prevState,
            [tabKey]: {
                ...prevState[tabKey],
                messageInput: value,
            },
        }));
    };

    const handleFileChange = (e, tabKey) => {
        const selectedFile = e.target.files[0];
        setTabStates((prevState) => ({
            ...prevState,
            [tabKey]: {
                ...prevState[tabKey],
                selectedFile: selectedFile,
            },
        }));
    };

    const handleAttachmentClick = (tabKey) => {
        document.getElementById(`fileInput-${tabKey}`).click();
    };

    const startRecording = (tabKey) => {
        navigator.mediaDevices
            .getUserMedia({ audio: true })
            .then((stream) => {
                const mediaRecorder = new MediaRecorder(stream);
                mediaRecorder.ondataavailable = (event) => {
                    if (event.data.size > 0) {
                        setTabStates((prevState) => ({
                            ...prevState,
                            [tabKey]: {
                                ...prevState[tabKey],
                                audioChunks: [...prevState[tabKey].audioChunks, event.data],
                            },
                        }));
                    }
                };
                mediaRecorder.onstop = () => {
                    console.log('Recording stopped');
                };

                mediaRecorder.start();
                setTabStates((prevState) => ({
                    ...prevState,
                    [tabKey]: {
                        ...prevState[tabKey],
                        recording: true,
                        mediaRecorder: mediaRecorder,
                    },
                }));
                setIsRecording(true);
            })
            .catch((error) => {
                console.error('Error accessing microphone:', error);
            });
    };

    const stopRecording = (tabKey) => {
        if (tabStates[tabKey].mediaRecorder) {
            tabStates[tabKey].mediaRecorder.stop();
            setTabStates((prevState) => ({
                ...prevState,
                [tabKey]: {
                    ...prevState[tabKey],
                    recording: false,
                },
            }));
            setIsRecording(false);
        }
    };

    const handleMouseMove = (tabKey) => {
        if (isRecording) {
            // Display the recording status on chat display while dragging the mouse
            // console.log('Recording...');
            // // Update the recording status in the chat display
            // chatDisplayRef.current.innerHTML = 'Recording...';
        }
    };

    const handleSendClick = (tabKey) => {
        const messageType = tabStates[tabKey].selectedFile
            ? 'file'
            : tabStates[tabKey].audioChunks.length > 0
                ? 'audio'
                : 'text';

        const newMessage = {
            sender: 'user',
            type: messageType,
            content: tabStates[tabKey].messageInput,
            selectedFile: tabStates[tabKey].selectedFile,
            audioChunks: tabStates[tabKey].audioChunks,
        };

        // Update the messages array for the current tab
        setTabStates((prevState) => ({
            ...prevState,
            [tabKey]: {
                ...prevState[tabKey],
                messages: [...prevState[tabKey].messages, newMessage],
                // Clear the input fields after sending
                messageInput: '',
                selectedFile: null,
                audioChunks: [],
            },
        }));
    };

    return (
        <>
            <div className="messages">
                <div className="container">
                    <div className="card">
                        <Tabs defaultActiveKey="1" tabPosition="left">
                            {tabData.map((tab) => (
                                <TabPane
                                    tab={
                                        <div className="message_list_details">
                                            <div className="profile_img">
                                                <Image loading="lazy" id="profile" src={tab.imageName} alt="no_img" width={0} height={0} />
                                            </div>
                                            <div className="profile_name">
                                                <span>{tab.name}</span>
                                                <p>{tab.prop}</p>
                                            </div>
                                            <div className="messgae_time">
                                                <span>{tab.time}</span>
                                            </div>
                                        </div>
                                    }
                                    key={tab.key}
                                >
                                    <div className="chat_deatils">
                                        <div className="chat_deatils_header">
                                            <div className="chat_profile_div">
                                                <Image loading="lazy" id="chat_profile" src={tab.imageName} alt="no_img" width={0} height={0} />
                                            </div>
                                            <div className="profile_name">
                                                <span>{tab.name}</span>
                                                <p>active</p>
                                            </div>
                                            <div className="delete_messages">
                                                <span>Delete Message?</span>
                                            </div>
                                        </div>
                                        <div className="chat_display" ref={chatDisplayRef}>
                                            {tabStates[tab.key].messages.map((message, index) => (
                                                <div key={index} className={message.sender === 'user' ? 'user-message' : 'other-message'}>
                                                    {message.type === 'text' ? (
                                                        <p>{message.content}</p>
                                                    ) : message.type === 'file' ? (
                                                        <div className="file-preview">
                                                        {message.selectedFile.type.includes('image') ? (
                                                            <img src={URL.createObjectURL(message.selectedFile)} alt="File Preview" />
                                                        ) : message.selectedFile.type === 'application/pdf' ? (
                                                            <embed src={URL.createObjectURL(message.selectedFile)} type="application/pdf" width="100%" height="600px" />
                                                        ) : (
                                                            <p>File: {message.selectedFile.name}</p>
                                                        )}
                                                    </div>
                                                    ) : message.type === 'audio' ? (
                                                        <audio controls>
                                                            <source
                                                                src={URL.createObjectURL(new Blob(message.audioChunks, { type: 'audio/wav' }))}
                                                                type="audio/wav"
                                                            />
                                                            Your browser does not support the audio element.
                                                        </audio>
                                                    ) : null}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="chat_inputs">
                                            <div
                                                className="attechment"
                                                onClick={() => handleAttachmentClick(tab.key)}
                                            >
                                                <MdOutlineAttachFile size={20} />
                                                <input
                                                    type="file"
                                                    id={`fileInput-${tab.key}`}
                                                    onChange={(e) => handleFileChange(e, tab.key)}
                                                />
                                            </div>
                                            <div className="type_input">
                                                <input
                                                    type="text"
                                                    placeholder="Type Your Message"
                                                    value={tabStates[tab.key].messageInput}
                                                    onChange={(e) => handleInputChange(tab.key, e.target.value)}
                                                />
                                            </div>
                                            {tabStates[tab.key].recording ? (
                                                <button
                                                    className={`voice_message recording`}
                                                    onMouseDown={() => startRecording(tab.key)}
                                                    onMouseUp={() => stopRecording(tab.key)}
                                                    onMouseMove={() => handleMouseMove(tab.key)}
                                                >
                                                    <FaMicrophone size={30} />
                                                </button>
                                            ) : (
                                                <button
                                                    className="voice_message"
                                                    onMouseDown={() => startRecording(tab.key)}
                                                    onMouseUp={() => stopRecording(tab.key)}
                                                    onMouseMove={() => handleMouseMove(tab.key)}
                                                >
                                                    <FaMicrophone size={20} />
                                                </button>
                                            )}
                                            {/* {(tabStates[tab.key].messageInput.trim() !== '' || tabStates[tab.key].selectedFile) ? ( */}
                                                <button
                                                    className="send_message"
                                                    onClick={() => handleSendClick(tab.key)}
                                                >
                                                    <span> Send </span>
                                                    <RiSendPlaneLine size={20} />
                                                </button>
                                            {/* ) : null} */}
                                        </div>
                                    </div>
                                </TabPane>
                            ))}
                        </Tabs>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatApp;
