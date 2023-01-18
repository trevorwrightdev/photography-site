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
          My friends and I loved to do trampoline tricks when I was a freshman in high school. We got so good that we wanted to film it. So my two friends and I took the trampoline to a huge open field in autumn. We got our 3 school iPads together and filmed my first ever video. I also bought a GoPro Hero 4 for this video. Ever since that experience I have just fallen in love with filmmaking, specifically cinematography and editing. 
        </p>
        <div className={styles.dockImage}>
          <Image src={portrait}/>
        </div>
        <p>
          Skills & Proficient Programs <br />
          ⁃	Davinci Resolve <br />
          ⁃	Arri Camera Certified <br />
          ⁃	RED Camera Certified <br />
          ⁃	Adobe After Effects <br />
          ⁃	Adobe Illustrator <br />
          ⁃	Adobe Photoshop <br />
          ⁃	Adobe Lightroom <br />
          ⁃	Adobe InDesign <br />
          ⁃	Adobe Premiere Pro <br />
          ⁃	Microsoft Excel <br />
          ⁃	Microsoft Word <br />
          ⁃	Final Cut Pro <br />
        </p>
      </div>
    </>
  )
}