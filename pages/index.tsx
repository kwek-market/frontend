import { Fragment, memo, useMemo } from "react";
import { MainLayout } from "@/layouts";
import { Hero, Features, CategoryGrid, Brands } from "@/components/home";

import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import { Spin } from "antd";
import { v4 } from "uuid";
import useDealsOfTheDay from "@/hooks/useDealsOfTheDay";
import ErrorInfo from "@/components/Loader/ErrorInfo";
import Load from "@/components/Loader/Loader";

const Home = function () {
  const {
    categories: { error, loading, categories },
  } = useSelector((state: RootState) => state);
  const { status, error: err, data } = useDealsOfTheDay();

  const category = useMemo(() => {
    return categories.slice();
  }, [categories]);

  function sortArray(array: any[]) {
    let arr = array;
    let n = arr.length;
    let tempArr = [];
    for (let i = 0; i < n - 1; i++) {
      tempArr.push(arr.splice(Math.floor(Math.random() * arr.length), 1)[0]);
    }
    // console.log(tempArr);
    // console.log(arr[0]);
    tempArr.push(arr[0]);
    arr = tempArr;
    return tempArr;
  }

  return (
    <MainLayout>
      <Hero />
      <Features />
      {status === "loading" || data === undefined ? (
        <Load />
      ) : status === "error" ? (
        <ErrorInfo error={(err as { message: string }).message} />
      ) : data.dealsOfTheDay.length > 0 ? (
        <CategoryGrid
          title="Deals Of The day"
          timer
          cards={data.dealsOfTheDay}
        />
      ) : null}
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
          sortArray(category)
            .slice(0, 8)
            .map(({ id, name }) => (
              <Fragment key={v4()}>
                {name !== undefined && <CategoryGrid title={name} sidebar />}
              </Fragment>
            ))}
      </div>
      {/* <Brands /> */}
    </MainLayout>
  );
};

export default memo(Home);
