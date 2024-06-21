import SearchInput from "@/components/CElements/SearchInput";
import { useSearch } from "@/store/search";
// import { useState } from "react";
export const Search = () => {
  // const [searchVal, setSearchVal] = useState("");
  const { setSearchValue } = useSearch();
  const handleStoreSearch = (val: string) => setSearchValue(val);
  return (
    <div className="flex justify-end">
      <div className="w-[180px] mobile:w-[300px]">
        <SearchInput handleChange={handleStoreSearch} delay={700} />
      </div>
    </div>
  );
};
