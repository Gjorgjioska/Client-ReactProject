import React from "react";
import modal from "../modal";
import history from "../../history";

const StreamDelete = () => {
  const actions = (
    <React.Fragment>
      <button className="ui button negativ">Delete</button>
      <button className="ui button">Cancel</button>
    </React.Fragment>
  );
  return (
    <div>
      StreamDelete
      <modal
        title="Delete Stream"
        content="are you sure uou want to delete this stream?"
        actions={actions}
        onDismiss={() => history.push("/")}
      />
    </div>
  );
};

export default StreamDelete;
