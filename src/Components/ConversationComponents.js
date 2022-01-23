import { useState } from "react";
import styled from "styled-components";
import { SearchContainer, SearchInput } from "./ContactListComponents";
import { Picker } from 'emoji-picker-react'
import { messagesList } from '../mockData'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    flex: 3;
    background: #f6f7f8;
`
const ProfileHeader = styled.div`
  display: flex;
  flex-direction: row;
  background: #ededed;
  padding: 10px;
  align-items: center;
  gap: 10px;
`;
const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
const ChatBox = styled.div`
  display: flex;
  background: #f0f0f0;
  padding: 10px;
  align-items: center;
  bottom: 0;
`;
const EmojiImage = styled.img`
  width: 28px;
  height: 28px;
  opacity: 0.4;
  cursor: pointer;
`;
const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #e5ddd6;
  overflow-y: auto;
`;
const MessageDiv = styled.div`
  justify-content: ${(props) => (props.isYours ? "flex-end" : "flex-start")};
  display: flex;
  margin: 5px 15px;
`;
const Message = styled.div`
  background: ${(props) => (props.isYours ? "#daf8cb" : "white")};
  max-width: 50%;
  color: #303030;
  padding: 8px 10px;
  font-size: 14px;
  border-radius: 4px;
`;
const ConversationComponents = (props) => {
    const { selectedChat } = props
    // const [text, setText] = useState('')
    
    // const onEmojiClick = (event, emoji) =>{}
  return (
    <Container>
      <ProfileHeader>
        <ProfileImage src={selectedChat.profilePic}/>
        {selectedChat.name}
      </ProfileHeader>
      <MessageContainer>
        {messagesList.map((messageData) => (
          <MessageDiv key={messageData.id} isYours={messageData.senderID === 0}>
            <Message key={messageData.id} isYours={messageData.senderID === 0}>
              {[messageData.text]}
            </Message>
          </MessageDiv>
        ))}
      </MessageContainer>
      <ChatBox>
          <SearchContainer>
              {/* <Picker pickerStyle={{ position: "absolute", bottom: "60px" }}
              onEmojiClick={onEmojiClick}/> */}
              <EmojiImage src={'/data.svg'} />
              <SearchInput 
              placeholder="Type a message here" />
          </SearchContainer>
      </ChatBox>
    </Container>
  )
};

export default ConversationComponents;
