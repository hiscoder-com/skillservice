import List from '../components/List'
import Paragraph from '../components/Paragraph'
import Title from '../components/Title'

const keyFeatures = [
  <>
    <b>Customizable Training Sessions</b> – Create personalized practice
    routines tailored to your goals.
  </>,
  <>
    <b>Gamified Experience</b> – Earn XP, complete challenges, and track
    progress with interactive features.
  </>,
  <>
    <b>Performance Analytics</b> – Monitor your shooting accuracy, dribbling
    consistency, and training commitment.
  </>,
  <>
    <b>Skill Progression System</b> – Level up through Beginner, Rookie,
    Intermediate, Skilled, and Legend tiers.
  </>,
  <>
    <b>Community Engagement</b> – Join a community of dedicated basketball
    players and challenge yourself with monthly competitions.
  </>,
]

const whoIsSkilldorFor = [
  'Aspiring basketball players looking to improve their skills.',
  "Coaches who want to track their players' progress and provide structured training.",
  ' Parents looking for a guided system to help their kids practice consistently.',
]

function About() {
  return (
    <>
      <Title type='h2'>About Skilldor</Title>
      <Paragraph>
        Welcome to <b>Skilldor</b>, the ultimate basketball training platform
        designed to help players of all levels improve their skills through
        structured practice, gamification, and performance tracking. Whether
        you're a beginner or an advanced player, Skilldor provides personalized
        training programs to enhance your shooting, dribbling, and overall
        basketball abilities.
      </Paragraph>
      <Title type='h3'>Our Mission</Title>
      <Paragraph>
        At Skilldor, we believe that skill development should be engaging,
        rewarding, and structured. Our goal is to provide basketball players
        with a powerful tool that keeps them motivated, tracks their progress,
        and helps them reach their full potential.
      </Paragraph>
      <Title type='h3'>Key Features</Title>
      <List items={keyFeatures} />
      <Title type='h3'>Why Choose Skilldor?</Title>
      <Paragraph>
        Skilldor is not just a training app – it’s a{' '}
        <b>basketball development ecosystem</b> that helps players stay
        committed to their goals. With a user-friendly interface, intelligent
        progress tracking, and a fun approach to practice, Skilldor makes
        skill-building more effective and enjoyable.
      </Paragraph>
      <Title type='h3'>Who Is Skilldor For?</Title>
      <List items={whoIsSkilldorFor} />
      <Title type='h3'>Join Skilldor Today!</Title>
      <Paragraph>
        Start your basketball journey with Skilldor and take your game to the
        next level! Visit{' '}
        <a
          href='https://skilldor.com'
          className='font-bold underline text-primary-500'>
          https://skilldor.com
        </a>{' '}
        to learn more and get started.
      </Paragraph>
      <Paragraph>
        For any inquiries, feel free to contact us at{' '}
        <a
          href='mailto:support@skilldor.com'
          className='font-bold underline text-primary-500'>
          support@skilldor.com
        </a>
        .
      </Paragraph>
    </>
  )
}

export default About
