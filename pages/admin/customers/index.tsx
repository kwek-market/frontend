import Load from "@/components/Loader/Loader";
import BreadCrumbs from "@/components/admin/breadcrumbs";
import AdminTable from "@/components/table";
import { useGetCustomers } from "@/hooks/useGetCustomers";
import { AdminLayout } from "@/layouts";
import { RootState } from "@/store/rootReducer";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import { Tabs } from "antd";
import Link from "next/dist/client/link";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { PAGE_SIZE } from "../../../constants/constants";

const Customers = () => {
  const [activeKey, setActiveKey] = useState("1");
  const { TabPane } = Tabs;
  const {
    user: { token },
  } = useSelector((state: RootState) => state);

  const [page, setPage] = useState(1);

  const {
    data: activeCustomerData,
    error: acError,
    isLoading: acLoading,
  } = useGetCustomers({
    token,
    // seller: true,
    customer: true,
    // sellerIsRejected: false,
    active: true,
    // redFlagged: false,
    page,
    pageSize: PAGE_SIZE,
  });

  const {
    data: inactiveCustomerData,
    error: icError,
    isLoading: icLoading,
  } = useGetCustomers({
    token,
    // seller: false,
    customer: true,
    // sellerIsRejected: false,
    active: false,
    // redFlagged: false,
    page,
    pageSize: PAGE_SIZE,
  });

  console.log("ac data: ", activeCustomerData);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name: string, { key }) => (
        <Link href={"/admin/customers/" + key}>
          <a className=" tw-text-black-kwek100">{key}</a>
        </Link>
      ),
    },
    {
      title: "Email Address",
      dataIndex: "email_address",
      key: "email_address",
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
      title: "Amount Spent",
      dataIndex: "amount_spent",
      key: "amount_spent",
    },
    {
      title: "",
      key: "action",
      render: (text, record) => (
        <span>
          <EllipsisVerticalIcon className="tw-h-5 tw-w-5 tw-text-[#27BE63]" />
        </span>
      ),
    },
  ];

  const data = useMemo(
    () =>
      activeCustomerData?.getUserType?.objects?.map((d) => {
        return {
          key: d.id,
          name: d.fullName,
          email_address: d.email,
          date_joined: new Intl.DateTimeFormat("en-US").format(
            new Date(d.dateJoined)
          ),
          country: d.billingSet.city,
          state: d.billingSet.state,
          amount_spent: "N13,873.74",
        };
      }),
    [activeCustomerData]
  );

  const inactiveData = useMemo(
    () =>
      inactiveCustomerData?.getUserType?.objects?.map((d) => {
        return {
          key: d.id,
          name: d.fullName,
          email_address: d.email,
          date_joined: new Intl.DateTimeFormat("en-US").format(
            new Date(d.dateJoined)
          ),
          country: d.billingSet.city,
          state: d.billingSet.state,
          amount_spent: "N13,873.74",
        };
      }),
    [inactiveCustomerData]
  );

  return (
    <AdminLayout>
      <BreadCrumbs
        items={[
          { name: "Dashboard", path: "/admin/dashboard" },
          { name: "Customers", path: "/admin/customers" },
        ]}
        header="Customers"
        buttonPath="#"
        buttonText="Send Bulk Email"
      />

      <div className=" tw-pt-4">
        <Tabs
          animated
          tabBarStyle={{ borderColor: "red" }}
          className="adminTab"
          activeKey={activeKey}
          onTabClick={(key) => setActiveKey(key)}
        >
          <TabPane tab="Active" key="1">
            {acLoading ? (
              <Load />
            ) : (
              <AdminTable
                data={data}
                columns={columns}
                numberOfPages={activeCustomerData?.getUserType.pages}
                page={activeCustomerData?.getUserType.page}
                goToNext={() => {
                  if (activeCustomerData?.getUserType?.hasNext)
                    setPage(page + 1);
                }}
                goToPrev={() => {
                  if (activeCustomerData?.getUserType?.hasPrev)
                    setPage(page - 1);
                }}
                goToPage={(page) => {
                  setPage(page);
                }}
              />
            )}
          </TabPane>
          <TabPane tab="Inactive" key="2">
            {icLoading ? (
              <Load />
            ) : (
              <AdminTable
                data={inactiveData}
                columns={columns}
                numberOfPages={activeCustomerData?.getUserType.pages}
                page={activeCustomerData?.getUserType.page}
                goToNext={() => {
                  if (activeCustomerData?.getUserType?.hasNext)
                    setPage(page + 1);
                }}
                goToPrev={() => {
                  if (activeCustomerData?.getUserType?.hasPrev)
                    setPage(page - 1);
                }}
                goToPage={(page) => {
                  setPage(page);
                }}
              />
            )}
          </TabPane>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default Customers;
