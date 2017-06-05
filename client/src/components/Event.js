import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Header, Icon } from 'semantic-ui-react';
import { getEvents, deleteEvent } from '../actions/events';
import EventForm from './EventForm';

class Event extends Component {

  state={ edit: false }

  componentDidMount = () => {
    this.props.dispatch(getEvents());
  }

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit });
  }

  handleDelete = (_id) => {
    let { dispatch, history } = this.props;
    dispatch(deleteEvent(_id));
    history.push('/');
  }

  render() {
    let { eventName, organizer, date, location, attendeeIds, _id } = this.props.event;
    let { edit } = this.state;
    let eventToUpdate = this.props.event;
    return(
      <div>
      { edit ?
        <div>
          <EventForm
            eventToUpdate={eventToUpdate}
            toggleEdit={this.toggleEdit}
            updateEvent={true}
          />
        </div>
        :
        <div>
          <Header as="h3">{ eventName }</Header>
          <Header as="h6">{ organizer }</Header>
          <Header as="h4">{ date }</Header>
          <Header as="h4">{ location }</Header>
          <Icon name='edit' size='large' onClick={ this.toggleEdit } />
          <Icon
            name='remove'
            size='large'
            onClick={ () => this.handleDelete(_id) }
          />
        </div>
      }
      </div>

    )
  }
}

const mapStateToProps = (state, props) => {
  return { event: state.events.find( n => n._id === props.match.params.id) || {} }
}

export default connect(mapStateToProps)(Event);
