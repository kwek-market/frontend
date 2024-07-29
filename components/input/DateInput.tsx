import { DatePicker, Space } from "antd";
import { PickerDateProps } from "antd/lib/date-picker/generatePicker";
import moment from "moment";

const DateInput = ({ ...props }: PickerDateProps<moment.Moment>) => (
  <Space direction='vertical' style={{ width: "100%" }}>
    <DatePicker {...props} />
  </Space>
);

export default DateInput;
