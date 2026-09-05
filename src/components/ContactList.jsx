import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

export default function ContactList(props) {
  const inputEl = useRef("");

  function deleteContactHandler(id) {
    props.getContactId(id);
  }

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });

  function getSearchTerm() {
    props.searchKeyword(inputEl.current.value);
  }

  return (
    <div className="ui main" style={{ marginTop: "30px" }}>
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui button blue right floated">Add Contact</button>
        </Link>
      </h2>
      <div className="ui search">
        <div className="ui icon input">
          <input
            ref={inputEl}
            type="text"
            placeholder="Search contacts "
            className="prompt"
            value={props.term}
            onChange={getSearchTerm}
          />
          <i className="search icon" />
        </div>
      </div>
      <div className="ui celled list">
        {renderContactList.length > 0
          ? renderContactList
          : "No Contacts available!"}
      </div>
    </div>
  );
}
