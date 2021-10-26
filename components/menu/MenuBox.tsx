import React from "react";
import style from "./menubox.module.scss";

type MenuBoxProps = {
  icon: string;
  title: string;
  description: string;
};

function MenuBox({ icon, title, description }: MenuBoxProps) {
  return (
    <div className={style.menuBox}>
      <div>
        <i className={`fas ${icon} icon`} />
      </div>
      <div style={{ paddingLeft: "12px" }}>
        <span className={style.title}>{title}</span>
        <span className={style.description}>{description}</span>
      </div>
    </div>
  );
}

export default MenuBox;
