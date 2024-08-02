import React from "react";
import Image from "../../components/Image/Image";
import TextHighlight from "../../components/Commom/TextHighlight";
import Title from "../../components/Commom/Title";
import Content from "../../components/Commom/Content";
import { useForm } from "react-hook-form";
import Input from "../../components/Input/Input";
import TextArea from "../../components/Input/TextArea";
import Button from "../../components/Button/Button";

const ContactUs = () => {
  const { control, handleSubmit } = useForm();

  const handleSend = (data) => {
    console.log(data);
  };
  return (
    <div className="flex items-center justify-center gap-x-[164px] bg-silderContact">
      <Image url="./vector/vt2.png"></Image>
      <div>
        <TextHighlight title="Contact Us">Contact Us</TextHighlight>
        <Title
          title="Send your inquiry to our expert team"
          className="w-[404px] text-[36px] my-4"
        ></Title>
        <Content className="mb-[44px]">
          Lorem ipsum dolor sit amet nulla turapis tellus.
        </Content>

        <form
          onSubmit={handleSubmit(handleSend)}
          className="flex flex-col gap-y-[38px]"
        >
          <div className="flex items-center gap-x-[35px]">
            <Input
              control={control}
              name="firstName"
              placeholder="First name"
            ></Input>
            <Input
              control={control}
              name="lastName"
              placeholder="Last name"
            ></Input>
          </div>
          <Input
            control={control}
            name="email"
            placeholder="Email address"
          ></Input>
          <Input
            control={control}
            name="subject"
            placeholder="Subject message"
          ></Input>
          <TextArea
            control={control}
            name="inquiry"
            placeholder="Your inquiry here"
            className="h-[240px]"
          ></TextArea>

          <Button
            type="submit"
            kind="primary"
            className="rounded-[50px] tracking-[1.6px] w-[248px]"
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
