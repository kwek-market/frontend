import { InboxOutlined } from "@ant-design/icons";
import { Upload, UploadProps } from "antd";

const { Dragger } = Upload;

export const FileInputLarge = ({ ...props }: UploadProps) => {
  return (
    <Dragger
      action={process.env.NEXT_PUBLIC_CLOUDINARY_URL}
      listType='picture-card'
      multiple={false}
      data={{ upload_preset: process.env.NEXT_PUBLIC_CLOUDINARY_PRESET }}
      className='!tw-w-full'
      maxCount={1}
      {...props}
    >
      <p className='ant-upload-drag-icon'>
        <InboxOutlined />
      </p>
      <p className='ant-upload-text'>Click or drag file to this area to upload</p>
      <p className='ant-upload-hint'>
        Support for a single or bulk upload. Strictly prohibit from uploading company data or other
        band files
      </p>
    </Dragger>
  );
};
