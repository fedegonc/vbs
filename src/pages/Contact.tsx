import { FC } from 'react';

const Contact: FC = () => {
  return (
    <main>
      <h1>Contact Us</h1>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows={5} placeholder="Write your message here" required></textarea>

        <button type="submit">Send</button>
      </form>
    </main>
  );
};

export default Contact;
