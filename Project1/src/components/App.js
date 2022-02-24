import "./App.css";
import React from "react";
import Header from "./header";
import AddContact from "./addContact";
import ContactList from "./ContactList";

function App() {
  const contacts = [
    {
      id: "1",
      name: "JS",
      email: "js.morel130@gmail.com",
    },
    {
      id: "2",
      name: "Camille",
      email: "Camille@gmail.com",
    },
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
