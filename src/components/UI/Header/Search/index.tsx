import SearchInput from "@/components/CElements/SearchInput";
import { useSearch } from "@/store/search";
import { useState } from "react";
export const Search = () => {
  const [searchVal, setSearchVal] = useState("")
  const handleStoreSearch = () => {

  }
  return (
    <div className="flex justify-end">
      <div className="w-[300px]">
        <SearchInput handleChange={setSearchVal} delay={700} />
      </div>
      <button className="custom-btn">a</button>
    </div>
  );
};
