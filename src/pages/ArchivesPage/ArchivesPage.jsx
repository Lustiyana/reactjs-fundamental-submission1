import { useSearchParams } from "react-router-dom";
import InputSearch from "../../components/InputSearch/InputSearch";
import NoteList from "../../components/NoteList/NoteList";
import { useContext, useEffect, useState } from "react";
import { getArchivedNotes } from "../../utils/network-data";
import LanguageContext from "../../contexts/language";
import { TRANSLATE } from "../../constants/lang";

const ArchivesPage = () => {
  const [searchParams] = useSearchParams()
  const [notes, setNotes] = useState([])
  const {lang} = useContext(LanguageContext)
  const [loading, setLoading] = useState(false)
  
  const fetchData = async()=>{
    setLoading(true)
    try{
      const data = await getArchivedNotes()
      setNotes(data.data)
      setLoading(false)
    } catch(err){
      setLoading(false)
      alert(false)
    }
  }

  useEffect(()=>{
    fetchData()
  }, [])
  
  useEffect(()=>{
    if(searchParams.get('keyword') && searchParams.get('keyword').length>0){
      const filteredData = notes.filter((item)=>item.title.toLowerCase().includes(searchParams.get('keyword').toLowerCase()))
      setNotes(filteredData)
    } else{
      fetchData()
    }
  }, [searchParams.get('keyword')])


  return (
    <>
      <section className="homepage">
        <h2>{TRANSLATE[lang].archivePageTitle}</h2>
        <div className="search-bar">
          <InputSearch />
        </div>
      </section>
      {!loading?(
        <NoteList data={notes} />
      ):<div>Loading...</div>}
    </>
  );
};

export default ArchivesPage;
