import React, {useState} from 'react';
import Button from '../Button/Button';
import './Contact.scss';

export default function ContactForm() {

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name !== "" &&
      mail !== "" &&
      phone !== "" &&
      message !== "") {
      setSending(true);
    }
  }

  return (
    <div className="contact">
      <div className="contact__bg">
        <div className="contact__cnt">
          <h1>Say Aloha!</h1>
          <p className="contact__text">
            We may be at the beach right now but We'll get back to you as soon
            as possible.
          </p>
          <div className='contact__list'>Meanwhile follow us on
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Google</li>
              <li>Tweeter</li>
            </ul>
          </div>
          {sending ? (
            <div className="">Message sent! We'll get in touch soon!</div>
          ) : (
            <form
              className="contact__form"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <label className={name != "" ? "compl" : null}>
                Your Name
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="John"
                />
              </label>
              <label className={mail != "" ? "compl" : null}>
                Email
                <input
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  type="email"
                  placeholder="john@gmail.com"
                />
              </label>
              <label className={phone != "" ? "compl" : null}>
                Phone
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  placeholder="+39 567 754 432"
                />
              </label>
              <label className={message != "" ? "compl" : null}>
                Message
                <input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  type="text"
                  placeholder="How can we help you..."
                />
              </label>
              <Button name="Send" cl={"button"} />
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
