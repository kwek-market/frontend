import SearchIcon from "@/components/icons/admin/search";
import React from "react";

type SearchProps = {
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchFunc: (e: React.KeyboardEvent<HTMLInputElement>) => void
};

const Search = ({ placeholder, value, onChange, searchFunc }: SearchProps) => {
  return (
    <div className=" tw-pr-4 tw-overflow-hidden tw-border tw-border-[#D7DCE0] tw-rounded tw-flex tw-items-center tw-w-max ">
      <input
        type="text"
        className=" tw-py-3 tw-pl-4 tw-border-none tw-outline-none tw-mr-4 tw-w-64 active:tw-border-none"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyPress={e => searchFunc(e)}
      />
      <SearchIcon/>
    </div>
  );
};

export default Search;
