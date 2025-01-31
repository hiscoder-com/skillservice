function About() {
  const titleClasses = 'text-2xl font-semibold ml-10 text-primary-500'
  const subtitleClasses = 'text-xl font-semibold ml-6 mt-6 text-primary-500'

  return (
    <>
      <h2 className={titleClasses}>About Skilldor</h2>
      <p className='mt-3'>
        Welcome to <b>Skilldor</b>, the ultimate basketball training platform
        designed to help players of all levels improve their skills through
        structured practice, gamification, and performance tracking. Whether
        you're a beginner or an advanced player, Skilldor provides personalized
        training programs to enhance your shooting, dribbling, and overall
        basketball abilities.
      </p>
      <h3 className={subtitleClasses}>Our Mission</h3>
      <p className='mt-3'>
        At Skilldor, we believe that skill development should be engaging,
        rewarding, and structured. Our goal is to provide basketball players
        with a powerful tool that keeps them motivated, tracks their progress,
        and helps them reach their full potential.
      </p>
      <h3 className={subtitleClasses}>Key Features</h3>
      <div className='mt-3'>
        <ul className='flex flex-col gap-3'>
          <li className='list-disc ml-6'>
            <b>Customizable Training Sessions</b> – Create personalized practice
            routines tailored to your goals.
          </li>
          <li className='list-disc ml-6'>
            <b>Gamified Experience</b> – Earn XP, complete challenges, and track
            progress with interactive features.
          </li>
          <li className='list-disc ml-6'>
            <b>Performance Analytics</b> – Monitor your shooting accuracy,
            dribbling consistency, and training commitment.
          </li>
          <li className='list-disc ml-6'>
            <b>Skill Progression System</b> – Level up through Beginner, Rookie,
            Intermediate, Skilled, and Legend tiers.
          </li>
          <li className='list-disc ml-6'>
            <b>Community Engagement</b> – Join a community of dedicated
            basketball players and challenge yourself with monthly competitions.
          </li>
        </ul>
      </div>
      <h3 className={subtitleClasses}>Why Choose Skilldor?</h3>
      <p className='mt-3'>
        Skilldor is not just a training app – it’s a{' '}
        <b>basketball development ecosystem</b> that helps players stay
        committed to their goals. With a user-friendly interface, intelligent
        progress tracking, and a fun approach to practice, Skilldor makes
        skill-building more effective and enjoyable.
      </p>
      <h3 className={subtitleClasses}>Who Is Skilldor For?</h3>
      <div className='mt-3'>
        <ul className='flex flex-col gap-3'>
          <li className='list-disc ml-6'>
            Aspiring basketball players looking to improve their skills.
          </li>
          <li className='list-disc ml-6'>
            Coaches who want to track their players' progress and provide
            structured training.
          </li>
          <li className='list-disc ml-6'>
            Parents looking for a guided system to help their kids practice
            consistently.
          </li>
        </ul>
      </div>
      <h3 className={subtitleClasses}>Join Skilldor Today!</h3>
      <p className='mt-3'>
        Start your basketball journey with Skilldor and take your game to the
        next level! Visit{' '}
        <a
          href='https://skilldor.com'
          className='font-bold underline text-primary-500'>
          https://skilldor.com
        </a>{' '}
        to learn more and get started.
      </p>
      <p className='mt-3'>
        For any inquiries, feel free to contact us at{' '}
        <a
          href='mailto:support@skilldor.com'
          className='font-bold underline text-primary-500'>
          support@skilldor.com
        </a>
        .
      </p>
    </>
  )
}

export default About
