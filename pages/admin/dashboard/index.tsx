import Load from "@/components/Loader/Loader";
import Card from "@/components/admin/dashboard/card";
import DashboardChart from "@/components/admin/dashboard/chart";

import ShoppingBagIcon from "@/components/icons/admin/dashboard/bag";
import CartIcon from "@/components/icons/admin/dashboard/cart";
import ProfitIcon from "@/components/icons/admin/dashboard/profit";
import DownloadIcon from "@/components/icons/admin/download";
import {
  useGetAverageOrderValues,
  useGetRecentTransactions,
  useGetTotalActiveCustomers,
  useGetTotalOrders,
  useGetTotalRevenue,
  useGetTotalSales,
} from "@/hooks/admin/dashboard";

import { AdminLayout } from "@/layouts";
import { RootState } from "@/store/rootReducer";
import { ChevronRightIcon } from "@heroicons/react/solid";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const {
    user: { token, user },
  } = useSelector((state: RootState) => state);

  const [currentMonth, setCurrentMonth] = useState("thisMonth");

  const [currentRange, setCurrentRange] = useState({
    start: getMonthDateRange(dayjs()).start,
    end: getMonthDateRange(dayjs()).end,
    last_date: dayjs(),
  });

  function getMonthDateRange(dayJsDate: dayjs.Dayjs) {
    // Current month
    const currentMonthStart = dayJsDate.startOf("month");
    const currentMonthEnd = dayJsDate.endOf("month");

    // Last month
    // const lastMonthStart = dayjs().subtract(1, "month").startOf("month");
    // const lastMonthEnd = dayjs().subtract(1, "month").endOf("month");

    return {
      start: currentMonthStart.format("YYYY-MM-DD"),
      end: currentMonthEnd.format("YYYY-MM-DD"),
    };
  }

  useEffect(() => {
    if (currentMonth === "lastMonth") {
      setCurrentRange({
        start: getMonthDateRange(dayjs().subtract(1, "month")).start,
        end: getMonthDateRange(dayjs().subtract(1, "month")).end,
        last_date: dayjs().subtract(2, "month"),
      });
    } else {
      setCurrentRange({
        start: getMonthDateRange(dayjs()).start,
        end: getMonthDateRange(dayjs()).end,
        last_date: dayjs().subtract(1, "month"),
      });
    }
  }, [currentMonth]);

  const { data: totalOrders, isFetching: isFetchingTotalOrders } = useGetTotalOrders({
    startDate: currentRange.start,
    endDate: currentRange.end,
    token,
  });

  const { data: totalSales, isFetching: isFetchingTotalSales } = useGetTotalSales({
    startDate: currentRange.start,
    endDate: currentRange.end,
    token,
  });

  const { data: averageOrderValue, isFetching: isFetchingAverageOrderValue } =
    useGetAverageOrderValues({
      startDate: currentRange.start,
      endDate: currentRange.end,
      token,
    });

  const { data: totalActiveCustomers, isFetching: isFetchingTotalActiveCustomers } =
    useGetTotalActiveCustomers({
      startDate: currentRange.start,
      endDate: currentRange.end,
      token,
    });

  const { data: totalRevenue, isFetching: isFetchingTotalRevenue } = useGetTotalRevenue({
    token,
  });

  console.log("totalRevenue", totalRevenue);

  const { data: recentTransactions, isFetching: isFetchingRecentTransactions } =
    useGetRecentTransactions({
      page: 1,
      pageSize: 5,
      token,
      startDate: currentRange.start,
      endDate: currentRange.end,
    });

  console.log(
    totalSales,
    averageOrderValue,
    "active customers: ",
    totalActiveCustomers,
    totalRevenue,
    "recent Transactions: ",
    recentTransactions,
    currentRange
  );

  return (
    <AdminLayout>
      <div className=' tw-font-poppins tw-flex tw-justify-between md:tw-flex-row tw-flex-col'>
        <h1 className=' tw-text-[2rem] tw-font-bold tw-mb-0'>Dashboard</h1>
        <div className=' tw-flex tw-gap-3 md:tw-gap-x-4 sm:tw-flex-row tw-flex-col'>
          <div>
            <select
              value={currentMonth}
              onChange={e => setCurrentMonth(e.target.value)}
              className=' tw-rounded tw-border tw-border-[#D7DCE0] tw-flex tw-gap-x-2 tw-p-3 tw-items-center tw-cursor-pointer tw-w-[8rem] tw-outline-none'
            >
              <option value='thisMonth'>This Month</option>
              <option value='lastMonth'>Last Month</option>
            </select>
          </div>
          <div>
            <button className=' tw-border tw-border-[#D4D4D8] tw-rounded-[5px] tw-bg-[#FFC107] tw-flex tw-gap-x-2 tw-p-3 tw-items-center'>
              <DownloadIcon /> Export PDF
            </button>
          </div>
        </div>
      </div>

      <div className=' tw-grid tw-grid-cols-1 md:tw-grid-cols-3 md:tw-gap-x-8 tw-gap-3 tw-mt-10'>
        <Card
          text={"TOTAL ORDERS"}
          subText={totalOrders?.getTotalOrders?.totalOrders}
          down={totalOrders?.getTotalOrders?.prevOrders > totalOrders?.getTotalOrders?.totalOrders}
          fig={totalOrders?.getTotalOrders?.percentage}
          lastText={`Compared to ${currentRange.last_date.format("MMMM")}`}
          Icon={CartIcon}
          loading={isFetchingTotalOrders}
        />
        <Card
          text={"TOTAL SALES"}
          subText={totalSales?.getTotalSales.totalSales}
          fig={totalSales?.getTotalSales?.percentage}
          lastText={`Compared to ${currentRange.last_date.format("MMMM")}`}
          Icon={ProfitIcon}
          down={totalSales?.getTotalSales?.prevSales > totalSales?.getTotalSales?.totalSales}
          loading={isFetchingTotalSales}
        />
        <Card
          text={"AVERAGE ORDER VALUE"}
          subText={averageOrderValue?.getAverageSales?.averageOrderValue}
          fig={averageOrderValue?.getAverageSales?.percentage}
          lastText={`Compared to ${currentRange.last_date.format("MMMM")}`}
          Icon={ShoppingBagIcon}
          loading={isFetchingAverageOrderValue}
          down={
            averageOrderValue?.getAverageSales?.prevAverageOrderValue >
            averageOrderValue?.getAverageSales?.averageOrderValue
          }
        />
      </div>
      <div className=' tw-flex tw-flex-col md:tw-flex-row  tw-pt-8 md:tw-gap-x-8 tw-gap-3 tw-font-poppins'>
        <div className=' tw-flex-[10] tw-rounded-[3px] tw-border tw-border-black-kwek100 tw-border-opacity-10 tw-p-10 tw-font-poppins'>
          <h2 className='tw-mb-0 tw-tracking-[1px] tw-text-lg tw-text-black-kwek100'>
            Total Revenue
          </h2>
          <p className='tw-mb-0 tw-font-medium tw-pt-3 tw-text-2xl'>
            {isFetchingTotalRevenue ? (
              <Load />
            ) : (
              "NGN" +
              " " +
              Number(
                Object.keys(totalRevenue?.getTotalRevenue || {}).reduce((prev, curr) => {
                  return totalRevenue?.getTotalRevenue[curr] + prev;
                }, 0)
              ).toLocaleString()
            )}
          </p>
          <div className=' tw-pt-2'>
            {isFetchingTotalRevenue ? (
              <Load />
            ) : (
              <DashboardChart
                data={Object?.keys(totalRevenue?.getTotalRevenue ?? []).map(
                  item => totalRevenue?.getTotalRevenue[item]
                )}
              />
            )}
          </div>
        </div>
        <div className=' tw-border tw-border-[#E4E4E7] tw-rounded-[10px] tw-flex-[5] tw-p-6'>
          <div className='tw-flex tw-w-full tw-justify-between tw-items-center tw-gap-2'>
            <h2 className='tw-mb-0 tw-tracking-[1px] tw-text-[#18181B]'>Active Customers</h2>
            <Link href='/admin/customers'>
              <a className=' tw-uppercase tw-text-xs tw-font-semibold tw-text-[#151518] tw-text-opacity-50 tw-tracking-[1px] tw-flex tw-items-center tw-gap-x-2'>
                See All customers <ChevronRightIcon width={20} height={20} />
              </a>
            </Link>
          </div>

          <div className=' tw-text-center tw-bg-[#FFF8E4] tw-py-4 tw-mt-4 tw-font-medium tw-text-[2rem]'>
            {isFetchingTotalActiveCustomers ? (
              <Load />
            ) : (
              totalActiveCustomers?.getTotalActiveCustomers?.activeCustomers
            )}
          </div>

          <p className=' tw-mb-0 tw-pt-3 tw-text-[#71717A] tw-text-sm'>Recent Transactions</p>
          <div className=' tw-space-y-4 tw-pt-4'>
            {isFetchingRecentTransactions ? <Load /> : null}

            {recentTransactions?.getRecentTransactions?.objects?.length === 0 ? (
              <p>No recent transactions</p>
            ) : (
              recentTransactions?.getRecentTransactions?.objects?.map(data => (
                <div key={data.id} className=' tw-flex tw-gap-x-3 tw-items-center'>
                  <div className=' flex-[1]'>
                    <Image
                      src='/images/pp.png'
                      alt='pp'
                      className='  tw-rounded-full tw-overflow-hidden'
                      height={36}
                      width={36}
                    />
                  </div>
                  <div className=' tw-flex-[9]'>
                    <div className=' tw-flex tw-justify-between'>
                      <span className=' tw-font-semibold tw-text-sm'>{data.user.fullName}</span>
                      <span className=' tw-text-sm'>N {data.orderPrice}</span>
                    </div>
                    <div className=' tw-text-sm tw-text-[#1D1616] tw-text-opacity-40 tw-flex tw-justify-between tw-pt-1'>
                      <span>{data.user.email}</span>
                      <span>{data.pickup.state}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
