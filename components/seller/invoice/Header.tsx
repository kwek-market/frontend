import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type HeaderProps = {
  title: string;
  btn: boolean;
  element?: React.MutableRefObject<any>;
};

export default function Header({ title, btn, element }: HeaderProps) {
  const router = useRouter();
  const [worker, setWorker] = useState(null);

  function download() {
    if (worker === null) return "null";
    // worker().from(element.current).save();
    console.log(worker());
    console.log(element.current);
  }

  useEffect(() => {
    const pdf = async () => {
      const html2pdf = await import("html2pdf.js");
      setWorker(html2pdf);
    };
    pdf();
  }, []);

  return (
    <header className="tw-flex tw-justify-between tw-bg-red-kwek100 tw-p-3 md:tw-px-12">
      <div onClick={() => router.back()}>
        <i className="fas fa-arrow-left tw-text-white-100 tw-text-xl" />
      </div>

      <div>
        <p className="tw-capitalize tw-text-white-100 tw-font-semibold tw-text-lg tw-mb-0 tw-text-center">
          {title}
        </p>
      </div>

      <div>
        {btn && (
          <button
            className="tw-rounded-md tw-py-2 tw-px-3 tw-text-white-100 tw-bg-green-success tw-uppercase"
            onClick={() => download()}
          >
            download
          </button>
        )}
      </div>
    </header>
  );
}
