import Link from "next/link";

type CategoryMobileProps = {
  imgSrc: string;
  text: string;
  style?: string;
};

const CategoryMobile = function ({ imgSrc, text, style }: CategoryMobileProps) {
  return (
    <div className='tw-px-8'>
      <Link href={`/all`}>
        <a>
          <img src={imgSrc} alt={text} className={`${style} tw-text-center tw-w-auto tw-mx-auto`} />
          <p className='tw-font-normal tw-whitespace-nowrap tw-text-xs tw-text-brown-kwek200 tw-mt-2 tw-text-center'>
            {" "}
            {text}
          </p>
        </a>
      </Link>
    </div>
  );
};

export default CategoryMobile;
