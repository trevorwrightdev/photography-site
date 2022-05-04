import styles from '../styles/Contact.module.css'

export default function Contact({ }) {
  return (
    <>
      <div className={styles.container}>
        <h1>CONTACT</h1>
        <form className={styles.form} action="https://formsubmit.co/trevor.wright.710@gmail.com" method="POST">
          <p>NAME</p>
          <input autoComplete='off' className={styles.name} type='text' name='name'></input>
          <p>EMAIL</p>
          <input autoComplete='off' className={styles.email} type='email' name='email'></input>
          <p>MESSAGE</p>
          <textarea autoComplete='off' type='text' name='message'>

          </textarea>
          <button type='submit'>SEND</button>
        </form>
        <p className={styles.emailContact}>or email:<br /><a href='mailto:john@example.com'>your@email.com</a></p>
      </div>
    </>
  )
}