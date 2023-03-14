import styles from '../styles/CommunityCuration.module.css'

const CommunityCuration = () => {
  return (
    <>
      <div className={styles.topContainer}>
        <h1>Community Curation Creation</h1>
        <h3>Mar 14, 2023</h3>
        <p style={{ marginTop: '50px' }}>Scroll horizontally to see more</p>
      </div>
      <div className={styles.carousel}>
        <div className={styles.row}>
          <div className={styles.column}>
            <h1>Adam</h1>
            <img
              src='./community-curation/Adam/Adam.png'
              alt=''
              style={{ height: '400px' }}
            />
            <p className={styles.description}>
              My wife edited this photo of me, it turned out pretty cool 👌
            </p>
          </div>
          <div className={styles.column}>
            <h1>Ailed</h1>
            <img
              src='./community-curation/Ailed/Ailed.jpg'
              alt=''
              style={{ height: '400px' }}
            />
            <p className={styles.description}>
              It is important to me because it was the first picture I took with
              a camera that wasn’t my phone.
            </p>
          </div>
          <div className={styles.column}>
            <h1>Amanda</h1>
            <div className={styles.imageRow}>
              <img
                src='./community-curation/Amanda/Amanda 1.jpg'
                alt=''
                style={{ width: '200px' }}
              />
              <img
                src='./community-curation/Amanda/Amanda 2.jpg'
                alt=''
                style={{ width: '200px'}}
              />
              <img
                src='./community-curation/Amanda/Amanda 3.jpg'
                alt=''
                style={{ width: '200px' }}
              />
              <img
                src='./community-curation/Amanda/Amanda 4.jpg'
                alt=''
                style={{ width: '200px' }}
              />
            </div>
            <p className={styles.description}>
              This was my art project in 2020. I painted my backyard walls for
              my kids. It’s special because I never thought in a million years I
              could actually create something so cool for my kids (I promise I’m
              not an artist that can draw). This painting represents my daughter
              Rose (it’s baby Moana). I also painted the garden wall as Bikini
              Bottom for Charlie. It’s definitely an art project I’m proud of,
              not only because I didn’t think I could do it but because of what
              it represents my family ♥️
            </p>
          </div>
          <div className={styles.column}>
            <h1>Brennan</h1>
            <img
              src='./community-curation/Brennan/Brennan Drawing.png'
              alt=''
              style={{ height: '300px' }}
            />
            <p className={styles.description}>
              I made this for my sister of my niece because I feel like there’s
              something about drawing a baby that helps artists understand human
              form in simple shapes and I wanted to practice that and color as
              well
            </p>
          </div>
          <div className={styles.column}>
            <h1>Brooke</h1>
            <video
              className={styles.vid}
              playsInline
              src='./community-curation/Brooke/Brooke Video.mp4'
              controls
            ></video>
            <p className={styles.description}>
              I think the most recent thing I’ve made is this short film thingy
              😂 made it for a class assignment, it’s not good but it’s kinda
              funny
            </p>
          </div>
          <div className={styles.column}>
            <h1>Cameron</h1>
            <img
              src='./community-curation/Cameron/Cameron.jpg'
              alt=''
              style={{ height: '300px' }}
            />
            <p className={styles.description}>
              The reason why I did this was because of an old game I played
              called Metroid Prime Remastered and how it’s atmospheric beauty
              was so unique that I consider it still ahead of it’s time
              (especially with how finely polished it is now). Sci-Fi has become
              an interest for me ever since I played Metroid Prime and I hope to
              continue to be inspired and create more atmospheric designs.
            </p>
          </div>
          <div className={styles.column}>
            <h1>Colleen</h1>
            <img
              src='./community-curation/Colleen/Colleen.jpg'
              alt=''
              style={{ height: '300px' }}
            />
            <p className={styles.description}>
              I painted this portrait of my uncle. After he passed away painting
              this brought me comfort. I then blessed my aunt with it. She loves
              it.
            </p>
          </div>
          <div className={styles.column}>
            <h1>Courtney</h1>
            <img
              src='./community-curation/Courtney/Courtney.jpg'
              alt=''
              style={{ height: '300px' }}
            />
            <p className={styles.description}>
              I made a blanket for my cat! Its significant to me because I love
              the pattern and my cat and I like having a physical representation
              of my love for my cat so he knows.
            </p>
          </div>
          <div className={styles.column}>
            <h1>Ellen</h1>
            <img
              src='./community-curation/Ellen/Ellen.jpg'
              alt=''
              style={{ height: '300px' }}
            />
            <p className={styles.description}>
              I call it, "A Glimpse into Eternity." It is significant to me
              because it is where I can find peace on Earth.
            </p>
          </div>
          <div className={styles.column}>
            <h1>Emily</h1>
            <div className={styles.imageRow}>
              <img
                src='./community-curation/Emily/Emily 1.jpg'
                alt=''
                style={{ width: '200px' }}
              />
              <img
                src='./community-curation/Emily/Emily 2.jpg'
                alt=''
                style={{ width: '200px' }}
              />
              <img
                src='./community-curation/Emily/Emily 3.jpg'
                alt=''
                style={{ width: '200px' }}
              />
              <img
                src='./community-curation/Emily/Emily 4.jpg'
                alt=''
                style={{ width: '200px' }}
              />
              <img
                src='./community-curation/Emily/Emily 5.jpg'
                alt=''
                style={{ width: '200px' }}
              />
            </div>
            <p className={styles.description}>
              I wire wrap crystals and sell them at Farmer’s Markets for fun!
            </p>
          </div>
          <div className={styles.column}>
            <h1>Ethan</h1>
            <div className={styles.imageRow}>
              <img
                src='./community-curation/Ethan/Ethan 1.jpg'
                alt=''
                style={{ width: '250px' }}
              />
              <img
                src='./community-curation/Ethan/Ethan 2.jpg'
                alt=''
                style={{ width: '250px' }}
              />
              <img
                src='./community-curation/Ethan/Ethan 3.jpg'
                alt=''
                style={{ width: '250px'}}
              />
            </div>
            <p className={styles.description}>
              These are maps I made for some dnd stuff iv been planning the
              reason I like them is I was able to do a good job after a few
              years of not being able to do dnd or maps in general and there are
              things I'd like to fix but ultimately it was a show that I still
              can do this.
            </p>
          </div>
          <div className={styles.column}>
            <h1>Greg</h1>
            <img
              src='./community-curation/Greg/Greg.png'
              alt=''
              style={{ height: '300px' }}
            />
            <p className={styles.description}>
              My life has had a lot of ups and downs. This photo means a lot to
              me because it shows me that no matter what I have been through God
              can help me accomplish everything I need to.
            </p>
          </div>
          <div className={styles.column}>
            <h1>Henry</h1>
            <img
              src='./community-curation/Henry/Henry.png'
              alt=''
              style={{ height: '350px' }}
            />
            <p className={styles.description}>
              This is art to me. I created both of these and I’m planning on
              recreating it several more times. It speaks to me. I feel like I
              could be in that moment on the side of a lake or river, even
              though it’s just a combination of colors on a piece of paper.
            </p>
          </div>
          <div className={styles.column}>
            <h1>Hunter</h1>
            <img
              src='./community-curation/Hunter/Hunter.jpg'
              alt=''
              style={{ height: '350px' }}
            />
            <p className={styles.description}>
              It significant cause soldering is hard and I feel like I did a
              really good job at making this board look nice.
            </p>
          </div>
          <div className={styles.column}>
            <h1>Ian</h1>
            <img
              src='./community-curation/Ian/Ian.png'
              alt=''
              style={{ height: '350px' }}
            />
            <p className={styles.description}>
              This work of art is significant to me because this bagel can
              represent my life, beautifully chaotic. While this bagel has
              everything seasoning, chive and onion cream cheese, eggs with
              cheddar and feta cheese, topped with truffle salt and balsamic
              vinegar is okay on its own. But together is magical even though it
              can seem overwhelming.
            </p>
          </div>
          <div className={styles.column}>
            <h1>Jacob</h1>
            <img
              src='./community-curation/Jacob/Jacob.jpeg'
              alt=''
              style={{ height: '350px' }}
            />
            <p className={styles.description}>
              Here’s a picture of me as a kid I found in a scrapbook my mom made
              lol. This is significant to me because it’s a good reminder of how
              far I’ve come 😂
            </p>
          </div>
          <div className={styles.column}>
            <h1>Jarod</h1>
            <img
              src='./community-curation/Jarod/Jarod.jpeg'
              alt=''
              style={{ height: '350px' }}
            />
            <p className={styles.description}>
              The reason why this is significant to me is because even with a
              lack of color in this world, when there is something with color,
              it stands out more.
            </p>
          </div>
          <div className={styles.column}>
            <h1>Jessica</h1>
            <img
              src='./community-curation/Jessica/Jessica.jpg'
              alt=''
              style={{ height: '350px' }}
            />
            <p className={styles.description}>
              I love this piece because it was an opportunity for me to learn
              new techniques. This was the first art I outlined with a quill and
              one of my first attempts at multi color shading. I had a lot of
              fun figuring out how to balance the 2 forms of ink.
            </p>
          </div>
          <div className={styles.column}>
            <h1>McKay</h1>
            <div className={styles.imageRow}>
              <img
                src='./community-curation/McKay/mckay1.png'
                alt=''
                style={{ height: '300px'}}
              />
              <img
                src='./community-curation/McKay/mckay2.png'
                alt=''
                style={{ height: '300px'}}
              />
              <img
                src='./community-curation/McKay/mckay3.png'
                alt=''
                style={{ height: '300px' }}
              />
            </div>
            <p className={styles.description}>
              Here is a sketch I recently wrote for Divine Comedy. I consider
              comedy to be an art form because it picks people up and can
              distract them from the worries of life, even while dissecting
              those same worries. It’s something that digs into human truths to
              be effective.
            </p>
          </div>
          <div className={styles.column}>
            <h1>Nathan</h1>
            <div className={styles.imageRow} style={{ overflowY: 'scroll' }}>
              <img
                src='./community-curation/Nathan/nathan 1.jpeg'
                alt=''
                style={{ height: '150%' }}
              />
              <img
                src='./community-curation/Nathan/nathan 2.jpeg'
                alt=''
                style={{ height: '150%' }}
              />
            </div>
            <p className={styles.description}>
              This is my most recent Humans of Utah post. I took the photo and
              interviewed this random guy I met at UVU. I find it significant
              that someone I met out of the blue was willing to get photographed
              and open up to a stranger about one of his most personal
              experiences. It shows that everyone has a powerful story to share
              and a struggle that they are going through. I think of this often
              whenever I meet new people. It reminds me how great it is to
              connect with others and how important it is to be kind to any
              stranger.
            </p>
          </div>
          <div className={styles.column}>
            <h1>Nathaniel</h1>
            <img
              src='./community-curation/Nathaniel/Nathaniel Baby Yoda Loves Trash Pop.jpeg'
              alt=''
              style={{ height: '300px' }}
            />
            <p className={styles.description}>
              I finished this recently in Procreate. I love Baby Yoda, and I
              love Trash Pop, so I wanted to Baby Yoda to love Trash Pop too.
              The result is this beautiful visual representation of the phrase.
            </p>
          </div>
          <div className={styles.column}>
            <h1>Noah</h1>
            <div className={styles.imageRow}>
              <img
                src='./community-curation/Noah/Noah 1.png'
                alt=''
                style={{ height: '300px'}}
              />
              <img
                src='./community-curation/Noah/Noah 2.png'
                alt=''
                style={{ height: '300px'}}
              />
              <img
                src='./community-curation/Noah/Noah 3.png'
                alt=''
                style={{ height: '300px' }}
              />
            </div>
            <p className={styles.description}>
              I’m not an artist with paints and brushes but I consider baking to
              be an art and it’s a relief to me when things turn out like this
              loaf did. I consider it art because it’s a personal extension of
              myself that someone can enjoy and I can take pride in.
              Additionally, I can always improve on making it better and more
              tasty than the last batch! and it’s also significant as an outlet
              for stress or desire to improve and usually requires some amount
              of skill
            </p>
          </div>
          <div className={styles.column}>
            <h1>Sam</h1>
            <img
              src='./community-curation/Sam/Sam.jpg'
              alt=''
              style={{ height: '300px' }}
            />
            <p className={styles.description}>
              This piece was my first attempt to express how ADHD feels to me. I
              think the most poignant piece of it for me is that the face looks
              calm—it might be three faces smashed into one, or three faces
              pulled out of one, but it’s calm. The person experiencing it is
              just a regular person in the midst of a storm, being pulled to a
              million different directions, different thoughts leading off to
              who knows where, but the person is still just there and quiet and
              normal. I was diagnosed with ADHD only a few months ago, and it’s
              been a cool journey learning to recognize what parts of myself and
              ADHD and what parts are actually me. This piece has helped me
              understand myself better because of that.
            </p>
          </div>
          <div className={styles.column}>
            <h1>Truman</h1>
            <img
              src='./community-curation/Truman/Truman.png'
              alt=''
              style={{ height: '300px' }}
            />
            <p className={styles.description}>
              So this is my aquarium that I designed recently. This is
              significant to me because I feel a sense of joy and peace in
              creating beautiful aquascapes. This type of art is intriguing to
              me because I can see how design elements such as rocks, caves, and
              plants change the behavior of fish in regards to territory
              disputes among one another.
            </p>
          </div>
          <div className={styles.column}>
            <h1>Tyler</h1>
            <img
              src='./community-curation/Tyler/Tyler Wyrmroost.jpg'
              alt=''
              style={{ height: '300px' }}
            />
            <p className={styles.description} style={{ fontSize: '12px' }}>
              The following is a detailed map I made of the Wyrmroost dragon
              sanctuary from the Fablehaven/Dragonwatch series by Brandon Mull.
              I made this version during quarantine in mid-2020 before my
              mission and following the release of my individual favorite book
              in the series, Dragonwatch: Master of the Phantom Isle. Leading up
              to the release of the book I started rereading the series over and
              over, having a new and renewed interest and adult perspective on
              the story up to this point and this book not only delivered on the
              hype, but gave me the final details needed to complete this map.
              Upon submitting this to the author's Facebook fan page, it was
              directly seen and commented on by Mull expressing his intrigue-
              high praise! In Christmas of 2022, after returning from my mission
              and finally reading the long awaited tenth and final volume,
              Dragonwatch: Return of the Dragon Slayers, I received a package
              that had been forwarded from my old address while I was serving in
              Idaho printed with the cover photo for book ten. I opened it to
              find exclusive stickers, posters, a Tshirt, knickknacks, and a
              signed copy of the book with a note from Brandon Mull saying he
              admired my work and appreciated my dedication to the story. The
              coolest part was that there was a short part in the final book
              where the characters returned to Wyrmroost and travel to a new
              location, all the while describing their surroundings with some of
              the same extrapolated details I included in my map, down to the
              relative positions in the same cardinal directions as I took
              creative liberties with to draw out. Without being officially
              credited in the foreword, I have no doubts whatsoever that this
              project was directly used in the official release of the final
              book, and that blows my mind! This success has in turn renewed my
              desire to learn and grow my skills to reflect my passion and help
              create interesting and immersive visuals for myself and others,
              allowing my ideas to take shape even if only in this small way so
              far. I have hundreds of more sketches and pages drawn and planned
              for this series and beyond that will fill much of my free time for
              years to come.
            </p>
          </div>
          <div className={styles.column}>
            <h1>Weston</h1>
            <img
              src='./community-curation/Weston/Weston.jpeg'
              alt=''
              style={{ height: '300px' }}
            />
            <p className={styles.description}>
              I recently finished this puzzle with my friends. It took a lot of
              time and cooperation to put it all together. We had to coordinate
              on which parts we were working on and when we could work on it.
              Even though we have a physical canvas to show for it, I also
              consider the combined time and effort to be part of the artistic
              experience.
            </p>
          </div>
        </div>
      </div>
      <p className={styles.bottomDescription}>
        All the Beauty of Art <br /><br />
        Art is a very subjective topic, to one person a simple cake is nothing
        more than a delicious dessert while to the baker it is their finest
        piece of art. Because art is so subjective, in this project we wanted to
        highlight the unique forms of art that our friends and family make, and
        even more so, we wanted to give them a platform to be able to explain
        why it was significant to them. <br /><br />
        Something unique that we noticed in doing this project is that we
        received submissions from people of all ages, children, adults, and
        seniors. Everyone has a piece of art, and by participating in this
        project some were able to see how significant a piece of art they
        created really is. According to Ito and others in Connected Learning an
        Agenda for Research and Design, there are still challenges that we face
        in connecting different generations using this form of technology,
        however, it is through this technology that we are able to bridge the
        generational gap as people discover shared interests that for some
        reason or another they had previously kept to themselves (70). By
        creating this website where people of all backgrounds can share an art
        piece that they have put a little of themselves into, we are hoping to
        help be able to bridge this gap and encourage the interconnectedness of
        others. <br /><br />
        This part of the website allows for people’s art to be seen individually
        while still being able to scroll through and see how the other art
        pieces compare. It allows time for the viewer to take in each individual
        art piece separately as if they were at the museum instead of all at
        once as if they were on someone’s instagram page. This type of
        collaboration helps us to study not only what other’s think is art, but
        also what type of community we have around us in the similarities and
        differences we have with certain art. For instance, many of my friends
        had actual drawn pieces of art which is also what I would have submitted
        if I was asked our prompt. We could have even created a hashtag to get
        more submissions and bring an even larger community just like
        #BlackGirlMagic did. Though we aren’t pushing something as important, it
        is helpful to know that their are people out there all considering their
        little slices of life to be art, making many more people artists than we
        originally thought.
      </p>
    </>
  )
}

export default CommunityCuration
