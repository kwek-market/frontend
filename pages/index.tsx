import { Fragment, memo, useEffect } from "react";
import { MainLayout } from "@/layouts";
import { Hero, Features, CategoryGrid, Brands } from "@/components/home";

import MobileSearchBar from "@/shared/header/MobileSearchBar";
import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import { Spin } from "antd";

const Home = function () {
  const {
    categories: { error, loading, categories },
  } = useSelector((state: RootState) => state);

  function sortArray(array: any[]) {
    let arr = array;
    let n = arr.length;
    let tempArr = [];
    for (let i = 0; i < n - 1; i++) {
      tempArr.push(arr.splice(Math.floor(Math.random() * arr.length), 1)[0]);
    }
    console.log(tempArr);
    tempArr.push(arr[0]);
    arr = tempArr;
    return arr;
  }

  const cards = [1, 2, 3];

  return (
    <MainLayout>
      <MobileSearchBar />
      <Hero />
      <Features />
      <CategoryGrid title="Deals Of The day" timer cards={cards} />
      {loading && (
        <div className="tw-flex tw-justify-center tw-items-center tw-py-5">
          <Spin size="large" />
        </div>
      )}
      {error && (
        <div className="tw-flex tw-justify-center tw-items-center tw-py-5">
          <h1 className="tw-text-error tw-text-xl tw-font-bold tw-text-center">
            {error}
          </h1>
        </div>
      )}
      <div>
        {categories !== undefined &&
          categories.length > 0 &&
          categories
            .slice(0, 6)
            .map(({ id, name }) => (
              <Fragment key={id}>
                {name !== undefined && <CategoryGrid title={name} sidebar />}
              </Fragment>
            ))}
      </div>
      <Brands />
    </MainLayout>
  );
};

export default memo(Home);
