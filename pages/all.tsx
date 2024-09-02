import { CategoryGrid } from "@/components/home";
import { userFetcher } from "@/helpers";
import { MainLayout } from "@/layouts";
import { CATEGORIES } from "@/store/category/categories.queries";
import { Fragment } from "react";
import { v4 } from "uuid";
import { TEN_SECONDS } from "../constants/constants";

export default function all({ categories }) {
  return (
    <MainLayout title='All Categories'>
      <div>
        {categories !== undefined &&
          categories.length > 0 &&
          categories.map(({ name }) => (
            <Fragment key={v4()}>
              {name !== undefined && <CategoryGrid title={name} sidebar />}
            </Fragment>
          ))}
      </div>
    </MainLayout>
  );
}

export async function getStaticProps() {
  try {
    const { categories } = await userFetcher(CATEGORIES);

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
    return {
      props: {
        categories: sortedCategories,
      },
      revalidate: TEN_SECONDS,
    };
  } catch (error) {
    console.log(error.message);

    return {
      props: {
        categories: [],
      },
      revalidate: TEN_SECONDS,
    };
  }
}
