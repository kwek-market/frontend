import Modal from "antd/lib/modal/Modal";
import { useState } from "react";
import { Rings } from "react-loader-spinner";

export default function ModalLoader() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal title='Loading' visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <div className='tw-w-full tw-py-7 tw-flex tw-justify-center'>
        <Rings width={60} height={60} color='#FC476E' />
      </div>
    </Modal>
  );
}
