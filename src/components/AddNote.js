import React, { useState } from "react";
import { connect } from "react-redux";
import { addNote } from "../redux/actions";
import { useHistory } from "react-router-dom";


function AddNote(props) {
  const [text, setText] = useState("");
  const history = useHistory();

  const handleSubmit = () => {
    if (text.trim() !== "") {
      props.addNote({
        text,
        id: new Date().getTime(),
      });
      history.push("/");
    }
  };

  return (
    <div className="add-note">
      <h2>Ttile</h2>
      
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="5"
        placeholder="Enter your note here..."
      ></textarea>
  
     
      <button onClick={handleSubmit}>Save Note</button>
    </div>
  );
}

const mapDispatchToProps = {
  addNote,
};

export default connect(null, mapDispatchToProps)(AddNote);
