import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Sidebar from "./components/Sidebar";
import NoteList from "./components/NoteList";
import AddNote from "./components/AddNote";
import "./App.css";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Sidebar />
          <main>
            <Switch>
              <Route path="/" exact component={NoteList} />
              <Route path="/add" component={AddNote} />
            </Switch>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
