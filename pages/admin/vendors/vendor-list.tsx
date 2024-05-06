import BreadCrumbs from "@/components/admin/breadcrumbs";
import Search from "@/components/admin/search";
import AdminTable from "@/components/table";
import { reduceCharacterLength } from "@/helpers/helper";
import { useGetSellers } from "@/hooks/admin/vendors";
import { AdminLayout } from "@/layouts";
import { RootState } from "@/store/rootReducer";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import { Tabs } from "antd";
import Link from "next/dist/client/link";
import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useDebounce } from "use-debounce";
import { PAGE_SIZE } from "../../../constants/constants";

const Vendors = () => {
  const [activeKey, setActiveKey] = useState("1");
  const [searchValue, setSearchValue] = useState("");
  const [searchDebouncedValue] = useDebounce(searchValue, 600);

  const { TabPane } = Tabs;
  const maxNameLength = 14;

  const [page, setPage] = useState(1);
  const {
    user: { token },
  } = useSelector((state: RootState) => state);

  const { data: activeData, isLoading: isActiveLoading } = useGetSellers({
    token,
    seller: true,
    customer: false,
    sellerIsRejected: false,
    active: true,
    redFlagged: false,
    page,
    pageSize: PAGE_SIZE,
    search: searchDebouncedValue,
  });

  const { data: redFlaggedData, isFetching: isRedFlagLoading } = useGetSellers({
    token,
    seller: true,
    customer: false,
    sellerIsRejected: false,
    active: true,
    redFlagged: true,
    page,
    pageSize: PAGE_SIZE,
    search: searchDebouncedValue,
  });

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name, object) => {
        name = reduceCharacterLength(name, maxNameLength);
        return (
          <Link href={"/admin/vendors/vendor-info/" + object.key}>
            <a className=' tw-text-black-kwek100'>{name}</a>
          </Link>
        );
      },
    },
    {
      title: "Email Address",
      dataIndex: "email_address",
      key: "email_address",
      render: email => reduceCharacterLength(email, maxNameLength),
    },
    {
      title: "Date Joined",
      dataIndex: "date_joined",
      key: "date_joined",
      render: date => <p>{new Date(date).toDateString()}</p>,
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
      render: () => <p>Nigeria</p>,
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "Wallet Balance",
      dataIndex: "amount_sold",
      key: "amount_sold",
    },
    {
      title: "",
      key: "action",
      render: () => (
        <span>
          <DotsVerticalIcon className='tw-h-5 tw-w-5 tw-text-[#27BE63]' />
        </span>
      ),
    },
  ];

  const data = useMemo(
    () =>
      activeData?.getUserType?.objects?.map(
        ({ id, fullName, email, dateJoined, sellerProfile, wallet }) => {
          return {
            key: id,
            name: fullName,
            email_address: email,
            date_joined: dateJoined,
            country: sellerProfile[0]?.lga,
            state: sellerProfile[0]?.state,
            amount_sold: wallet?.balance,
          };
        }
      ),
    [activeData]
  );

  const redFlagged = useMemo(
    () =>
      redFlaggedData?.getUserType?.objects?.map(
        ({ id, fullName, email, dateJoined, sellerProfile, wallet }) => {
          return {
            key: id,
            name: fullName,
            email_address: email,
            date_joined: dateJoined,
            country: sellerProfile[0]?.lga,
            state: sellerProfile[0]?.state,
            amount_sold: wallet?.balance,
          };
        }
      ),
    [activeData]
  );

  return (
    <AdminLayout>
      <BreadCrumbs
        items={[
          { name: "Dashboard", path: "/admin/dashboard" },
          {
            name: "Vendor List",
            path: "/admin/vendors/vendor-list",
          },
        ]}
        header='Vendors List'
        buttonPath='#'
        buttonText='Send Bulk Email'
      />

      {/* <div className=" tw-flex tw-gap-x-2 tw-mt-6 tw-items-center ">
        <span className=" tw-opacity-70">Sort By:</span>
        <select
          value="all"
          className=" tw-rounded tw-border tw-border-[#D7DCE0] tw-py-3 tw-outline-none tw-cursor-pointer"
        >
          <option value="all">All Categories</option>
          <option value="fashion">Fashion</option>
          <option value="auto">Automobiles</option>
        </select>
      </div> */}

      <div className='tw-mt-6'>
        <Search
          value={searchValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchValue(e.target.value);
          }}
          placeholder='Search by Store name'
        />
      </div>

      <div className=' tw-pt-4'>
        <Tabs
          animated
          tabBarStyle={{ borderColor: "red" }}
          className='adminTab'
          activeKey={activeKey}
          onTabClick={key => setActiveKey(key)}
        >
          <TabPane tab='Active Vendors' key='1'>
            <AdminTable
              data={data}
              columns={columns}
              isLoading={isActiveLoading}
              numberOfPages={activeData?.getUserType?.pages}
              page={activeData?.getUserType?.page}
              goToNext={() => {
                if (activeData?.getUserType?.hasNext) setPage(page + 1);
              }}
              goToPrev={() => {
                if (activeData?.getUserType?.hasPrev) setPage(page - 1);
              }}
              goToPage={page => {
                setPage(page);
              }}
            />
          </TabPane>
          <TabPane tab='Red-flagged Vendors' key='2'>
            <AdminTable
              data={redFlagged}
              columns={columns}
              isLoading={isRedFlagLoading}
              numberOfPages={redFlaggedData?.getUserType?.pages}
              page={redFlaggedData?.getUserType?.page}
              goToNext={() => {
                if (redFlaggedData?.getUserType?.hasNext) setPage(page + 1);
              }}
              goToPrev={() => {
                if (redFlaggedData?.getUserType?.hasPrev) setPage(page - 1);
              }}
              goToPage={page => {
                setPage(page);
              }}
            />
          </TabPane>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default Vendors;
