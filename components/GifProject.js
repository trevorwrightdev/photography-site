import styles from '../styles/GifProject.module.css'
import gif from '../public/gif-cinema.gif'
import Image from 'next/image'
import { StyleRegistry } from 'styled-jsx'

const GifProject = () => {
  return (
    <>
        <div className={styles.topContainer}>
            <h1>GIF Cinema</h1>
            <h3>Feb 6, 2023</h3>
        </div>
        <div className={styles.gif}>
            <div className={styles.background}/>
            <Image src={gif} fill style={{objectFit: 'cover'}}/>
        </div>
        <p className={styles.description}>I really enjoyed making this piece as I have always wanted to get creative in combining amination and cinematography. Using After Effects I was able to create a sort of border of GIFs around myself eating cereal. All these GIFs can be separated into their own respective piece which I think could also look cool by themselves but together they tell the story of how I never stop eating. In our last reading it talked about the Blackberry phone being replaced by the iPhone since the iPhone appealed to the visual senses instead of textual. Creating with GIFs I think has done the same thing here. Text in and of itself is stuck in time so to say. We can keep texts on our phones forever and read them over in the future if we are so, please. It just not the same with a long video to be stuck in time because it is such an ordeal to watch an entire video. While GIFs on the other hand can take 5 seconds and keep you stuck there for a long time. In my case I thought about how much I eat every day. Seems like I can’t escape the desire for food, therefore I stuck myself in an endless loop of eating cereal surrounded by a GIF interpretation of my mind. The stars multiply as I eat more and fill the screen representing the neurons firing in my brain eventually signaling when I am full. The blaring large yet distorted letters spelling out “food” indicating what I am thinking about. They are distorted because they sometimes get in the way of what I am currently thinking, yet they never are fully out of focus since food is huge motivator of how I act and interact with the world around me. The colors were also pretty important to this piece as they make the piece feel less stagnant. I had them constantly changing as if to create the colors of the food pyramid or MyPlate or whatever it is they are calling it now. Eating the same food over and over would create a dull and colorless existence such as America is heading for with all the fast-food restaurants serving lots of brown meat and bread. Having a colorful diet makes a well-balanced individual and fills one’s life with color. So constantly changing color also indicates how one feels if they eat a well-balanced diet. Please enjoy this piece and remember that food should be fun! </p>
    </>
  )
}

export default GifProject