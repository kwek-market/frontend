import React from "react";
import style from "./categorybox.module.scss";

type CategoryBoxProps = {
  icon: string;
  name: string;
};

function CategoryBox({ icon, name }: CategoryBoxProps) {
  return (
    <div className={style.categoryBox}>
      <span className={style.img}>
        <img src={icon} alt={name} />
      </span>
      <span className={style.name}>
        {name}
      </span>
    </div>
  );
}

export default CategoryBox;
