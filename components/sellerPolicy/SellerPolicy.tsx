const SellerPolicy = function () {
  return (
    <div className='tw-bg-gray-50 tw-min-h-screen tw-p-6'>
      <div className='tw-max-w-4xl tw-mx-auto tw-bg-white tw-shadow-lg tw-rounded-lg tw-p-8'>
        <h1 className='tw-text-3xl tw-font-bold tw-text-gray-800 tw-mb-4'>
          Kwekmarket Seller's Policy
        </h1>
        <p className='tw-text-gray-600 tw-mb-4'>
          <strong>Effective Date:</strong> October 2024
        </p>
        <p className='tw-text-gray-600 tw-mb-6'>
          Notice of Adjustment: This policy is subject to change over time, and we will always
          update you with any new changes.
        </p>
        <p className='tw-text-gray-600 tw-mb-6'>
          Kwekmarket is a marketplace where you can sell your products, vintage items, and craft
          supplies directly to buyers within the city where you have your shop. Currently, we may
          not be able to process long-distance deals, but we hope to make them happen with your
          partnership. Our goal is to ensure that you and your buyers have a positive experience on
          Kwekmarket. Please read on to find out more about your rights and what is expected of you
          as a vendor.
        </p>

        <hr className='tw-my-6' />

        {/* Section 1: What Can I Sell as a Vendor? */}
        <div className='tw-mb-8'>
          <h2 className='tw-text-2xl tw-font-semibold tw-text-gray-700 tw-mb-3'>
            1. What Can I Sell as a Vendor?
          </h2>
          <p className='tw-text-gray-600 tw-mb-2'>
            Kwekmarket is a unique marketplace designed to give you the best experience possible.
            Buyers come to purchase items they find in your registered shop with us. You can share
            your shop link with new and existing customers to showcase your old and new arrivals.
            Items listed for sale on Kwekmarket may include handmade goods, vintage items, craft
            supplies, and any products that do not violate our policies.
          </p>
          <ul className='tw-list-disc tw-list-inside tw-text-gray-600'>
            <li>Handmade items must be made and/or designed by you, the vendor.</li>
            <li>
              Use your own photographs—not stock photos, artistic renderings, or images used by
              other sellers or sites.
            </li>
            <li>Ensure that your products are well-presented when listed to attract customers.</li>
            <li>All listings are available for purchase at a set price.</li>
          </ul>
        </div>

        {/* Section 2: What Can't Be Sold on Kwekmarket? */}
        <div className='tw-mb-8'>
          <h2 className='tw-text-2xl tw-font-semibold tw-text-gray-700 tw-mb-3'>
            2. What Can't Be Sold on Kwekmarket?
          </h2>
          <p className='tw-text-gray-600 tw-mb-2'>
            Even if they meet our marketplace criteria, prohibited items, services, and items that
            violate our intellectual property policies are not allowed to be sold on Kwekmarket.
            Some examples of prohibited items include:
          </p>
          <ul className='tw-list-disc tw-list-inside tw-text-gray-600'>
            <li>Illegal items (e.g., drugs, stolen goods)</li>
            <li>Hazardous materials (e.g., explosives, flammable items)</li>
            <li>Counterfeit items</li>
            <li>Items that violate intellectual property rights</li>
            <li>Adult content</li>
            <li>Products related to firearms or ammunition</li>
            <li>Items subject to recalls or government regulation</li>
          </ul>
          <p className='tw-text-gray-600 tw-mt-2'>
            Note: Listing fees are non-refundable. We may suspend or terminate your account for any
            violations, and you are still responsible for any outstanding fees on your account, as
            detailed in our Bill and Payment Policy.
          </p>
        </div>

        {/* Section 3: Be Honestly Transparent */}
        <div className='tw-mb-8'>
          <h2 className='tw-text-2xl tw-font-semibold tw-text-gray-700 tw-mb-3'>
            3. Be Honestly Transparent
          </h2>
          <p className='tw-text-gray-600 tw-mb-2'>
            On Kwekmarket, we value transparency. This means you must accurately represent yourself,
            your items, and your business. By selling on Kwekmarket, you agree to:
          </p>
          <ul className='tw-list-decimal tw-list-inside tw-text-gray-600'>
            <li>Provide honest and accurate information in your profile.</li>
            <li>Honor your shop's policies at all times.</li>
            <li>Accurately represent your items in listings and photographs.</li>
            <li>
              Respect the intellectual property of others. If you believe someone has violated your
              rights, you can report it directly to the Kwekmarket support team via email or by
              visiting our nearest office.
            </li>
            <li>Avoid fee avoidance practices.</li>
            <li>
              Do not create duplicate shops or manipulate clicks, carts, or sales for personal gain.
            </li>
            <li>Maintain competitive pricing to encourage sales.</li>
          </ul>
        </div>

        {/* Section 4: Communication */}
        <div className='tw-mb-8'>
          <h2 className='tw-text-2xl tw-font-semibold tw-text-gray-700 tw-mb-3'>
            4. Communication
          </h2>
          <p className='tw-text-gray-600'>
            Both vendors can only communicate with the admin for any inquiries or issues related to
            their account or listings.
          </p>
        </div>

        {/* Section 5: Fees Involved */}
        <div className='tw-mb-8'>
          <h2 className='tw-text-2xl tw-font-semibold tw-text-gray-700 tw-mb-3'>
            5. Fees Involved
          </h2>
          <ul className='tw-list-disc tw-list-inside tw-text-gray-600'>
            <li>Subscription fee for promotion.</li>
            <li>Delivery cost as provided by Kwekmarket.</li>
            <li>Service charges added to products upon listing.</li>
          </ul>
        </div>

        {/* Section 6: Vendor Withdrawals */}
        <div className='tw-mb-8'>
          <h2 className='tw-text-2xl tw-font-semibold tw-text-gray-700 tw-mb-3'>
            6. Vendor Withdrawals
          </h2>
          <p className='tw-text-gray-600'>
            Vendors can withdraw funds from their sales after three working days.
          </p>
        </div>

        {/* Notice of Adjustment */}
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

export default SellerPolicy;
