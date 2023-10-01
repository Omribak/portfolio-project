import { useState, useEffect } from "react";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./contact.css";

function Contact() {
  // State to manage form data
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  // State to manage form submission status
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Use useEffect to show the toast when formSubmitted changes
  useEffect(() => {
    if (formSubmitted) {
      toast.success("Form submitted successfully!", {
        className: "blue-toast",
      });
    }
  }, [formSubmitted]);

  function Submit(e) {
    const formEle = document.querySelector("form");
    const formData = new FormData(formEle);

    fetch(
      "https://script.google.com/macros/s/AKfycbxn6waXmWk19pzQ7A_r_39UAL_ndrGFf-VC2Wxc9T-gea5V2ZqdbsdfxzbzjpoF_95oew/exec",
      {
        method: "POST",
        body: formData,
      }
    );

    // Reset the form data
    setFormData({
      Name: "",
      Email: "",
      Message: "",
    });

    // Set formSubmitted to true
    setFormSubmitted(true);

    e.preventDefault();
  }

  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="font-style: italic text-4xl font-extrabold text-blue-500">
              Contact me
            </h1>
            <div className="contact-information">
              <div className="mail">
                <div className="mail-icon">
                  <AiFillMail color="gold" />
                </div>
                <p>omribak2@gmail.com</p>
              </div>
              <div className="phone">
                <div className="phone-icon">
                  <AiFillPhone color="gold" />
                </div>
                <p>054-5668382</p>
              </div>
            </div>
          </div>
          <div className="contact-right">
            <form className="form" onSubmit={(e) => Submit(e)}>
              <input
                type="text"
                name="Name"
                placeholder="Your Name"
                value={formData.Name}
                onChange={(e) =>
                  setFormData({ ...formData, Name: e.target.value })
                }
                required
              />
              <input
                type="email"
                name="Email"
                placeholder="Your Email"
                value={formData.Email}
                onChange={(e) =>
                  setFormData({ ...formData, Email: e.target.value })
                }
                required
              />
              <textarea
                name="Message"
                rows="6"
                placeholder="Your Message"
                value={formData.Message}
                onChange={(e) =>
                  setFormData({ ...formData, Message: e.target.value })
                }
              ></textarea>
              <button type="submit" className="btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;
