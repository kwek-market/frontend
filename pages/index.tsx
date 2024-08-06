import { CategoryGrid, Features, Hero } from "@/components/home";
import { MainLayout } from "@/layouts";
import { Fragment, memo } from "react";

import { userFetcher } from "@/helpers";
import { CATEGORIES } from "@/store/category/categories.queries";
import { DEALS_OF_THE_DAY } from "@/store/seller/seller.queries";
import { GetStaticProps } from "next";
import { v4 } from "uuid";

const Home = function ({ categories, dealsOfTheDay }) {
  return (
    <MainLayout>
      <Hero />
      <Features />
      {dealsOfTheDay?.objects?.length > 0 ? (
        <CategoryGrid title='Deals Of The day' timer cards={dealsOfTheDay?.objects?.slice(0, 4)} />
      ) : null}
      <div>
        {categories !== undefined &&
          categories.length > 0 &&
          categories
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

export async function getStaticProps(): Promise<ReturnType<GetStaticProps>> {
  try {
    const { categories } = await userFetcher(CATEGORIES, { visibility: "published" });
    const variables = { page: 1, pageSize: 4 };
    const { dealsOfTheDay } = await userFetcher(DEALS_OF_THE_DAY, variables);

    function sortArray(array: any[]) {
      let arr = array;
      let n = arr.length;
      let tempArr = [];
      for (let i = 0; i < n - 1; i++) {
        tempArr.push(arr.splice(Math.floor(Math.random() * arr.length), 1)[0]);
      }
      tempArr.push(arr[0]);
      arr = tempArr;
      return arr;
    }

    const sortedCategories = sortArray(categories);
    console.log("🚀 ~~ getStaticProps ~~ sortedCategories:", sortedCategories);

    return {
      props: {
        categories: sortedCategories,
        dealsOfTheDay: dealsOfTheDay,
      },
      revalidate: 3600,
    };
  } catch (error) {
    console.log(error.message);

    return {
      props: {
        categories: [],
        dealsOfTheDay: [],
      },
      revalidate: 3600,
    };
  }
}
