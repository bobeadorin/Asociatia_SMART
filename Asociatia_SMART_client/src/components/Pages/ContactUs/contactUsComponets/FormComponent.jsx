import "./FormComponentStyles.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
export default function FormComponent() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_5zwjjp5", "template_jx343hc", form.current, {
        publicKey: "S-aZEaThcQWq1k2pP",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section className="formContainer-section">
      <form ref={form} onSubmit={sendEmail} className="contactUs-form">
        <label>Numele tău:</label>
        <input type="text" name="user_name" />
        <label>Adresa de email:</label>
        <input type="email" name="user_email" />
        <label>Subiect:</label>
        <input type="text" name="user_subject" />
        <label>Mesajul tău:</label>
        <textarea name="message" />
        <input id="submitBtn" type="submit" value="Send" />
      </form>
    </section>
  );
}
