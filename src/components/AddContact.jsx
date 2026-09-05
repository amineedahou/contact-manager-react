import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddContact({ addContactHandler }) {
  const navigate = useNavigate();

  const [contact, setContact] = useState({
    name: "",
    email: "",
  });

  function add(e) {
    e.preventDefault();
    if (contact.name.trim() === "" || contact.email.trim() === "") {
      alert("All the fields are mandatory!");
      return;
    }
    addContactHandler(contact);
    setContact({ name: "", email: "" });
    navigate("/");
  }
  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className=" ui form" onSubmit={add}>
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
        <button className="ui button blue ">Add</button>
      </form>
    </div>
  );
}
