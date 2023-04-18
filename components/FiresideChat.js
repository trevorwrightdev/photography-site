import styles from '../styles/FiresideChat.module.css'
import Video from '../components/Video'

const FiresideChat = () => {
  return (
    <>
      <div className={styles.topContainer}>
        <h1>Fireside Chat</h1>
        <h3>Apr 18, 2023</h3>
      </div>
      <Video src={'y2AmkGSu3Hw'} />
      <p className={styles.description}>
        I have never been one to be too serious about things and I hoped to
        capture that in my fireside chat. I wanted to make a quick paced edited
        film that makes some of my beliefs seem high and mighty, while in
        reality, they are just some beliefs that many people can relate to or at
        least have opinions on. Like many people will agree and disagree with me
        on points such as drinking tap water is better than bottled water and
        Taco is the best fast-food restaurant. But that is what makes us all
        human. We have our beliefs, and we think they are the greatest thing,
        yet find it hard to understand when other’s beliefs differ from ours.
        Yet, I tried to keep these beliefs inconsequential. They aren’t big
        things worth debating endlessly over, but many of them can resonate with
        college students. Having the persona of a high-class businessman for
        small ideals gives a comedic relief in delivering these beliefs. This
        helps to relieve tension, especially for those who may disagree with my
        beliefs, and create more community discussion. Those who do agree will
        have a good laugh right along with those that don’t (hopefully). Another
        thing with my video is you maybe be tempted to only label these things
        as opinions. But I think that beliefs are just very strong opinions,
        ergo, I would stand by these beliefs of mine even under heat. But I hope
        that everyone enjoys this and has a fun time with these hopefully
        relatable beliefs.
      </p>
    </>
  )
}

export default FiresideChat
