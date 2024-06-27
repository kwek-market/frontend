import { Select, Spin } from "antd";
import { CSSProperties, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

const { Option } = Select;

interface Props {
  onSearch: (value) => Promise<{ text: string; value: string }[]>;
  onChange: (value: string) => void;
  style?: CSSProperties;
  placeHolder?: string;
}

const SingleSelectSearchInput = ({ onSearch, style, placeHolder, onChange }: Props) => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState(undefined);
  const [fetching, setFetching] = useState(false);

  const handleSearchDebounced = useDebouncedCallback(
    // function
    async (value: string) => {
      setFetching(true);
      if (value) {
        const data = await onSearch(value);
        setData(data);
      } else {
        setData([]);
      }
      setFetching(false);
    },
    600
  );

  const handleChange = value => {
    setValue(value);
    onChange(value);
  };

  const options = data?.map(d => (
    <Option value={d.value} key={d.value}>
      {d.text}
    </Option>
  ));

  return (
    <Select
      showSearch
      value={value}
      autoClearSearchValue
      placeholder={placeHolder}
      style={style}
      defaultActiveFirstOption={false}
      showArrow={false}
      filterOption={false}
      onSearch={value => handleSearchDebounced(value)}
      onChange={handleChange}
      notFoundContent={fetching ? <Spin size='default' /> : null}
    >
      {options}
    </Select>
  );
};

export default SingleSelectSearchInput;
