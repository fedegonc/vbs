import { FC } from 'react';

const Contact: FC = () => {
  return (
    <main>
      <h1>Contáctanos</h1>
      <form className="contact-form">
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" placeholder="Ingrese su nombre" required />

        <label htmlFor="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" placeholder="Ingrese su correo electrónico" required />

        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" name="message" rows={5} placeholder="Escriba su mensaje aquí" required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </main>
  );
};

export default Contact;
