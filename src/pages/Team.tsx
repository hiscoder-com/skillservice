import { Classes } from '../constants/ClassesPages'

function Team() {
  const { TITLE, SUBTITLE } = Classes
  return (
    <>
      <h2 className={TITLE}>Meet the Skilldor Team</h2>
      <p className='mt-3 sm:mt-6'>
        At Skilldor, our team is driven by a shared passion for basketball,
        technology, and player development. Each member brings a unique set of
        skills and expertise to make Skilldor the ultimate training platform for
        basketball enthusiasts.
      </p>
      <h3 className={SUBTITLE}>Dima</h3>
      <p className='mt-3 sm:mt-6'>
        <b>Uncertified Coach | Co-Founder Dima</b>
        <br /> is a dedicated basketball enthusiast who believes that skill
        development should be structured, fun, and engaging. As a co-founder of
        Skilldor, he focuses on creating training programs that help players
        build consistency and commitment to their game.
      </p>
      <h3 className={SUBTITLE}>Nik</h3>
      <p className='mt-3 sm:mt-6'>
        <b>Basketball Player | Co-Founder Nik</b>
        <br /> is a passionate player who understands the challenges and
        excitement of skill development. As a co-founder, he brings firsthand
        experience to Skilldor, ensuring that the app meets the needs of players
        at all levels.
      </p>
      <h3 className={SUBTITLE}>GeCraft</h3>
      <p className='mt-3 sm:mt-6'>
        <b>Technical Support</b> <br /> GeCraft provides the technical expertise
        that powers Skilldor. From app development to maintaining a seamless
        user experience, the team at GeCraft ensures that Skilldor remains a
        cutting-edge basketball training platform. Love you guys!
      </p>
      <h3 className={SUBTITLE}>You</h3>
      <p className='mt-3 sm:mt-6'>
        <b>Basketball Fan</b> <br /> You are an essential part of the Skilldor
        community! Whether you are a beginner or an experienced player, your
        dedication to improving your skills and pushing your limits makes you an
        integral part of our journey.
      </p>
    </>
  )
}

export default Team
