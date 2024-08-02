import React from "react";
import Title from "../../components/Commom/Title";
import Button from "../../components/Button/Button";
import Image from "../../components/Image/Image";
import Gap from "../../components/Commom/Gap";

const Banner = () => {
  return (
    <Gap>
      <div className="flex items-center gap-x-[22px] mt-[166px]">
        <div>
          <Title
            title="Clinic & beauty
consultant"
            className="text-[48px] w-[430px]"
          ></Title>
          <p className="w-[474px] text-[#091156] font-medium tracking-[1.6px] ">
            It is a long established fact that a reader will be by the readable
            content of a page.
          </p>
          <Button
            kind="primary"
            className="rounded-[50px] tracking-[1.6px] mt-[28px]"
          >
            More Details
          </Button>
        </div>
        <div>
          <Image url="./vector/vt1.png"></Image>
        </div>
      </div>
    </Gap>
  );
};

export default Banner;
