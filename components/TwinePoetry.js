import styles from '../styles/Twine.module.css'

const TwinePoetry = () => {
  return (
    <>
      <div className={styles.topContainer}>
          <h1>Twine Poetry</h1>
          <h3>Feb 27, 2023</h3>
      </div>
      <iframe src='./twine/twine.html' style={{ border: 'none', width: '100%', height: '900px' }} className={styles.iframe}/>
      <p className={styles.description}>
         I chose to do this off of a song called “It’s Only” by ODESZA which has some nice overtones, but the lyrics can be kind of dark. I wanted to include most of the song’s lyrics in there but to go on tangents throughout the twine to distract the player from their main goal. Especially since the song emphasizes a lot about the imagination, and the imagination wanders a lot so I tried to capture that. The instrumental of the song plays throughout the background so as to immerse the player more into the game. This too is where I hope the active creation of belief comes in on part of the player. Murray from our readings said, “The great advantage of participatory environments in creating immersion is their capacity to elicit behavior that endows the imaginary objects with life.” My twine attempts to do this with some wordplay and many GIFs which take you into multiple movie references. I tried to be like James Halliday from the book Ready Player One who was always quoting movies and putting them into his games. So, with some wordplay, quotes, and GIFs brought these references to life. The active creation of belief I am going for is that this game is just a big puzzle. Technically, if you have the lyrics to the song then the puzzle is really easy, but those who do not will find themselves on some long, some short imaginative tangents that might remind them of some good movies. I even put some easter eggs in there to reward (or punish depending on how you view it) when they get deep enough. The whole game is one big, trapped cycle as well which means you can discover new things in different playthroughs. This is where I think we need Murray’s advice to “structure our participation as a visit.” That way we separate this world from the normal world (especially with so many references to the normal world) and so we can become more immersed for periods of time. Maybe you won’t discover everything, but that is ok. Those who want to can discover the twists and turns while those who don’t, can attempt to beat the game and move on. Creating all the different words, colors, music, and GIFs to combine into one elaborate story really was a great way to experience text in a new way. This would especially be fun if apps like iMessage could become this powerful and would affect how we communicate with our friends and family. 
      </p>
    </>
  )
}

export default TwinePoetry