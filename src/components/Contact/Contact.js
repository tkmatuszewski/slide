import React from 'react';
import Button from '../Button/Button';

export default function ContactForm() {
  return (
    <div className="contact">
      <div className="contact__bg">
        <div className="contact__cnt">
          <div className="contact__col">
            <h1>Say Aloha!</h1>
            <p className="contact__text">
              We may be at the beach right now but We'll get back to you as soon as possible. Meanwhile follow us on:
            </p>
            <ul className="contact__list">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Google</li>
              <li>Tweeter</li>
            </ul>
          </div>
          <form className='contact__form'>
            <label>
              Your Name
              <input type="text" placeholder="John" />
            </label>
            <label>
              Email
              <input type="email" placeholder="john@gmail.com" />
            </label>
            <label>
              Phone
              <input type="text" placeholder="+39 567 754 432" />
            </label>
            <label>
              Message
              <input type="text" placeholder="How can we help you..." />
            </label>
            {/* <button className="button">Send</button> */}
            <Button name="Send" className={'button'}/>
          </form>
        </div>
      </div>
    </div>
  );
}
