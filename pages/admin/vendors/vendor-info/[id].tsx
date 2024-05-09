import BreadCrumbs from "@/components/admin/breadcrumbs";
import CustomerDetail from "@/components/admin/customers/customer-detail";
import { FormHead } from "@/components/admin/form";
import AdminTable from "@/components/table";
import { AdminLayout } from "@/layouts";
import { RootState } from "@/store/rootReducer";
import { Tabs } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import Load from "../../../../components/Loader/Loader";
import { PAGE_SIZE } from "../../../../constants/constants";
import { useGetCustomerOrders, useGetCustomerTotalOrders } from "../../../../hooks/admin/customers";
import {
  useGetCustomerAverageOrder,
  useGetCustomerTotalExpense,
} from "../../../../hooks/admin/dashboard";
import { userGetUserById } from "../../../../hooks/admin/user";
import { useFlagVendor } from "../../../../hooks/admin/vendors";
import useSellerProducts from "../../../../hooks/useSellerProducts";

const Customer = () => {
  const router = useRouter();
  const { TabPane } = Tabs;
  const [activeKey, setActiveKey] = useState("1");
  const [page, setPage] = useState(1);
  const [orderPage, setOrderPage] = useState(1);

  const customerId = router.query.id as string;

  const {
    user: { token },
  } = useSelector((state: RootState) => state);

  const {
    data: userData,
    isLoading: isUserLoading,
    error: userError,
  } = userGetUserById({ id: router.query.id as string, token });

  const {
    data: sellerProducts,
    isLoading: isLoadingSellers,
    error: sellerProductsError,
  } = useSellerProducts({ page, pageSize: PAGE_SIZE, token });

  const {
    data: customerOrders,
    isLoading: isLoadingCustomerOrders,
    error: customerError,
  } = useGetCustomerOrders({
    page,
    pageSize: 5,
    id: router.query.id as string,
    token,
  });

  const { data: customerTotalOrder, isLoading: isLoadingCustomerTotalOrders } =
    useGetCustomerTotalOrders({ id: customerId, token });

  const { data: averageOrderValue, isLoading: isLoadingAverageOrderValue } =
    useGetCustomerAverageOrder({
      id: customerId,
      token,
    });

  const { data: customerTotalExpense, isLoading: isTotalExpenseLoading } =
    useGetCustomerTotalExpense({ id: customerId, token });

  const { mutate: flagVendor } = useFlagVendor();

  const columns = [
    {
      title: "Order Number",
      dataIndex: "orderId",
      key: "order_number",
      render: (order_number, object) => (
        <Link
          href={"/admin/customers/" + router.query?.id + "/order-detail/" + "order-" + object?.id}
        >
          <a className=' tw-text-black-kwek100'>{order_number}</a>
        </Link>
      ),
    },
    {
      title: "Order Date",
      dataIndex: "dateCreated",
      key: "order_date",
      render: (date, object) => <div className=''>{new Date(date).toDateString()}</div>,
    },
    {
      title: "No of Items",
      dataIndex: "cartItems",
      key: "no_of_items",
      render: (cartItems, object) => <div className=''>{cartItems?.length}</div>,
    },
    {
      title: "Status",
      dataIndex: "deliveryStatus",
      key: "status",
    },
    {
      title: "Amount",
      dataIndex: "orderPriceTotal",
      key: "amount",
      render: (amount, object) => <div className=''>${amount}</div>,
    },
    {
      title: "Payment",
      dataIndex: "payment",
      key: "payment",
      render: (paid, object) => <div className=''>{paid ? "Paid" : "Not Paid"}</div>,
    },
  ];

  const vendor = userData?.getUserById;
  const totalOrders = customerTotalOrder?.getCustomerOrders;
  const avgOrderValue = averageOrderValue?.getCustomerAverageOrder;
  const totalExpense = customerTotalExpense?.getCustomerTotalExpense;

  const products = sellerProducts?.getSellerProducts?.objects;

  const orders = customerOrders?.getCustomerOrdersPaginated?.objects;

  const order = {};

  return (
    <AdminLayout>
      <BreadCrumbs
        items={[
          { name: "Dashboard", path: "/admin/dashboard" },
          { name: "Vendors", path: "/admin/vendors/vendor-list" },

          {
            name: router.query?.id as string,
            path: "/admin/vendors/vendor-info/" + router.query?.id,
          },
        ]}
        header='Vendor Info'
        buttonPath=''
        buttonText={vendor?.isFlagged ? "Activate Vendor" : "Red-flag vendor"}
        buttonClassName={vendor?.isFlagged ? "tw-bg-green-700" : "tw-bg-red-700"}
        onClickButton={() => {
          if (vendor.isFlagged) {
            flagVendor({ id: router.query.id as string, redFlaggedVendor: false });
            return;
          }

          flagVendor({ id: router.query.id as string, redFlaggedVendor: true });
        }}
        buttonType='button'
      />

      <div className=' tw-mt-12 tw-font-poppins'>
        {isUserLoading ? <Load className='h-36 w-full' /> : null}

        {userData ? (
          <CustomerDetail
            image='/images/pp.png'
            name={userData?.getUserById?.fullName}
            email={userData?.getUserById?.email}
            phone={userData?.getUserById?.phoneNumber}
          />
        ) : null}

        <div className=' tw-pt-6  tw-w-[50vw] tw-grid tw-grid-cols-3 tw-gap-x-4'>
          {isLoadingCustomerTotalOrders ? <Load className='tw-h-32' /> : null}
          {totalOrders ? (
            <div className=' tw-py-6 tw-px-4 tw-bg-[#FAFBFF] tw-border tw-border-[#D7DCE0] tw-rounded-[20px] tw-font-dm-sans'>
              <p className=' tw-mb-0 tw-text-sm tw-text-[#3A434B]'>Total No of Orders</p>
              <p className='tw-mb-0 tw-pt-2 tw-text-[#0D0F11] tw-font-bold tw-text-2xl'>
                {totalOrders?.totalOrders}
              </p>
            </div>
          ) : null}

          {isLoadingAverageOrderValue ? <Load className='tw-h-32' /> : null}
          {avgOrderValue ? (
            <div className=' tw-py-6 tw-px-4 tw-bg-[#FAFBFF] tw-border tw-border-[#D7DCE0] tw-rounded-[20px] tw-font-dm-sans'>
              <p className=' tw-mb-0 tw-text-sm tw-text-[#3A434B]'>Average Order Value</p>
              <p className='tw-mb-0 tw-pt-2 tw-text-[#0D0F11] tw-font-bold tw-text-2xl'>
                {avgOrderValue?.averageOrderValue}
              </p>
            </div>
          ) : null}

          <div className=' tw-py-6 tw-px-4 tw-bg-[#FAFBFF] tw-border tw-border-[#D7DCE0] tw-rounded-[20px] tw-font-dm-sans'>
            <p className=' tw-mb-0 tw-text-sm tw-text-[#3A434B]'>Total Spent</p>
            <p className='tw-mb-0 tw-pt-2 tw-text-[#0D0F11] tw-font-bold tw-text-2xl'>
              {totalExpense?.totalSpent}
            </p>
          </div>
        </div>

        <div className=' tw-mt-10'>
          <div className=' tw-flex tw-justify-between tw-items-center '>
            <h1 className='tw-mb-0 tw-text-2xl tw-font-medium'>Seller Profile</h1>
            {/* <div className=' tw-flex tw-gap-x-2  tw-items-center '>
              <span className=' tw-opacity-70'>Sort By:</span>
              <select
                value='all'
                className=' tw-rounded tw-border tw-border-[#D7DCE0] tw-py-3 tw-outline-none tw-cursor-pointer'
              >
                <option value='all'>All Categories</option>
                <option value='fashion'>Fashion</option>
                <option value='auto'>Automobiles</option>
              </select>
            </div> */}
          </div>

          <div className=' tw-gap-x-8 tw-text-[#574240] tw-mt-8'>
            <div className='tw-grid-cols-2 tw-grid tw-bg-review tw-rounded-2xl tw-p-8 tw-gap-6'>
              <div className=' tw-bg-white-100 tw-p-6 tw-rounded-[10px] tw-mt-6'>
                <p className=' tw-font-semibold tw-mb-0'>Registration details</p>
                <div className='tw-mt-2 tw-space-y-2'>
                  <div className=''>
                    <p className=' tw-mb-0 tw-font-medium tw-text-opacity-70 tw-pt-2'>
                      State of Origin:
                    </p>
                    <p className=' tw-mb-0 tw-text-opacity-70 tw-pt-0.5'>
                      {vendor?.sellerProfile[0]?.state}
                    </p>
                  </div>

                  <div className=''>
                    <p className=' tw-mb-0 tw-font-medium tw-text-opacity-70 tw-pt-2'>City:</p>
                    <p className=' tw-mb-0 tw-text-opacity-70 tw-pt-0.5'>
                      {vendor?.sellerProfile[0]?.city}
                    </p>
                  </div>

                  <div className=''>
                    <p className=' tw-mb-0 tw-font-medium tw-text-opacity-70 tw-pt-2'>LGA:</p>
                    <p className=' tw-mb-0 tw-text-opacity-70 tw-pt-0.5'>
                      {vendor?.sellerProfile[0]?.lga}
                    </p>
                  </div>

                  <div className=''>
                    <p className=' tw-mb-0 tw-font-medium tw-text-opacity-70 tw-pt-2'>
                      Date applied / Joined:
                    </p>
                    <p className=' tw-mb-0 tw-text-opacity-70 tw-pt-0.5'>
                      {new Date(vendor?.sellerProfile[0]?.date).toDateString()}
                    </p>
                  </div>
                </div>
              </div>

              <div className=' tw-bg-white-100 tw-p-6 tw-rounded-[10px] tw-mt-6'>
                <p className=' tw-font-semibold tw-mb-0'>Shop Details</p>
                <div className='tw-mt-2 tw-space-y-2'>
                  <div className=''>
                    <p className=' tw-mb-0 tw-font-medium tw-text-opacity-70 tw-pt-2'>Shop Name:</p>
                    <p className=' tw-mb-0 tw-text-opacity-70 tw-pt-0.5'>
                      {vendor?.sellerProfile[0]?.shopName}
                    </p>
                  </div>

                  <div className=''>
                    <p className=' tw-mb-0 tw-font-medium tw-text-opacity-70 tw-pt-2'>
                      Shop Address:
                    </p>
                    <p className=' tw-mb-0 tw-text-opacity-70 tw-pt-0.5'>
                      {vendor?.sellerProfile[0]?.shopAddress}
                    </p>
                  </div>

                  <div className=''>
                    <p className=' tw-mb-0 tw-font-medium tw-text-opacity-70 tw-pt-2'>Shop Url:</p>
                    <p className=' tw-mb-0 tw-text-opacity-70 tw-pt-0.5'>
                      {vendor?.sellerProfile[0]?.shopUrl}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=' tw-py-4'>
          <Tabs
            animated
            tabBarStyle={{ borderColor: "red" }}
            className='adminTab'
            activeKey={activeKey}
            onTabClick={key => setActiveKey(key)}
          >
            <TabPane tab='Order History' key='1'>
              <AdminTable
                data={orders}
                columns={columns}
                isLoading={isLoadingCustomerOrders}
                numberOfPages={customerOrders?.getCustomerOrdersPaginated.pages}
                page={customerOrders?.getCustomerOrdersPaginated.page}
                goToNext={() => {
                  if (customerOrders?.getCustomerOrdersPaginated?.hasNext)
                    setOrderPage(orderPage + 1);
                }}
                goToPrev={() => {
                  if (customerOrders?.getCustomerOrdersPaginated?.hasPrev)
                    setOrderPage(orderPage - 1);
                }}
                goToPage={page => {
                  setOrderPage(page);
                }}
              />
            </TabPane>
          </Tabs>
        </div>

        {/* <Link href={"#"}>
          <a className=' tw-underline tw-text-[#009D19] '>View All 17 Orders</a>
        </Link> */}

        <FormHead>Addresses</FormHead>
        <div className=' tw-pt-6 tw-space-y-6'>
          {vendor?.sellerProfile?.map((store, index) => (
            <div key={store?.id}>
              <p className='tw-mb-0 tw-font-medium'>{store?.shopName}</p>
              <p className='tw-mb-0 tw-font-light tw-pt-4 tw-text-[#3A434B]'>
                {store?.shopAddress}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Customer;
