import React, { useState } from 'react';
import { Button, Popover } from 'antd';
import { MessageOutlined, CloseOutlined } from '@ant-design/icons';
import { WidgetContent } from './widgetContent';
import './style.css';

export default function App(props) {
  const [widgetVisible, setwidgetVisible] = useState(false);
  return (
    <div style={{ height: '100%' }}>
      {/* <div
        style={{
          position: 'fixed',
          bottom: 0,
          marginBottom: '65px',
          right: 0,
          marginRight: '50px',
        }}
      ></div> */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          marginBottom: '30px',
          right: 0,
          marginRight: '50px',
        }}
      >
        <Popover
          placement="topRight"
          style={{position: 'fixed',  marginRight: '500px' }}
          content={<WidgetContent name={props.name}  />}
          visible={widgetVisible}
        >
          {' '}
          <Button
            size="large"
            type="primary"
            style={{
              borderRadius: '30px',
              borderTopRightRadius: '5px',
            }}
            onClick={() => setwidgetVisible((prev) => !prev)}
          >
            {widgetVisible ? <CloseOutlined /> : <MessageOutlined />}
          </Button>
        </Popover>
      </div>
    </div>
  );
}
