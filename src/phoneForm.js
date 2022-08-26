import React from "react";
import { Form, Input, Button } from "antd";
import PhoneInput from "react-phone-input-2";
const PhoneForm = (props) => {
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const validPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
  return (
    <div className={props.flow === "3" ? "form-group-phone" : "form-group"}>
      <Form
        form={form}
        onFinish={(values) => {
          props.handlePreDefinedMessages({
            message: `${values.phoneNumber} ${values.name} ${
              values.message ? values.message : ""
            }`,
          });
          props.setPhoneNumber(values.phoneNumber);
        }}
      >
        {" "}
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input name="name" placeholder="Name"></Input>
        </Form.Item>{" "}
        <Form.Item
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: "Please enter a valid phone number",
            },
          ]}
        >
          {/* <Input name="phoneNumber" placeholder="Phone Number"></Input> */}
          <div className="form-phone-input">
            {" "}
            <PhoneInput country={"us"} placeholder="Enter phone number" />
          </div>
        </Form.Item>{" "}
        {props.showMessage && (
          <Form.Item
            name="message"
            rules={[{ required: true, message: "Please enter a message" }]}
          >
            <TextArea name="message" placeholder="Message"></TextArea>
          </Form.Item>
        )}
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
      <p style={{ fontSize: "9px" }}>
        By submitting. you authorize {props.name} to send text messages with offers &
        other information. possibly using automated technology, to the number
        you provided. Message/data rates apply. Consent is not a condition of
        purchase.
      </p>
    </div>
  );
};

export default PhoneForm;
