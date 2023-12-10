import { useContext } from "react"
import { TRANSLATE } from "../../constants/lang"
import LanguageContext from "../../contexts/language"

const NoteListEmpty = () => {
  const {lang} = useContext(LanguageContext)
  return(
    <section className="notes-list-empty">
      <p className="notes-list__empty">{TRANSLATE[lang].emptyNotes}</p>
    </section>
  )
}

export default NoteListEmpty