import { useSearchParams } from "react-router-dom";
import InputSearch from "../../components/InputSearch/InputSearch";
import NoteList from "../../components/NoteList/NoteList";
import { getArchivedNotes } from "../../utils/local-data";
import { useEffect, useState } from "react";

const ArchivesPage = () => {
  const [searchParams] = useSearchParams()
  const [notes, setNotes] = useState([])
  
  useEffect(()=>{
    setNotes(getArchivedNotes())
  }, [])
  
  useEffect(()=>{
    if(searchParams.get('keyword') && searchParams.get('keyword').length>0){
      const filteredData = notes.filter((item)=>item.title.toLowerCase().includes(searchParams.get('keyword').toLowerCase()))
      setNotes(filteredData)
    } else{
      setNotes(getArchivedNotes())
    }
  }, [searchParams.get('keyword')])

  return (
    <>
      <section className="homepage">
        <h2>Catatan Arsip</h2>
        <div className="search-bar">
          <InputSearch />
        </div>
      </section>
      <NoteList data={notes} />
    </>
  );
};

export default ArchivesPage;
