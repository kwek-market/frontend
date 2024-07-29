import { DatePicker, Space } from "antd";

const DateInput = ({ ...props }) => (
  <Space direction='vertical' style={{ width: "100%" }}>
    <DatePicker {...props} />
  </Space>
);

export default DateInput;
