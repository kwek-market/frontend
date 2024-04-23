import BreadCrumbs from "@/components/admin/breadcrumbs";
import Search from "@/components/admin/search";
import AdminTable from "@/components/table";
import { AdminLayout } from "@/layouts";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import { Tabs } from "antd";
import Link from "next/dist/client/link";
import React, { useMemo, useState } from "react";
import { reduceCharacterLength } from "@/helpers/helper";
import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import { useGetSellers } from "@/hooks/admin/vendors";

const Vendors = () => {
  const [activeKey, setActiveKey] = useState("1");
  const [searchValue, setSearchValue] = useState("");
  const { TabPane } = Tabs;
  const maxNameLength = 14;

  const [page, setPage] = useState(1);
  const {
    user: { token },
  } = useSelector((state: RootState) => state);

  const { data: activeData, isLoading } = useGetSellers({
    token,
    seller: true,
    customer: false,
    sellerIsRejected: false,
    active: true,
    redFlagged: false,
    page,
    pageSize: 10,
  });

  const { data: redFlaggedData, isFetching } = useGetSellers({
    token,
    seller: true,
    customer: false,
    sellerIsRejected: false,
    active: false,
    redFlagged: true,
    page,
    pageSize: 10,
  });

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name) => {
        name = reduceCharacterLength(name, maxNameLength);
        return (
          <Link href={"/admin/vendors/vendor-info/" + name}>
            <a className=" tw-text-black-kwek100">{name}</a>
          </Link>
        );
      },
    },
    {
      title: "Email Address",
      dataIndex: "email_address",
      key: "email_address",
      render: (email) => reduceCharacterLength(email, maxNameLength),
    },
    {
      title: "Date Joined",
      dataIndex: "date_joined",
      key: "date_joined",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "Amount Sold",
      dataIndex: "amount_sold",
      key: "amount_sold",
    },
    {
      title: "",
      key: "action",
      render: () => (
        <span>
          <EllipsisVerticalIcon className="tw-h-5 tw-w-5 tw-text-[#27BE63]" />
        </span>
      ),
    },
  ];

  const data = useMemo(
    () =>
      activeData?.getUserType?.objects?.map(
        ({ id, fullName, email, dateJoined, sellerProfile }) => {
          return {
            key: id,
            name: fullName,
            email_address: email,
            date_joined: dateJoined,
            country: sellerProfile.lga,
            state: sellerProfile.state,
            amount_sold: 0,
          };
        }
      ),
    [activeData]
  );

  const redFlagged = useMemo(
    () =>
      redFlaggedData?.getUserType?.objects?.map(
        ({ id, fullName, email, dateJoined, sellerProfile }) => {
          return {
            key: id,
            name: fullName,
            email_address: email,
            date_joined: dateJoined,
            country: sellerProfile.lga,
            state: sellerProfile.state,
            amount_sold: 0,
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
        header="Vendors List"
        buttonPath="#"
        buttonText="Send Bulk Email"
      />

      <div className=" tw-flex tw-gap-x-2 tw-mt-6 tw-items-center ">
        <span className=" tw-opacity-70">Sort By:</span>
        <select
          value="all"
          className=" tw-rounded tw-border tw-border-[#D7DCE0] tw-py-3 tw-outline-none tw-cursor-pointer"
        >
          <option value="all">All Categories</option>
          <option value="fashion">Fashion</option>
          <option value="auto">Automobiles</option>
        </select>
      </div>
      <div className="tw-mt-6">
        <Search
          value={searchValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchValue(e.target.value);
          }}
          placeholder="Search by Store name"
        />
      </div>

      <div className=" tw-pt-4">
        <Tabs
          animated
          tabBarStyle={{ borderColor: "red" }}
          className="adminTab"
          activeKey={activeKey}
          onTabClick={(key) => setActiveKey(key)}
        >
          <TabPane tab="Active Vendors" key="1">
            <AdminTable data={data} columns={columns} />
          </TabPane>
          <TabPane tab="Red-flagged Vendors" key="2">
            <AdminTable data={redFlagged} columns={columns} />
          </TabPane>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default Vendors;
