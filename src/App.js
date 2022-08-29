import React, { useState } from "react";
import { Button, Popover } from "antd";
import { MessageOutlined, CloseOutlined } from "@ant-design/icons";
import { WidgetContent } from "./widgetContent";
import "./style.css";

export default function App(props) {
  const [widgetVisible, setwidgetVisible] = useState(false);

  return (
    <div style={{ height: "100%" }}>
      {/* <div
        style={{
          position: 'fixed',
          bottom: 0,
          marginBottom: '65px',
          right: 0,
          marginRight: '50px',
        }}
      ></div> */}
      <div>
        <Popover
          style={{
            position: "fixed !important",
            bottom: "0px !important",
            marginBottom: "30px !important",
            right: "0px !important",
            marginRight: "50px !important",
          }}
          // id="pop-widget"
          placement="topRight"
          // style={{ display: "block", position: "fixed", marginRight: "500px" }}
          content={<WidgetContent id={props.id} />}
          visible={widgetVisible}
        >
          {" "}
          <Button
            size="large"
            type="primary"
            style={{
              borderRadius: "30px",
              borderTopRightRadius: "5px",
              position: "fixed",
              bottom: 0,
              marginBottom: "30px",
              right: 0,
              marginRight: "50px",
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
