import React from 'react';
import './ContactForm.css';

import postMessage from '../../firebase/messages';

class ContactForm extends React.Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
    isSent: false,
  }
  inputChange = (e) => {
    const contactForm = {...this.state};
    contactForm.isSent = false;
    contactForm[e.target.id] = e.target.value;
    this.setState(contactForm);
  }
  sendMessage = (e) => {
    e.preventDefault();
    const msg = this.state;
    delete msg.isSent;
    postMessage(msg)
      .then(() => {
        this.setState({
          isSent: true,
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      })
      .catch(err => {
        console.error('Error sending message', err);
      });
  }
  render () {
    return (
      <div className="ContactForm box">
        {
          this.state.isSent ? (
            <div className="notification is-success has-text-centered">
              Thank you for your message!
            </div>
          ) : (
            null
          )
        }
        <form id="contactForm">
          <h1 className="title has-text-centered">Email Me</h1>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">From</label>
            </div>
            <div className="field-body">
              <div className="field">
                <p className="control is-expanded has-icons-left">
                  <input onChange={this.inputChange} value={this.state.name} className="input" type="text" placeholder="Name" id="name" required />
                  <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control is-expanded has-icons-left has-icons-right">
                  <input onChange={this.inputChange} value={this.state.email} className="input" type="email" placeholder="Email" id="email" required />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Subject</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input onChange={this.inputChange} value={this.state.subject} className="input" type="text" placeholder="Subject" id="subject" required />
                </div>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Message</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <textarea onChange={this.inputChange} value={this.state.message} className="textarea" placeholder="Write me a message..." id="message" required></textarea>
                </div>
              </div>
            </div>
          </div>

          <div className="field is-grouped is-grouped-centered">
            <div className="control">
              <button type="submit" className="button is-primary" onClick={this.sendMessage}>
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default ContactForm;
