import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route exact path="/" element={<StreamList />}></Route>
          <Route exact path="/streams/new" element={<StreamCreate />}></Route>
          <Route
            exact
            path="/streams/edit/:id"
            element={<StreamEdit />}
          ></Route>
          <Route
            exact
            path="/streams/delete"
            element={<StreamDelete />}
          ></Route>
          <Route exact path="/streams/show" element={<StreamShow />}></Route>
        </div>
      </Router>
    </div>
  );
};

export default App;
