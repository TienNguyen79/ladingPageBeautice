import React from "react";
import Image from "../../Image/Image";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import Gap from "../../Commom/Gap";

const menuLink = [
  { id: 1, name: "Home", url: "/", icon: "+" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Service", url: "/service" },
  { id: 4, name: "Gallery", url: "/gallery" },
  { id: 5, name: "Blog", url: "/blog" },
];

const Header = () => {
  return (
    <Gap>
      <div className="flex items-center justify-between pt-[41px]">
        <Image url="./logoPri.png"></Image>
        <div className="flex items-center gap-x-[52px]">
          <div className="flex items-center gap-x-[45px]">
            {menuLink.length > 0 &&
              menuLink.map((menu) => (
                <Link
                  key={menu.id}
                  to={menu.url}
                  className="text-textGrey font-medium hover:text-primary hover:font-semibold"
                >
                  {menu.name}
                  {menu.icon && (
                    <span className="inline-block ml-[5px]">+</span>
                  )}
                </Link>
              ))}
          </div>
          <Button kind="primary" className="rounded-[50px]">
            Contact
          </Button>
        </div>
      </div>
    </Gap>
  );
};

export default Header;
