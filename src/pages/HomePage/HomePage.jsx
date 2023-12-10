import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import NoteList from "../../components/NoteList/NoteList";
import InputSearch from "../../components/InputSearch/InputSearch";
import { useContext, useEffect, useState } from "react";
import { getActiveNotes } from "../../utils/network-data";
import { TRANSLATE } from "../../constants/lang";
import LanguageContext from "../../contexts/language";

const HomePage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams()
  const [notes, setNotes] = useState([])
  const {lang} = useContext(LanguageContext)
  const [loading, setLoading] = useState(false)
  
  const fetchData = async()=>{
    setLoading(true)
    try{
      const data = await getActiveNotes()
      setNotes(data.data)
      setLoading(false)
    } catch(err){
      setLoading(false)
      alert(err)
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
        <h2>{TRANSLATE[lang].homePageTitle}</h2>
        <div className="search-bar">
          <InputSearch />
        </div>
      </section>
      {!loading?(
        <NoteList data={notes} />
      ):<div>Loading...</div>}
      <div className="homepage__action">
        <Button title="Tambah" onClick={() => navigate("/notes/new")} iconName="add" />
      </div>
    </>
  );
};

export default HomePage;
