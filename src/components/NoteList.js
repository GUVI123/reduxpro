import React from "react";
import { connect } from "react-redux";
import { deleteNote } from "../redux/actions";
import Note from "./Note";

function NoteList(props) {
  const { notes, deleteNote } = props;

  return (
    <div className="note-list">
      <h2>Notes</h2>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} onDelete={deleteNote} />
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  };
};

const mapDispatchToProps = {
  deleteNote,
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
