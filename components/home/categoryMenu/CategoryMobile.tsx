import Link from "next/link";

type CategoryMobileProps = {
  imgSrc: string;
  text: string;
  style?: string;
  href?: string,
};

const CategoryMobile = function ({ imgSrc, text, style, href }: CategoryMobileProps) {
  return (
    <div className='tw-px-2 lg:tw-px-8 lg:tw-max-w-full'>
      <Link href={href ?? `/all`}>
        <img
          src={imgSrc}
          alt={text}
          className={`${style} tw-w-6 tw-h-6 tw-text-center tw-mx-auto`}
        />
        <p className='tw-font-normal tw-w-[4rem] lg:tw-whitespace-nowrap tw-truncate tw-leading-[1rem] tw-text-[10px] tw-text-brown-kwek200 tw-mt-2 tw-text-center'>
          {" "}
          {text}
        </p>
      </Link>
    </div>
  );
};

export default CategoryMobile;
