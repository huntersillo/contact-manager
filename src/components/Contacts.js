import React, { Component } from "react";
import Contact from "./Contact";
class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "john doe",
        email: "hello@yahoo.com",
        phone: "111-222-2222"
      },
      {
        id: 2,
        name: "lolo doe",
        email: "hello@yahoo.com",
        phone: "101-222-2022"
      },
      {
        id: 3,
        name: "floy doe",
        email: "llo@yahoo.com",
        phone: "101-222-2922"
      }
    ]
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}
export default Contacts;
