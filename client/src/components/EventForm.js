import React, { Component } from 'react';
import { Header, Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addEvent } from '../actions/events';

class EventForm extends Component {
  defaultData = { eventName: '', organizer: '', date: '', location: '', attendeeIds: [] }

  state={  ...this.defaultData  }

  handleEventChange = (e) => {
    let { id, value } = e.target;
    this.setState({ [id]: value })
  }

  submitNewEvent = (e) => {
    e.preventDefault();
    let { _id, username } = this.props;
    this.setState(
      { organizer: username, attendeeIds: [ _id ]},
      () => {
        let eventDetails = { ...this.state };
        this.props.dispatch(addEvent(eventDetails));
        this.setState({ ...this.defaultData });
      })

  }

  render() {
    let { _id, username, role } = this.props;
    let { eventName, organizer, date, location, attendeeIds } = this.state;
    return(
      <div>
        <Header as="h2">{username}</Header>
        <Form onSubmit={ this.submitNewEvent }>
          <Form.Field>
            <label>Event Name:</label>
            <input
              id='eventName'
              value={eventName}
              type="text"
              onChange={this.handleEventChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Date:</label>
            <input
              id='date'
              value={date}
              type="date"
              onChange={this.handleEventChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Location:</label>
            <input
              id='location'
              value={location}
              type="text"
              onChange={this.handleEventChange}
            />
          </Form.Field>
          <Button
            type='submit'
            className='ui primary button'
          >
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return { ...state.user }
}

export default connect(mapStateToProps)(EventForm);
