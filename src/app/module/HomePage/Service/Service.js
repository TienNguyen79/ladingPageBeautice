import React from "react";
import TextHighlight from "../../../components/Commom/TextHighlight";
import Title from "../../../components/Commom/Title";
import Content from "../../../components/Commom/Content";
import ServiceItem from "./ServiceItem";
import Gap from "../../../components/Commom/Gap";

const serviceLink = [
  {
    id: 1,
    title: "Beauty consultation",
    content:
      "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.",
    image: "./vector/Animation1.png",
  },
  {
    id: 2,
    title: "Skin treatments",
    content:
      "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.",
    image: "./vector/Animation2.png",
  },
  {
    id: 3,
    title: "Beauty product",
    content:
      "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.",
    image: "./vector/Animation3.png",
  },
];

const Service = () => {
  return (
    <Gap>
      <div className="mt-[193px] mb-[134px]">
        <div>
          <div className="flex flex-col items-center gap-y-[12px]">
            <TextHighlight title="Main Services"></TextHighlight>
            <Title
              title="Learn services to focus on your beauty"
              className="text-[36px] w-[450px] text-center "
            ></Title>
            <Content className="w-[848px] text-center">
              Porta rhoncus orci condimentum vitae lobortis eu dignissim non
              massa. Non parturient amet, feugiat tellus sagittis, scelerisque
              eget nulla turpis.
            </Content>
          </div>
          <div className="mt-[82px] grid grid-cols-3 gap-x-[56px]">
            {serviceLink.length > 0 &&
              serviceLink.map((item) => (
                <ServiceItem
                  key={item.id}
                  url={item.image}
                  title={item.title}
                  content={item.content}
                ></ServiceItem>
              ))}
          </div>
        </div>
      </div>
    </Gap>
  );
};

export default Service;
