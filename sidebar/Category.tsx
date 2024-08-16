import ErrorInfo from "@/components/Loader/ErrorInfo";
import { SidebarProps } from "@/interfaces/commonTypes";
import { Bars } from "react-loader-spinner";
import { v4 } from "uuid";
import styles from "./Sidebar.module.scss";

type CategoryProps = SidebarProps & {
  category: string;
  status: string;
  error: any;
  data: any;
};

export function Category({
  status,
  error,
  data,
  category,
  setFiltering,
  filtering,
}: CategoryProps) {
  return (
    <div className={styles.sidebar_content}>
      <p className={styles.header}>BROWSE CATEGORIES</p>
      {status === "loading" && data === undefined && <Bars width='20' height='20' color='red' />}
      {status === "error" && (
        <div className='tw-py-3'>
          <p className='tw-text-error tw-text-lg tw-font-bold'>{error.message}</p>
        </div>
      )}
      <div className={styles.subMenu}>
        {status === "success" && data !== undefined && data.category.child.length === 0 ? (
          <ErrorInfo error='No sub categories' />
        ) : (
          data?.category.child.map(cat => (
            <div key={v4()} className='tw-flex tw-items-center'>
              <input
                type='checkbox'
                name='category'
                value={cat.name}
                checked={filtering.keyword.includes(cat.name)}
                onChange={e => {
                  if (e.target.checked) {
                    setFiltering({
                      ...filtering,
                      keyword: [...filtering.keyword, e.target.value],
                    });
                  } else {
                    setFiltering({
                      ...filtering,
                      keyword: filtering.keyword.filter(value => value !== e.target.value),
                    });
                  }
                }}
              />
              <p className='tw-ml-2'>{cat.name}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
