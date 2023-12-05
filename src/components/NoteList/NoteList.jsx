import parser from "html-react-parser";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../../utils";
import PropType from "prop-types";
import NoteListEmpty from "../NotListEmpty/NotListEmpty";

const NoteList = ({ data }) => {
  return (
    <>
      {data.length > 0 ? (
        <section className="notes-list">
          {data.map((item) => (
            <article className="note-item" key={item.id}>
              <h3 className="note-item__title">
                <Link to={`/notes/${item.id}`}>{item.title}</Link>
              </h3>
              <p className="note-item__createdAt">
                {showFormattedDate(item.createdAt)}
              </p>
              <p className="note-item__body">{parser(item.body)}</p>
            </article>
          ))}
        </section>
      ) : (
        <NoteListEmpty />
      )}
    </>
  );
};

export default NoteList;

NoteList.propTypes = {
  data: PropType.array,
};
