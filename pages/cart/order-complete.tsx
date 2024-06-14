import { MainLayout } from "@/layouts";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Load from "../../components/Loader/Loader";
import { useGetAllOrders } from "../../hooks/admin/orders";
import { RootState } from "../../store/rootReducer";

function OrderComplete() {
  const router = useRouter();
  const { orderId } = router.query;

  const {
    user: { token },
  } = useSelector((state: RootState) => state);

  const { data, isLoading, error } = useGetAllOrders({ search: orderId as string, token });

  const order = data?.allOrders?.objects[0];

  if (isLoading) {
    return (
      <MainLayout>
        <main className=''>
          <Load />
        </main>
      </MainLayout>
    );
  }

  if (!order) {
    return (
      <MainLayout>
        <main className=''>
          <p className='tw-text-2xl tw-font-semibold'>Order Not found</p>
        </main>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <main className='tw-my-10'>
        <section className='tw-flex tw-justify-center tw-items-center'>
          <div className='tw-mr-5 tw-relative tw-w-9 tw-h-9'>
            <Image src='/svg/check.svg' alt='green check mark' layout='fill' />
          </div>
          <div>
            <p className='tw-text-green-success tw-font-semibold tw-text-lg'>Successful!</p>
            <p className='tw-text-green-success tw-font-medium tw-text-base'>
              Order No.: <span className='tw-text-black-kwek100'>{orderId}</span>
            </p>
          </div>
        </section>

        <section className='tw-bg-white-100 tw-shadow-lg tw-mx-auto tw-w-[full] tw-p-5'>
          <p className='tw-font-semibold tw-text-xl tw-capitalize'>Next Steps</p>
          <ul className='tw-list-disc tw-px-5'>
            <li className='tw-font-medium tw-text-lg tw-capitalize'>Order confirmation</li>
            <ul className='tw-list-none'>
              <li className='tw-text-opacity-70 tw-text-gray-kwek900 tw-text-base'>
                Thank you for your order! Your purchase is confirmed and will be processed. You will
                receive a confirmation mail shortly
              </li>
            </ul>

            <li className='tw-font-medium tw-text-lg tw-capitalize tw-mt-3'>Order Summary</li>
            <ul className='tw-list-none'>
              <li className='tw-text-opacity-70 tw-text-gray-kwek900 tw-text-base'>
                Item(s) Purchased:{" "}
                <span className='tw-font-semibold'>{order?.cartItems?.length}</span>
              </li>
              <li className='tw-text-opacity-70 tw-text-gray-kwek900 tw-text-base'>
                Order Number: <span className='tw-font-semibold'>{orderId}</span>
              </li>
              <li className='tw-text-opacity-70 tw-text-gray-kwek900 tw-text-base'>
                Date of Purchase:{" "}
                <span className='tw-font-semibold'>
                  {new Date(order?.dateCreated).toDateString()}
                </span>
              </li>
              <li className='tw-text-opacity-70 tw-text-gray-kwek900 tw-text-base'>
                Total Amount: <span className='tw-font-semibold'>{order?.orderPrice}</span>
              </li>
            </ul>

            <li className='tw-font-medium tw-text-lg tw-capitalize tw-mt-3'>
              Estimated Delivery Date
            </li>
            <ul className='tw-list-none'>
              <li className='tw-text-opacity-70 tw-text-gray-kwek900 tw-text-base'>
                Your order is expected to arrive within the next{" "}
                <span className='tw-font-semibold'>24hrs</span>
              </li>
            </ul>

            <li className='tw-font-medium tw-text-lg tw-capitalize tw-mt-3'>
              Shipping Information
            </li>
            <ul className='tw-list-none'>
              <li className='tw-text-opacity-70 tw-text-gray-kwek900 tw-text-base'>
                Shipping Address:
                <span className='tw-font-semibold'>
                  {order?.doorStep?.address}, {order?.doorStep?.city}, {order?.doorStep?.state}
                </span>
              </li>
            </ul>

            <li className='tw-font-medium tw-text-lg tw-capitalize tw-mt-3'>Payment Information</li>
            <ul className='tw-list-none'>
              <li className='tw-text-opacity-70 tw-text-gray-kwek900 tw-text-base'>
                Payment Method:
                <span className='tw-font-semibold'>{order?.paymentMethod}</span>
              </li>
            </ul>

            <li className='tw-font-medium tw-text-lg tw-capitalize tw-mt-3'>
              Additional information
            </li>
            <ul className='tw-list-none'>
              <li className='tw-text-opacity-70 tw-text-gray-kwek900 tw-text-base'>
                You can track your order status through your account using the order number above.
              </li>
            </ul>
          </ul>
        </section>

        {/* <section className="tw-bg-white-100 tw-shadow-lg tw-mx-auto tw-w-[75%] tw-p-5 tw-mt-5">
          <p className="tw-font-semibold tw-text-xl tw-capitalize">
            Track your order
          </p>
          <ul className="tw-list-disc tw-px-5">
            <li className="tw-font-medium tw-text-lg tw-capitalize">
              confirmation
            </li>
            <ul className="tw-list-none">
              <li className="tw-text-opacity-70 tw-text-gray-kwek900 tw-text-base">
                Congratulations! Your order was successfully submitted. A
                confirmation email has just been sent to you and our Customer
                Service may contact you shortly to verify your order.
              </li>
            </ul>
            <li className="tw-font-medium tw-text-lg tw-capitalize tw-mt-3">
              shipping
            </li>
            <ul className="tw-list-none">
              <li className="tw-text-opacity-70 tw-text-gray-kwek900 tw-text-base">
                You will receive an update about your order when it has been
                shipped.
              </li>
            </ul>
            <li className="tw-font-medium tw-text-lg tw-capitalize tw-mt-3">
              My Account
            </li>
            <ul className="tw-list-none">
              <li className="tw-text-opacity-70 tw-text-gray-kwek900 tw-text-base">
                You can follow the status of your order by clicking on ‘My
                orders’ in your account page.
              </li>
            </ul>
          </ul>
        </section> */}
      </main>
    </MainLayout>
  );
}

export default OrderComplete;
