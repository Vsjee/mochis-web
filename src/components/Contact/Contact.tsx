import { SyntheticEvent, useRef } from 'react';
import './Contact.css';

function Contact() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLTextAreaElement>(null);

  const sendForm = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <section className='contact'>
      <h1 className='contact__title'>Contacto</h1>
      <form className='contact__form'>
        <input
          ref={nameRef}
          type='text'
          name='name'
          className='form__input'
          placeholder='Tu nombre'
          min={5}
          max={30}
          required
        />
        <input
          ref={emailRef}
          type='email'
          name='email'
          className='form__input'
          placeholder='Tu correo'
          min={5}
          max={50}
          required
        />
        <textarea
          ref={subjectRef}
          name='subject'
          id='subject'
          cols={30}
          rows={10}
          className='form__text'
          placeholder='Que te gustaria decirnos (Opcional). maximo 300 caracteres'
        ></textarea>
        <button className='form__btn' onClick={sendForm}>
          Enviar
        </button>
      </form>
    </section>
  );
}

export default Contact;
