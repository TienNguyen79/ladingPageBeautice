import React from "react";
import TextHighlight from "../../components/Commom/TextHighlight";
import Title from "../../components/Commom/Title";
import Content from "../../components/Commom/Content";
import Button from "../../components/Button/Button";
import Image from "../../components/Image/Image";
import Gap from "../../components/Commom/Gap";

const AboutUs = () => {
  return (
    <Gap className="">
      <div className="flex items-center gap-x-[130px]">
        <div>
          <TextHighlight title="About Us"></TextHighlight>
          <Title
            title="We are the best beauty clinic"
            className="text-[36px] py-3 w-[541px]"
          ></Title>
          <Content className="w-[483px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
            suscipit purus donec amet. Egestas volutpat facilisi eu libero.
            Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in
            suspendisse placerat.
          </Content>
          <Content className="w-[483px] mb-[50px] mt-[30px]">
            Id dui erat sed quam tellus in purus. Pellentesque congue fringilla
            cras tellus enim.
          </Content>
          <div className="flex items-center gap-x-[44px]">
            <Button kind="primary" className="rounded-[50px] tracking-[1.6px]">
              Learn More
            </Button>
            <div className="flex items-center gap-x-[13px] cursor-pointer">
              <Image url="./Play_button.png"></Image>
              <h1 className="text-textGrey font-medium tracking-[1.6px]">
                Watch Video
              </h1>
            </div>
          </div>
        </div>
        <div>
          <Image url="./about.png"></Image>
        </div>
      </div>
    </Gap>
  );
};

export default AboutUs;
