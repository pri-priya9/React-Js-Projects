import React, { useRef } from "react";
import './UseRef.css'

const InputFocusManager = () => {
 
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const phoneInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameInputRef.current.value;
    const email = emailInputRef.current.value;
    const phone = phoneInputRef.current.value;

    alert(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}`);
  };

  return (
    <div className="useref-div">
      <h1 className="useref-heading">Input Field Manager</h1>
      <form onSubmit={handleSubmit} className="useref-form">

        <div className="useref-div2">
            Name: 
            <input
              type="text"
              ref={nameInputRef}
              placeholder="Enter your name"
              className="useref-input"
            />
        </div>

        <div className="useref-div2">
          Email: 
            <input
              type="email"
              ref={emailInputRef}
              placeholder="Enter your email"
              className="useref-input"
            />
          </div>

        <div className="useref-div2">
            Phone: 
            <input
              type="text"
              ref={phoneInputRef}
              placeholder="Enter your phone number"
              className="useref-input"
            />
        </div>

        <button type="submit" className="useref-button">Submit</button>

      </form>
    </div>
  );
};

export default InputFocusManager;
