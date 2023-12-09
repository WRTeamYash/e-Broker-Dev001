// Import statements (use your actual import paths)
import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { Tabs } from 'antd';
import { RiSendPlaneLine } from 'react-icons/ri';
import { FaLessThanEqual, FaMicrophone } from 'react-icons/fa';
import { MdOutlineAttachFile } from 'react-icons/md';
import { settingsData } from "@/store/reducer/settingsSlice";
import { getChatsListApi, getChatsMessagesApi, sendMessageApi } from '@/store/actions/campaign';
import { formatDistanceToNow } from 'date-fns';
import { toast } from 'react-toastify';

const { TabPane } = Tabs;

const ChatApp = ({ notificationData }) => {
    const DummyImgData = useSelector(settingsData);
    const PlaceHolderImg = DummyImgData?.img_placeholder;
    const isLoggedIn = useSelector((state) => state.User_signup);
    const userCurrentId = isLoggedIn && isLoggedIn.data ? isLoggedIn.data.data.id : null;
    const userProfile = isLoggedIn && isLoggedIn.data ? isLoggedIn.data.data.profile : PlaceHolderImg;
    const [chatList, setChatList] = useState([]);
    const [newChat, setNewChat] = useState([]);
    const storedChatData = localStorage.getItem('newUserChat');

    const initialState = chatList.reduce((acc, chat) => {
        acc[chat.property_id] = {
            messageInput: '',
            showVoiceButton: true,
            selectedFile: null,
            recording: false,
            mediaRecorder: null,
            audioChunks: [],
            messages: [],
            ...((storedChatData && chat.property_id.toString() === JSON.parse(storedChatData)?.property_id.toString())
                ? JSON.parse(storedChatData)
                : {}),
        };
        return acc;
    }, {});

    const [tabStates, setTabStates] = useState((prev) => {
        return Object.keys(prev ?? {}).length === 0 ? initialState : prev;
    });
    const [isRecording, setIsRecording] = useState(false);
    const [selectedTab, setSelectedTab] = useState(null);
    const [chatMessages, setChatMessages] = useState([]);
    const [activeTabKey, setActiveTabKey] = useState(chatList[0]?.property_id);
 
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(10); // Set your initial per page count
    const [loadingMore, setLoadingMore] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const storedChatData = localStorage.getItem('newUserChat');

        if (storedChatData) {
            const newChatData = JSON.parse(storedChatData);

            if (!chatList.some(chat => chat.property_id === newChatData.property_id)) {
                setChatList(prevList => [newChatData, ...prevList]);
                setSelectedTab(newChatData);
                setActiveTabKey(newChatData.property_id);
            }

            setNewChat(newChatData);

            if (activeTabKey) {
                setActiveTabKey(newChatData.property_id);
            }
        }
    }, [chatList, activeTabKey]);

    const chatDisplayRef = useRef(null);

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

    useEffect(() => {
        if (selectedTab) {
            getChatsMessagesApi(
                selectedTab?.user_id,
                selectedTab?.property_id,
                currentPage,
                perPage,
                (res) => {
                    const apiMessages = res.data.data || [];
                    const userMessages = tabStates[selectedTab.property_id]?.messages || [];
                    const combinedMessages = [...apiMessages, ...userMessages];
                    const sortedMessages = combinedMessages.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

                    setChatMessages(sortedMessages);
                    setCurrentPage(currentPage + 1);
                    setLoadingMore(false);
                },
                (err) => {
                    toast.error(err.message);
                    setLoadingMore(false);
                }
            );
        }
    }, [selectedTab]);

    const handleTabChange = (tabKey) => {
        const selectedChat = chatList.find(chat => chat.property_id === Number(tabKey));
        setSelectedTab(selectedChat);

        setTabStates(prevState => ({
            ...prevState,
            [tabKey]: {
                ...(prevState[tabKey] || {}),
                messageInput: '',
                showVoiceButton: true,
                selectedFile: null,
                recording: false,
                mediaRecorder: null,
                audioChunks: [],
                messages: [],
            },
        }));

        setActiveTabKey((prevKey) => (prevKey === tabKey ? null : tabKey));
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
                                ...(prevState[tabKey] || {}),
                                audioChunks: [...(prevState[tabKey]?.audioChunks || []), event.data],
                            },
                        }));
                    }
                };
                mediaRecorder.onstop = () => {
                    // console.log('Recording stopped');
                };

                mediaRecorder.start();
                setTabStates((prevState) => ({
                    ...prevState,
                    [tabKey]: {
                        ...(prevState[tabKey] || {}),
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
        const tabState = tabStates[tabKey] || {};
        const messageType = tabState.selectedFile
            ? 'file'
            : (tabState.audioChunks && tabState.audioChunks.length > 0)
                ? 'audio'
                : 'text';

        let newMessage = {
            sender_id: userCurrentId,
            receiver_id: selectedTab.user_id,
            property_id: selectedTab.property_id,
            type: messageType,
            message: tabState.messageInput,
            file: tabState.selectedFile,
            audio: tabState.audioChunks,
            created_at: new Date().toISOString(),
        };

        if (messageType === 'audio' && tabState.audioChunks.length > 0) {
            const audioBlob = new Blob(tabState.audioChunks, { type: 'audio/webm;codecs=opus' });
            const audioFile = new File([audioBlob], 'audio_message.webm', { type: 'audio/webm;codecs=opus' });

            newMessage = {
                ...newMessage,
                audio: audioFile,
            };
        }

        console.log('New Message Data:', newMessage);

        setTabStates((prevState) => ({
            ...prevState,
            [tabKey]: {
                ...prevState[tabKey],
                messages: [...(prevState[tabKey]?.messages || []), newMessage],
                messageInput: '',
                selectedFile: null,
                audioChunks: [],
            },
        }));
        setChatMessages((prevMessages) => [...prevMessages, newMessage]);

        sendMessageApi(
            newMessage.sender_id,
            newMessage.receiver_id,
            newMessage.message ? newMessage.message : newMessage.file ? '[File]' : newMessage.audio ? '[Audio]' : '',
            newMessage.property_id,
            newMessage.file ? newMessage.file : "",
            newMessage.audio ? newMessage.audio : "",
            (res) => {
                console.log(res);
            },
            (error) => {
                console.log(error);
            }
        );

        requestAnimationFrame(() => {
            const chatDisplay = chatDisplayRef.current;
            chatDisplay.scrollTop = chatDisplay.scrollHeight;
        });
    };

    useEffect(() => {
        console.log(notificationData);

        if (notificationData) {
            const newMessage = {
                sender_id: notificationData.sender_id,
                receiver_id: notificationData.receiver_id,
                property_id: notificationData.property_id,
                type: notificationData.chat_message_type,
                message: notificationData.message,
                file: notificationData.file,
                audio: notificationData.audio,
                created_at: notificationData.date,
            };

            setTabStates((prevState) => ({
                ...prevState,
                [notificationData.property_id]: {
                    ...prevState[notificationData.property_id],
                    messages: [...(prevState[notificationData.property_id]?.messages || []), newMessage],
                },
            }));

            setChatMessages((prevMessages) => [...prevMessages, newMessage]);

            requestAnimationFrame(() => {
                const chatDisplay = chatDisplayRef.current;
                chatDisplay.scrollTop = chatDisplay.scrollHeight;
            });
        }
    }, [notificationData]);

    const formatTimeElapsed = (date) => {
        const distance = formatDistanceToNow(new Date(date), { includeSeconds: FaLessThanEqual, addSuffix: true });
        return distance.endsWith('about') ? distance.slice(6) : distance;
    };
    const [openDrawer, setOpenDrawer] = useState(true);

    const handleDrawerOpen = () => {
        setOpenDrawer(true);
    };

    const handleDrawerClose = () => {
        setOpenDrawer(false);
    };

    const fetchMoreMessages = () => {
        if (loadingMore) {
            return;
        }

        setLoadingMore(true);

        getChatsMessagesApi(
            selectedTab?.user_id,
            selectedTab?.property_id,
            currentPage + 1,
            perPage,
            (res) => {
                const apiMessages = res.data.data || [];
                const userMessages = tabStates[selectedTab.property_id]?.messages || [];
                const combinedMessages = [...apiMessages, ...userMessages];
                const sortedMessages = combinedMessages.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

                setChatMessages(sortedMessages);
                setCurrentPage(currentPage + 1);
                setLoadingMore(false);
            },
            (err) => {
                toast.error(err.message);
                setLoadingMore(false);
            }
        );
    };

    useEffect(() => {
        const chatDisplay = chatDisplayRef.current;

        const handleScroll = () => {
            if (chatDisplay.scrollTop === 0) {
                fetchMoreMessages();
            }
        };
        if (chatDisplayRef.current) {
            chatDisplayRef.current.addEventListener('scroll', handleScroll);
         }
      
         // Clean up the event listener when the component unmounts
         return () => {
            if (chatDisplayRef.current) {
               chatDisplayRef.current.removeEventListener('scroll', handleScroll);
            }
         };
    }, [selectedTab, currentPage, loadingMore]);


    return (
        <>
            <div className="messages">
                <div className="container">
                    <div className="card">
                        <Tabs defaultActiveKey={activeTabKey} tabPosition="left" onChange={handleTabChange}>
                            {chatList.map((chat) => (
                                <TabPane
                                    key={chat.property_id}
                                    tab={
                                        <div className="message_list_details">
                                            <div className="profile_img">
                                                <Image loading="lazy" id="profile" src={chat?.profile ? chat?.profile : PlaceHolderImg} alt="no_img" width={0} height={0} />
                                            </div>
                                            <div className="profile_name">
                                                <span>{chat.name}</span>
                                                <p>{chat.title}</p>
                                            </div>

                                        </div>
                                    }
                                >
                                    <div className="chat_deatils">
                                        <div className="chat_deatils_header">
                                            <div className="profile_img_name_div">
                                                <div className="chat_profile_div">
                                                    <Image loading="lazy" id="chat_profile" src={chat?.title_image ? chat?.title_image : PlaceHolderImg} alt="no_img" width={0} height={0} />
                                                </div>
                                                <div className="profile_name">
                                                    <span>{chat.name}</span>
                                                    <p>{chat.title}</p>
                                                </div>
                                            </div>
                                            <div className="delete_messages">
                                                <span>Delete Message?</span>
                                            </div>
                                        </div>
                                        <div className="chat_display" ref={chatDisplayRef}>
                                            <div className='sender_masg'>
                                                {chatMessages.map((message, index) => (
                                                    <>

                                                        <div key={index} className={message.sender_id === userCurrentId ? 'user-message' : 'other-message'}>
                                                            {message.type === 'text' || message.type === 'chat' && message.message !== "" ? (
                                                                <>
                                                                    <div className="chat_user_profile">
                                                                        <Image loading="lazy" id="sender_profile" src={message.sender_id === userCurrentId ? userProfile : message.profile} alt="no_img" width={0} height={0} />
                                                                    </div>
                                                                    <span>{message.message}</span>
                                                                </>
                                                            ) : message.type === 'file' ? (
                                                                <>
                                                                    <div className="chat_user_profile">
                                                                        <Image loading="lazy" id="sender_profile" src={message.sender_id === userCurrentId ? userProfile : message.profile} alt="no_img" width={0} height={0} />
                                                                    </div>
                                                                    <div className="file-preview">
                                                                        {message.file && message.file.type && message.file.type.startsWith('image/') ? (
                                                                            <img src={URL.createObjectURL(message.file)} alt="File Preview" />
                                                                        ) : message.file && message.file.type === 'application/pdf' ? (
                                                                            <embed src={URL.createObjectURL(message.file)} type="application/pdf" width="100%" height="600px" />
                                                                        ) : (
                                                                            <img src={message.file} alt="File Preview" />
                                                                        )}
                                                                    </div>
                                                                </>

                                                            ) : message.type === 'chat' && message.file && message.message === "" ? (
                                                                <>
                                                                    <div className="chat_user_profile">
                                                                        <Image loading="lazy" id="sender_profile" src={message.sender_id === userCurrentId ? userProfile : message.profile} alt="no_img" width={0} height={0} />
                                                                    </div>
                                                                    <img src={message.file} alt="File Preview" />
                                                                </>
                                                            )
                                                                : message.type === "audio" && message.audio && typeof message.audio === 'string' ? (
                                                                    <>
                                                                        <div className="chat_user_profile">
                                                                            <Image loading="lazy" id="sender_profile" src={message.sender_id === userCurrentId ? userProfile : message.profile} alt="no_img" width={0} height={0} />
                                                                        </div>                                                                    <audio controls className={message.sender_id === userCurrentId ? 'user-audio' : 'other-audio'}>
                                                                            <source src={message.audio} type="audio/webm;codecs=opus" />
                                                                            Your browser does not support the audio element.
                                                                        </audio>

                                                                    </>
                                                                ) : message.type === "audio" && message.audio && message.audio[0] instanceof Blob ? (
                                                                    <>
                                                                        <div className="chat_user_profile">
                                                                            <Image loading="lazy" id="sender_profile" src={message.sender_id === userCurrentId ? userProfile : message.profile} alt="no_img" width={0} height={0} />
                                                                        </div>
                                                                        <audio controls className={message.sender_id === userCurrentId ? 'user-audio' : 'other-audio'}>
                                                                            <source src={URL.createObjectURL(message.audio[0])} type="audio/webm;codecs=opus" />
                                                                            Your browser does not support the audio element.
                                                                        </audio>
                                                                    </>
                                                                ) : message.type === 'file_and_text' ? (
                                                                    <>
                                                                        <div className="chat_user_profile">
                                                                            <Image loading="lazy" id="sender_profile" src={message.sender_id === userCurrentId ? userProfile : message.profile} alt="no_img" width={0} height={0} />
                                                                        </div>
                                                                        <div className='file_text'>
                                                                            <div className="file-preview">
                                                                                {message.file && message.file.type && message.file.type.startsWith('image/') ? (
                                                                                    <img src={URL.createObjectURL(message.file)} alt="File Preview" />
                                                                                ) : message.file && message.file.type === 'application/pdf' ? (
                                                                                    <embed src={URL.createObjectURL(message.file)} type="application/pdf" width="100%" height="600px" />
                                                                                ) : (
                                                                                    <img src={message.file} alt="File Preview" />
                                                                                )}
                                                                            </div>

                                                                        </div>
                                                                    </>
                                                                ) : null}
                                                        </div>
                                                    </>

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


