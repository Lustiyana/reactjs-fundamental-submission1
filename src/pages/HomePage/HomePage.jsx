import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import NoteList from "../../components/NoteList/NoteList";
import InputSearch from "../../components/InputSearch/InputSearch";
import { getActiveNotes, getAllNotes } from "../../utils/local-data";
import { useEffect, useState } from "react";

const HomePage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams()
  const [notes, setNotes] = useState([])
  
  useEffect(()=>{
    setNotes(getActiveNotes())
  }, [])
  
  useEffect(()=>{
    if(searchParams.get('keyword') && searchParams.get('keyword').length>0){
      const filteredData = notes.filter((item)=>item.title.toLowerCase().includes(searchParams.get('keyword').toLowerCase()))
      setNotes(filteredData)
    } else{
      setNotes(getActiveNotes())
    }
  }, [searchParams.get('keyword')])


  return (
    <>
      <section className="homepage">
        <h2>Catatan Aktif</h2>
        <div className="search-bar">
          <InputSearch />
        </div>
      </section>
      <NoteList data={notes} />
      <div className="homepage__action">
        <Button title="Tambah" onClick={() => navigate("/notes/new")} iconName="add" />
      </div>
    </>
  );
};

export default HomePage;