import { Category } from "./Category";
import { Gender } from "./Gender";
import { Rating } from "./Rating";
import { Price } from "./Price";
import { Size } from "./Size";
import React from "react";
import styles from "./Sidebar.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import useCategory from "@/hooks/useCategory";
import { Filtering } from "@/interfaces/commonTypes";

type SidebarProps = {
  category: string;
  filtering: Filtering;
  setFiltering: React.Dispatch<React.SetStateAction<Filtering>>;
};

const Sidebar = function ({ category, filtering, setFiltering }: SidebarProps) {
  const { categories } = useSelector((state: RootState) => state);
  const { id } = categories.categories.find((cat) => cat.name === category);
  const payload = { id };
  const { status, data, error } = useCategory(payload);
  console.log(filtering);

  return (
    <div className={styles.sidebar}>
      <Category
        status={status}
        error={error}
        data={data}
        category={category}
        setFiltering={setFiltering}
        filtering={filtering}
      />
      {/* <Gender /> */}
      <Rating setFiltering={setFiltering} filtering={filtering} />
      <Price setFiltering={setFiltering} filtering={filtering} />
      <Size setFiltering={setFiltering} filtering={filtering} />
    </div>
  );
};

export default Sidebar;
