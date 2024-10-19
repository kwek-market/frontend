const BuyerPolicy = function () {
  return (
    <div className='tw-bg-gray-50 tw-min-h-screen tw-p-2 lg:tw-p-6'>
      <div className='tw-max-w-4xl tw-mx-auto tw-bg-white tw-rounded-lg'>
        <h1 className='tw-text-xl lg:tw-text-3xl tw-font-bold tw-text-gray-800 tw-mb-4'>
          Kwekmarket Buyer Policy
        </h1>
        <p className='tw-text-gray-600 tw-mb-4'>
          <strong>Effective Date:</strong> October 2024
        </p>
        <p className='tw-text-gray-600 tw-mb-6'>
          Welcome to Kwekmarket, where you can discover and purchase unique goods directly from
          trusted vendors within your city. We are currently focusing on local transactions and
          deliveries within your area, but we aim to expand to long-distance deals soon, with your
          partnership. Whether you’re searching for handmade, vintage goods, or other items listed
          on our platform, we are committed to providing you with a smooth and positive shopping
          experience.
        </p>
        <p className='tw-text-gray-600 tw-mb-6'>
          Please review this Buyer Policy, as it outlines your rights and responsibilities when
          shopping on Kwekmarket. By using our platform, you agree to this policy.
        </p>

        <hr className='tw-my-6' />

        {/* Section 1: Creating a Kwekmarket Account */}
        <div className='tw-mb-8'>
          <h2 className='tw-text-xl lg:tw-text-2xl tw-font-semibold tw-text-gray-700 tw-mb-3'>
            1. Creating a Kwekmarket Account
          </h2>
          <p className='tw-text-gray-600'>
            To make purchases on Kwekmarket, you need to create an account. This allows us to offer
            you the best possible shopping experience, including efficient communication and
            tracking of your orders.
          </p>
        </div>

        {/* Section 2: Purchasing on Kwekmarket */}
        <div className='tw-mb-8'>
          <h2 className='tw-text-xl lg:tw-text-2xl tw-font-semibold tw-text-gray-700 tw-mb-3'>
            2. Purchasing on Kwekmarket
          </h2>
          <p className='tw-text-gray-600 tw-mb-2'>
            When you purchase from a vendor on Kwekmarket, you are supporting an independent
            business. Each vendor offers unique items and policies, but to ensure timely delivery
            and secure transactions, Kwekmarket manages all payments and deliveries through our
            centralized system. By making a purchase, you agree to:
          </p>
          <ul className='tw-list-disc tw-list-inside tw-text-gray-600'>
            <li>Read the item description and any shop policies before making a purchase.</li>
            <li>Submit the appropriate payment using Kwekmarket’s provided payment system.</li>
            <li>Provide accurate shipping information to facilitate delivery.</li>
          </ul>
          <p className='tw-text-gray-600 tw-mt-2'>
            We handle all logistics and delivery services, ensuring a seamless experience for you.
            For any issues or concerns, refer to our Dispute and Resolution Process outlined below.
          </p>
        </div>

        {/* Section 3: Reviews and Feedback */}
        <div className='tw-mb-8'>
          <h2 className='tw-text-xl lg:tw-text-2xl tw-font-semibold tw-text-gray-700 tw-mb-3'>
            3. Reviews and Feedback
          </h2>
          <p className='tw-text-gray-600 tw-mb-2'>
            After receiving your item(s), you have the opportunity to leave a review, including a
            one to five-star rating and a photograph. Reviews help future buyers make informed
            decisions and allow vendors to build a strong reputation. When leaving a review, you
            agree that your content must not:
          </p>
          <ul className='tw-list-disc tw-list-inside tw-text-gray-600'>
            <li>Contain private or sensitive information.</li>
            <li>Include offensive, racist, or harassing language or imagery.</li>
            <li>Make false or prohibited claims.</li>
            <li>Advertise unrelated products or services.</li>
            <li>
              Criticize aspects outside the vendor’s control, such as shipping delays caused by a
              third-party carrier.
            </li>
          </ul>
          <p className='tw-text-gray-600 tw-mt-2'>
            We value honest feedback, but reviews must maintain the integrity of our platform.
          </p>
        </div>

        {/* Section 4: Requesting a Cancellation */}
        <div className='tw-mb-8'>
          <h2 className='tw-text-xl lg:tw-text-2xl tw-font-semibold tw-text-gray-700 tw-mb-3'>
            4. Requesting a Cancellation
          </h2>
          <p className='tw-text-gray-600'>
            Only the Kwekmarket admin team manages transaction cancellations. If you wish to cancel
            an order, please contact our support team within 24 hours of placing your order. We will
            communicate with the vendor on your behalf to facilitate the cancellation process.
          </p>
        </div>

        {/* Section 5: Returning an Item */}
        <div className='tw-mb-8'>
          <h2 className='tw-text-xl lg:tw-text-2xl tw-font-semibold tw-text-gray-700 tw-mb-3'>
            5. Returning an Item
          </h2>
          <p className='tw-text-gray-600'>
            Each vendor has their own return policy, which should be outlined on their shop page.
            Not all vendors accept returns, so it’s essential to check the policy before making a
            purchase. If an item is significantly different from what was described or arrives
            damaged, Kwekmarket’s Return & Replacement Policy allows you to request a refund.
          </p>
        </div>

        {/* Section 6: Dispute and Resolution Process */}
        <div className='tw-mb-8'>
          <h2 className='tw-text-xl lg:tw-text-2xl tw-font-semibold tw-text-gray-700 tw-mb-3'>
            6. Dispute and Resolution Process
          </h2>
          <p className='tw-text-gray-600'>
            Kwekmarket handles all disputes and cancellations within 7 working days. To report an
            issue, you must notify us within 24 hours of receiving your item. We will mediate
            between you and the vendor to resolve any conflicts.
          </p>
        </div>

        {/* Note */}
        <div className='tw-mt-8'>
          <p className='tw-text-gray-600 tw-italic'>
            Note: This policy is subject to change. We will notify you of any updates, and continued
            use of the platform after changes have been made will constitute your acceptance of the
            new policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuyerPolicy;
