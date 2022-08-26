import React, { useState } from "react";
import { Heading } from "./heading";
import { SendMessage } from "./sendMessage";
import { Content } from "./content";
import { Footer } from "./footer";
export const WidgetContent = (props) => {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [actionStarted, setactionStarted] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [PhoneValue, setPhoneValue] = useState("");
  const [phoneForm, setphoneForm] = useState(false);
  const [flow, setFlow] = useState("3");
  return (
    <div className="mainContainer">
      <Heading
        actionStarted={actionStarted}
        setactionStarted={setactionStarted}
        setMessageList={setMessageList}
        setPhoneNumber={setPhoneNumber}
        setPhoneValue={setPhoneValue}
        name={props.name}
      />
      <Content
        messageList={messageList}
        actionStarted={actionStarted}
        setactionStarted={setactionStarted}
        setMessageList={setMessageList}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        flow={flow}
        phoneForm={phoneForm}
        setphoneForm={setphoneForm}
        name={props.name}
      />
      <div>
        {flow === "1" &&
          ((actionStarted && phoneNumber !== "") ||
            (!actionStarted && phoneNumber === "")) && (
            <SendMessage
              message={message}
              setMessage={setMessage}
              messageList={messageList}
              setMessageList={setMessageList}
              setactionStarted={setactionStarted}
              actionStarted={actionStarted}
              phoneNumber={phoneNumber}
              setPhoneNumber={setPhoneNumber}
              PhoneValue={PhoneValue}
              setPhoneValue={setPhoneValue}
              flow={flow}
            />
          )}
        {flow !== "1" && (
          <SendMessage
            message={message}
            setMessage={setMessage}
            messageList={messageList}
            setMessageList={setMessageList}
            setactionStarted={setactionStarted}
            actionStarted={actionStarted}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            PhoneValue={PhoneValue}
            setPhoneValue={setPhoneValue}
            flow={flow}
            setphoneForm={setphoneForm}
            phoneForm={phoneForm}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};
