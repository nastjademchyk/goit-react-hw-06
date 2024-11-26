import s from "./Contact.module.css";
import React from "react";
import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ name, number, onDelete, id }) => {
  return (
    <div className={s.container}>
      <div className={s.main}>
        <div className={s.name}>
          <FaUser />
          <p>{name}</p>
        </div>
        <div className={s.number}>
          <FaPhoneAlt />
          <p>{number}</p>
        </div>
      </div>
      <button className={s.btn} type="submit" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
