import React from "react";
import Image from "../../../components/Image/Image";
import Title from "../../../components/Commom/Title";
import Content from "../../../components/Commom/Content";
import { Link } from "react-router-dom";
import TextHighlight from "../../../components/Commom/TextHighlight";

const ExpertItem = ({
  url = "./vector/Animation1.png",
  title = "Beauty consultation",
  content = "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.",
  job = "Surgeon",
}) => {
  return (
    <div className="hover:bg-[#FFF] hover:shadow-custom cursor-pointer transition-all rounded-[42px] pt-[59px] pb-[52px] w-full ">
      <div className="px-[88px] pb-[58px]">
        <Image url={url} className="w-[166px] h-[166px] "></Image>
      </div>
      <TextHighlight
        title={job}
        className="mb-[15px] text-center"
      ></TextHighlight>
      <Title
        title={title}
        className="text-[18px] px-10 pb-2 text-center"
      ></Title>
      <Content className="text-sm tracking-[1.4px] px-[35px] text-center">
        {content}
      </Content>

      <div className="px-[105px] flex items-center justify-center gap-x-[34px] mt-[50px]">
        <Link className="bg-white drop-shadow-custom flex items-center justify-center p-3 rounded-full">
          <Image url="./social/icb1.png" className=" w-[25px] h-[25px]"></Image>
        </Link>
        <Link className="bg-white drop-shadow-custom flex items-center justify-center p-3 rounded-full">
          <Image url="./social/icb2.png" className=" w-[25px] h-[25px]"></Image>
        </Link>
        <Link className="bg-white drop-shadow-custom flex items-center justify-center p-3 rounded-full">
          <Image url="./social/icb3.png" className=" w-[25px] h-[25px]"></Image>
        </Link>
      </div>
    </div>
  );
};

export default ExpertItem;
