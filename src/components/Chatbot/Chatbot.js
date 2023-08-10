import React, { useState } from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import { Stack, Box, TextField, IconButton } from '@mui/material';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CachedRoundedIcon from '@mui/icons-material/CachedRounded';

// import allImages from '../../assets/allImages';

import { 
    ChatbotWrapper,
    ChatbotMessageContainer,
    ChatbotHeader,
    ChatbotBotBubble,
    ChatbotUserBubble,
    ChatbotInputMessageContainer,
 } from './CustomStyledComponents';

import './Chatbot.css';

const theme = createTheme({
    text: {
        fontFamily: 'monospace',
    },
    palette: {
      background: '#F5F5F5',
      headerBgColor: '#6E48AA',
      headerFontColor: '#FFFFFF',
      botBubbleBgColor: '#6E48AA',
      botBubbleFontColor: '#FFFFFF',
      userBubbleBgColor: '#FFFFFF',
      userBubbleFontColor: '#171717',
      msgInputBgColor: '#FFFFFF',
    },
});

export const Chatbot = (props) => {
    const {
        // Cconfigarable UI Settings
        headerLabel,
        // defaultBotMessageValue,
        // botMessagesValue,
        // userMessagesValue,
        // inputLabel,
        // customTheme,
        // botIcon,
        // userIcon,
        // closeIcon,
        // sendIcon,

        // Event Handlers
    } = props;

    const [openContainer, setOpenContainer] = useState(false);
    const [inputMsg, setInputMsg] = useState('');
    const [botMessages, setBotMessages] = useState([
        {
            message: 'Hey, How can I help you today?',
            sender: 'chatBot',
        },
    ]);
    const [userMessages, setUserMessages] = useState([]);

    const handleInputMsg = (e) => {
        setInputMsg(e.target.value);
    };

    const handleSend = (e) => {
        const newUserMsg = {
            message: inputMsg,
            sender: 'user',
        };

        const newMessages = [...userMessages,  newUserMsg]; // old msg + new msg

        // Update message states
        setUserMessages(newMessages);
        // Reset Input Field
        setInputMsg('');

        // Process msg to API (send and see the response)
    };

    return(
        <ThemeProvider theme={theme}>
            <ChatbotWrapper>
                {/* Chatbot-Btn */}
                <Box
                    component="button"
                    className='chatbot_btn'
                    onClick={() => setOpenContainer(!openContainer)}
                    aria-label='chatbot button'
                >
                    <Box>
                        <SmartToyIcon />
                    </Box>
                </Box>

                {/* Chatbot-Container */}
                <ChatbotMessageContainer className={`chatbot_message_container ${openContainer && 'show'}`}>
                    {/* Chatbot-Header */}
                    <ChatbotHeader className='chatbot_header'>
                        <Box component="p">{headerLabel ? headerLabel : 'Ask me Anything'}</Box>
                        <Box 
                            component="button"
                            className='chatbot_close_btn'
                            onClick={() => setOpenContainer(!openContainer)}
                        >
                            <CloseRoundedIcon htmlColor="#fff" />
                        </Box>
                    </ChatbotHeader>

                    {/* Chatbot-Messages */}
                    <Box
                        component="div"
                        className='chatbot_chatMessage_wrapper'
                    >
                        {/* Bot Message Bubble */}
                        <Stack
                            alignItems='flex-start'
                            direction='row'
                            className='chatbot_messageContainer_botMessage'
                        >
                            <Box
                                className='chatbot_messageContainer_botIcon'
                            >
                                <SmartToyIcon />
                            </Box>
                            <Box>
                                {botMessages.map((cbMsg, i) => {
                                    return<ChatbotBotBubble key={i} className='chat_msg'>{cbMsg.message}</ChatbotBotBubble>;
                                })}
                            </Box>
                        </Stack>

                        {/* User Message Bubble */}
                        {userMessages.length ? <Stack
                            alignItems='flex-start'
                            direction='row'
                            className='chatbot_messageContainer_UserMessage'
                        >
                            <Box>
                                {userMessages?.map((umsg, i) => {
                                    return <ChatbotUserBubble key={i} className='chat_msg'>{umsg.message}</ChatbotUserBubble>;
                                })}
                            </Box>
                            <Box
                                className='chatbot_messageContainer_userIcon'
                            >
                                <AccountCircleIcon />
                            </Box>
                        </Stack> : ''}
                    </Box>

                    {/* Chatbot-Message-Input */}
                    <ChatbotInputMessageContainer className='chatbot_messageInput_container'>
                        <TextField
                            id="standard-basic"
                            placeholder="Type Something..."
                            variant="standard"
                            className='chatbot_messageInput_textField'
                            value={inputMsg}
                            onChange={handleInputMsg}
                        />
                        <IconButton
                            aria-label="send"
                            className='chatbot_message_sendIcon'
                            onClick={(e) => handleSend(e)}
                        >
                            <SendRoundedIcon />
                        </IconButton>
                    </ChatbotInputMessageContainer>
                </ChatbotMessageContainer>
            </ChatbotWrapper>
        </ThemeProvider>
    );
};
