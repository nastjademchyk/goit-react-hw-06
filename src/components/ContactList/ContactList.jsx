import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import React from "react";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={s.list}>
      {contacts.map((contact) => (
        <li className={s.item} key={contact.id}>
          <Contact {...contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
