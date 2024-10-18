const AboutUs = function () {
  return (
    <div className='tw-bg-gray-50 tw-min-h-screen tw-p-6'>
      <div className='tw-max-w-4xl tw-mx-auto tw-bg-white tw-shadow-lg tw-rounded-lg tw-p-8'>
        <h1 className='tw-text-3xl tw-font-bold tw-text-gray-800 tw-mb-4'>
          Kwekmarket Networking Marketplace Nationwide
        </h1>
        <p className='tw-text-gray-600 tw-mb-6'>
          Welcome to Kwekmarket, the premier marketplace that empowers local sellers to reach a
          broader audience with quality, affordable goods and services. We are dedicated to
          simplifying online transactions, making it easier for you to discover unique products
          while supporting local businesses.
        </p>

        <p className='tw-text-gray-600 tw-mb-6'>
          At Kwekmarket, our mission is to bridge the gap between traditional local markets and the
          digital world, creating a vibrant community of buyers and sellers united by a shared
          passion for accessible trade. Whether you're a buyer searching for sustainable products or
          a seller looking to expand your reach, we provide a seamless platform that connects you to
          opportunities across the nation.
        </p>

        <p className='tw-text-gray-600 tw-mb-6'>
          We take pride in fostering an environment that promotes{" "}
          <em>
            creativity, <strong>transparency, </strong>innovation, and <strong>growth</strong>
          </em>
          . Our commitment to these values ensures that every transaction is smooth, secure, and
          fulfilling.
        </p>

        <p className='tw-text-gray-600 tw-mb-6'>
          Join us at Kwekmarket, where local meets global, and experience a marketplace designed for
          you. Start trading with confidence today and be part of a thriving community that supports
          your goals!
        </p>

        {/* Contact Information */}
        <div className='tw-mt-8'>
          <h2 className='tw-text-2xl tw-font-semibold tw-text-gray-700 tw-mb-3'>Contact Us</h2>
          <p className='tw-text-gray-600'>
            For more information or inquiries, please reach out to us at:
            <a href='mailto:support@kwekmarket.com' className='tw-text-blue-600 tw-underline'>
              support@kwekmarket.com
            </a>
          </p>
        </div>

        {/* Final Note */}
        <div className='tw-mt-8 tw-text-center'>
          <p className='tw-text-gray-600 tw-italic'>
            Thank you for choosing Kwekmarket, where every transaction contributes to a vibrant
            local economy!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
