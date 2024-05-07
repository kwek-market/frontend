import BreadCrumbs from "@/components/admin/breadcrumbs";
import CustomerDetail from "@/components/admin/customers/customer-detail";
import { FormHead } from "@/components/admin/form";
import AdminTable from "@/components/table";
import { AdminLayout } from "@/layouts";
import { RootState } from "@/store/rootReducer";
import { Tabs } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import StarRatingComponent from "react-star-rating-component";
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
            <h1 className='tw-mb-0 tw-text-2xl tw-font-medium'>All Products</h1>
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

          <div className=' tw-grid tw-grid-cols-3 tw-gap-x-4 tw-pt-6'>
            {products?.map((product, index) => (
              <div key={product.id} className='tw-p-6 tw-shadow-cardShadow'>
                <div className=' tw-relative tw-h-56'>
                  <Image
                    layout='fill'
                    src={product?.image[0]?.imageUrl}
                    className='tw-object-cover'
                  />
                </div>

                <div className=' tw-pt-6 tw-flex tw-justify-between tw-gap-x-10 tw-items-center'>
                  <Link href={`/admin/products/${product.id}`}>
                    <a className=' tw-font-light tw-text-sm'>{product?.productTitle}</a>
                  </Link>
                  <div className=' tw-text-right'>
                    <p className=' tw-mb-0 tw-text-xl tw-font-semibold'>
                      ${product?.options[0]?.price ?? 0}
                    </p>
                    <p className=' tw-mb-0 tw-text-[#C7C0BF] tw-text-xs tw-font-medium tw-line-through'>
                      ${product?.options[0]?.discountedPrice ?? 0}
                    </p>
                  </div>
                </div>

                <div className=' tw-flex tw-justify-between tw-pt-5 tw-items-center'>
                  <StarRatingComponent
                    name='rate1'
                    starCount={5}
                    value={product?.productRating[0]?.rating}
                    editing={false}
                    emptyStarColor='#c4c4c4'
                    starColor='#FFC107'
                  />
                  <span className='tw-text-[#BFA5A3] tw-text-xs'>
                    ({product?.productRating[0]?.review ?? 0} reviews)
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className='tw-pt-4'>
            <Link href={"#"}>
              <a className=' tw-underline tw-text-[#009D19] '>View All Products</a>
            </Link>
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
