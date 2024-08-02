import React from "react";
import Image from "../../Image/Image";
import { Link } from "react-router-dom";

const PageLink = [
  { id: 1, name: "Home", url: "/home" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Service", url: "/service" },
  { id: 4, name: "Gallery", url: "/gallery" },
  { id: 5, name: "Team", url: "/team" },
];

const InformationLink = [
  { id: 1, name: "Terms & conditions", url: "/term" },
  { id: 2, name: "Privacy policy", url: "/policy" },
  { id: 3, name: "Blog", url: "/blog" },
  { id: 4, name: "Contact", url: "/contact" },
];

const Footer = () => {
  return (
    <div className="text-text3 pt-[60px]">
      <div className=" relative z-[2]  w-full h-[300px] bg-primary ">
        <div className="mb-10">
          <div className="absolute right-0 bottom-0 z-[5] bg-footer ">
            <div>
              <div className="px-[150px] mt-[210px] flex items-start justify-between">
                <div className="flex flex-col">
                  <Image url="./logoPri2.png" className="w-[258px]"></Image>
                  <div className="text-text3 font-normal mt-[33px] mb-[26px] tracking-[1.6px] ">
                    <span className="text-text3 font-semibold">Beautice</span>{" "}
                    is a Beauty Clinic WordPress Theme.
                  </div>
                  <p className="italic font-medium text-sm tracking-[1.4px] ">
                    Baker Steet 101, NY, United States.
                  </p>
                  <div className="flex items-center gap-x-[28px]">
                    <span className="italic font-medium text-sm tracking-[1.4px]">
                      +521 569 8966.
                    </span>
                    <span className="italic font-medium text-sm underline tracking-[1.4px]">
                      {" "}
                      mail@company.com.
                    </span>
                  </div>
                </div>

                <div>
                  <h1 className="text-[#FFF] text-[18px] font-semibold">
                    Pages
                  </h1>

                  <div className="flex flex-col gap-y-[11px] mt-6">
                    {PageLink.length > 0 &&
                      PageLink.map((item) => (
                        <Link
                          key={item.id}
                          className="flex items-center gap-x-[8px]"
                        >
                          <Image url="./caret-right.png"></Image>
                          <span className="font-normal tracking-[1.6px]">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                  </div>
                </div>
                <div>
                  <h1 className="text-[#FFF] text-[18px] font-semibold">
                    Informations
                  </h1>

                  <div className="flex flex-col gap-y-[11px] mt-6">
                    {InformationLink.length > 0 &&
                      InformationLink.map((item) => (
                        <Link
                          key={item.id}
                          className="flex items-center gap-x-[8px]"
                        >
                          <Image url="./caret-right.png"></Image>
                          <span className="font-normal tracking-[1.6px]">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
              <div className="mt-[140px] px-[150px] flex items-center justify-between">
                <div className="flex items-center gap-x-[45px]">
                  <Link>
                    <Image url="./social/ft1.png"></Image>
                  </Link>
                  <Link>
                    <Image url="./social/ft2.png"></Image>
                  </Link>
                  <Link>
                    <Image url="./social/ft3.png"></Image>
                  </Link>
                  <Link>
                    <Image url="./social/ft4.png"></Image>
                  </Link>
                  <Link>
                    <Image url="./social/ft5.png"></Image>
                  </Link>
                </div>
                <p className="font-normal tracking-[1.6px]">
                  © AltDesain Studio 2021 - All right reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
