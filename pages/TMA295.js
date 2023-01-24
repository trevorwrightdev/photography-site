import styles from '../styles/TMA.module.css'
import Image from 'next/image.js'
import Video from '../components/Video'
import glacier2 from '../public/mosaic/Glacier-2.jpg'
import glacier3 from '../public/mosaic/Glacier-3.jpg'
import glacier4 from '../public/mosaic/Glacier-4.jpg'
import glacier5 from '../public/mosaic/Glacier-5.jpg'
import glacier6 from '../public/mosaic/Glacier-6.jpg'
import glacier7 from '../public/mosaic/Glacier-7.jpg'
import glacier8 from '../public/mosaic/Glacier-8.jpg'
import glacier9 from '../public/mosaic/Glacier-9.jpg'
import glacier10 from '../public/mosaic/Glacier-10.jpg'
import glacier from '../public/mosaic/Glacier.jpg'

export default function TMA295() {

  return (
    <>
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <h1>Music Mosaic</h1>
          <h3>Jan 24, 2023</h3>
        </div>
        <Video src={'FgKNJycPTpo'}/>
        <div className={styles.grid}>
          <Image src={glacier} className={styles.photo}/>
          <Image src={glacier2} className={styles.photo}/>
          <Image src={glacier3} className={styles.photo}/>
          <Image src={glacier4} className={styles.photo}/>
          <Image src={glacier5} className={styles.photo}/>
          <Image src={glacier6} className={styles.photo}/>
          <Image src={glacier7} className={styles.photo}/>
          <Image src={glacier8} className={styles.photo}/>
          <Image src={glacier9} className={styles.photo}/>
          <Image src={glacier10} className={styles.photo}/>
        </div>
        <p className={styles.description}>As I listened to the composition of “Glacier” by Kainbeats, I imagined some sort of redemptive story. The piano is slow and contemplative yet constantly there throughout the piece. Towards the beginning it is basically by itself as if it is searching for another to complete its yearning. The lower notes keeping it grounded while the higher notes explore the world around them. Then soon we are met by some bass and some high hats that make the piano go faster as with excitement. This all boils into my photos as I try to capture the redemptive and sometimes forgotten items covered in snow. As if the snow was covering up these well-known items but the emergence of spring, the sun, and higher temperatures shows that these items are not forgotten. The footstep depicting the inkling of a leaf stem and the asphalt beneath which may be gone to the eye but is not forgotten. The piano in the piece hides its talent in the beginning but emerges into a beautiful and quicker pace piece as other instruments are introduced. As sign is partly covered but is still readable, yet is the sign being noticed amongst all the snow? The traffic cone slightly covered in snow as well showing it wasn’t enough in use to be dusted off. The carpet, looking and feeling its age, reminisces in the part of the song where the piano falls back into a solo piece. The carpet and the song had their high moments but fell on hard times as they wore out their use. The fast piano in the middle hitting periodic high notes as if it is reaching out for help. The carpet doing the same as it is left outside all alone. Yet we move to a picture that looks almost like the light at the end of a tunnel. Being surrounded by darkness but being centered in light. The song has its second redemption story, like a determined person getting up multiple times whenever they fall. The piano, high hats, and bass meets again giving that redemption. Other pictures that show their wear and tear are the window, focused in on its cobweb, as in the song the piano has riffs that always end in high notes. Kind of like how we end a question, both the window and the piano questioning if this is who they really are. The tree, both pictures, one creating a “v” shape, the other part showing its scars. Both being vulnerable but being unsure about its vulnerabilities. The song having its first high period then quickly descending into another low and slow period as if it questions if it deserves the happiness of the faster parts. Lastly, a leaf and a green slide. Both left all alone, no children to play with them. I made the pictures all a bit bluer to capture the melancholy and somber notes of the piano. As Bogart said, “there is something preposterous about writing criticism--particularly criticism of objects we use as much as experience.” I hope I embodied this as I captured many things, even childhood things such as a slide, that we have or had used or seen in the past a lot. Then to show how the snow covers them up but that someone still sees them.</p>
      </div>
    </>
  )
}