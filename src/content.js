import React from "react";
import { Form, Input } from "antd";
import { RightOutlined } from "@ant-design/icons";
import PhoneForm from "./phoneForm";
export const Content = (props) => {
  const [form] = Form.useForm();
  const { TextArea } = Input;

  const questions = [
    {
      message: "I want to Sell my Car 🏎️ ",
    },
    {
      message: "I want to buy a Sedan Car 🚙 ",
    },
    {
      message: "I want to trade my old car and buy a Luxury car 🏎️",
    },
  ];
  const handlePreDefinedMessages = (item) => {
    var now = new Date();
    props.setMessageList((prev) => [
      ...prev,
      {
        message: item.message,
        time: `${
          now.getMonth() + 1
        }/${now.getDate()}/${now.getFullYear()}, ${now.getHours()}:${now.getMinutes()}`,
      },
    ]);
    // props.setMessage('');
    const elem = document.getElementById("message");
    elem.scrollTop = elem.scrollHeight;
    props.setactionStarted(true);
  };
  return (
    <div
      className={
        props.actionStarted && props.phoneNumber === "" && props.flow === "1"
          ? "message-div-65"
          : "message-div"
      }
      id="message"
    >
      {props.actionStarted ? (
        props &&
        props.messageList &&
        props.messageList.length > 0 &&
        props.messageList.map((item, i) => (
          <div key={i}>
            <p className={i % 2 === 0 ? "message-recieved" : "message-sent"}>
              {item.message}
            </p>
            <p className={i % 2 === 0 ? "time-recieved" : "time-sent"}>
              {i % 2 === 0 ? " messaged on" : " messaged on"} {item.time}
            </p>
          </div>
        ))
      ) : (
        <div className="predefined-questions">
          Choose from a Question Below:
          {questions.map((item, i) => (
            <div
              key={i}
              onClick={() =>
                handlePreDefinedMessages({
                  message:
                    props.flow === "1"
                      ? "Enter your information and our representative will contact you shortly"
                      : item.message,
                })
              }
              className="predefined-questions-child"
            >
              <p> {item.message}</p>{" "}
              <RightOutlined style={{ marginTop: "10px" }} />
            </div>
          ))}
        </div>
      )}
      {props.actionStarted &&
        props.phoneNumber === "" &&
        props.flow === "1" && (
          <PhoneForm
            handlePreDefinedMessages={handlePreDefinedMessages}
            setPhoneNumber={props.setPhoneNumber}
            showMessage={true}
            flow={props.flow}
            name={props.name}
          />
        )}
      {props.phoneForm && (
        <PhoneForm
          handlePreDefinedMessages={handlePreDefinedMessages}
          setPhoneNumber={props.setPhoneNumber}
          showMessage={false}
          flow={props.flow}
          name={props.name}
        />
      )}
    </div>
  );
};
