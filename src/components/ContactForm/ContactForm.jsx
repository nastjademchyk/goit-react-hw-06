import s from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    onAdd(newContact);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={s.form}>
        <div className={s.search_lines}>
          <div className={s.block}>
            <label htmlFor="">Name</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="span" className={s.error} />
          </div>
          <div className={s.block}>
            <label htmlFor="">Number</label>
            <Field type="text" name="number" />
            <ErrorMessage name="number" component="span" className={s.error} />
          </div>
        </div>
        <button className={s.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;