// Import statements (use your actual import paths)
import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { Tabs } from 'antd';
import { RiSendPlaneLine } from 'react-icons/ri';
import { FaLessThanEqual, FaMicrophone } from 'react-icons/fa';
import { MdOutlineAttachFile } from 'react-icons/md';
import { settingsData } from "@/store/reducer/settingsSlice";
import { getChatsListApi, getChatsMessagesApi } from '@/store/actions/campaign';
import { formatDistanceToNow } from 'date-fns';
import { toast } from 'react-toastify';  // Ensure you have this import

const { TabPane } = Tabs;

const ChatApp = () => {
    const DummyImgData = useSelector(settingsData);
    const PlaceHolderImg = DummyImgData?.img_placeholder;
    const isLoggedIn = useSelector((state) => state.User_signup);
    const userCurrentId = isLoggedIn && isLoggedIn.data ? isLoggedIn.data.data.id : null;

    const [chatList, setChatList] = useState([]);
    const initialState = chatList.reduce((acc, chat) => {
        acc[chat.property_id] = {
            messageInput: '',
            showVoiceButton: true,
            selectedFile: null,
            recording: false,
            mediaRecorder: null,
            audioChunks: [], // Ensure audioChunks is always initialized as an array
            messages: [],
        };
        return acc;
    }, {});

    const [tabStates, setTabStates] = useState(initialState);
    const [isRecording, setIsRecording] = useState(false);
    const [selectedTab, setSelectedTab] = useState(null);
    const [chatMessages, setChatMessages] = useState([]);

    const chatDisplayRef = useRef(null);

    // Get chats list API
    useEffect(() => {
        getChatsListApi(
            (res) => {
                setChatList(res.data);
                if (res.data.length > 0) {
                    setSelectedTab(res.data[0]);
                }
            },
            (err) => {
                toast.error(err.message);
            }
        );
    }, []);

    // Get chat messages for the selected tab
    useEffect(() => {
        if (selectedTab) {
            // console.log(selectedTab)
            getChatsMessagesApi(
                selectedTab?.user_id,
                selectedTab?.property_id,
                "",
                "",
                (res) => {
                    setChatMessages(res.data.data);
                    console.log(chatMessages)
                },
                (err) => {
                    toast.error(err.message);
                }
            );
        }
    }, [selectedTab]);

    const handleTabChange = (tabKey) => {
        // Find the chat object in chatList based on the property_id
        const selectedChat = chatList.find(chat => chat.property_id === Number(tabKey));

        // Now you have access to the entire chat object
        setSelectedTab(selectedChat);
    };


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
                                audioChunks: [...prevState[tabKey]?.audioChunks, event.data],
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
        const tabState = tabStates[tabKey] || {}; // Ensure tabState is not undefined
        const messageType = tabState.selectedFile
            ? 'file'
            : (tabState.audioChunks && tabState.audioChunks.length > 0)
                ? 'audio'
                : 'text';

        const newMessage = {
            sender: 'user',
            type: messageType,
            content: tabState.messageInput,
            selectedFile: tabState.selectedFile,
            audioChunks: tabState.audioChunks,
        };

        // Update the messages array for the current tab
        setTabStates((prevState) => ({
            ...prevState,
            [tabKey]: {
                ...prevState[tabKey],
                messages: [...(prevState[tabKey]?.messages || []), newMessage],
                // Clear the input fields after sending
                messageInput: '',
                selectedFile: null,
                audioChunks: [],
            },
        }));
    };

    const formatTimeElapsed = (date) => {
        const distance = formatDistanceToNow(new Date(date), { includeSeconds: FaLessThanEqual, addSuffix: true });
        return distance.endsWith('about') ? distance.slice(6) : distance;
    };

    return (
        <>
            <div className="messages">
                <div className="container">
                    <div className="card">
                        <Tabs defaultActiveKey={chatList[0]?.property_id} tabPosition="left" onChange={handleTabChange}>
                            {chatList.map((chat) => (
                                <TabPane
                                    key={chat.property_id}
                                    tab={
                                        <div className="message_list_details">
                                            <div className="profile_img">
                                                <Image loading="lazy" id="profile" src={chat?.title_image ? chat?.title_image : PlaceHolderImg} alt="no_img" width={0} height={0} />
                                            </div>
                                            <div className="profile_name">
                                                <span>{chat.name}</span>
                                                <p>{chat.title}</p>
                                            </div>
                                            <div className="messgae_time">
                                                <span>{formatTimeElapsed(chat.date)}</span>
                                            </div>
                                        </div>
                                    }
                                >
                                    <div className="chat_deatils">
                                        <div className="chat_deatils_header">
                                            <div className="chat_profile_div">
                                                <Image loading="lazy" id="chat_profile" src={chat?.profile ? chat?.profile : PlaceHolderImg} alt="no_img" width={0} height={0} />
                                            </div>
                                            <div className="profile_name">
                                                <span>{chat.name}</span>
                                                <p>{chat.title}</p>
                                            </div>
                                            <div className="delete_messages">
                                                <span>Delete Message?</span>
                                            </div>
                                        </div>
                                        <div className="chat_display" ref={chatDisplayRef}>
                                            <div className='sender_masg'>
                                                {chatMessages.map((message, index) => (
                                                    <div key={index} className={message.sender_id === userCurrentId ? 'user-message' : 'other-message'}>
                                                        <span>{message.message}</span>
                                                        {message.type === 'text' ? (
                                                            <></>
                                                        ) : message.type === 'file' ? (
                                                            <div className="file-preview">
                                                                {message.file.includes('image') ? (
                                                                    <img src={message.file} alt="File Preview" />
                                                                ) : message.file === 'application/pdf' ? (
                                                                    <embed src={message.file} type="application/pdf" width="100%" height="600px" />
                                                                ) : (
                                                                    <p>File: {message.file}</p>
                                                                )}
                                                            </div>
                                                        ) : message.type === 'audio' ? (
                                                            <audio controls>
                                                                <source src={message.audio} type="audio/wav" />
                                                                Your browser does not support the audio element.
                                                            </audio>
                                                        ) : null}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="chat_inputs">
                                            <div
                                                className="attechment"
                                                onClick={() => handleAttachmentClick(chat.property_id)}
                                            >
                                                <MdOutlineAttachFile size={20} />
                                                <input
                                                    type="file"
                                                    id={`fileInput-${chat.property_id}`}
                                                    onChange={(e) => handleFileChange(e, chat.property_id)}
                                                />
                                            </div>
                                            <div className="type_input">
                                                <input
                                                    type="text"
                                                    placeholder="Type Your Message"
                                                    value={tabStates[chat.property_id]?.messageInput}
                                                    onChange={(e) => handleInputChange(chat.property_id, e.target.value)}
                                                />
                                            </div>
                                            {tabStates[chat.property_id]?.recording ? (
                                                <button
                                                    className={`voice_message recording`}
                                                    onMouseDown={() => startRecording(chat.property_id)}
                                                    onMouseUp={() => stopRecording(chat.property_id)}
                                                    onMouseMove={() => handleMouseMove(chat.property_id)}
                                                >
                                                    <FaMicrophone size={30} />
                                                </button>
                                            ) : (
                                                <button
                                                    className="voice_message"
                                                    onMouseDown={() => startRecording(chat.property_id)}
                                                    onMouseUp={() => stopRecording(chat.property_id)}
                                                    onMouseMove={() => handleMouseMove(chat.property_id)}
                                                >
                                                    <FaMicrophone size={20} />
                                                </button>
                                            )}
                                            <button
                                                className="send_message"
                                                onClick={() => handleSendClick(chat.property_id)}
                                            >
                                                <span> Send </span>
                                                <RiSendPlaneLine size={20} />
                                            </button>
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


