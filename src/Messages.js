import React from 'react';
import './Messages.css';
import { messageInfo } from './messageData';

const Message = () => {
  return (
    <>
      {messageInfo.map((index, key) => (
        <div key={key} className='message' id='message'>
          <div className='mesagge__header'>
            <div className='message__header-left'>
              <img src={index.avatar} alt='' className='avatar' />
              <h4 className='title'>{index.title}</h4>
              <time className='time'>{index.time}</time>
            </div>
            <div className='message__header-right'>
              <button id='replay__icon' className='replay__icon'>
                {index.reply}
              </button>
              <div id='replay__text' className='replay__text'>
                {index.replyText}
              </div>
              <button id='like' className='like'>
                {index.like}
              </button>
            </div>
          </div>
          <div className='message__text'>{index.text}</div>
        </div>
      ))}
    </>
  );
};

export default Message;
