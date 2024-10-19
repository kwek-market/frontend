const ReturnPolicy = function () {
  return (
    <div className='tw-bg-gray-50 tw-min-h-screen tw-p-2 lg:tw-p-6'>
      <div className='tw-max-w-4xl tw-mx-auto tw-bg-white tw-rounded-lg'>
        <h1 className='tw-text-xl lg:tw-text-3xl tw-font-bold tw-text-gray-800 tw-mb-4'>
          Kwek Return Policy
        </h1>
        <p className='tw-text-gray-600 tw-mb-6'>
          <strong>Effective Date:</strong> October 2024
        </p>
        <p className='tw-text-gray-600 tw-mb-6'>
          At Kwekmarket, we strive to ensure your satisfaction with every purchase. If you are not
          completely satisfied with your order, we have established a clear return policy to
          facilitate a hassle-free return experience.
        </p>

        <hr className='tw-my-6' />

        {/* Section 1: Return Eligibility */}
        <div className='tw-mb-8'>
          <h2 className='tw-text-xl lg:tw-text-2xl tw-font-semibold tw-text-gray-700 tw-mb-3'>
            1. Return Eligibility
          </h2>
          <p className='tw-text-gray-600 tw-mb-2'>
            You may return items purchased from Kwekmarket under the following conditions:
          </p>
          <h3 className='tw-text-xl tw-font-medium tw-text-gray-600 tw-mb-2'>Eligible Items:</h3>
          <ul className='tw-list-disc tw-list-inside tw-text-gray-600 tw-mb-4'>
            <li>
              Items must be in their original condition, unused, and in the original packaging.
            </li>
            <li>Items must include all accessories, manuals, and documentation.</li>
          </ul>
          <h3 className='tw-text-xl tw-font-medium tw-text-gray-600 tw-mb-2'>
            Non-Eligible Items:
          </h3>
          <ul className='tw-list-disc tw-list-inside tw-text-gray-600'>
            <li>Customized or personalized items.</li>
            <li>Items marked as non-returnable at the time of purchase.</li>
            <li>Opened items that cannot be resold for health or hygiene reasons.</li>
          </ul>
        </div>

        {/* Section 2: Return Period */}
        <div className='tw-mb-8'>
          <h2 className='tw-text-xl lg:tw-text-2xl tw-font-semibold tw-text-gray-700 tw-mb-3'>
            2. Return Period
          </h2>
          <p className='tw-text-gray-600'>
            You have 7 working days from the date of receipt to initiate a return. To ensure a
            smooth process, please notify us within this timeframe.
          </p>
        </div>

        {/* Section 3: Return Process */}
        <div className='tw-mb-8'>
          <h2 className='tw-text-xl lg:tw-text-2xl tw-font-semibold tw-text-gray-700 tw-mb-3'>
            3. Return Process
          </h2>
          <p className='tw-text-gray-600 tw-mb-2'>To initiate a return, follow these steps:</p>
          <ol className='tw-list-decimal tw-list-inside tw-text-gray-600 tw-space-y-4'>
            <li>
              <strong>Contact Customer Support:</strong>
              <ul className='tw-list-disc tw-list-inside tw-text-gray-600 tw-ml-6'>
                <li>
                  Email us at{" "}
                  <a href='mailto:support@kwekmarket.com' className='tw-text-blue-600 tw-underline'>
                    support@kwekmarket.com
                  </a>{" "}
                  with your order number and reason for the return.
                </li>
                <li>
                  You will receive a response from our customer service team within 2 working days
                  to guide you through the return process.
                </li>
              </ul>
            </li>
            <li>
              <strong>Prepare Your Return:</strong>
              <ul className='tw-list-disc tw-list-inside tw-text-gray-600 tw-ml-6'>
                <li>Repack the item securely in its original packaging.</li>
                <li>Include a copy of your original receipt or order confirmation.</li>
              </ul>
            </li>
            <li>
              <strong>Shipping the Item:</strong>
              <ul className='tw-list-disc tw-list-inside tw-text-gray-600 tw-ml-6'>
                <li>
                  Return shipping costs will be the responsibility of the customer unless the item
                  is defective or incorrect.
                </li>
                <li>
                  We recommend using a trackable shipping service or purchasing shipping insurance
                  for items over a certain value.
                </li>
              </ul>
            </li>
          </ol>
        </div>

        {/* Section 4: Refund Processing */}
        <div className='tw-mb-8'>
          <h2 className='tw-text-xl lg:tw-text-2xl tw-font-semibold tw-text-gray-700 tw-mb-3'>
            4. Refund Processing
          </h2>
          <p className='tw-text-gray-600'>
            Once your return is received and inspected, we will send you an email to notify you of
            the approval or rejection of your refund. If approved, your refund will be processed to
            your original method of payment within 5-7 working days.
          </p>
        </div>

        {/* Section 5: Exchanges */}
        <div className='tw-mb-8'>
          <h2 className='tw-text-xl lg:tw-text-2xl tw-font-semibold tw-text-gray-700 tw-mb-3'>
            5. Exchanges
          </h2>
          <p className='tw-text-gray-600'>
            If you need to exchange an item for the same item or a different one, please follow the
            return process above, and place a new order for the desired item.
          </p>
        </div>

        {/* Section 6: Customer Service Response Time */}
        <div className='tw-mb-8'>
          <h2 className='tw-text-xl lg:tw-text-2xl tw-font-semibold tw-text-gray-700 tw-mb-3'>
            6. Customer Service Response Time
          </h2>
          <p className='tw-text-gray-600'>
            We aim to respond to all return inquiries within 2 working days. If you have any
            questions about your return, please don’t hesitate to reach out to our support team.
          </p>
        </div>

        {/* Section 7: Frequently Asked Questions (FAQs) */}
        <div className='tw-mb-8'>
          <h2 className='tw-text-xl lg:tw-text-2xl tw-font-semibold tw-text-gray-700 tw-mb-3'>
            7. Frequently Asked Questions (FAQs)
          </h2>
          <div className='tw-mb-4'>
            <p className='tw-text-gray-700 tw-font-medium'>
              Q: Can I return an item after 7 working days?
            </p>
            <p className='tw-text-gray-600'>
              A: Unfortunately, returns initiated after the 7 working day period cannot be
              processed.
            </p>
          </div>
          <div className='tw-mb-4'>
            <p className='tw-text-gray-700 tw-font-medium'>
              Q: What if my item is defective or damaged?
            </p>
            <p className='tw-text-gray-600'>
              A: If you receive a defective or damaged item, please contact us immediately for
              assistance with a replacement or refund.
            </p>
          </div>
          <div className='tw-mb-4'>
            <p className='tw-text-gray-700 tw-font-medium'>Q: How will I receive my refund?</p>
            <p className='tw-text-gray-600'>
              A: Refunds will be processed to the original payment method used during purchase.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className='tw-mb-8'>
          <h2 className='tw-text-xl lg:tw-text-2xl tw-font-semibold tw-text-gray-700 tw-mb-3'>
            Contact Us
          </h2>
          <p className='tw-text-gray-600'>
            If you have further questions or need assistance, feel free to contact us at:
          </p>
          <p className='tw-text-gray-600'>
            Email:{" "}
            <a href='mailto:support@kwekmarket.com' className='tw-text-blue-600 tw-underline'>
              support@kwekmarket.com
            </a>
            <br />
            Phone: +234 806 604 5387
          </p>
        </div>

        {/* Final Note */}
        <div className='tw-mt-8 tw-text-center'>
          <p className='tw-text-gray-600 tw-italic'>
            We value your feedback and aim to improve our services continuously. Thank you for
            shopping with Kwekmarket!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;
