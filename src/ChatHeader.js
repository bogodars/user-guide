import React from 'react';
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { green } from '@material-ui/core/colors';
import { BiChevronDown } from 'react-icons/bi';

import './ChatHeader.css';

const ChatHeader = () => {
  return (
    <>
      <div className='chat__header'>
        <div className='left-icon'>
          <IconButton style={{ color: 'white' }}>
            <ForumIcon />
          </IconButton>
          <h5 className='left-icon-title'>Chat</h5>
        </div>

        <div className='online'>
          <FiberManualRecordIcon
            style={{ color: green[500] }}
            fontSize='small'
          />{' '}
          Online:246
        </div>

        <div className='lang'>
          <h5 className='lang-title'>EN</h5>

          <BiChevronDown />
        </div>
      </div>
    </>
  );
};

export default ChatHeader;
