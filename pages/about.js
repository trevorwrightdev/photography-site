import Image from 'next/image'
import dock from '../public/photos/lake-dock.jpeg'
import portrait from '../public/photos/portrait.jpeg'


import styles from '../styles/About.module.css'

export default function About({ }) {
  return (
    <>
      <div className={styles.aboutContainer}>
        <div className={styles.dockImage}>
          <Image src={dock}/>
        </div>
        <h1 style={{textDecoration: 'underline'}}>ABOUT ME</h1>
        <p>
          LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. UT ORNARE TELLUS EGET QUAM FINIBUS VEHICULA. NAM VITAE VEHICULA EST. INTEGER NON VARIUS IPSUM, NON TEMPUS ARCU. VESTIBULUM RHONCUS, AUGUE ID PELLENTESQUE TEMPUS, TORTOR AUGUE PHARETRA ODIO, SED SEMPER VELIT TURPIS VEL ENIM. ALIQUAM ERAT VOLUTPAT. SED QUIS VESTIBULUM LACUS. MORBI AC CONVALLIS NISL. PHASELLUS ID QUAM EU LECTUS ELEMENTUM VULPUTATE NEC IN SAPIEN. 
        </p>
        <div className={styles.dockImage}>
          <Image src={portrait}/>
        </div>
        <p>
          LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. UT ORNARE TELLUS EGET QUAM FINIBUS VEHICULA. NAM VITAE VEHICULA EST. INTEGER NON VARIUS IPSUM, NON TEMPUS ARCU. VESTIBULUM RHONCUS, AUGUE ID PELLENTESQUE TEMPUS, TORTOR AUGUE PHARETRA ODIO, SED SEMPER VELIT TURPIS VEL ENIM. ALIQUAM ERAT VOLUTPAT. SED QUIS VESTIBULUM LACUS. MORBI AC CONVALLIS NISL. PHASELLUS ID QUAM EU LECTUS ELEMENTUM VULPUTATE NEC IN SAPIEN. 
        </p>
      </div>
    </>
  )
}