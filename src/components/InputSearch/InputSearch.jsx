import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const InputSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch] = useState('')

  const handleChangeSearch = (e) =>{
    setSearch(e.target.value)
    if(e.target.value.length> 0){
      setSearchParams({keyword: search})
    } else{
      searchParams.delete('keyword')
      setSearchParams(searchParams)
    }
  }

  return (
    <div className="search-bar">
      <input type="text" placeholder="Cari berdasarkan judul..." onChange={handleChangeSearch} value={search} />
    </div>
  );
};
export default InputSearch