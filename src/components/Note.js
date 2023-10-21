import React from "react";

function Note({ note, onDelete }) {
  return (
    <li className="note">
      <div className="note-text">{note.text}</div>
      <button onClick={() => onDelete(note.id)}>Delete</button>
    </li>
  );
}

export default Note;  
