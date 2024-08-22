import { useSelector } from "react-redux";
import BreadCrumbs from "../../../components/admin/breadcrumbs";
import AdminTable from "../../../components/table";
import { useGetStateDeliveryFee } from "../../../hooks/admin/stateDeliveryFee";
import { AdminLayout } from "../../../layouts";
import { RootState } from "../../../store/rootReducer";

const StateDeliveryFee = () => {
  const token = useSelector((state: RootState) => state.user?.token);

  const { data, isLoading, error } = useGetStateDeliveryFee({ token });
  console.log("🚀 ~~ StateDeliveryFee ~~ data:", data);

  const stateDeliveryFee = data?.stateDeliveryFees;
  console.log("🚀 ~~ StateDeliveryFee ~~ stateDeliveryFee:", stateDeliveryFee);

  const columns = [
    {
      title: "No.",
      dataIndex: "no",
      key: "product",
      render: (product, data, index) => {
        return <div>{index + 1}</div>;
      },
    },

    {
      title: "State",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "NO of Cities",
      dataIndex: "deliveryFees",
      key: "no_of_cities",
      render: (deliveryFees, data, index) => {
        return <div>{deliveryFees?.length}</div>;
      },
    },
  ];

  return (
    <AdminLayout>
      <BreadCrumbs
        items={[
          { name: "Dashboard", path: "/admin/dashboard" },
          { name: "State Delivery Fee", path: "/admin/state-delivery-fee" },
        ]}
        header='State Delivery Fee'
        buttonPath='/admin/state-delivery-fee/update'
        buttonText='Update State Delivery Fee'
      />

      <div className=' tw-pt-4'>
        <AdminTable data={stateDeliveryFee} columns={columns} isLoading={isLoading} />
      </div>
    </AdminLayout>
  );
};

export default StateDeliveryFee;
