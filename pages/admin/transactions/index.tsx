import BreadCrumbs from "@/components/admin/breadcrumbs";
import Search from "@/components/admin/search";
import AdminTable from "@/components/table";
import { AdminLayout } from "@/layouts";
import { Tabs } from "antd";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDebounce } from "use-debounce";
import { PAGE_SIZE } from "../../../constants/constants";
import {
  useGetRefundRequests,
  useGetRefunds,
  useGetWalletTransactions,
} from "../../../hooks/admin/transactions";
import { RootState } from "../../../store/rootReducer";

const Transactions = () => {
  const [activeKey, setActiveKey] = useState("1");
  const { TabPane } = Tabs;

  const { token } = useSelector((state: RootState) => state.user);

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [searchDebouncedValue] = useDebounce(search, 600);

  const { data, isLoading, error } = useGetWalletTransactions({
    page,
    pageSize: PAGE_SIZE,
    search: searchDebouncedValue,
    token,
    sortBy: "-date_created",
  });

  const { data: refundRequestsData, isLoading: isLoadingRefundRequests } = useGetRefundRequests({
    page,
    pageSize: PAGE_SIZE,
    token,
  });

  const { data: refundsData, isLoading: isLoadingRefunds } = useGetRefunds({
    page,
    pageSize: PAGE_SIZE,
    token,
  });

  const transactions = data?.getWalletTransactions?.objects;
  const refundRequests = refundRequestsData?.getRefundRequests?.objects;
  const refunds = refundsData?.getRefunds?.objects;

  const columns = [
    {
      title: "Transaction ID ",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Owner",
      dataIndex: "wallet",
      key: "owner",
      render: wallet => {
        return <div>{wallet?.owner?.fullName}</div>;
      },
    },
    {
      title: "Transaction Type",
      dataIndex: "transactionType",
      key: "transactionType",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Remark",
      dataIndex: "remark",
      key: "remark",
    },
    {
      title: "Date & Time",
      dataIndex: "date",
      key: "date",
      render(date) {
        return <div>{new Date(date).toLocaleString()}</div>;
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <button
          className={`${
            status ? "tw-bg-[#009D19]" : "tw-bg-[#AF1328]"
          } tw-text-white-100 tw-text-xs tw-font-medium tw-rounded-[10px] tw-w-full tw-py-1 tw-px-1`}
        >
          {status ? "SUCCESS" : "FAILED"}
        </button>
      ),
    },
  ];

  const refundColumns = [
    {
      title: "Order ID ",
      dataIndex: "order",
      key: "orderId",
      render: (order: any) => (
        <Link
          href={"/admin/customers/" + order?.user?.fullName + "/order-detail/" + order?.orderId}
          className={`${
            status.toLowerCase() === "success"
              ? "tw-bg-[#009D19]"
              : status.toLowerCase() === "failed"
              ? "tw-bg-[#AF1328]"
              : "tw-bg-[#FFC107]"
          } tw-text-white-100 tw-text-sm tw-font-medium tw-rounded-[10px] tw-w-full tw-py-2`}
        >
          {status}
        </Link>
      ),
    },
    {
      title: "Account Number",
      dataIndex: "accountNumber",
      key: "accountNumber",
    },
    {
      title: "Bank Name",
      dataIndex: "bankName",
      key: "bankName",
    },
    {
      title: "No Of Products",
      dataIndex: "numberOfProducts",
      key: "numberOfProducts",
    },
    {
      title: "Date Created",
      dataIndex: "dateCreated",
      key: "dateCreated",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <button
          className={`${
            status.toLowerCase() === "success"
              ? "tw-bg-[#009D19]"
              : status.toLowerCase() === "failed"
              ? "tw-bg-[#AF1328]"
              : "tw-bg-[#FFC107]"
          } tw-text-white-100 tw-text-sm tw-font-medium tw-rounded-[10px] tw-w-full tw-py-2`}
        >
          {status}
        </button>
      ),
    },
  ];

  return (
    <AdminLayout>
      <BreadCrumbs
        items={[
          { name: "Dashboard", path: "/admin/dashboard" },
          {
            name: "Transactions",
            path: "/admin/transactions",
          },
        ]}
        header='Wallet Transaction List'
      />

      {/* <div className=' tw-flex tw-gap-x-2 tw-mt-6 tw-items-center '>
        <span className=' tw-opacity-70'>Filter By:</span>
        <select
          value='all'
          className=' tw-rounded tw-border tw-border-[#D7DCE0] tw-py-3 tw-outline-none tw-cursor-pointer'
        >
          <option value='all'>All Wallet Transactions</option>
        </select>
      </div> */}
      <div className='tw-mt-6'>
        <Search
          onChange={value => {
            setSearch(value.target.value.trim());
          }}
          placeholder='Search by Transaction ID'
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
          <TabPane tab='Transaction Log' key='1'>
            <AdminTable
              data={transactions}
              columns={columns}
              isLoading={isLoading}
              numberOfPages={data?.getWalletTransactions.pages}
              page={data?.getWalletTransactions.page}
              goToNext={() => {
                if (data?.getWalletTransactions?.hasNext) setPage(page + 1);
              }}
              goToPrev={() => {
                if (data?.getWalletTransactions?.hasPrev) setPage(page - 1);
              }}
              goToPage={page => {
                setPage(page);
              }}
            />
          </TabPane>
          <TabPane tab='Refund Requests' key='2'>
            <AdminTable
              data={refundRequests}
              columns={refundColumns}
              isLoading={isLoadingRefundRequests}
              numberOfPages={refundRequestsData?.getRefundRequests?.pages}
              page={refundRequestsData?.getRefundRequests?.page}
              goToNext={() => {
                if (refundRequestsData?.getRefundRequests?.hasNext) setPage(page + 1);
              }}
              goToPrev={() => {
                if (refundRequestsData?.getRefundRequests?.hasPrev) setPage(page - 1);
              }}
              goToPage={page => {
                setPage(page);
              }}
            />
          </TabPane>
          <TabPane tab='Refund History' key='3'>
            <AdminTable
              data={refunds}
              columns={refundColumns}
              isLoading={isLoadingRefunds}
              numberOfPages={refundsData?.getRefunds?.pages}
              page={refundsData?.getRefunds?.page}
              goToNext={() => {
                if (refundsData?.getRefunds?.hasNext) setPage(page + 1);
              }}
              goToPrev={() => {
                if (refundsData?.getRefunds?.hasPrev) setPage(page - 1);
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

export default Transactions;
