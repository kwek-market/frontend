import Link from "next/link";

type CategoryMobileProps = {
  imgSrc: string;
  text: string;
  style?: string;
};

const CategoryMobile = function ({ imgSrc, text, style }: CategoryMobileProps) {
  return (
    <div className='tw-px-2 lg:tw-px-8 lg:tw-max-w-full'>
      <Link href={`/all`}>
        <a>
          <img
            src={imgSrc}
            alt={text}
            className={`${style} tw-w-6 tw-h-6 tw-text-center tw-mx-auto`}
          />
          <p className='tw-font-normal tw-w-[3rem] lg:tw-whitespace-nowrap tw-truncate tw-text-xs tw-text-brown-kwek200 tw-mt-2 tw-text-center'>
            {" "}
            {text}
          </p>
        </a>
      </Link>
    </div>
  );
};

export default CategoryMobile;
