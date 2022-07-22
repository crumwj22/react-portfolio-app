import React, { useState } from "react";

function Contact(props) {
  const [input, setInput] = useState("");

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.random(Math.floor() * 1000),
      text: input,
    });

    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // First we check to see if "edit" prop exists. If not, we render the normal form
  // If the prop "edit" exists, we know to render the update form instead
  return !props.edit ? (
    <div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          name="name"
          email="email"
          message="message"
          onChange={handleChange}
        ></input>

        <button className="contact-button">Add message</button>
      </form>
    </div>
  ) : (
    <div>
      <h3>Update entry: {props.edit.value}</h3>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          name="name"
          email="email"
          message="message"
          onChange={handleChange}
        ></input>

        <button className="contact-button">Update</button>
      </form>
    </div>
  );
}

export default Contact;
