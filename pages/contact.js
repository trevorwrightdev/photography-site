import styles from '../styles/Contact.module.css'
import Image from 'next/image' 
import insta from '../public/images/instagram-logo.png'
import youtube from '../public/images/youtube-logo.png'
import linkedin from '../public/images/linkedin-logo.png'

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
        <div className={styles.socialsContainer}>
          <div className={styles.social}>
            <Image src={insta} height={20} width={20}/>
            <a href="https://www.instagram.com/lee_martinos/" target="_blank" rel="noopener noreferrer">instagram</a>
          </div>
          <div className={styles.social}>
            <Image src={youtube} height={20} width={20}/>
            <a href="https://www.youtube.com/leemartinos" target="_blank" rel="noopener noreferrer">youtube</a>
          </div>
          <div className={styles.social}>
            <Image src={linkedin} height={20} width={20}/>
            <a href="https://www.linkedin.com/in/leemartinos/" target="_blank" rel="noopener noreferrer">linkedin</a>
          </div>
        </div>
      </div>
    </>
  )
}