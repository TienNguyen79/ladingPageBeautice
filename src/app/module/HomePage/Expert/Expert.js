import React from "react";
import TextHighlight from "../../../components/Commom/TextHighlight";
import Title from "../../../components/Commom/Title";
import Content from "../../../components/Commom/Content";
import ExpertItem from "./ExpertItem";
import Gap from "../../../components/Commom/Gap";

const ExpertLink = [
  {
    id: 1,
    title: "Briyan Nevalli",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
    job: "Surgeon",
    image: "./avatar/avatar1.png",
  },
  {
    id: 2,
    title: "Bella sebastian",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
    job: "Dermatologist",
    image: "./avatar/avatar2.png",
  },
  {
    id: 3,
    title: "Lilly Adams",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
    job: "Stylist expert",
    image: "./avatar/avatar3.png",
  },
];

const Expert = () => {
  return (
    <Gap>
      <div className="mt-[193px] mb-[124px]">
        <div>
          <div className="flex flex-col items-center gap-y-[12px]">
            <TextHighlight title="Professional Teams"></TextHighlight>
            <Title
              title="The Professional expert"
              className="text-[36px] w-[450px] text-center "
            ></Title>
            <Content className="w-[848px] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam.
            </Content>
          </div>
          <div className="mt-[82px] grid grid-cols-3 gap-x-[56px]">
            {ExpertLink.length > 0 &&
              ExpertLink.map((item) => (
                <ExpertItem
                  key={item.id}
                  url={item.image}
                  title={item.title}
                  content={item.content}
                ></ExpertItem>
              ))}
          </div>
        </div>
      </div>
    </Gap>
  );
};

export default Expert;
