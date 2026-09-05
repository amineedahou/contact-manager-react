import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function EditContact({ updateContactHandler }) {
  const location = useLocation();

  const existingContact = location.state?.contact || {};

  const navigate = useNavigate();

  const [contact, setContact] = useState({
    id: existingContact.id || "",
    name: existingContact.name || "",
    email: existingContact.email || "",
  });

  function update(e) {
    e.preventDefault();
    if (contact.name.trim() === "" || contact.email.trim() === "") {
      alert("All the fields are mandatory!");
      return;
    }

    updateContactHandler(contact);
    setContact({ name: "", email: "" });
    navigate("/");
  }
  return (
    <div className="ui main">
      <h2>Edit Contact</h2>
      <form className=" ui form" onSubmit={update}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
          />
        </div>
        <button className="ui button blue ">Update</button>
      </form>
    </div>
  );
}
