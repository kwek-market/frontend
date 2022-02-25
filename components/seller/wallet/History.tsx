import { Input, Select } from "antd";
import React from "react";

const { Option } = Select;

export default function History() {
  return (
    <section className="">
      <Input.Search placeholder="" className="" />
      <Select defaultValue="lucy" style={{ width: 120 }}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
      </Select>
    </section>
  );
}
