import React from "react";
import Image from "../../../components/Image/Image";
import Title from "../../../components/Commom/Title";
import Content from "../../../components/Commom/Content";

const ServiceItem = ({
  url = "./vector/Animation1.png",
  title = "Beauty consultation",
  content = "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.",
}) => {
  return (
    <div className="bg-[#FFF] shadow-custom rounded-[42px] pt-[59px] pb-[52px] w-full ">
      <div className="px-[88px] pb-[58px]">
        <Image url={url} className="w-[166px] h-[166px] "></Image>
      </div>
      <Title
        title={title}
        className="text-[18px] px-10 pb-2 text-center"
      ></Title>
      <Content className="text-sm tracking-[1.4px] px-[35px] text-center">
        {content}
      </Content>
    </div>
  );
};

export default ServiceItem;
