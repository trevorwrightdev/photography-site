import styles from '../styles/Contact.module.css'

const email = '18lmartinos@gmail.com'

export default function Contact({ }) {
  return (
    <>
      <div className={styles.container}>
        <h1>CONTACT</h1>
        <form className={styles.form} action={`https://formsubmit.co/${email}`} method="POST">
          <p>NAME</p>
          <input autoComplete='off' className={styles.name} type='text' name='name'></input>
          <p>EMAIL</p>
          <input autoComplete='off' className={styles.email} type='email' name='email'></input>
          <p>MESSAGE</p>
          <textarea autoComplete='off' type='text' name='message'>

          </textarea>
          <button type='submit'>SEND</button>
        </form>
        <p className={styles.emailContact}>or email:<br /><a href={`mailto:${email}`}>{email}</a></p>
      </div>
    </>
  )
}