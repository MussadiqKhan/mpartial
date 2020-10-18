import React, { useState } from "react";
import "./contact.styles.css";

const Contact = () => {
  const [fields, setFields] = useState({
    email: "",
    name: "",
    number: "",
    message: "",
  });

  const onChange = (e) =>
    setFields({ ...fields, [e.target.name]: e.target.value });

  return (
    <div className="contact-us">
      <div className="container">
        <div className="main">
          <h1>Contact us</h1>
        </div>
        <div className="contact-form">
          <div className="float-labels-form">
            <form>
              <div className="form">
                <div className="input-field">
                  <div className="form-field">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={fields.name}
                      onChange={onChange}
                      required
                    />
                    <label for="name">First Name</label>
                  </div>
                  <div className="form-field">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      onChange={onChange}
                      value={fields.email}
                      required
                    />
                    <label for="email">Email</label>
                  </div>
                  <div className="form-field">
                    <input
                      type="text"
                      name="number"
                      id="number"
                      onChange={onChange}
                      value={fields.number}
                      required
                    />
                    <label for="number">Cell</label>
                  </div>
                </div>
                <div className="textarea-field">
                  <div className="form-field">
                    <textarea
                      type="text"
                      name="message"
                      id="message"
                      onChange={onChange}
                      value={fields.message}
                      required
                    />
                    <label for="message">Message</label>
                  </div>
                </div>
              </div>
              <div className="form-button">
                {fields.name &&
                fields.number &&
                fields.message &&
                fields.email !== "" ? (
                  <input type="submit" name="submit" value="Submit" />
                ) : (
                  <input
                    className="disabled"
                    type="submit"
                    name="submit"
                    value="Submit"
                    disabled
                  />
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
