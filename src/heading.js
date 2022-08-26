import React from 'react';
import { MessageTwoTone, LeftOutlined } from '@ant-design/icons';
export const Heading = (props) => {
  return (
    <div className="heading">
      <div style={{ display: 'flex' }}>
        {' '}
        {props.actionStarted && (
          <LeftOutlined
            style={{ marginRight: '7px', marginTop: '11px', cursor: 'pointer' }}
            onClick={() => {
              // props.setMessageList([]);
              props.setactionStarted((prev) => !prev);
              props.setPhoneNumber('');

              props.setPhoneValue('');
            }}
          />
        )}
        <h2>Instant Messenger 👇 </h2>
      </div>
      <p>
        <MessageTwoTone /> Start the conversation and our representative will
        contact you soon
      </p>
    </div>
  );
};
