import { UploadProductProps } from "@/interfaces/commonTypes";
import { GetProp, Progress, Upload, UploadProps } from "antd";
import ImgCrop from "antd-img-crop";
import { RcFile } from "antd/es/upload";
import { UploadFile } from "antd/lib";
import axios from "axios";
import { useState } from "react";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

function ProductImage({ submitDetails, setSubmitDetails }: UploadProductProps) {
  const [previewImage, setPreviewImage] = useState([]);
  const [files, setFiles] = useState<File[]>();
  const [uploadPercent, setUploadPercent] = useState(0);

  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const onChange: UploadProps["onChange"] = async ({ fileList: newFileList, file }) => {
    console.log("🚀 ~~ constonChange:UploadProps[]= ~~ file:", file, newFileList);

    setFileList(newFileList);

    const imageUrls = newFileList.map(img => img.response?.secure_url);
    setSubmitDetails({ ...submitDetails, productImageUrl: imageUrls });
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as FileType);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <div className='tw-pt-3 tw-px-5 tw-pb-20 tw-mb-5 tw-bg-white-100 tw-rounded-md'>
      <div className='tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-p-3 tw-border-b tw-border-grey-kwek700'>
        <div className='tw-flex tw-flex-col'>
          <p className='tw-font-semibold tw-capitalize tw-text-lg tw-mb-0'>
            product image {submitDetails ? submitDetails.productImageUrl?.length : 0}/5
          </p>
          <p className='tw-text-gray-kwek200 tw-text-sm md:tw-text-base tw-font-normal tw-mb-0'>
            Recommended Image dimention is 500px by 500px,{" "}
            <span className='tw-font-medium'>Image should not be larger than 2.5mb</span>
          </p>
        </div>
      </div>
      <div className='tw-grid tw-mt-3'>
        {!!uploadPercent && <Progress percent={uploadPercent} />}
        <label htmlFor='id-upload' className='tw-mt-3 tw-relative'>
          <ImgCrop rotationSlider onModalCancel={e => {}}>
            <Upload
              className='tw-mt-6 tw-border-grey-kwek700 tw-border-2 tw-p-6 tw-border-dashed'
              action={process.env.NEXT_PUBLIC_CLOUDINARY_URL}
              listType='picture-card'
              fileList={fileList}
              onChange={onChange}
              maxCount={5}
              customRequest={async ({ file, action, onSuccess, onError }) => {
                try {
                  console.log(typeof file);
                  const formData = new FormData();
                  formData.append("file", file as RcFile);
                  formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_PRESET);

                  const response = await axios.post(action, formData);

                  if (response.data?.secure_url) {
                    return onSuccess(response.data);
                  }
                } catch (error) {
                  return onError(error.message);
                }
              }}
              onPreview={onPreview}
            >
              {fileList.length < 5 && "+ Upload"}
            </Upload>
          </ImgCrop>
        </label>
      </div>
    </div>
  );
}

export default ProductImage;
