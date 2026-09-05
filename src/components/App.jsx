import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import api from "../api/contacts";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import EditContact from "./EditContact";

function App() {
  const [contacts, setContacts] = useState([]);
  const [serchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  //RetrieveContacts
  const retriveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };
  useEffect(() => {
    const getAllContacts = async () => {
      try {
        const allContacts = await retriveContacts();
        if (allContacts) setContacts(allContacts);
      } catch (error) {
        console.log("Error fetching contacts:", error);
      }
    };
    getAllContacts();
  }, []);

  const AddContactHandler = async (contact) => {
    console.log("Received contact", contact);
    const request = {
      id: Date.now().toString(),
      ...contact,
    };
    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]);
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  function searchHandler(searchTerm) {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    } else {
      setSearchResults(contacts);
    }
  }

  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id } = response.data;
    setContacts(
      contacts.map((con) => {
        return con.id === id ? { ...response.data } : con;
      }),
    );
  };

  return (
    <div className="ui container" style={{ marginTop: "70px" }}>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/add"
            element={<AddContact addContactHandler={AddContactHandler} />}
          />

          <Route
            path="/"
            element={
              <ContactList
                contacts={serchTerm.length < 1 ? contacts : searchResults}
                getContactId={removeContactHandler}
                term={serchTerm}
                searchKeyword={searchHandler}
              />
            }
          />
          <Route path="/contact/:id" element={<ContactDetail />} />
          <Route
            path="/edit/:id"
            element={
              <EditContact updateContactHandler={updateContactHandler} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
