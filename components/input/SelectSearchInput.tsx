import { Select, Spin } from "antd";
import type { SelectProps } from "antd/es/select";
import debounce from "lodash/debounce";
import React, { useMemo, useRef, useState } from "react";

export interface DebounceSelectProps<ValueType = any>
  extends Omit<SelectProps<ValueType | ValueType[]>, "options" | "children"> {
  fetchOptions: (search: string) => Promise<ValueType[]>;
  debounceTimeout?: number;
}

function DebounceSelect<
  ValueType extends { key?: string; label: React.ReactNode; value: string | number } = any
>({ fetchOptions, debounceTimeout = 800, ...props }: DebounceSelectProps<ValueType>) {
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState<ValueType[]>([]);
  const fetchRef = useRef(0);

  const debounceFetcher = useMemo(() => {
    const loadOptions = (value: string) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;

      setOptions([]);
      setFetching(true);

      fetchOptions(value).then(newOptions => {
        if (fetchId !== fetchRef.current) {
          // for fetch callback order
          return;
        }

        setOptions(newOptions);
        setFetching(false);
      });
    };

    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout]);

  return (
    <Select
      labelInValue
      showSearch
      filterOption={false}
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size='small' /> : null}
      options={options}
      {...props}
    />
  );
}

// Usage of DebounceSelect
interface UserValue {
  label: string;
  value: string;
}

export const SearchSelectInput = ({ onChange, mode, ...props }: DebounceSelectProps) => {
  const [value, setValue] = useState<UserValue[]>([]);

  return (
    <DebounceSelect
      mode={mode}
      value={value}
      placeholder='Select users'
      onChange={(newValue, option) => {
        if (mode === "multiple" || mode === "tags") {
          setValue(newValue as UserValue[]);
        } else {
          setValue(newValue);
        }

        if (onChange) onChange(newValue, option);
      }}
      style={{ width: "100%" }}
      {...props}
    />
  );
};
