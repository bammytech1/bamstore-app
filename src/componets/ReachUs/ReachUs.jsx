import "./ReachUs.scss";
import phone from "../../assets/phone-icon.svg";
import email from "../../assets/email-icon.svg";
import address from "../../assets/address-icon.svg";
import bkVideo from "../../assets/reachus.mp4";

import { useState, useEffect } from "react";

function ReachUs() {
  const initialValues = { email: "", subject: "", message: "" };
  const [inputs, setInputs] = useState(initialValues);
  const [inputsError, setInputsError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  function submit(e) {
    e.preventDefault();
    validateForm(inputs);
    setInputs({ email: "", subject: "", message: "" });
    setInputsError(validateForm(inputs));
    setIsSubmit(true);
    // alert(inputs)
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInputs({ ...inputs, [name]: value });
  }

  useEffect(() => {
    if (Object.keys(inputsError).length === 0 && isSubmit) {
      console.log(inputs);
    }
  }, [inputs, inputsError, isSubmit]);

  const validateForm = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!values.email) {
      errors.email = "Email is Required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid Email";
    }
    return errors;
  };

  return (
    <div className="reach-us-container">
      <video className="bkvideo" playsInline loop muted autoPlay>
        <source src={bkVideo} />
      </video>

      <div className="reach-us-content">
        {Object.keys(inputsError).length === 0 && isSubmit ? (
          <div className="success">Message sent Successfully</div>
        ) : null}
        <form method="post" onSubmit={submit}>
          <h3>Get in Touch</h3>
          <input
            type="email"
            name="email"
            id=""
            onChange={handleChange}
            value={inputs.email}
            placeholder="Your email"
          />
          <p>{inputsError.email}</p>
          <input
            type="text"
            name="subject"
            id=""
            onChange={handleChange}
            value={inputs.subject}
            placeholder="Subject"
          />
          <textarea
            type="text"
            name="message"
            id=""
            onChange={handleChange}
            value={inputs.message}
            placeholder="Message"
          />
          <button className="btn-sec" type="submit">
            SUBMIT NOW{" "}
          </button>
          {/* <p>{inputs.email} {inputs.subject} {inputs.message}</p> */}
        </form>
      </div>
      <div className="reach-us-container-2">
        <div className="reach-us-2">
          <div className="col-dis">
            <div className="row-dis">
              <img src={phone} alt="" />
              <h4>PHONE</h4>
            </div>
            <p>+234(813) 964-79-15</p>
          </div>
          <div className="col-dis">
            <div className="row-dis">
              <img src={email} alt="" />
              <h4>EMAIL</h4>
            </div>
            <p>info@elearning.com</p>
          </div>
          <div className="col-dis">
            <div className="row-dis">
              <img src={address} alt="" />
              <h4>ADDRESS</h4>
            </div>
            <p>41 oyemekun road Akure, Ondo State</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReachUs;
