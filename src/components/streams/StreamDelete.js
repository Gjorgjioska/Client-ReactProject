import React from "react";
import { connect } from "react-redux";
import modal from "../modal";
import history from "../../history";
import { fetchStream } from "../../actions";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  renderActions() {
    return (
      <React.Fragment>
        <button className="ui button negativ">Delete</button>
        <button className="ui button">Cancel</button>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div>
        StreamDelete
        <modal
          title="Delete Stream"
          content="are you sure uou want to delete this stream?"
          actions={this.renderActions(1)}
          onDismiss={() => history.push("/")}
        />
      </div>
    );
  }
}

export default connect(null, { fetchStream })(StreamDelete);
