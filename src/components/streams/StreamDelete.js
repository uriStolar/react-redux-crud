import React from 'react';
import Modal from "./../Modal";
import history from "./../../history";
import { fetchStream, deleteStream } from "./../../actions";
import { connect } from 'react-redux';

class StreamDelete extends React.Component  {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }

  onClick = () => {
    this.props.deleteStream(this.props.match.params.id)
  }
  
  renderActions() {
    return (
      <div>
        <button
          className="ui button negative"
          onClick={this.onClick}>
          Delete
        </button>
        <button className="ui button">Cancel</button>
      </div>
    )
  }

  renderContent() {
    if (!this.props.stream) { return 'Are you sure you want to delete this stream?' }
    else {
      return(
        <p>
          Are you sure you want to delete stream 
          <strong> "{this.props.stream.title}"</strong> ?
        </p>
      )}
  }

  render() {
    return (
      <Modal
          title="Delete Stream"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push('/')}
          stream={this.props.stream}
      />
    );
  }
};

const mapStateToProms = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id]}
};

export default connect(mapStateToProms, {fetchStream, deleteStream})(StreamDelete);
