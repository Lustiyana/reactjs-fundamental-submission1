import { useNavigate, useParams } from "react-router-dom";
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from "../../utils/local-data";
import { showFormattedDate } from "../../utils";
import Button from "../../components/Button/Button";

const DetailPage = () => {
  const { id } = useParams();
  const data = getNote(id);
  const navigate = useNavigate();

  const handleClickDelete = () => {
    deleteNote(id);
    navigate("/");
  };
  const handleClickArchive = () => {
    archiveNote(id);
    navigate("/");
  };

  const handleClickUnarchive = () => {
    unarchiveNote(id);
    navigate("/");
  };

  return (
    <section className="detail-page">
      <h3 className="detail-page__title">{data.title}</h3>
      <p className="detail-page__createdAt">
        {showFormattedDate(data.createdAt)}
      </p>
      <div className="detail-page__body">{data.body}</div>
      <div className="detail-page__action">
        <Button
          title="Arsipkan"
          onClick={data.archived ? handleClickUnarchive : handleClickArchive}
          iconName={`${
            data.archived ? "arrow-up-circle-outline" : "archive-outline"
          }`}
        />
        <Button
          title="Hapus"
          onClick={handleClickDelete}
          iconName="trash-outline"
        />
      </div>
    </section>
  );
};
export default DetailPage;
