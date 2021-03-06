import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  render() {
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{" "}
          <i
            onClick={() =>
              this.setState({
                showContactInfo: !this.state.showContactInfo
              })
            }
            className="fas fa-sort-down"
          />
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}
Contact.PropTypes = {
  name: PropTypes.object.isRequired,
  email: PropTypes.object.isRequired,
  phone: PropTypes.object.isRequired
};
export default Contact;
