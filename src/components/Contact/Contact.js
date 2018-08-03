import React from 'react';
import './Contact.css';
import ContactForm from '../ContactForm/ContactForm';

class Contact extends React.Component {
  render () {
    return (
      <div className="Contact columns">
        <aside className="column is-3">
          <ul>
            <li>GitHub</li>
            <li>LinkedIn</li>
            <li>Another one</li>
          </ul>
        </aside>
        <main className="column">
          <ContactForm />
        </main>
      </div>
    );
  }
};

export default Contact;
