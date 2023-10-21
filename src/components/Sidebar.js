import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h1>Notes App</h1>
      <ul>
        <li>
          <Link to="/">Notes</Link>
        </li>
        <li>
          <Link to="/add">Add Note</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
