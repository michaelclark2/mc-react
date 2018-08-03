import React from 'react';
import './ContactForm.css';

class ContactForm extends React.Component {
  render () {
    return (
      <div className="ContactForm box">
        <form id="contactForm">
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">From</label>
            </div>
            <div className="field-body">
              <div className="field">
                <p className="control is-expanded has-icons-left">
                  <input className="input" type="text" placeholder="Name" id="name" required />
                  <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control is-expanded has-icons-left has-icons-right">
                  <input className="input" type="email" placeholder="Email" id="email" required />
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
                  <input className="input" type="text" placeholder="Subject" id="subject" required />
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
                  <textarea className="textarea" placeholder="Write me a message..." id="message" required></textarea>
                </div>
              </div>
            </div>
          </div>

          <div className="field is-grouped is-grouped-centered">
            <div className="control">
              <button type="submit" className="button is-primary" id="sendMessage">
                Send
              </button>
            </div>
          </div>
        </form>
        <div className="notification is-success is-hidden has-text-centered" id="msgSuccess">
            Thank you for your message!
        </div>
      </div>
    );
  }
};

export default ContactForm;
