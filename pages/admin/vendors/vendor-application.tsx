import Load from "@/components/Loader/Loader";
import BreadCrumbs from "@/components/admin/breadcrumbs";
import AdminTable from "@/components/table";
import { useCompleteSeller, useGetSellers, useRejectSeller } from "@/hooks/admin/vendors";
import { AdminLayout } from "@/layouts";
import { RootState } from "@/store/rootReducer";
import { Tabs } from "antd";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { PAGE_SIZE } from "../../../constants/constants";

const VendorApplications = () => {
  const [activeKey, setActiveKey] = useState("1");
  const { TabPane } = Tabs;
  const [page, setPage] = useState(1);
  const {
    user: { token },
  } = useSelector((state: RootState) => state);

  const { data: getVendorsData, isLoading: isLoadingSellers } = useGetSellers({
    token,
    seller: true,
    customer: false,
    sellerIsRejected: false,
    active: true,
    redFlagged: false,
    page,
    pageSize: PAGE_SIZE,
  });
  const { data: rejectedVendors, isLoading: isLoadingRejectedSellers } = useGetSellers({
    token,
    seller: true,
    customer: false,
    sellerIsRejected: true,
    active: true,
    redFlagged: false,
    page,
    pageSize: PAGE_SIZE,
  });

  const { mutate: acceptVendor } = useCompleteSeller();
  const { mutate: rejectVendor } = useRejectSeller();

  function decision(email: string) {
    acceptVendor({ email });
  }

  function rejectSeller(email: string) {
    console.log("🚀 ~~ rejectSeller ~~ email:", email);

    rejectVendor({ email });
  }

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name: string, object) => (
        <Link href={"/admin/vendors/vendor-info/" + object.id}>
          <a className=' tw-text-black-kwek100'>{name}</a>
        </Link>
      ),
    },
    {
      title: "Email Address",
      dataIndex: "email_address",
      key: "email_address",
    },
    {
      title: "Phone Number",
      dataIndex: "phone_number",
      key: "phone_number",
    },
    {
      title: "Date Applied",
      dataIndex: "date_applied",
      key: "date_applied",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
      render: (name: string, objects) => <div className=''>Nigeria</div>,
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state",
      render: (name: string, objects) => <div className=''>{name}</div>,
    },
    {
      title: "Decision",
      dataIndex: "email_address",
      key: "decision",
      render: (email_address: string, object) => {
        return (
          <div className=' tw-flex tw-gap-x-2'>
            <button
              onClick={() => decision(email_address)}
              className=' tw-py-[5px] tw-px-[10px] tw-text-white-100 tw-text-sm tw-font-medium tw-rounded-[10px] tw-bg-[#009D19]'
            >
              Accept
            </button>
            <button
              onClick={() => rejectSeller(email_address)}
              className=' tw-py-[5px] tw-px-[10px] tw-text-white-100 tw-text-sm tw-font-medium tw-rounded-[10px] tw-bg-[#AF1328]'
            >
              Reject
            </button>
          </div>
        );
      },
    },
  ];

  const data = useMemo(
    () =>
      getVendorsData?.getUserType?.objects?.map(({ id, fullName, email, sellerProfile }) => {
        return {
          id,
          key: id,
          name: fullName,
          email_address: email,
          date_applied: new Date(sellerProfile[0]?.date).toDateString(),
          country: sellerProfile[0]?.lga,
          state: sellerProfile[0]?.state,
          phone_number: sellerProfile[0]?.phoneNumber,
        };
      }),
    [getVendorsData]
  );

  const rejected = useMemo(
    () =>
      rejectedVendors?.getUserType?.objects?.map(({ id, fullName, email, sellerProfile }) => {
        return {
          id,
          key: id,
          name: fullName,
          email_address: email,
          date_applied: new Date(sellerProfile[0]?.date).toDateString(),
          country: sellerProfile[0]?.lga,
          state: sellerProfile[0]?.state,
          phone_number: sellerProfile[0]?.phoneNumber,
        };
      }),
    [rejectedVendors]
  );
  console.log("🚀 ~~ VendorApplications ~~ data:", data);

  return (
    <AdminLayout>
      <BreadCrumbs
        items={[
          { name: "Dashboard", path: "/admin/dashboard" },
          {
            name: "Vendor Application",
            path: "/admin/vendors/vendor-application",
          },
        ]}
        header='Vendors Application'
      />

      <div className=' tw-pt-4 tw-font-poppins'>
        <Tabs
          animated
          tabBarStyle={{ borderColor: "red" }}
          className='adminTab'
          activeKey={activeKey}
          onTabClick={key => setActiveKey(key)}
        >
          <TabPane tab='New Applications' key='1'>
            {data === null ? (
              <Load />
            ) : (
              <AdminTable
                data={data}
                columns={columns}
                isLoading={isLoadingSellers}
                numberOfPages={getVendorsData?.getUserType?.pages}
                page={getVendorsData?.getUserType?.page}
                goToNext={() => {
                  if (getVendorsData?.getUserType?.hasNext) setPage(page + 1);
                }}
                goToPrev={() => {
                  if (getVendorsData?.getUserType?.hasPrev) setPage(page - 1);
                }}
                goToPage={page => {
                  setPage(page);
                }}
              />
            )}
          </TabPane>
          <TabPane tab='Declined Applications' key='2'>
            <AdminTable
              data={rejected}
              columns={columns}
              isLoading={isLoadingRejectedSellers}
              numberOfPages={rejectedVendors?.getUserType?.pages}
              page={rejectedVendors?.getUserType.page}
              goToNext={() => {
                if (rejectedVendors?.getUserType?.hasNext) setPage(page + 1);
              }}
              goToPrev={() => {
                if (rejectedVendors?.getUserType?.hasPrev) setPage(page - 1);
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

export default VendorApplications;
