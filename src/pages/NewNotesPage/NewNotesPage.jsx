import React, { useState } from "react";
import { addNote } from "../../utils/local-data";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const NewNotesPage = () => {
  const navigate = useNavigate();
  const [modifiedData, setModifiedData] = useState({
    title: "",
    body: "",
  });

  const handleAddNotes = () => {
    addNote(modifiedData);
    navigate("/");
  };

  return (
    <section className="add-new-page">
      <div className="add-new-page__input">
        <input
          type="text"
          className="add-new-page__input__title"
          placeholder="Catatan rahasia"
          onChange={(e) =>
            setModifiedData({ ...modifiedData, title: e.target.value })
          }
          value={modifiedData.title}
        />
        <div
          type="text"
          className="add-new-page__input__body"
          data-placeholder="Sebenarnya saya adalah ...."
          contentEditable
          onInput={(e) =>
            setModifiedData({ ...modifiedData, body: e.target.innerHTML })
          }
        ></div>
        <div className="add-new-page__action">
          <Button onClick={handleAddNotes} iconName="checkmark"/>
        </div>
      </div>
    </section>
  );
};

export default NewNotesPage;
