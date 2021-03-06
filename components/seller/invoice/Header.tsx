import { useRouter } from "next/router";
import React from "react";
import { jsPDF } from "jspdf";
import { toPng } from "html-to-image";

type HeaderProps = {
  title: string;
  btn: boolean;
  element?: React.MutableRefObject<any>;
};

export default function Header({ title, btn, element }: HeaderProps) {
  const router = useRouter();
  const { invoice } = router.query;

  async function download() {
    const filename = `invoice-${invoice}.pdf`;

    const image = await toPng(element.current, { quality: 0.95 });
    const doc = new jsPDF();

    doc.addImage(image, "JPEG", 5, 22, 200, 160);
    doc.save(filename);
  }

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
