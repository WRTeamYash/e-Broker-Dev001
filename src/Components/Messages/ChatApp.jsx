// Import statements (use your actual import paths)
import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { Tabs } from 'antd';
import { RiSendPlaneLine } from 'react-icons/ri';
import { FaLessThanEqual, FaMicrophone } from 'react-icons/fa';
import { MdOutlineAttachFile } from 'react-icons/md';
import { settingsData } from "@/store/reducer/settingsSlice";
import { deleteChatMessagesApi, getChatsListApi, getChatsMessagesApi, sendMessageApi } from '@/store/actions/campaign';
import { formatDistanceToNow } from 'date-fns';
import { toast } from 'react-toastify';
import No_Chat from "../../../public/no_chat_found.svg"
import { translate } from '@/utils';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import { newchatData, removeChat } from '@/store/reducer/momentSlice';
import { userSignUpData } from '@/store/reducer/authSlice';
import { IoMdCloseCircleOutline } from 'react-icons/io';

const { TabPane } = Tabs;

const ChatApp = ({ notificationData }) => {
    const DummyImgData = useSelector(settingsData);
    const PlaceHolderImg = DummyImgData?.img_placeholder;
    const isLoggedIn = useSelector((state) => state.User_signup);
    const userCurrentId = isLoggedIn && isLoggedIn.data ? isLoggedIn.data.data.id : null;
    const userProfile = isLoggedIn && isLoggedIn.data ? isLoggedIn.data.data.profile : PlaceHolderImg;
    const [chatList, setChatList] = useState([]);
    const [newChat, setNewChat] = useState([]);
    // const storedChatData = localStorage.getItem('newUserChat');
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue("--primary-color");
    const router = useRouter();
    // console.log(slug_id)
    const storedChatData = localStorage.getItem('newUserChat')
    const newChatData = JSON.parse(storedChatData);
    // const storedChatData = useSelector(newchatData);
    const signupData = useSelector(userSignUpData);
    useEffect(() => {
        if (signupData.data === null) {
            router.push("/");
        }
    }, [signupData])

    // const initialState = chatList.reduce((acc, chat) => {
    //     acc[chat.property_id] = {
    //         messageInput: '',
    //         showVoiceButton: true,
    //         selectedFile: null,
    //         recording: false,
    //         mediaRecorder: null,
    //         audioChunks: [],
    //         messages: [],
    //         ...((storedChatData && chat.property_id)
    //             ? storedChatData
    //             : {}),
    //     };
    //     return acc;
    // }, {});
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
    const [activeTabKey, setActiveTabKey] = useState(newChatData ? newChatData?.property_id : "");
    const [selectedFilePreview, setSelectedFilePreview] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [loadingMore, setLoadingMore] = useState(false);
    useEffect(() => {
        getChatsListApi(
            (res) => {
                if (res.data.length > 0) {
                    setChatList(res.data);
                    setSelectedTab(res.data[0]);
                } else {
                    setChatList([])
                }
            },
            (err) => {
                toast.error(err.message);
            }
        );
    }, []);

    // useEffect(() => {
    //     if (storedChatData && chatList.every(chat => chat.property_id !== Number(storedChatData.property_id))) {
    //         setChatList(prevList => [storedChatData, ...prevList]);

    //         // Check if the selected tab is already set
    //         if (selectedTab !== storedChatData) {
    //             // Set the selected tab only if it's not already set
    //             setSelectedTab(storedChatData);
    //         }

    //         // Use the functional form to ensure correct state update
    //         setActiveTabKey(prevActiveTabKey => {
    //             // Check if the activeTabKey is already set to the desired value
    //             if (prevActiveTabKey !== storedChatData.property_id) {
    //                 return storedChatData.property_id;
    //             }
    //             return prevActiveTabKey;
    //         });

    //         // Set other relevant state
    //         setNewChat(storedChatData);
    //     }
    // }, [storedChatData, chatList, selectedTab, activeTabKey]);

    useEffect(() => {
        if (storedChatData) {
            // Parse storedChatData if needed
            const newChatData = JSON.parse(storedChatData);
    
            // Check if the chat with the same property_id already exists in the chatList
            if (!chatList.some(chat => chat.property_id === newChatData.property_id)) {
                // Update chatList with the newChatData at the beginning
                setChatList(prevList => [newChatData, ...prevList]);
    
                // Set the selected tab to the newChatData
                setSelectedTab(newChatData);
    
               
            }
    
            // Set the newChat state to newChatData
            setNewChat(newChatData);
    
            // Update activeTabKey if the selectedTab's property_id matches the newChatData's property_id
            if (selectedTab?.property_id === newChatData.property_id) {
                setActiveTabKey(newChatData.property_id);
                console.log("if id is same ", activeTabKey)
            }
        }
    }, [storedChatData, chatList, selectedTab, activeTabKey]);



    const chatDisplayRef = useRef(null);


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

        setActiveTabKey((prevKey) => {
            setCurrentPage(1); // Reset the page count to 1 when changing tabs
            return prevKey === tabKey ? null : tabKey;
        });
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

        // Update the selected file preview
        setSelectedFilePreview(URL.createObjectURL(selectedFile));
    };
    const handleFileCancel = (tabKey) => {
        // Reset the value of the file input to trigger the change event again
        const fileInput = document.getElementById(`fileInput-${tabKey}`);
        if (fileInput) {
            fileInput.value = '';
        }

        setTabStates((prevState) => ({
            ...prevState,
            [tabKey]: {
                ...prevState[tabKey],
                selectedFile: null,
            },
        }));
        setSelectedFilePreview(null);
    };
    const handleAttachmentClick = (tabKey) => {
        document.getElementById(`fileInput-${tabKey}`).click();
    };

    // Inside startRecording function
    const startRecording = (tabKey) => {
        navigator.mediaDevices
            .getUserMedia({ audio: true })
            .then((stream) => {
                const mediaRecorder = new MediaRecorder(stream);
                let audioChunks = [];

                mediaRecorder.ondataavailable = (event) => {
                    if (event.data.size > 0) {
                        audioChunks.push(event.data);
                    }
                };

                mediaRecorder.onstop = () => {
                    setTabStates((prevState) => ({
                        ...prevState,
                        [tabKey]: {
                            ...(prevState[tabKey] || {}),
                            audioChunks: [...(prevState[tabKey]?.audioChunks || []), ...audioChunks],
                        },
                    }));
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

        }
    };

    const handleSendClick = (tabKey) => {
        const tabState = tabStates[tabKey] || {};
        const messageType = tabState.selectedFile
            ? 'file'
            : (tabState.audioChunks && tabState.audioChunks.length > 0)
                ? 'audio'
                : 'text';


        // Check if the message input is empty for text messages
        if (messageType === 'text' && !tabState.messageInput?.trim()) {
            // You can choose to return or display a message to the user
            // For example, you can show a toast message using react-toastify
            toast.error("Please enter a message before sending.");
            return;
        }
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
            // Convert Blob to File
            const audioBlob = new Blob(tabState.audioChunks, { type: 'audio/webm;codecs=opus' });
            const audioFile = new File([audioBlob], 'audio_message.webm', { type: 'audio/webm;codecs=opus' });

            // Update newMessage with the File object
            newMessage = {
                ...newMessage,
                audio: audioFile,
            };
        }

        // Log only the new message data
        // console.log('New Message Data:', newMessage);

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
                // console.log(res)
                setSelectedFilePreview(null);
            },
            (error) => {
                console.log(error)

            }


        )


        requestAnimationFrame(() => {
            const chatDisplay = chatDisplayRef.current;
            chatDisplay.scrollTop = chatDisplay.scrollHeight;
        });
    };



    useEffect(() => {
        // console.log(notificationData);

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




    const fetchMoreMessages = () => {
        if (loadingMore) {
            return;
        }

        setLoadingMore(true);

        getChatsMessagesApi(
            selectedTab?.user_id,
            selectedTab?.property_id,
            currentPage + 1, // Increment the page number
            perPage,
            (res) => {
                const apiMessages = res.data.data || [];
                const userMessages = tabStates[selectedTab.property_id]?.messages || [];
                const combinedMessages = [...apiMessages, ...userMessages];
                const sortedMessages = combinedMessages.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

                setChatMessages((prevMessages) => [...sortedMessages, ...prevMessages]);
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
            // Check if the user has scrolled to the top
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

    const handleDeleteChat = () => {
        if (selectedTab) {
            Swal.fire({
                title: "Are you sure?",
                text: "Are you sure you want to delete the chat? All conversations will be removed.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel!",
                reverseButtons: true,
                confirmButtonColor: primaryColor,
            }).then((result) => {
                if (result.isConfirmed) {

                    deleteChatMessagesApi(
                        userCurrentId,
                        selectedTab.user_id,
                        selectedTab.property_id,
                        (res) => {
                            Swal.fire({
                                title: "Deleted!",
                                text: res.message,
                                icon: "success",
                                confirmButtonColor: primaryColor,
                            });

                            // Remove the deleted chat from state
                            setChatList(prevList => prevList.filter(chat => chat.property_id !== selectedTab.property_id));
                            setTabStates((prevStates) => {
                                const newState = { ...prevStates };
                                delete newState[selectedTab.property_id];
                                return newState;
                            });
                            setChatMessages([]);
                            // console.log(selectedTab.property_id, " === ", newChatData)
                            if (selectedTab.property_id === newChatData.property_id) {
                                removeChat()
                                localStorage.removeItem('newUserChat');
                            }
                            if (chatList.length === 0) {
                                // Navigate to home page
                                router.push("/");

                            }
                        },
                        (error) => {
                            console.log(error)
                        }
                    )
                }
            });
        }
    };
    useEffect(() => { }, [selectedFilePreview])
    useEffect(() => {
    }, [selectedTab, activeTabKey]);

    return (
        <>
            <div className="messages">
                <div className="container">
                    <div className="card">

                        {console.log(activeTabKey)}
                        {chatList?.length > 0 && chatList !== "" ? (

                            <Tabs defaultActiveKey={activeTabKey} tabPosition="left" onChange={handleTabChange}>
                            
                                {console.log(chatList)}
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
                                    // forceRenderTabPane={activeTabKey == chat.property_id}
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

                                                {chatMessages.length > 0 ? (

                                                    <div className="delete_messages" onClick={handleDeleteChat}>
                                                        <span>{translate("deleteMessages")}</span>
                                                    </div>
                                                ) : null}
                                            </div>
                                            <div className="chat_display" ref={chatDisplayRef}>
                                                <div className='sender_masg'>
                                                    {chatMessages.length > 0 ? (
                                                        chatMessages.map((message, index) => (
                                                            <div key={index} className={message.sender_id === userCurrentId ? 'user-message' : 'other-message'}>
                                                                <div className="chat_user_profile">
                                                                    <Image
                                                                        loading="lazy"
                                                                        id="sender_profile"
                                                                        src={message.sender_id === userCurrentId ? userProfile : message.profile}
                                                                        alt="no_img"
                                                                        width={0}
                                                                        height={0}
                                                                        onError={(e) => {
                                                                            e.target.src = PlaceHolderImg;
                                                                        }}
                                                                    />
                                                                </div>
                                                                {message.type === 'text' || (message.type === 'chat' && message.message !== "") ? (
                                                                    <span>{message.message}</span>
                                                                ) : message.type === 'file' ? (
                                                                    <div className="file-preview">
                                                                        {message.file && message.file.type && message.file.type.startsWith('image/') ? (
                                                                            <img src={URL.createObjectURL(message.file)} alt="File Preview" />
                                                                        ) : message.file && message.file.type === 'application/pdf' ? (
                                                                            <embed src={URL.createObjectURL(message.file)} type="application/pdf" width="100%" height="600px" />
                                                                        ) : (
                                                                            <img src={message.file} alt="File Preview" />
                                                                        )}
                                                                    </div>
                                                                ) : message.type === 'chat' && message.file && message.message === "" ? (
                                                                    <img src={message.file} alt="File Preview" />
                                                                ) : message.type === 'audio' ? (
                                                                    <div className={message.sender_id === userCurrentId ? 'user-audio' : 'other-audio'}>
                                                                        {typeof message.audio === 'string' ? (
                                                                            <audio controls>
                                                                                <source src={message.audio} type="audio/webm;codecs=opus" />
                                                                                Your browser does not support the audio element.
                                                                            </audio>
                                                                        ) : message.audio && message.audio instanceof File && message.audio.type.startsWith('audio/') ? (
                                                                            <audio controls>
                                                                                <source src={URL.createObjectURL(message.audio)} type="audio/webm;codecs=opus" />
                                                                                Your browser does not support the audio element.
                                                                            </audio>
                                                                        ) : null}
                                                                    </div>
                                                                ) : message.type === 'file_and_text' ? (
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
                                                                ) : null}
                                                            </div>
                                                        ))
                                                    ) : (
                                                        <div className="col-12 text-center" id='noChats'>
                                                            <div>
                                                                <Image loading="lazy" src={No_Chat.src} alt="start_chat" width={250} height={250} />
                                                            </div>
                                                            <div className='no_page_found_text'>
                                                                <h3>{translate("startConversation")}</h3>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>


                                            {selectedFilePreview && (
                                                <div className="file-preview-section">
                                                    <>
                                                        <img src={selectedFilePreview} alt="File Preview" />
                                                        <button className="change-button" onClick={() => handleFileCancel(chat.property_id)}>
                                                            <IoMdCloseCircleOutline size={35} />
                                                        </button>
                                                    </>
                                                </div>
                                            )}

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
                                                    <span> {translate("send")} </span>
                                                    <RiSendPlaneLine size={20} />
                                                </button>
                                            </div>
                                        </div>
                                    </TabPane>
                                ))}
                            </Tabs>
                        ) : (
                            <div className="col-12 text-center" id='noChats'>
                                <div>
                                    <Image loading="lazy" src={No_Chat.src} alt="no_chats" width={450} height={450} />
                                </div>
                                <div className='no_page_found_text'>
                                    <h3>{translate("noChat")}</h3>

                                </div>
                            </div>
                        )}

                    </div>



                </div>
            </div>
        </>
    );
};

export default ChatApp;


