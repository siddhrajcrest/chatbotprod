import React, { useState } from "react";
import { Heading } from "./heading";
import { SendMessage } from "./sendMessage";
import { Content } from "./content";
import { Footer } from "./footer";
import { GET_UNIQUE_ID_DETAILS } from "./graphql/query";
import { Spin } from "antd";
import { useQuery } from "@apollo/client/react";
export const WidgetContent = (props) => {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [actionStarted, setactionStarted] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [PhoneValue, setPhoneValue] = useState("");
  const [phoneForm, setphoneForm] = useState(false);
  const [flow, setFlow] = useState(null);
  const [companyName, setCompanyName] = useState("");
  const { data, loading, error } = useQuery(GET_UNIQUE_ID_DETAILS, {
    variables: {
      widgetId: props.id,
    },
    onCompleted: (res) => {
      console.log(res);
      setFlow(res?.getUniqueIdDetails?.flowType);
      setCompanyName(res?.getUniqueIdDetails?.companyName);
    },
  });
  console.log(companyName);
  return loading ? (
    <Spin className="Spinner" tip="Gathering Details..." />
  ) : (
    <div className="mainContainer">
      <Heading
        actionStarted={actionStarted}
        setactionStarted={setactionStarted}
        setMessageList={setMessageList}
        setPhoneNumber={setPhoneNumber}
        setPhoneValue={setPhoneValue}
        name={companyName}
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
        name={companyName}
        apiData={data?.getUniqueIdDetails}
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
      <style jsx>
        {`
          .mainContainer ::-webkit-scrollbar {
            width: 10px;
          }

          /* Track */
          .mainContainer ::-webkit-scrollbar-track {
            box-shadow: inset 0 0 5px grey;
            border-radius: 10px;
          }

          /* Handle */
          .mainContainer ::-webkit-scrollbar-thumb {
            background: #8e0b618f;
            border-radius: 10px;
          }

          /* Handle on hover */
          .mainContainer ::-webkit-scrollbar-thumb:hover {
            background: #b30000;
          }
        `}
      </style>
    </div>
  );
};
