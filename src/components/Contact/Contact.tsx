import { SyntheticEvent, useRef } from 'react';
import './Contact.css';
import { supabase } from './lib/api';

function Contact() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLTextAreaElement>(null);

  const sendForm = async (e: SyntheticEvent) => {
    e.preventDefault();
    let name = nameRef?.current?.value;
    let email = emailRef?.current?.value;
    let subject = subjectRef?.current?.value;

    if (name !== '' && email !== '') {
      let { data: contact, error } = await supabase
        .from('contact')
        .insert({ userName: name, subject: subject, userEmail: email })
        .single();

      if (error) {
        console.log('error', error);
      } else {
        console.log(contact);
        cleanInputs();
      }
    } else {
      console.error('error');
    }
  };

  const cleanInputs = () => {
    if (nameRef.current && emailRef.current && subjectRef.current) {
      nameRef.current.value = '';
      emailRef.current.value = '';
      subjectRef.current.value = '';
    }
  };

  return (
    <section className='contact'>
      <h1 className='contact__title' id='contact'>
        Contacto
      </h1>
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
