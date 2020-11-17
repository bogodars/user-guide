import React from 'react';
import { BiSmile } from 'react-icons/bi';
import SendIcon from '@material-ui/icons/Send';

import './ChatInput.css';

function ChatInput() {
  return (
    <div>
      <div className='chat__input'>
        <form action='#' className='chat__input-form'>
          <input
            type='text'
            placeholder='Text message'
            className='message__input'
          />
          <BiSmile className='smile' fontSize='x-large' />
          <button className='chat__input-button' type='submit'>
            <SendIcon fontSize='large' />
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatInput;
