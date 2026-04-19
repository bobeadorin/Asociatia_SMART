import "./FormComponentStyles.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../../../../hooks/useLanguage";

export default function FormComponent() {
  const { strings } = useLanguage();
  const labels = strings.contactUsText.formSection.labels;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

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
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };
  return (
    <section className="formContainer-section">
      <form ref={form} onSubmit={sendEmail} className="contactUs-form">
        <label>{labels.name}</label>
        <input type="text" name="user_name" onChange={(e) => setName(e.target.value)} value={name} />
        <label>{labels.email}</label>
        <input type="email" name="user_email" onChange={(e) => setEmail(e.target.value)} value={email} />
        <label>{labels.subject}</label>
        <input type="text" name="user_subject" onChange={(e) => setSubject(e.target.value)} value={subject} />
        <label>{labels.message}</label>
        <textarea name="message" onChange={(e) => setMessage(e.target.value)} value={message} />
        <input id="submitBtn" type="submit" value={labels.submit} />
      </form>
    </section>
  );
}
