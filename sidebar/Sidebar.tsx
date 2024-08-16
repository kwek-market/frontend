import useCategory from "@/hooks/useCategory";
import { Filtering } from "@/interfaces/commonTypes";
import { RootState } from "@/store/rootReducer";
import React from "react";
import { useSelector } from "react-redux";
import { Category } from "./Category";
import { Price } from "./Price";
import { Rating } from "./Rating";
import styles from "./Sidebar.module.scss";
import { Size } from "./Size";

type SidebarProps = {
  category: string;
  filtering: Filtering;
  setFiltering: React.Dispatch<React.SetStateAction<Filtering>>;
};

const Sidebar = function ({ category, filtering, setFiltering }: SidebarProps) {
  const categories = useSelector((state: RootState) => state.categories);
  const { id } = categories.categories.find(cat => cat.name === category);
  const payload = { id };
  const { status, data, error } = useCategory(payload);

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
