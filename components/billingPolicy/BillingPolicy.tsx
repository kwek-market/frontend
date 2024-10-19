const BillingPolicy = function () {
  return (
    <div className='tw-bg-gray-50 tw-min-h-screen tw-p-2 lg:tw-p-6'>
      <div className='tw-max-w-4xl tw-mx-auto tw-bg-white tw-rounded-lg'>
        <h1 className='tw-text-3xl tw-font-bold tw-text-gray-800 tw-mb-4'>Billing Policy</h1>
        <p className='tw-text-gray-600 tw-mb-6'>
          At Kwekmarket, we are committed to providing an efficient platform for both buyers and
          vendors. Below is our billing policy outlining the processes related to promotions and
          withdrawals.
        </p>

        <hr className='tw-my-6' />

        {/* Section 1: User Categories */}
        <div className='tw-mb-8'>
          <h2 className='tw-text-xl lg:tw-text-2xl tw-font-semibold tw-text-gray-700 tw-mb-3'>
            1. User Categories
          </h2>

          <h3 className='tw-text-xl tw-font-medium tw-text-gray-600 tw-mb-2'>Buyers</h3>
          <p className='tw-text-gray-600 tw-mb-4'>
            Buyers can browse and purchase products listed by vendors without any subscription fees.
          </p>

          <h3 className='tw-text-xl tw-font-medium tw-text-gray-600 tw-mb-2'>Vendors</h3>
          <p className='tw-text-gray-600'>
            Vendors can list an unlimited number of products for free, with no restrictions on
            product changes. All vendors must undergo a verification process before their
            registration is confirmed, and all information submitted must be accurate.
          </p>
        </div>

        {/* Section 2: Promotion Services */}
        <div className='tw-mb-8'>
          <h2 className='tw-text-xl lg:tw-text-2xl tw-font-semibold tw-text-gray-700 tw-mb-3'>
            2. Promotion Services
          </h2>
          <p className='tw-text-gray-600'>
            Vendors have the option to promote their products at a rate of ₦1 per click. The
            promotion service is designed to enhance visibility and reach for vendor listings. Fees
            for promotions are deducted from the vendor's funded wallet on the platform.
          </p>
        </div>

        {/* Section 3: Payment Options */}
        <div className='tw-mb-8'>
          <h2 className='tw-text-xl lg:tw-text-2xl tw-font-semibold tw-text-gray-700 tw-mb-3'>
            3. Payment Options
          </h2>
          <p className='tw-text-gray-600'>
            Payment on Delivery: Buyers have the option to pay upon receiving their orders. Other
            payment methods may include credit/debit cards and mobile payments, offering flexibility
            for buyers.
          </p>
        </div>

        {/* Section 4: Withdrawal Process */}
        <div className='tw-mb-8'>
          <h2 className='tw-text-xl lg:tw-text-2xl tw-font-semibold tw-text-gray-700 tw-mb-3'>
            4. Withdrawal Process
          </h2>
          <p className='tw-text-gray-600 tw-mb-2'>
            Vendors can initiate withdrawals 3 days after the delivery of a particular product.
            There is no obligation for vendors to withdraw their funds; they may choose to keep
            their funds in their Kwekmarket wallet.
          </p>
          <p className='tw-text-gray-600'>
            Withdrawals must be initiated by the vendor and will reflect instantly unless delayed by
            a third-party payment gateway.
          </p>
        </div>

        {/* Note Section */}
        <div className='tw-mb-8'>
          <h2 className='tw-text-xl lg:tw-text-2xl tw-font-semibold tw-text-gray-700 tw-mb-3'>
            Note
          </h2>
          <p className='tw-text-gray-600'>
            The platform is accessible to all users without requiring a subscription.
          </p>
        </div>

        {/* Contact Information */}
        <div className='tw-mb-8'>
          <h2 className='tw-text-xl lg:tw-text-2xl tw-font-semibold tw-text-gray-700 tw-mb-3'>
            Contact Us
          </h2>
          <p className='tw-text-gray-600'>
            For any inquiries or support, please contact us at:
            <a href='mailto:support@kwekmarket.com' className='tw-text-blue-600 tw-underline'>
              support@kwekmarket.com
            </a>
          </p>
        </div>

        {/* Final Note */}
        <div className='tw-mt-8 tw-text-center'>
          <p className='tw-text-gray-600 tw-italic'>
            We appreciate your business and are dedicated to providing the best experience possible
            at Kwekmarket!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BillingPolicy;
