import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';
import { getEvents } from '../actions/events';

class Event extends Component {

  componentDidMount = () => {
    this.props.dispatch(getEvents());
  }

  render() {
    let { eventName, organizer, date, location, attendeeIds } = this.props.event;
    return(
      <div>
        <Header as="h3">
          { eventName }
        </Header>
        <Header as="h6">
          { organizer }
        </Header>
        <Header as="h4">
          { date }
        </Header>
        <Header as="h4">
          { location }
        </Header>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return { event: state.events.find( n => n._id === props.match.params.id) || {} }
}

export default connect(mapStateToProps)(Event);
