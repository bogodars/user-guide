import React from 'react';
import Messages from './Messages';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import { Scrollbars } from 'react-custom-scrollbars';

import './Chat.css';

function Chat() {
  return (
    <div className='chat'>
      <ChatHeader />
      <Scrollbars style={{ height: 600 }}>
        <Messages />
      </Scrollbars>
      <ChatInput />
    </div>
  );
}

export default Chat;
