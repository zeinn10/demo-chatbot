import { styled } from '@mui/material/styles';

const ChatbotWrapperComponent = styled('div')(({ theme }) => ({
    fontFamily: theme.text.fontFamily,
}));

const ChatbotMessageContainerComponent = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background,
}));

const ChatbotHeaderComponent = styled('div')(({ theme }) => ({
    color: theme.palette.headerFontColor,
    backgroundColor: theme.palette.headerBgColor,
}));

const ChatbotBotBubbleComponent = styled('p')(({ theme }) => ({
    color: theme.palette.botBubbleFontColor,
    backgroundColor: theme.palette.botBubbleBgColor,
}));

const ChatbotUserBubbleComponent = styled('p')(({ theme }) => ({
    color: theme.palette.userBubbleFontColor,
    backgroundColor: theme.palette.userBubbleBgColor,
}));

const ChatbotInputMessageContainerComponent = styled('form')(({ theme }) => ({
    backgroundColor: theme.palette.msgInputBgColor,
}));

export const ChatbotWrapper = ChatbotWrapperComponent;
export const ChatbotMessageContainer= ChatbotMessageContainerComponent;
export const ChatbotHeader = ChatbotHeaderComponent;
export const ChatbotBotBubble = ChatbotBotBubbleComponent;
export const ChatbotUserBubble = ChatbotUserBubbleComponent;
export const ChatbotInputMessageContainer = ChatbotInputMessageContainerComponent;
