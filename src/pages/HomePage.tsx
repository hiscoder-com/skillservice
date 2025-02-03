import Form from '../components/Form'
import Lottie from '../components/LottieAnimation'
import RunningLine from '../components/RunningLine'
import Social from '../components/Social'
import CookiesBanner from '../components/CookiesBanner'

function HomePage() {
  return (
    <div className='relative py-[3.8vh] min-w-full min-h-full flex flex-col items-center justify-between bg-gradient-to-b from-45% from-gradient-start to-gradient-end md:pt-[3.97vh] md:pb-[4.5vh] xl:pt-[8.6vh] xl:pb-[5.5vh] 2xl:py-[7vh] select-none'>
      <div className='flex flex-col xl:flex-row items-center w-full xl:px-14 xl:justify-between 2xl:px-32'>
        <div className='flex flex-col items-center xl:items-start'>
          <img
            src='logo.svg'
            alt='Skilldor'
            className='w-[10.22vh] h-[7.99vh] md:w-[12.58vh] md:h-[9.75vh] xl:w-[17.52vh] xl:h-[13.68vh] 2xl:w-[14.82vh] 2xl:h-[11.57vh]'
          />
          <div className='relative'>
            <h1 className='select-none mt-[2vh] font-lexend text-[5.24vh] w-full leading-[1.05] font-bold text-center text-primary-500 md:mt-[3.77vh] md:text-[7.33vh] xl:text-left xl:mt-[4.6vh] xl:text-[5.55vw] 2xl:text-[10.18vh] 2xl:mt-[4.44vh] animate-displayFirst'>
              <span className='lg:whitespace-nowrap'>
                Master <br className='md:hidden' /> Your Game,
              </span>
              <br /> The Fun Way
            </h1>
            <h2 className='select-none absolute top-0 left-0 mt-[3.14vh] font-lexend text-[5.24vh] w-full leading-[1.05] font-bold text-center text-primary-500 md:mt-[3.77vh] md:text-[7.33vh] xl:text-left xl:mt-[4.6vh] xl:text-[5.55vw] 2xl:text-[10.18vh] 2xl:mt-[4.44vh] animate-displaySecond'>
              Skilldor: <br />
              <span className='md:whitespace-nowrap'>Discipline Gamified</span>
            </h2>
          </div>
          <span className='select-none mt-[1.6vh] font-sourGummy text-[2.09vh] text-primary-400 font-semibold md:mt-[1.88vh] md:text-[2.51vh] xl:text-[3.06vh] xl:mt-[2.62vh] 2xl:text-[3.14vh]'>
            Train. Improve. Reward Yourself
          </span>
          <Social />
        </div>
        <div className='relative mx-auto w-[26vh] h-[20.7vh] md:h-[22vh] xl:w-[47vh] xl:h-[48vh] xl:mx-0 2xl:w-[61vh] 2xl:h-[55vh] overflow-hidden'>
          <Lottie />
        </div>
      </div>
      <Form />
      <RunningLine />
      <CookiesBanner />
    </div>
  )
}

export default HomePage
